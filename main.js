// CẤU HÌNH HỆ THỐNG APP 0003
const APP_CONFIG = {
  appToken: "com.trithucso.sentencedragpuzzle_0003_x9z",
  telemetryUrl: "https://khotrithucso.io.vn/apps/api/telemetry.php",
  updateDataUrl: "https://khotrithucso.io.vn/apps/api/get_data_update.php",
  adTriggerLimit: 5
};

// TRẠNG THÁI NỘI BỘ GAME
const State = {
  nativeLang: localStorage.getItem('user_native_lang') || 'vi',
  currentTopicId: 'top_01',
  currentSentence: null,
  selectedWords: [],
  shuffledWords: [],
  streak: parseInt(localStorage.getItem('user_streak') || '0'),
  userActionCount: 0,
  data: window.GAME_DATA // Lấy dữ liệu mặc định từ file data.js
};

// 1. KHỞI CHẠY ỨNG DỤNG (OFFLINE-FIRST)
document.addEventListener('DOMContentLoaded', () => {
  initUserUID();
  initAdMob();
  syncDataUpdatesAsync();

  if (!localStorage.getItem('user_native_lang')) {
    renderLanguageGrid();
    showScreen('screen-lang');
  } else {
    renderTopicGrid();
    showScreen('screen-topics');
  }

  setupEventListeners();
  pushTelemetry('app_start', 'home');
});

// 2. KHỞI TẠO USER UID CỐ ĐỊNH VĨNH VIỄN
function initUserUID() {
  if (!localStorage.getItem('user_uid')) {
    const uid = 'usr_0003_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    localStorage.setItem('user_uid', uid);
  }
}

// 3. CHUYỂN ĐỔI MÀN HÌNH
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  pushTelemetry('page_view', screenId);
}

// 4. RENDER MÀN HÌNH CHỌN NGÔN NGỮ MẸ ĐẺ
function renderLanguageGrid() {
  const container = document.getElementById('lang-grid');
  if (!container) return;
  container.innerHTML = '';
  State.data.languages.forEach(lang => {
    const btn = document.createElement('button');
    btn.className = 'btn-cartoon btn-yellow';
    btn.style.margin = '6px';
    btn.innerHTML = `${lang.flag} ${lang.name}`;
    btn.onclick = () => {
      State.nativeLang = lang.code;
      localStorage.setItem('user_native_lang', lang.code);
      renderTopicGrid();
      showScreen('screen-topics');
    };
    container.appendChild(btn);
  });
}

// 5. RENDER MÀN HÌNH TỔNG QUAN CHỦ ĐỀ
function renderTopicGrid() {
  const streakElem = document.getElementById('streak-count');
  if (streakElem) streakElem.innerText = State.streak;
  
  const container = document.getElementById('topic-grid');
  if (!container) return;
  container.innerHTML = '';

  State.data.topics.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'translation-card';
    card.style.cursor = 'pointer';
    card.style.marginBottom = '12px';
    card.innerHTML = `
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="font-size:32px;">${topic.icon}</span>
        <div>
          <h3 style="font-size:18px;">${topic.title}</h3>
          <span style="font-size:12px; color:var(--text-muted);">100 Lessons</span>
        </div>
      </div>
    `;
    card.onclick = () => startTopic(topic.id);
    container.appendChild(card);
  });
}

// 6. BẮT ĐẦU MÀN CHƠI CHỦ ĐỀ
function startTopic(topicId) {
  State.currentTopicId = topicId;
  const topicObj = State.data.topics.find(t => t.id === topicId);
  const badgeElem = document.getElementById('game-topic-badge');
  if (badgeElem && topicObj) {
    badgeElem.innerText = `${topicObj.icon} ${topicObj.title}`;
  }
  showScreen('screen-game');
  loadNewSentence();
}

