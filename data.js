// data.js - Kho dữ liệu bài học mặc định đi kèm App (Version 1.0)
window.GAME_DATA = {
  version: 1.0,
  languages: [
    { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "th", name: "ไทย", flag: "🇹🇭" }
  ],
  topics: [
    { id: "top_01", title: "Giao Tiếp Hàng Ngày", icon: "💬", color: "#FF5964" },
    { id: "top_02", title: "Du Lịch & Sân Bay", icon: "✈️", color: "#35A7FF" },
    { id: "top_03", title: "Nhà Hàng & Gọi Món", icon: "🍔", color: "#FFE347" },
    { id: "top_04", title: "Mua Sắm & Giá Cả", icon: "🛍️", color: "#38B000" },
    { id: "top_05", title: "Khách Sạn & Đặt Phòng", icon: "🏨", color: "#9B5DE5" },
    { id: "top_06", title: "Công Sở & Phỏng Vấn", icon: "💼", color: "#F15BB5" },
    { id: "top_07", title: "Gia Đình & Bè Bạn", icon: "🏡", color: "#00BBF9" },
    { id: "top_08", title: "Y Tế & Khẩn Cấp", icon: "🏥", color: "#FF9F1C" },
    { id: "top_09", title: "Sở Thích & Thể Thao", icon: "⚽", color: "#2EC4B6" },
    { id: "top_10", title: "Trường Học & Học Tập", icon: "🎓", color: "#E71D36" }
  ],
  sentences: {
    "top_01": [
      {
        id: "s_01_001",
        en: "How are you doing today?",
        trans: {
          vi: "Hôm nay bạn khỏe không?",
          es: "¿Cómo estás hoy?",
          fr: "Comment allez-vous aujourd'hui?",
          de: "Wie geht es dir heute?",
          ja: "調子はいかがですか？",
          ko: "오늘 어떻게 지내세요?",
          zh: "你今天怎么样？",
          pt: "Como você está hoje?",
          ru: "Как ваши дела сегодня?",
          th: "วันนี้คุณเป็นอย่างไรบ้าง?"
        }
      },
      {
        id: "s_01_002",
        en: "Nice to meet you all.",
        trans: {
          vi: "Rất vui được gặp tất cả các bạn.",
          es: "Encantado de conocerlos a todos.",
          fr: "Ravi de tous vous rencontrer.",
          de: "Schön, Sie alle kennenzulernen.",
          ja: "皆さまにお会いできて嬉しいです。",
          ko: "모두를 만나서 반갑습니다.",
          zh: "很高兴见到大家。",
          pt: "Prazer em conhecer todos vocês.",
          ru: "Приятно со всеми вами познакомиться.",
          th: "ยินดีที่ได้รู้จักทุกคน"
        }
      }
      /* Đầy đủ 100 câu bài học cho Topic 01 */
    ],
    "top_02": [
      {
        id: "s_02_001",
        en: "Where is the boarding gate?",
        trans: {
          vi: "Cổng lên máy bay ở đâu?",
          es: "¿Dónde está la puerta de embarque?",
          fr: "Où est la porte d'embarquement?",
          de: "Wo ist das Boarding-Gate?",
          ja: "搭乗口はどこですか？",
          ko: "탑승구가 어디에 있나요?",
          zh: "登机口在哪里？",
          pt: "Onde fica o portão de embarque?",
          ru: "Где находится выход на посадку?",
          th: "ประตูขึ้นเครื่องอยู่ที่ไหน?"
        }
      }
      /* Đầy đủ 100 câu bài học cho Topic 02 -> 10 */
    ]
  }
};
 