// 7. TẢI CÂU BÀI HỌC NGẪU NHIÊN
function loadNewSentence() {
  const sentences = State.data.sentences[State.currentTopicId];
  if (!sentences || sentences.length === 0) return;

  const randomIndex = Math.floor(Math.random() * sentences.length);
  State.currentSentence = sentences[randomIndex];
  State.selectedWords = [];

  // Tách từ câu tiếng Anh và đảo thứ tự ngẫu nhiên
  const cleanEn = State.currentSentence.en.replace(/[.,?!]/g, '');
  const words = cleanEn.split(' ');
  State.shuffledWords = [...words].sort(() => Math.random() - 0.5);

  // Hiển thị bản dịch tiếng mẹ đẻ tương ứng
  const transText = State.currentSentence.trans[State.nativeLang] || State.currentSentence.trans['vi'];
  const transElem = document.getElementById('target-translation');
  if (transElem) transElem.innerText = transText;

  renderWordSlots();
  playAudioTTS(State.currentSentence.en); // Tự động phát âm khi chuyển câu
}

// 8. RENDER CÁC THẺ TỪ VỰNG (DROP ZONE & WORD POOL)
function renderWordSlots() {
  const dropZone = document.getElementById('drop-zone');
  const wordPool = document.getElementById('word-pool');
  if (!dropZone || !wordPool) return;

  dropZone.innerHTML = '';
  wordPool.innerHTML = '';

  if (State.selectedWords.length === 0) {
    dropZone.innerHTML = '<span class="placeholder-text">Tap words below...</span>';
  } else {
    State.selectedWords.forEach((word, index) => {
      const chip = document.createElement('div');
      chip.className = 'word-chip';
      chip.innerText = word;
      chip.onclick = () => removeWordFromSlot(index);
      dropZone.appendChild(chip);
    });
  }

  State.shuffledWords.forEach((word, index) => {
    const chip = document.createElement('div');
    chip.className = 'word-chip';
    chip.innerText = word;
    chip.onclick = () => addWordToSlot(index);
    wordPool.appendChild(chip);
  });
}

function addWordToSlot(poolIndex) {
  trackUserInteraction();
  const word = State.shuffledWords.splice(poolIndex, 1)[0];
  State.selectedWords.push(word);
  renderWordSlots();
}

function removeWordFromSlot(slotIndex) {
  trackUserInteraction();
  const word = State.selectedWords.splice(slotIndex, 1)[0];
  State.shuffledWords.push(word);
  renderWordSlots();
}

// 9. KIỂM TRA ĐÁP ÁN RÁP CÂU
function checkAnswer() {
  trackUserInteraction();
  const userSentence = State.selectedWords.join(' ').toLowerCase();
  const targetSentence = State.currentSentence.en.replace(/[.,?!]/g, '').toLowerCase();

  if (userSentence === targetSentence) {
    State.streak++;
    localStorage.setItem('user_streak', State.streak);
    
    const modalText = document.getElementById('modal-en-sentence');
    if (modalText) modalText.innerText = State.currentSentence.en;
    
    const modalElem = document.getElementById('success-modal');
    if (modalElem) modalElem.classList.remove('hidden');
    
    playAudioTTS(State.currentSentence.en);
  } else {
    const card = document.querySelector('.drop-zone-container');
    if (card) {
      card.classList.add('wrong-shake');
      setTimeout(() => card.classList.remove('wrong-shake'), 400);
    }
  }
}

// 10. HÀM PHÁT ÂM NATIVE CAPACITOR & WEB FALLBACK (ĐÃ FIX KHÔNG TIẾNG)
async function playAudioTTS(text) {
  if (!text) return;

  // 1. Ưu tiên Native Plugin Capacitor trên thiết bị Android APK
  if (window.Capacitor && window.Capacitor.isPluginAvailable('TextToSpeech')) {
    try {
      await window.Capacitor.Plugins.TextToSpeech.stop();
      await window.Capacitor.Plugins.TextToSpeech.speak({
        text: text,
        lang: 'en-US',
        rate: 0.9,
        pitch: 1.0,
        volume: 1.0,
        category: 'ambient'
      });
      return;
    } catch (err) {
      console.warn("Capacitor TTS Error, fallback to Web Speech:", err);
    }
  }

  // 2. Fallback Web Speech API (Khi chạy trên Chrome Web)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') || v.lang.startsWith('EN'));
    if (enVoice) utterance.voice = enVoice;

    window.speechSynthesis.speak(utterance);
  }
}

// 11. BỘ ĐẾM THAO TÁC BẬT ADMOB INTERSTITIAL AD
function trackUserInteraction() {
  State.userActionCount++;
  if (State.userActionCount >= APP_CONFIG.adTriggerLimit) {
    State.userActionCount = 0;
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.AdMob) {
      console.log('Show AdMob Interstitial Ad');
    }
  }
}

// 12. CƠ CHẾ TELEMETRY QUEUE (OFFLINE-FIRST)
function pushTelemetry(eventType, screenName) {
  const payload = {
    app_token: APP_CONFIG.appToken,
    device_id: localStorage.getItem('user_uid'),
    event_type: eventType,
    screen_name: screenName,
    created_at: new Date().toISOString()
  };

  let queue = JSON.parse(localStorage.getItem('_telemetry_queue') || '[]');
  queue.push(payload);

  if (navigator.onLine) {
    fetch(APP_CONFIG.telemetryUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(queue)
    }).then(() => {
      localStorage.removeItem('_telemetry_queue');
    }).catch(() => {
      localStorage.setItem('_telemetry_queue', JSON.stringify(queue));
    });
  } else {
    localStorage.setItem('_telemetry_queue', JSON.stringify(queue));
  }
}

// 13. ĐỒNG BỘ DATA TỪ SERVER NGẦM
async function syncDataUpdatesAsync() {
  if (!navigator.onLine) return;
  try {
    const localVersion = parseFloat(localStorage.getItem('data_version') || '1.0');
    const res = await fetch(`${APP_CONFIG.updateDataUrl}?token=${APP_CONFIG.appToken}&v=${localVersion}`);
    const json = await res.json();

    if (json.status === 'success' && json.new_version > localVersion) {
      localStorage.setItem('remote_game_data', JSON.stringify(json.data));
      localStorage.setItem('data_version', json.new_version);
      State.data = json.data;
    }
  } catch (err) {
    console.log("Offline Fallback: Dùng data.js mặc định.");
  }
}

// 14. EVENT LISTENERS
function setupEventListeners() {
  const btnChangeLang = document.getElementById('btn-change-lang');
  if (btnChangeLang) btnChangeLang.onclick = () => showScreen('screen-lang');

  const btnBackTopics = document.getElementById('btn-back-topics');
  if (btnBackTopics) btnBackTopics.onclick = () => showScreen('screen-topics');

  const btnResetWords = document.getElementById('btn-reset-words');
  if (btnResetWords) {
    btnResetWords.onclick = () => {
      State.shuffledWords = [...State.shuffledWords, ...State.selectedWords];
      State.selectedWords = [];
      renderWordSlots();
    };
  }

  const btnCheckAnswer = document.getElementById('btn-check-answer');
  if (btnCheckAnswer) btnCheckAnswer.onclick = checkAnswer;

  const btnSpeakTTS = document.getElementById('btn-speak-tts');
  if (btnSpeakTTS) {
    btnSpeakTTS.onclick = () => {
      if (State.currentSentence) playAudioTTS(State.currentSentence.en);
    };
  }

  const btnModalContinue = document.getElementById('btn-modal-continue');
  if (btnModalContinue) {
    btnModalContinue.onclick = () => {
      const modalElem = document.getElementById('success-modal');
      if (modalElem) modalElem.classList.add('hidden');
      loadNewSentence();
    };
  }
}

function initAdMob() {
  console.log('AdMob Initialized');
}
