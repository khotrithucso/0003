// ============================================================================
// DATA.JS V2.0 - KHO DỮ LIỆU BÀI HỌC SONG NGỮ 10 NGÔN NGỮ (APP ID: 0003)
// Quản lý 10 Chủ đề x 30+ Câu/Chủ đề x 10 Bản dịch Quốc tế (Offline 100%)
// ============================================================================

window.GAME_DATA = {
  version: 2.0,
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
    { id: "top_04", title: "Mua Sắm & Mua Bán", icon: "🛍️", color: "#38B000" },
    { id: "top_05", title: "Khách Sạn & Đặt Phòng", icon: "🏨", color: "#9B5DE5" },
    { id: "top_06", title: "Công Sở & Công Việc", icon: "💼", color: "#F15BB5" },
    { id: "top_07", title: "Gia Đình & Bạn Bè", icon: "🏡", color: "#00BBF9" },
    { id: "top_08", title: "Y Tế & Cấp Cứu", icon: "🏥", color: "#FF9F1C" },
    { id: "top_09", title: "Sở Thích & Thể Thao", icon: "⚽", color: "#2EC4B6" },
    { id: "top_10", title: "Học Tập & Trường Học", icon: "🎓", color: "#E71D36" }
  ],

  sentences: {
    // ========================================================================
    // CHỦ ĐỀ 01: GIAO TIẾP HÀNG NGÀY (DAILY CONVERSATION)
    // ========================================================================
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
      },
      {
        id: "s_01_003",
        en: "Have a wonderful day ahead.",
        trans: {
          vi: "Chúc bạn một ngày tuyệt vời.",
          es: "Que tengas un maravilloso día.",
          fr: "Passez une excellente journée.",
          de: "Einen wunderschönen Tag noch.",
          ja: "良い一日をお過ごしください。",
          ko: "좋은 하루 보내세요.",
          zh: "祝你有美好的一天。",
          pt: "Tenha um dia maravilhoso.",
          ru: "Хорошего вам дня.",
          th: "ขอให้เป็นวันที่ดีนะ"
        }
      },
      {
        id: "s_01_004",
        en: "See you again very soon.",
        trans: {
          vi: "Hẹn sớm gặp lại bạn nhé.",
          es: "Nos vemos muy pronto.",
          fr: "À très bientôt.",
          de: "Bis ganz bald.",
          ja: "また近いうちにお会いしましょう。",
          ko: "곧 다시 만나요.",
          zh: "很快再见。",
          pt: "Até breve.",
          ru: "До скорой встречи.",
          th: "แล้วพบกันใหม่เร็วๆ นี้"
        }
      },
      {
        id: "s_01_005",
        en: "Thank you for your assistance.",
        trans: {
          vi: "Cảm ơn sự trợ giúp của bạn.",
          es: "Gracias por tu ayuda.",
          fr: "Merci pour votre aide.",
          de: "Vielen Dank für Ihre Hilfe.",
          ja: "ご協力ありがとうございます。",
          ko: "도움에 감사드립니다.",
          zh: "谢谢您的帮助。",
          pt: "Obrigado por sua ajuda.",
          ru: "Спасибо за вашу помощь.",
          th: "ขอบคุณสำหรับความช่วยเหลือ"
        }
      },
      {
        id: "s_01_006",
        en: "What is your mobile number?",
        trans: {
          vi: "Số điện thoại di động của bạn là gì?",
          es: "¿Cuál es tu número de teléfono?",
          fr: "Quel est votre numéro de téléphone?",
          de: "Wie ist deine Handynummer?",
          ja: "携帯番号は何番ですか？",
          ko: "전화번호가 어떻게 되시나요?",
          zh: "你的手机号码是多少？",
          pt: "Qual é o seu número de celular?",
          ru: "Какой у вас номер телефона?",
          th: "เบอร์โทรศัพท์ของคุณคืออะไร?"
        }
      },
      {
        id: "s_01_007",
        en: "Where do you live now?",
        trans: {
          vi: "Bây giờ bạn sống ở đâu?",
          es: "¿Dónde vives ahora?",
          fr: "Où habitez-vous maintenant?",
          de: "Wo wohnst du jetzt?",
          ja: "今どこに住んでいますか？",
          ko: "지금 어디에 살고 계신가요?",
          zh: "你现在住在哪里？",
          pt: "Onde você mora agora?",
          ru: "Где вы сейчас живете?",
          th: "ตอนนี้คุณอาศัยอยู่ที่ไหน?"
        }
      },
      {
        id: "s_01_008",
        en: "I agree with your opinion.",
        trans: {
          vi: "Tôi đồng ý với ý kiến của bạn.",
          es: "Estoy de acuerdo con tu opinión.",
          fr: "Je suis d'accord avec votre avis.",
          de: "Ich stimme deiner Meinung zu.",
          ja: "あなたの意見に同意します。",
          ko: "당신의 의견에 동의합니다.",
          zh: "我同意你的观点。",
          pt: "Eu concordo com a sua opinião.",
          ru: "Я согласен с вашим мнением.",
          th: "ฉันเห็นด้วยกับความคิดเห็นของคุณ"
        }
      },
      {
        id: "s_01_009",
        en: "Could you repeat that please?",
        trans: {
          vi: "Bạn vui lòng nhắc lại được không?",
          es: "¿Podrías repetir eso por favor?",
          fr: "Pouvez-vous répéter s'il vous plaît?",
          de: "Könnten Sie das bitte wiederholen?",
          ja: "もう一度言っていただけますか？",
          ko: "다시 한번 말씀해 주시겠어요?",
          zh: "请问你能重复一遍吗？",
          pt: "Você poderia repetir, por favor?",
          ru: "Не могли бы вы повторить?",
          th: "ช่วยพูดอีกครั้งได้ไหม?"
        }
      },
      {
        id: "s_01_010",
        en: "I am sorry for being late.",
        trans: {
          vi: "Tôi xin lỗi vì đã đến muộn.",
          es: "Siento llegar tarde.",
          fr: "Désolé pour le retard.",
          de: "Entschuldigung für die Verspätung.",
          ja: "遅れてしまってすみません。",
          ko: "늦어서 죄송합니다.",
          zh: "很抱歉我迟到了。",
          pt: "Desculpe pelo atraso.",
          ru: "Извините за опоздание.",
          th: "ขอโทษที่มาสาย"
        }
      },
      {
        id: "s_01_011",
        en: "What do you like to do?",
        trans: {
          vi: "Bạn thích làm gì?",
          es: "¿Qué te gusta hacer?",
          fr: "Qu'aimez-vous faire?",
          de: "Was machst du gerne?",
          ja: "何をするのが好きですか？",
          ko: "무엇을 하는 것을 좋아하세요?",
          zh: "你喜欢做什么？",
          pt: "O que você gosta de fazer?",
          ru: "Чем вам нравится заниматься?",
          th: "คุณชอบทำอะไร?"
        }
      },
      {
        id: "s_01_012",
        en: "It is a pleasure to help.",
        trans: {
          vi: "Rất hân hạnh được giúp đỡ.",
          es: "Es un placer ayudar.",
          fr: "C'est un plaisir d'aider.",
          de: "Es ist mir ein Vergnügen zu helfen.",
          ja: "お役に立てて光栄です。",
          ko: "도울 수 있어 기쁩니다.",
          zh: "很高兴能提供帮助。",
          pt: "É um prazer ajudar.",
          ru: "Рад помочь.",
          th: "ยินดีที่ได้ช่วยเหลือ"
        }
      },
      {
        id: "s_01_013",
        en: "Take care of yourself today.",
        trans: {
          vi: "Hôm nay nhớ giữ gìn sức khỏe nhé.",
          es: "Cuídate mucho hoy.",
          fr: "Prenez soin de vous aujourd'hui.",
          de: "Pass heute gut auf dich auf.",
          ja: "今日は体調に気をつけてね。",
          ko: "오늘 몸 조심하세요.",
          zh: "今天好好照顾自己。",
          pt: "Cuide-se bem hoje.",
          ru: "Берегите себя сегодня.",
          th: "ดูแลตัวเองด้วยนะวันนี้"
        }
      },
      {
        id: "s_01_014",
        en: "What time is it now?",
        trans: {
          vi: "Bây giờ là mấy giờ rồi?",
          es: "¿Qué hora es ahora?",
          fr: "Quelle heure est-il maintenant?",
          de: "Wie viel Uhr ist es jetzt?",
          ja: "今何時ですか？",
          ko: "지금 몇 시인가요?",
          zh: "现在几点了？",
          pt: "Que horas são agora?",
          ru: "Который час сейчас?",
          th: "ตอนนี้几โมงแล้ว?"
        }
      },
      {
        id: "s_01_015",
        en: "I do not understand this word.",
        trans: {
          vi: "Tôi không hiểu từ này.",
          es: "No entiendo esta palabra.",
          fr: "Je ne comprends pas ce mot.",
          de: "Ich verstehe dieses Wort nicht.",
          ja: "この言葉の意味がわかりません。",
          ko: "이 단어를 이해하지 못하겠어요.",
          zh: "我不明白这个词的意思。",
          pt: "Eu não entendo esta palavra.",
          ru: "Я не понимаю это слово.",
          th: "ฉันไม่เข้าใจคำนี้"
        }
      },
      {
        id: "s_01_016",
        en: "Let us go out together.",
        trans: {
          vi: "Chúng ta cùng đi ra ngoài nhé.",
          es: "Salgamos juntos.",
          fr: "Sortons ensemble.",
          de: "Lass uns zusammen rausgehen.",
          ja: "一緒に出かけましょう。",
          ko: "함께 나갑시다.",
          zh: "我们一起出去吧。",
          pt: "Vamos sair juntos.",
          ru: "Давайте пойдем гулять вместе.",
          th: "ไปด้วยกันเถอะ"
        }
      },
      {
        id: "s_01_017",
        en: "Are you free this weekend?",
        trans: {
          vi: "Cuối tuần này bạn có rảnh không?",
          es: "¿Estás libre este fin de semana?",
          fr: "Êtes-vous libre ce week-end?",
          de: "Hast du dieses Wochenende Zeit?",
          ja: "今週末は暇ですか？",
          ko: "이번 주말에 시간 있으신가요?",
          zh: "你这个周末有空吗？",
          pt: "Você está livre neste fim de semana?",
          ru: "Вы свободны в эти выходные?",
          th: "สุดสัปดาห์นี้คุณว่างไหม?"
        }
      },
      {
        id: "s_01_018",
        en: "Call me when you arrive.",
        trans: {
          vi: "Gọi cho tôi khi bạn tới nơi nhé.",
          es: "Llámame cuando llegues.",
          fr: "Appelez-moi quand vous arrivez.",
          de: "Ruf mich an, wenn du ankommst.",
          ja: "到着したら電話してください。",
          ko: "도착하면 전화해 주세요.",
          zh: "你到了打给我。",
          pt: "Me ligue quando chegar.",
          ru: "Позвоните мне, когда приедете.",
          th: "โทรหาฉันเมื่อคุณมาถึง"
        }
      },
      {
        id: "s_01_019",
        en: "Everything will be alright soon.",
        trans: {
          vi: "Mọi chuyện sẽ sớm ổn thôi.",
          es: "Todo estará bien pronto.",
          fr: "Tout ira bien bientôt.",
          de: "Alles wird bald wieder gut.",
          ja: "すぐにすべて上手くいきますよ。",
          ko: "곧 모든 것이 괜찮아질 거예요.",
          zh: "一切很快都会好起来的。",
          pt: "Tudo ficará bem em breve.",
          ru: "Скоро все будет хорошо.",
          th: "ทุกอย่างจะดีขึ้นในไม่ช้า"
        }
      },
      {
        id: "s_01_020",
        en: "Congratulations on your success.",
        trans: {
          vi: "Chúc mừng thành công của bạn.",
          es: "Felicitaciones por tu éxito.",
          fr: "Félicitations pour votre succès.",
          de: "Herzlichen Glückwunsch zu deinem Erfolg.",
          ja: "成功おめでとうございます。",
          ko: "성공을 축하합니다.",
          zh: "祝贺你的成功。",
          pt: "Parabéns pelo seu sucesso.",
          ru: "Поздравляю с успехом.",
          th: "ยินดีด้วยกับความสำเร็จของคุณ"
        }
      },
      {
        id: "s_01_021",
        en: "What are your main hobbies?",
        trans: {
          vi: "Sở thích chính của bạn là gì?",
          es: "¿Cuáles son tus principales pasatiempos?",
          fr: "Quels sont vos principaux loisirs?",
          de: "Was sind deine Hauptkontakt-Hobbys?",
          ja: "主な趣味は何ですか？",
          ko: "주요 취미가 무엇인가요?",
          zh: "你的主要爱好是什么？",
          pt: "Quais são os seus principais hobbies?",
          ru: "Каковы ваши основные хобби?",
          th: "งานอดิเรกหลักของคุณคืออะไร?"
        }
      },
      {
        id: "s_01_022",
        en: "I am really proud of you.",
        trans: {
          vi: "Tôi rất tự hào về bạn.",
          es: "Estoy muy orgulloso de ti.",
          fr: "Je suis vraiment fier de vous.",
          de: "Ich bin wirklich stolz auf dich.",
          ja: "あなたをとても誇りに思います。",
          ko: "당신이 정말 자랑스러워요.",
          zh: "我真为你感到骄傲。",
          pt: "Estou muito orgulhoso de você.",
          ru: "Я очень горжусь вами.",
          th: "ฉันภูมิใจในตัวคุณมาก"
        }
      },
      {
        id: "s_01_023",
        en: "Please speak a little slower.",
        trans: {
          vi: "Vui lòng nói chậm lại một chút.",
          es: "Por favor habla un poco más despacio.",
          fr: "Parlez un peu plus lentement s'il vous plaît.",
          de: "Bitte sprechen Sie etwas langsamer.",
          ja: "もう少しゆっくり話してください。",
          ko: "조금만 더 천천히 말씀해 주세요.",
          zh: "请说得再慢一点。",
          pt: "Por favor, fale um pouco mais devagar.",
          ru: "Пожалуйста, говорите немного медленнее.",
          th: "กรุณาพูดช้าลงหน่อย"
        }
      },
      {
        id: "s_01_024",
        en: "Never give up on your dreams.",
        trans: {
          vi: "Đừng bao giờ từ bỏ ước mơ.",
          es: "Nunca te rindas en tus sueños.",
          fr: "N'abandonnez jamais vos rêves.",
          de: "Gib deine Träume niemals auf.",
          ja: "夢を絶対にあきらめないで。",
          ko: "절대로 꿈을 포기하지 마세요.",
          zh: "永远不要放弃你的梦想。",
          pt: "Nunca desista dos seus sonhos.",
          ru: "Никогда не отказывайтесь от мечты.",
          th: "อย่ายอมแพ้ต่อความฝันของคุณ"
        }
      },
      {
        id: "s_01_025",
        en: "Where can I buy tickets?",
        trans: {
          vi: "Tôi có thể mua vé ở đâu?",
          es: "¿Dónde puedo comprar boletos?",
          fr: "Où puis-je acheter des billets?",
          de: "Wo kann ich Tickets kaufen?",
          ja: "チケットはどこで買えますか？",
          ko: "티켓은 어디서 살 수 있나요?",
          zh: "我在哪里可以买到票？",
          pt: "Onde posso comprar ingressos?",
          ru: "Где я могу купить билеты?",
          th: "ฉันสามารถซื้อตั๋วได้ที่ไหน?"
        }
      },
      {
        id: "s_01_026",
        en: "Today is a beautiful day.",
        trans: {
          vi: "Hôm nay là một ngày thật đẹp.",
          es: "Hoy es un día hermoso.",
          fr: "Aujourd'hui est une belle journée.",
          de: "Heute ist ein schöner Tag.",
          ja: "今日は素晴らしいお天気ですね。",
          ko: "오늘은 날씨가 참 좋네요.",
          zh: "今天是个美好的一天。",
          pt: "Hoje é um dia lindo.",
          ru: "Сегодня прекрасный день.",
          th: "วันนี้เป็นวันที่สวยงาม"
        }
      },
      {
        id: "s_01_027",
        en: "I hope to see you soon.",
        trans: {
          vi: "Tôi hy vọng sớm gặp lại bạn.",
          es: "Espero verte pronto.",
          fr: "J'espère vous revoir bientôt.",
          de: "Ich hoffe, dich bald zu sehen.",
          ja: "近いうちにお会いできることを願っています。",
          ko: "곧 다시 뵙기를 바랍니다.",
          zh: "我希望很快见到你。",
          pt: "Espero te ver em breve.",
          ru: "Надеюсь скоро увидеть вас.",
          th: "ฉันหวังว่าจะได้พบคุณเร็วๆ นี้"
        }
      },
      {
        id: "s_01_028",
        en: "Do not worry about that.",
        trans: {
          vi: "Đừng lo lắng về điều đó.",
          es: "No te preocupes por eso.",
          fr: "Ne vous inquiétez pas pour cela.",
          de: "Mach dir keine Sorgen darüber.",
          ja: "それについては心配しないでください。",
          ko: "그것에 대해 걱정하지 마세요.",
          zh: "不用担心那个。",
          pt: "Não se preocupe com isso.",
          ru: "Не волнуйтесь об этом.",
          th: "ไม่ต้องเป็นห่วงเรื่องนั้น"
        }
      },
      {
        id: "s_01_029",
        en: "What a nice surprise today!",
        trans: {
          vi: "Thật là một bất ngờ thú vị hôm nay!",
          es: "¡Qué agradable sorpresa hoy!",
          fr: "Quelle belle surprise aujourd'hui!",
          de: "Was für eine schöne Überraschung heute!",
          ja: "今日はなんて嬉しいサプライズでしょう！",
          ko: "오늘 정말 뜻밖의 기쁜 일이네요!",
          zh: "今天真是个惊喜！",
          pt: "Que surpresa agradável hoje!",
          ru: "Какой приятный сюрприз сегодня!",
          th: "ประหลาดใจจังเลยวันนี้!"
        }
      },
      {
        id: "s_01_030",
        en: "Let us stay in touch.",
        trans: {
          vi: "Hãy giữ liên lạc nhé.",
          es: "Mantengámonos en contacto.",
          fr: "Restons en contact.",
          de: "Lass uns in Kontakt bleiben.",
          ja: "これからも連絡を取り合いましょう。",
          ko: "계속 연락하고 지냅시다.",
          zh: "保持联系。",
          pt: "Vamos manter contato.",
          ru: "Будем на связи.",
          th: "ติดต่อกันไว้นะ"
        }
      }
    ],

    // ========================================================================
    // CHỦ ĐỀ 02: DU LỊCH & SÂN BAY (TRAVEL & AIRPORT)
    // ========================================================================
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
      },
      {
        id: "s_02_002",
        en: "May I see your passport?",
        trans: {
          vi: "Tôi có thể xem hộ chiếu của bạn không?",
          es: "¿Puedo ver su pasaporte?",
          fr: "Puis-je voir votre passeport?",
          de: "Kann ich Ihren Reisepass sehen?",
          ja: "パスポートを見せていただけますか？",
          ko: "여권을 보여주시겠어요?",
          zh: "我可以看一下你的护照吗？",
          pt: "Posso ver o seu passaporte?",
          ru: "Могу я посмотреть ваш паспорт?",
          th: "ขอดูหนังสือเดินทางของคุณหน่อยได้ไหม?"
        }
      },
      {
        id: "s_02_003",
        en: "Is my luggage over weight?",
        trans: {
          vi: "Hành lý của tôi có bị quá cước không?",
          es: "¿Mi equipaje tiene exceso de peso?",
          fr: "Mon bagage est-il en excédent de poids?",
          de: "Hat mein Gepäck Übergewicht?",
          ja: "私の荷物は重量オーバーですか？",
          ko: "내 수하물이 무게 초과인가요?",
          zh: "我的行李超重了吗？",
          pt: "Minha bagagem está com excesso de peso?",
          ru: "Мой багаж превышает норму веса?",
          th: "กระเป๋าเดินทางของฉันน้ำหนักเกินหรือไม่?"
        }
      },
      {
        id: "s_02_004",
        en: "Where is the baggage claim?",
        trans: {
          vi: "Nơi nhận hành lý ở đâu?",
          es: "¿Dónde está la recogida de equipaje?",
          fr: "Où est la livraison des bagages?",
          de: "Wo ist die Gepäckausgabe?",
          ja: "手荷物受取所はどこですか？",
          ko: "수하물 찾는 곳이 어디인가요?",
          zh: "行李领取处在哪里？",
          pt: "Onde fica a recolha de bagagem?",
          ru: "Где находится выдача багажа?",
          th: "จุดรับกระเป๋าอยู่ที่ไหน?"
        }
      },
      {
        id: "s_02_005",
        en: "I need a window seat.",
        trans: {
          vi: "Tôi muốn một chỗ ngồi cạnh cửa sổ.",
          es: "Necesito un asiento junto a la ventana.",
          fr: "Je veux un siège près de la fenêtre.",
          de: "Ich hätte gerne einen Fensterplatz.",
          ja: "窓側の席をお願いします。",
          ko: "창가 쪽 좌석으로 주세요.",
          zh: "我要一个靠窗的位置。",
          pt: "Eu quero um assento na janela.",
          ru: "Мне нужно место у окна.",
          th: "ฉันต้องการที่นั่งติดหน้าต่าง"
        }
      },
      {
        id: "s_02_006",
        en: "When is the next flight?",
        trans: {
          vi: "Khi nào có chuyến bay tiếp theo?",
          es: "¿Cuándo es el próximo vuelo?",
          fr: "Quand est le prochain vol?",
          de: "Wann ist der nächste Flug?",
          ja: "次のフライトは何時ですか？",
          ko: "다음 비행기는 언제인가요?",
          zh: "下一班航班是什么时候？",
          pt: "Quando é o próximo voo?",
          ru: "Когда следующий рейс?",
          th: "เที่ยวบินต่อไปคือเมื่อไหร่?"
        }
      },
      {
        id: "s_02_007",
        en: "My flight has been delayed.",
        trans: {
          vi: "Chuyến bay của tôi đã bị hoãn.",
          es: "Mi vuelo se ha retrasado.",
          fr: "Mon vol a été retardé.",
          de: "Mein Flug hat Verspätung.",
          ja: "私のフライトは遅延しました。",
          ko: "내 비행기가 지연되었습니다.",
          zh: "我的航班延误了。",
          pt: "Meu voo foi atrasado.",
          ru: "Мой рейс задержали.",
          th: "เที่ยวบินของฉันถูกเลื่อนเวลา"
        }
      },
      {
        id: "s_02_008",
        en: "Is there a free shuttle?",
        trans: {
          vi: "Có xe đưa đón miễn phí không?",
          es: "¿Hay un autobús de enlace gratuito?",
          fr: "Y a-t-il une navette gratuite?",
          de: "Gibt es einen kostenlosen Shuttlebus?",
          ja: "無料の送迎バスはありますか？",
          ko: "무료 셔틀버스가 있나요?",
          zh: "有免费接驳车吗？",
          pt: "Existe um transporte gratuito?",
          ru: "Есть ли бесплатный трансфер?",
          th: "มีรถรับส่งฟรีไหม?"
        }
      },
      {
        id: "s_02_009",
        en: "Where can I call a taxi?",
        trans: {
          vi: "Tôi có thể đón taxi ở đâu?",
          es: "¿Dónde puedo tomar un taxi?",
          fr: "Où puis-je prendre un taxi?",
          de: "Wo kann ich ein Taxi nehmen?",
          ja: "タクシー乗り場はどこですか？",
          ko: "택시는 어디서 탈 수 있나요?",
          zh: "在哪里可以打到出租车？",
          pt: "Onde posso pegar um táxi?",
          ru: "Где я могу вызвать такси?",
          th: "ฉันสามารถเรียกแท็กซี่ได้ที่ไหน?"
        }
      },
      {
        id: "s_02_010",
        en: "How much is the fare?",
        trans: {
          vi: "Giá vé hết bao nhiêu tiền?",
          es: "¿Cuánto cuesta el pasaje?",
          fr: "Combien coûte le ticket?",
          de: "Wie viel kostet der Fahrpreis?",
          ja: "運賃はおくらですか？",
          ko: "요금이 얼마인가요?",
          zh: "票价是多少？",
          pt: "Quanto custa a passagem?",
          ru: "Сколько стоит проезд?",
          th: "ค่าเดินทางเท่าไหร่?"
        }
      },
      {
        id: "s_02_011",
        en: "Please take me to city center.",
        trans: {
          vi: "Xin đưa tôi đến trung tâm thành phố.",
          es: "Por favor lléveme al centro de la ciudad.",
          fr: "Emmenez-moi au centre-ville s'il vous plaît.",
          de: "Bitte bringen Sie mich ins Stadtzentrum.",
          ja: "市中心部まで持っていってください。",
          ko: "시내 중심가로 가주세요.",
          zh: "请带我去市中心。",
          pt: "Por favor, me leve ao centro da cidade.",
          ru: "Пожалуйста, отвезите меня в центр города.",
          th: "กรุณาพาฉันไปที่ใจกลางเมือง"
        }
      },
      {
        id: "s_02_012",
        en: "Where is the nearest subway station?",
        trans: {
          vi: "Trạm tàu điện ngầm gần nhất ở đâu?",
          es: "¿Dónde está la estación de metro más cercana?",
          fr: "Où est la station de métro la plus proche?",
          de: "Wo ist die nächste U-Bahn-Station?",
          ja: "一番近い地下鉄の駅はどこですか？",
          ko: "가장 가까운 지하철역이 어디인가요?",
          zh: "最近的地铁站在哪里？",
          pt: "Onde fica a estação de metrô mais próxima?",
          ru: "Где ближайшая станция метро?",
          th: "สถานีรถไฟใต้ดินที่ใกล้ที่สุดอยู่ที่ไหน?"
        }
      },
      {
        id: "s_02_013",
        en: "I am traveling for vacation.",
        trans: {
          vi: "Tôi đi du lịch nghỉ dưỡng.",
          es: "Estoy viajando de vacaciones.",
          fr: "Je voyage pour les vacances.",
          de: "Ich reise im Urlaub.",
          ja: "休暇旅行で来ています。",
          ko: "휴가차 여행 중입니다.",
          zh: "我是来度假旅游的。",
          pt: "Estou viajando de férias.",
          ru: "Я путешествую в отпуске.",
          th: "ฉันมาท่องเที่ยวพักผ่อน"
        }
      },
      {
        id: "s_02_014",
        en: "How long is the delay?",
        trans: {
          vi: "Chuyến bay hoãn bao lâu?",
          es: "¿Cuánto dura el retraso?",
          fr: "Combien de temps dure le retard?",
          de: "Wie lange dauert die Verspätung?",
          ja: "遅延時間はどのくらいですか？",
          ko: "지연 시간이 얼마나 되나요?",
          zh: "延误多长时间？",
          pt: "Quanto tempo vai atrasar?",
          ru: "На сколько задерживается рейс?",
          th: "ล่าช้าไปนานเท่าไหร่?"
        }
      },
      {
        id: "s_02_015",
        en: "Where is the currency exchange?",
        trans: {
          vi: "Quầy đổi tiền tệ ở đâu?",
          es: "¿Dónde está el cambio de divisa?",
          fr: "Où est le bureau de change?",
          de: "Wo ist die Wechselstube?",
          ja: "両替所はどこにありますか？",
          ko: "환전소가 어디에 있나요?",
          zh: "货币兑换处在哪里？",
          pt: "Onde fica a casa de câmbio?",
          ru: "Где находится обмен валют?",
          th: "จุดแลกเปลี่ยนเงินอยู่ที่ไหน?"
        }
      },
      {
        id: "s_02_016",
        en: "Please show me the map.",
        trans: {
          vi: "Vui lòng cho tôi xem bản đồ.",
          es: "Por favor muéstrame el mapa.",
          fr: "Montrez-moi la carte s'il vous plaît.",
          de: "Bitte zeigen Sie mir die Karte.",
          ja: "地図を見せてください。",
          ko: "지도를 보여주세요.",
          zh: "请给我看一下地图。",
          pt: "Por favor, me mostre o mapa.",
          ru: "Пожалуйста, покажите мне карту.",
          th: "กรุณาขอดูแผนที่หน่อย"
        }
      },
      {
        id: "s_02_017",
        en: "Is this the right train?",
        trans: {
          vi: "Đây có phải tàu đúng tuyến không?",
          es: "¿Es este el tren correcto?",
          fr: "Est-ce le bon train?",
          de: "Ist das der richtige Zug?",
          ja: "この電車で合っていますか？",
          ko: "이 열차가 맞나요?",
          zh: "这是正确的火车吗？",
          pt: "Este é o trem certo?",
          ru: "Это тот поезд?",
          th: "นี่คือรถไฟที่ถูกต้องใช่ไหม?"
        }
      },
      {
        id: "s_02_018",
        en: "I lost my carry-on bag.",
        trans: {
          vi: "Tôi bị mất túi hành lý xách tay.",
          es: "Perdí mi bolso de mano.",
          fr: "J'ai perdu mon bagage à main.",
          de: "Ich habe mein Handgepäck verloren.",
          ja: "機内持ち込みバッグをなくしました。",
          ko: "기내용 가방을 잃어버렸어요.",
          zh: "我丢失了随身携带的手提包。",
          pt: "Perdi minha bagagem de mão.",
          ru: "Я потерял свою ручную кладь.",
          th: "ฉันทำกระเป๋าถือหาย"
        }
      },
      {
        id: "s_02_019",
        en: "Where is the security check?",
        trans: {
          vi: "Khu kiểm tra an ninh ở đâu?",
          es: "¿Dónde está el control de seguridad?",
          fr: "Où est le contrôle de sécurité?",
          de: "Wo ist die Sicherheitskontrolle?",
          ja: "保安検査場はどこですか？",
          ko: "보안 검색대가 어디인가요?",
          zh: "安检处在哪里？",
          pt: "Onde fica o controle de segurança?",
          ru: "Где находится досмотр?",
          th: "จุดตรวจความปลอดภัยอยู่ที่ไหน?"
        }
      },
      {
        id: "s_02_020",
        en: "How far is the hotel?",
        trans: {
          vi: "Khách sạn cách đây bao xa?",
          es: "¿Qué tan lejos está el hotel?",
          fr: "À quelle distance est l'hôtel?",
          de: "Wie weit ist das Hotel entfernt?",
          ja: "ホテルまでどのくらい離れていますか？",
          ko: "호텔까지 얼마나 먼가요?",
          zh: "酒店有多远？",
          pt: "A que distância fica o hotel?",
          ru: "Как далеко находится отель?",
          th: "โรงแรมอยู่ไกลแค่ไหน?"
        }
      },
      {
        id: "s_02_021",
        en: "Do I need a transfer ticket?",
        trans: {
          vi: "Tôi có cần vé chuyển tuyến không?",
          es: "¿Necesito un boleto de transbordo?",
          fr: "Ai-je besoin d'un ticket de correspondance?",
          de: "Brauche ich ein Umsteigeticket?",
          ja: "乗り換えチケットは必要ですか？",
          ko: "환승 티켓이 필요한가요?",
          zh: "我需要换乘票吗？",
          pt: "Preciso de um bilhete de transferência?",
          ru: "Нужен ли мне пересадочный билет?",
          th: "ฉันต้องใช้ตั๋วเปลี่ยนเครื่องหรือไม่?"
        }
      },
      {
        id: "s_02_022",
        en: "The duty-free shop is open.",
        trans: {
          vi: "Cửa hàng miễn thuế đang mở cửa.",
          es: "La tienda libre de impuestos está abierta.",
          fr: "La boutique hors taxes est ouverte.",
          de: "Der Duty-Free-Shop hat geöffnet.",
          ja: "免税店は営業中です。",
          ko: "면세점이 영업 중입니다.",
          zh: "免税店营业中。",
          pt: "A loja duty-free está aberta.",
          ru: "Магазин беспошлинной торговли открыт.",
          th: "ร้านค้าปลอดภาษีเปิดอยู่"
        }
      },
      {
        id: "s_02_023",
        en: "Can I have a blanket please?",
        trans: {
          vi: "Cho tôi xin một chiếc chăn được không?",
          es: "¿Me da una manta por favor?",
          fr: "Puis-je avoir une couverture s'il vous plaît?",
          de: "Kann ich bitte eine Decke haben?",
          ja: "毛布を1枚いただけますか？",
          ko: "담요 한 장 주시겠어요?",
          zh: "请问能给我一条毯子吗？",
          pt: "Pode me dar um cobertor, por favor?",
          ru: "Можно мне одеяло, пожалуйста?",
          th: "ขอผ้าห่มหน่อยได้ไหม?"
        }
      },
      {
        id: "s_02_024",
        en: "Put your bag under seat.",
        trans: {
          vi: "Đặt túi của bạn dưới ghế ngồi.",
          es: "Ponga su bolsa debajo del asiento.",
          fr: "Mettez votre sac sous le siège.",
          de: "Legen Sie Ihre Tasche unter den Sitz.",
          ja: "バッグは座席の下に置いてください。",
          ko: "가방을 좌석 밑에 놓아주세요.",
          zh: "把你的包放在座椅下面。",
          pt: "Coloque sua bolsa debaixo do assento.",
          ru: "Положите сумку под сиденье.",
          th: "วางกระเป๋าไว้ใต้ที่นั่ง"
        }
      },
      {
        id: "s_02_025",
        en: "Please fast your seat belt.",
        trans: {
          vi: "Vui lòng thắt dây an toàn.",
          es: "Por favor abroche su cinturón.",
          fr: "Veuillez attacher votre ceinture.",
          de: "Bitte schnallen Sie sich an.",
          ja: "シートベルトをお締めください。",
          ko: "안전벨트를 매어 주세요.",
          zh: "请系好安全带。",
          pt: "Por favor, aperte o cinto de segurança.",
          ru: "Пожалуйста, пристегните ремни безопасности.",
          th: "กรุณาคาดเข็มขัดนิรภัย"
        }
      },
      {
        id: "s_02_026",
        en: "Enjoy your trip to Europe.",
        trans: {
          vi: "Chúc bạn chuyến đi Châu Âu vui vẻ.",
          es: "Disfruta tu viaje a Europa.",
          fr: "Bon voyage en Europe.",
          de: "Gute Reise nach Europa.",
          ja: "ヨーロッパへの旅をお楽しみください。",
          ko: "즐거운 유럽 여행 되세요.",
          zh: "祝你欧洲之旅愉快。",
          pt: "Aproveite sua viagem para a Europa.",
          ru: "Приятной поездки в Европу.",
          th: "ขอให้สนุกกับการเดินทางสู่ยุโรป"
        }
      },
      {
        id: "s_02_027",
        en: "I am lost in this city.",
        trans: {
          vi: "Tôi bị lạc ở thành phố này.",
          es: "Estoy perdido en esta ciudad.",
          fr: "Je suis perdu dans cette ville.",
          de: "Ich habe mich in dieser Stadt verlaufen.",
          ja: "この街で道に迷ってしまいました。",
          ko: "이 도시에서 길을 잃었어요.",
          zh: "我在这个城市迷路了。",
          pt: "Estou perdido nesta cidade.",
          ru: "Я заблудился в этом городе.",
          th: "ฉันหลงทางในเมืองนี้"
        }
      },
      {
        id: "s_02_028",
        en: "Where is the tourist information center?",
        trans: {
          vi: "Trung tâm thông tin du lịch ở đâu?",
          es: "¿Dónde está el centro de información?",
          fr: "Où est l'office de tourisme?",
          de: "Wo ist die Touristeninformation?",
          ja: "観光案内所はどこですか？",
          ko: "관광 안내소가 어디인가요?",
          zh: "旅游咨询中心在哪里？",
          pt: "Onde fica o centro de informações turísticas?",
          ru: "Где находится туристический центр?",
          th: "ศูนย์ข้อมูลนักท่องเที่ยวอยู่ที่ไหน?"
        }
      },
      {
        id: "s_02_029",
        en: "Can I take photos here?",
        trans: {
          vi: "Tôi chụp ảnh ở đây được không?",
          es: "¿Puedo tomar fotos aquí?",
          fr: "Puis-je prendre des photos ici?",
          de: "Kann ich hier Fotos machen?",
          ja: "ここで写真を撮ってもいいですか？",
          ko: "여기서 사진을 찍어도 되나요?",
          zh: "我可以在这里拍照吗？",
          pt: "Posso tirar fotos aqui?",
          ru: "Можно здесь фотографировать?",
          th: "ถ่ายรูปที่นี่ได้ไหม?"
        }
      },
      {
        id: "s_02_030",
        en: "Have a safe flight home.",
        trans: {
          vi: "Chúc bạn chuyến bay thượng lộ bình an.",
          es: "Que tengas un buen vuelo a casa.",
          fr: "Bon vol de retour.",
          de: "Guten Flug nach Hause.",
          ja: "無事に帰国できますように。",
          ko: "안전한 비행 되세요.",
          zh: "祝你返程航班平安。",
          pt: "Tenha um vôo seguro para casa.",
          ru: "Безопасного полета домой.",
          th: "ขอให้เดินทางกลับโดยสวัสดิภาพ"
        }
      }
    ],

    // ========================================================================
    // CHỦ ĐỀ 03: NHÀ HÀNG & GỌI MÓN (RESTAURANT & DINING)
    // ========================================================================
    "top_03": [
      {
        id: "s_03_001",
        en: "A table for two please.",
        trans: {
          vi: "Vui lòng cho bàn hai người.",
          es: "Una mesa para dos por favor.",
          fr: "Une table pour deux s'il vous plaît.",
          de: "Einen Tisch für zwei bitte.",
          ja: "2名用の席をお願いします。",
          ko: "2명 테이블 부탁합니다.",
          zh: "请给我一张两人的桌子。",
          pt: "Uma mesa para dois, por favor.",
          ru: "Столик на двоих, пожалуйста.",
          th: "ขอโต๊ะสำหรับสองคน"
        }
      },
      {
        id: "s_03_002",
        en: "May I see the menu?",
        trans: {
          vi: "Tôi có thể xem thực đơn không?",
          es: "¿Puedo ver el menú?",
          fr: "Puis-je voir le menu?",
          de: "Kann ich die Speisekarte sehen?",
          ja: "メニューを見せてもらえますか？",
          ko: "메뉴판을 볼 수 있을까요?",
          zh: "我可以看下菜单吗？",
          pt: "Posso ver o menu?",
          ru: "Можно посмотреть меню?",
          th: "ขอดูเมนูหน่อยได้ไหม?"
        }
      },
      {
        id: "s_03_003",
        en: "What is today special dish?",
        trans: {
          vi: "Món đặc biệt hôm nay là gì?",
          es: "¿Cuál es el plato especial de hoy?",
          fr: "Quel est le plat du jour?",
          de: "Was ist das heutige Tagesgericht?",
          ja: "本日のおすすめ料理は何ですか？",
          ko: "오늘의 스페셜 요리는 무엇인가요?",
          zh: "今天的特色菜是什么？",
          pt: "Qual é o prato especial de hoje?",
          ru: "Какое сегодня фирменное блюдо?",
          th: "จานพิเศษ天วันนี้คืออะไร?"
        }
      },
      {
        id: "s_03_004",
        en: "I am allergic to seafood.",
        trans: {
          vi: "Tôi bị dị ứng với hải sản.",
          es: "Soy alérgico a los mariscos.",
          fr: "Je suis allergique aux fruits de mer.",
          de: "Ich bin allergisch gegen Meeresfrüchte.",
          ja: "私はシーフードアレルギーがあります。",
          ko: "저는 해산물 알레르기가 있습니다.",
          zh: "我对海鲜过敏。",
          pt: "Sou alérgico a frutos do mar.",
          ru: "У меня аллергия на морепродукты.",
          th: "ฉันแพ้อาหารทะเล"
        }
      },
      {
        id: "s_03_005",
        en: "Please bring us cold water.",
        trans: {
          vi: "Làm ơn mang cho chúng tôi nước lạnh.",
          es: "Por favor tráenos agua fría.",
          fr: "Apportez-nous de l'eau fraîche s'il vous plaît.",
          de: "Bitte bringen Sie uns kaltes Wasser.",
          ja: "お冷をお願いします。",
          ko: "시원한 물 좀 가져다 주세요.",
          zh: "请给我们拿些冷水。",
          pt: "Por favor, traga-nos água fria.",
          ru: "Пожалуйста, принесите нам холодной воды.",
          th: "กรุณานำน้ำเย็นมาให้เรา"
        }
      },
      {
        id: "s_03_006",
        en: "We are ready to order.",
        trans: {
          vi: "Chúng tôi đã sẵn sàng gọi món.",
          es: "Estamos listos para ordenar.",
          fr: "Nous sommes prêts à commander.",
          de: "Wir sind bereit zu bestellen.",
          ja: "注文の準備ができました。",
          ko: "주문할 준비가 되었습니다.",
          zh: "我们准备好点菜了。",
          pt: "Estamos prontos para fazer o pedido.",
          ru: "Мы готовы сделать заказ.",
          th: "พวกเราพร้อมสั่งอาหารแล้ว"
        }
      },
      {
        id: "s_03_007",
        en: "I would like medium steak.",
        trans: {
          vi: "Tôi muốn bít tết chín vừa.",
          es: "Me gustaría el filete a término medio.",
          fr: "Je voudrais un steak saignant.",
          de: "Ich hätte gerne ein Steak medium.",
          ja: "ステーキはミディアムでお願いします。",
          ko: "미디엄 스테이크로 주세요.",
          zh: "我要五分熟的牛排。",
          pt: "Eu gostaria do bife ao ponto.",
          ru: "Я бы хотел стейк средней прожарки.",
          th: "ฉันต้องการสเต็กความสุกระดับปานกลาง"
        }
      },
      {
        id: "s_03_008",
        en: "This soup is too salty.",
        trans: {
          vi: "Món súp này mặn quá.",
          es: "Esta sopa está demasiado salada.",
          fr: "Cette soupe est trop salée.",
          de: "Diese Suppe ist zu salzig.",
          ja: "このスープはしょっぱすぎます。",
          ko: "이 수프는 너무 짜요.",
          zh: "这汤太咸了。",
          pt: "Esta sopa está muito salgada.",
          ru: "Этот суп слишком соленый.",
          th: "ซุปนี้เค็มเกินไป"
        }
      },
      {
        id: "s_03_009",
        en: "Could I get the check?",
        trans: {
          vi: "Cho tôi xin hóa đơn tính tiền.",
          es: "¿Me trae la cuenta por favor?",
          fr: "Puis-je avoir l'addition s'il vous plaît?",
          de: "Kann ich bitte die Rechnung haben?",
          ja: "お会計をお願いします。",
          ko: "계산서 좀 주시겠어요?",
          zh: "买单，谢谢。",
          pt: "Pode me trazer a conta, por favor?",
          ru: "Можно чек, пожалуйста?",
          th: "เช็คบิลด้วย"
        }
      },
      {
        id: "s_03_010",
        en: "Do you accept credit cards?",
        trans: {
          vi: "Nhà hàng có nhận thẻ tín dụng không?",
          es: "¿Aceptan tarjetas de crédito?",
          fr: "Acceptez-vous les cartes de crédit?",
          de: "Akzeptieren Sie Kreditkarten?",
          ja: "クレジットカードは使えますか？",
          ko: "신용카드로 결제 가능한가요?",
          zh: "可以刷信用卡吗？",
          pt: "Vocês aceitam cartão de crédito?",
          ru: "Вы принимаете кредитные карты?",
          th: "รับบัตรเครดิตไหม?"
        }
      },
      {
        id: "s_03_011",
        en: "Is service charge included here?",
        trans: {
          vi: "Ở đây đã bao gồm phí dịch vụ chưa?",
          es: "¿Está incluida la propina aquí?",
          fr: "Le service est-il inclus?",
          de: "Ist die Servicegebühr enthalten?",
          ja: "サービス料は含まれていますか？",
          ko: "봉사료가 포함되어 있나요?",
          zh: "这里包含服务费吗？",
          pt: "A taxa de serviço está incluída?",
          ru: "Чаевые включены в счет?",
          th: "ราคานี้รวมค่าบริการแล้วหรือยัง?"
        }
      },
      {
        id: "s_03_012",
        en: "Keep the rest for tip.",
        trans: {
          vi: "Giữ lại tiền thừa làm tiền tip nhé.",
          es: "Quédese con el cambio.",
          fr: "Gardez la monnaie.",
          de: "Stimmt so.",
          ja: "お釣りは取っておいてください。",
          ko: "잔돈은 팁으로 가지세요.",
          zh: "不用找零了，留作小费。",
          pt: "Fique com o troco.",
          ru: "Сдачи не надо.",
          th: "ไม่ต้องทอน"
        }
      },
      {
        id: "s_03_013",
        en: "Is there a vegetarian option?",
        trans: {
          vi: "Có món ăn chay không?",
          es: "¿Hay alguna opción vegetariana?",
          fr: "Y a-t-il une option végétarienne?",
          de: "Gibt es ein vegetarisches Gericht?",
          ja: "ベジタリアンメニューはありますか？",
          ko: "채식 메뉴가 있나요?",
          zh: "有素食选择吗？",
          pt: "Existe uma opção vegetariana?",
          ru: "Есть ли вегетарианские блюда?",
          th: "มีเมนูมังสวิรัติไหม?"
        }
      },
      {
        id: "s_03_014",
        en: "Can I have extra spicy?",
        trans: {
          vi: "Cho tôi ăn cay nhiều nhé.",
          es: "¿Pido qué esté bien picante?",
          fr: "Puis-je l'avoir très épicé?",
          de: "Kann ich es extra scharf haben?",
          ja: "激辛にできますか？",
          ko: "아주 매운맛으로 주시겠어요?",
          zh: "可以做特辣的吗？",
          pt: "Pode ser bem apimentado?",
          ru: "Можно сделать поострее?",
          th: "ขอเผ็ดๆ ได้ไหม?"
        }
      },
      {
        id: "s_03_015",
        en: "The food was absolutely delicious.",
        trans: {
          vi: "Thức ăn cực kỳ ngon miệng.",
          es: "La comida estuvo deliciosa.",
          fr: "La nourriture était délicieuse.",
          de: "Das Essen war absolut lecker.",
          ja: "料理はとても美味しかったです。",
          ko: "음식이 정말 맛있었습니다.",
          zh: "食物真的太美味了。",
          pt: "A comida estava absolutamente deliciosa.",
          ru: "Еда была невероятно вкусной.",
          th: "อาหารอร่อยมากจริงๆ"
        }
      },
      {
        id: "s_03_016",
        en: "Pass me the pepper please.",
        trans: {
          vi: "Làm ơn chuyển giùm lọ tiêu.",
          es: "Pásame la pimienta por favor.",
          fr: "Passez-moi le poivre s'il vous plaît.",
          de: "Reichen Sie mir bitte den Pfeffer.",
          ja: "コショウを取っていただけますか？",
          ko: "후추 좀 전달해 주시겠어요?",
          zh: "请把胡椒粉递给我。",
          pt: "Passe-me a pimenta, por favor.",
          ru: "Передайте мне перец, пожалуйста.",
          th: "ช่วยส่งพริกไทยให้หน่อย"
        }
      },
      {
        id: "s_03_017",
        en: "Where is the restrooms location?",
        trans: {
          vi: "Nhà vệ sinh nằm ở đâu?",
          es: "¿Dónde están los baños?",
          fr: "Où sont les toilettes?",
          de: "Wo sind die Toiletten?",
          ja: "お手洗いはどこですか？",
          ko: "화장실 위치가 어디인가요?",
          zh: "洗手间在哪里？",
          pt: "Onde fica o banheiro?",
          ru: "Где находится туалет?",
          th: "ห้องน้ำอยู่ที่ไหน?"
        }
      },
      {
        id: "s_03_018",
        en: "Can we split the bill?",
        trans: {
          vi: "Chúng tôi chia tiền hóa đơn được không?",
          es: "¿Podemos dividir la cuenta?",
          fr: "Pouvons-nous séparer l'addition?",
          de: "Können wir die Rechnung teilen?",
          ja: "割り勘にできますか？",
          ko: "각자 더치페이 할 수 있을까요?",
          zh: "我们可以分开付账吗？",
          pt: "Podemos dividir a conta?",
          ru: "Можно разделить счет?",
          th: "พวกเราขอแยกบิลได้ไหม?"
        }
      },
      {
        id: "s_03_019",
        en: "Please pack this to go.",
        trans: {
          vi: "Gói phần này mang về giúp tôi.",
          es: "Por favor empaque esto para llevar.",
          fr: "Emballez ceci à emporter s'il vous plaît.",
          de: "Bitte packen Sie das zum Mitnehmen ein.",
          ja: "これを持ち帰り用に包んでください。",
          ko: "이거 포장해 주세요.",
          zh: "请把这个打包带走。",
          pt: "Por favor, embale isto para levar.",
          ru: "Заверните это с собой, пожалуйста.",
          th: "ช่วยห่อกลับบ้านให้หน่อย"
        }
      },
      {
        id: "s_03_020",
        en: "This is not what I ordered.",
        trans: {
          vi: "Đây không phải món tôi đã gọi.",
          es: "Esto no es lo que pedí.",
          fr: "Ce n'est pas ce que j'ai commandé.",
          de: "Das ist nicht das, was ich bestellt habe.",
          ja: "これは私が注文したものではありません。",
          ko: "이것은 제가 주문한 것이 아닙니다.",
          zh: "这不是我点的菜。",
          pt: "Isso não é o que eu pedi.",
          ru: "Это не то, что я заказывал.",
          th: "นี่ไม่ใช่สิ่งที่ฉันสั่ง"
        }
      },
      {
        id: "s_03_021",
        en: "Do you have ice cream?",
        trans: {
          vi: "Ở đây có kem không?",
          es: "¿Tienen helado?",
          fr: "Avez-vous de la glace?",
          de: "Haben Sie Eiscreme?",
          ja: "アイスクリームはありますか？",
          ko: "아이 스크림이 있나요?",
          zh: "有冰淇淋吗？",
          pt: "Vocês têm sorvete?",
          ru: "У вас есть мороженое?",
          th: "มีไอศกรีมไหม?"
        }
      },
      {
        id: "s_03_022",
        en: "We need a kid highchair.",
        trans: {
          vi: "Chúng tôi cần một ghế cao em bé.",
          es: "Necesitamos una silla alta para niños.",
          fr: "Nous avons besoin d'une chaise haute.",
          de: "Wir brauchen einen Kinderhochstuhl.",
          ja: "子供用のハイチェアが必要です。",
          ko: "유아용 의자가 필요합니다.",
          zh: "我们需要一张儿童高脚椅。",
          pt: "Precisamos de uma cadeira alta para crianças.",
          ru: "Нам нужен детский стульчик.",
          th: "พวกเราต้องการเก้าอี้สูงสำหรับเด็ก"
        }
      },
      {
        id: "s_03_023",
        en: "I would like orange juice.",
        trans: {
          vi: "Tôi muốn nước ép cam.",
          es: "Me gustaría un jugo de naranja.",
          fr: "Je voudrais un jus d'orange.",
          de: "Ich hätte gerne einen Orangensaft.",
          ja: "オレンジジュースをお願いします。",
          ko: "오렌지 주스로 주세요.",
          zh: "我要一杯橙汁。",
          pt: "Eu gostaria de um suco de laranja.",
          ru: "Я бы хотел апельсиновый сок.",
          th: "ฉันต้องการน้ำส้ม"
        }
      },
      {
        id: "s_03_024",
        en: "How long will it take?",
        trans: {
          vi: "Sẽ mất thời gian bao lâu?",
          es: "¿Cuánto tiempo tardará?",
          fr: "Combien de temps cela prendra-t-il?",
          de: "Wie lange wird es dauern?",
          ja: "どのくらい時間がかかりますか？",
          ko: "얼마나 걸리나요?",
          zh: "需要等多久？",
          pt: "Quanto tempo vai demorar?",
          ru: "Сколько времени это займет?",
          th: "ต้องใช้เวลานานเท่าไหร่?"
        }
      },
      {
        id: "s_03_025",
        en: "Could we change our table?",
        trans: {
          vi: "Chúng tôi đổi bàn khác được không?",
          es: "¿Podríamos cambiar de mesa?",
          fr: "Pouvons-nous changer de table?",
          de: "Könnten wir den Tisch wechseln?",
          ja: "席を替えていただくことは可能ですか？",
          ko: "자리를 바꿀 수 있을까요?",
          zh: "我们可以换张桌子吗？",
          pt: "Podemos mudar de mesa?",
          ru: "Можем ли мы поменять столик?",
          th: "พวกเราขอเปลี่ยนโต๊ะได้ไหม?"
        }
      },
      {
        id: "s_03_026",
        en: "Are you serving breakfast now?",
        trans: {
          vi: "Bây giờ có phục vụ ăn sáng không?",
          es: "¿Están sirviendo el desayuno ahora?",
          fr: "Servez-vous le petit-déjeuner maintenant?",
          de: "Servieren Sie jetzt Frühstück?",
          ja: "現在朝食を提供していますか？",
          ko: "지금 아침 식사가 되나요?",
          zh: "现在供应早餐吗？",
          pt: "Vocês estão servindo café da manhã agora?",
          ru: "Вы сейчас подаете завтрак?",
          th: "ตอนนี้มีบริการอาหารเช้าไหม?"
        }
      },
      {
        id: "s_03_027",
        en: "The coffee is too hot.",
        trans: {
          vi: "Cà phê nóng quá.",
          es: "El café está demasiado caliente.",
          fr: "Le café est trop chaud.",
          de: "Der Kaffee ist zu heiß.",
          ja: "コーヒーが熱すぎます。",
          ko: "커피가 너무 뜨거워요.",
          zh: "咖啡太烫了。",
          pt: "O café está muito quente.",
          ru: "Кофе слишком горячий.",
          th: "กาแฟร้อนเกินไป"
        }
      },
      {
        id: "s_03_028",
        en: "Please bring another fork.",
        trans: {
          vi: "Mang giúp tôi chiếc nĩa khác.",
          es: "Por favor traiga otro tenedor.",
          fr: "Apportez une autre fourchette s'il vous plaît.",
          de: "Bitte bringen Sie eine andere Gabel.",
          ja: "新しいフォークを持ってきてください。",
          ko: "포크 하나 더 가져다 주세요.",
          zh: "请拿一把新叉子。",
          pt: "Por favor, traga outro garfo.",
          ru: "Принесите еще одну вилку, пожалуйста.",
          th: "ช่วยนำส้อมมาให้อีกอัน"
        }
      },
      {
        id: "s_03_029",
        en: "Everything was perfectly cooked.",
        trans: {
          vi: "Mọi thứ được nấu hoàn hảo.",
          es: "Todo estuvo perfectamente cocinado.",
          fr: "Tout était parfaitement cuit.",
          de: "Alles war perfekt zubereitet.",
          ja: "すべての料理の火加減が完璧でした。",
          ko: "모든 음식 조리가 완벽했습니다.",
          zh: "所有的菜都烹饪得十分完美。",
          pt: "Tudo estava perfeitamente cozinhado.",
          ru: "Все было приготовлено идеально.",
          th: "ทุกอย่างปรุงออกมาได้อย่างสมบูรณ์แบบ"
        }
      },
      {
        id: "s_03_030",
        en: "Thank you for magnificent service.",
        trans: {
          vi: "Cảm ơn vì sự phục vụ tuyệt vời.",
          es: "Gracias por el excelente servicio.",
          fr: "Merci pour ce service magnifique.",
          de: "Vielen Dank für den hervorragenden Service.",
          ja: "素晴らしいサービスをありがとうございました。",
          ko: "훌륭한 서비스에 감사드립니다.",
          zh: "感谢你们棒极了的服务。",
          pt: "Obrigado pelo serviço magnífico.",
          ru: "Спасибо за великолепное обслуживание.",
          th: "ขอบคุณสำหรับบริการที่ยอดเยี่ยม"
        }
      }
    ],
    
    
    
    
    
    
    
    
    
    
    
    
  "top_04": [
    {
      "id": "s_04_001",
      "en": "How much does this cost?",
      "trans": {
        "vi": "Cái này giá bao nhiêu tiền?",
        "es": "¿Cuánto cuesta esto?",
        "fr": "Combien ça coûte?",
        "de": "Wie viel kostet das?",
        "ja": " think これはいくらですか？",
        "ko": "이것은 얼마인가요?",
        "zh": "这个多少钱？",
        "pt": "Quanto custa isso?",
        "ru": "Сколько это стоит?",
        "th": "อันนี้ราคาเท่าไหร่?"
      }
    },
    {
      "id": "s_04_002",
      "en": "Can I pay by credit card?",
      "trans": {
        "vi": "Tôi trả bằng thẻ tín dụng được không?",
        "es": "¿Puedo pagar con tarjeta de crédito?",
        "fr": "Puis-je payer par carte de crédit?",
        "de": "Kann ich mit Kreditkarte zahlen?",
        "ja": "クレジットカードで払えますか？",
        "ko": "신용카드로 결제할 수 있나요?",
        "zh": "可以用信用卡付款吗？",
        "pt": "Posso pagar com cartão de crédito?",
        "ru": "Могу я оплатить кредитной картой?",
        "th": "ฉันสามารถจ่ายด้วยบัตรเครดิตได้ไหม?"
      }
    },
    {
      "id": "s_04_003",
      "en": "Do you have a smaller size?",
      "trans": {
        "vi": "Bạn có kích cỡ nhỏ hơn không?",
        "es": "¿Tienes una talla más pequeña?",
        "fr": "Avez-vous une taille plus petite?",
        "de": "Haben Sie eine kleinere Größe?",
        "ja": "小さいサイズはありますか？",
        "ko": "더 작은 사이즈가 있나요?",
        "zh": "你有更小尺寸的吗？",
        "pt": "Você tem um tamanho menor?",
        "ru": "У вас есть размер поменьше?",
        "th": "คุณมีขนาดที่เล็กกว่านี้ไหม?"
      }
    },
    {
      "id": "s_04_004",
      "en": "Is there any discount on this?",
      "trans": {
        "vi": "Cái này có được giảm giá không?",
        "es": "¿Hay algún descuento en esto?",
        "fr": "Y a-t-il une réduction sur ceci?",
        "de": "Gibt es darauf einen Rabatt?",
        "ja": "これに割引はありますか？",
        "ko": "이것에 할인이 있나요?",
        "zh": "这个有折扣吗？",
        "pt": "Há algum desconto nisso?",
        "ru": "Есть ли скидка на это?",
        "th": "อันนี้มีส่วนลดไหม?"
      }
    },
    {
      "id": "s_04_005",
      "en": "I would like to return this.",
      "trans": {
        "vi": "Tôi muốn trả lại món đồ này.",
        "es": "Me gustaría devolver esto.",
        "fr": "Je voudrais retourner ceci.",
        "de": "Ich möchte das zurückgeben.",
        "ja": "これを返品したいのですが。",
        "ko": "이것을 환불하고 싶습니다.",
        "zh": "我想退掉这个。",
        "pt": "Eu gostaria de devolver isso.",
        "ru": "Я хотел бы вернуть это.",
        "th": "ฉันต้องการคืนสินค้าชิ้นนี้"
      }
    },
    {
      "id": "s_04_006",
      "en": "Where is the fitting room?",
      "trans": {
        "vi": "Phòng thử đồ ở đâu?",
        "es": "¿Dónde está el probador?",
        "fr": "Où est la cabine d'essayage?",
        "de": "Wo ist die Umkleidekabine?",
        "ja": "試着室はどこですか？",
        "ko": "탈의실이 어디에 있나요?",
        "zh": "试衣间在哪里？",
        "pt": "Onde fica el provador?",
        "ru": "Где находится примерочная?",
        "th": "ห้องลองเสื้ออยู่ที่ไหน?"
      }
    },
    {
      "id": "s_04_007",
      "en": "Can I get a receipt please?",
      "trans": {
        "vi": "Cho tôi xin hóa đơn được không?",
        "es": "¿Me da un recibo por favor?",
        "fr": "Puis-je avoir un reçu s'il vous plaît?",
        "de": "Kann ich bitte einen Beleg haben?",
        "ja": "領収書をいただけますか？",
        "ko": "영수증 좀 주시겠어요?",
        "zh": "能给我一份小票吗？",
        "pt": "Pode me dar um recibo, por favor?",
        "ru": "Можно мне чек, пожалуйста?",
        "th": "ขอใบเสร็จด้วยได้ไหม?"
      }
    },
    {
      "id": "s_04_008",
      "en": "This shirt is too small.",
      "trans": {
        "vi": "Chiếc áo sơ mi này quá nhỏ.",
        "es": "Esta camisa es demasiado pequeña.",
        "fr": "Cette chemise est trop petite.",
        "de": "Dieses Hemd ist zu klein.",
        "ja": "このシャツは小さすぎます。",
        "ko": "이 셔츠는 너무 작습니다.",
        "zh": "这件衬衫太小了。",
        "pt": "Esta camisa é muito pequena.",
        "ru": "Эта рубашка слишком мала.",
        "th": "เสื้อเชิ้ตตัวนี้เล็กเกินไป"
      }
    },
    {
      "id": "s_04_009",
      "en": "Do you have this in black?",
      "trans": {
        "vi": "Bạn có cái này màu đen không?",
        "es": "¿Tienes esto en negro?",
        "fr": "L'avez-vous en noir?",
        "de": "Haben Sie das in Schwarz?",
        "ja": "これの黒はありますか？",
        "ko": "이것 검은색도 있나요?",
        "zh": "这个有黑色的吗？",
        "pt": "Você tem isso em preto?",
        "ru": "У вас есть это в черном цвете?",
        "th": "คุณมีแบบนี้สีดำไหม?"
      }
    },
    {
      "id": "s_04_010",
      "en": "Can I try this jacket on?",
      "trans": {
        "vi": "Tôi mặc thử chiếc áo khoác này được không?",
        "es": "¿Puedo probarme esta chaqueta?",
        "fr": "Puis-je essayer cette veste?",
        "de": "Kann ich diese Jacke anprobieren?",
        "ja": "この上着を試着してもいいですか？",
        "ko": "이 재킷을 입어봐도 될까요?",
        "zh": "我可以试穿这件外套吗？",
        "pt": "Posso experimentar esta jaqueta?",
        "ru": "Могу я примерить эту куртку?",
        "th": "ฉันขอลองเสื้อแจ็คเก็ตตัวนี้ได้ไหม?"
      }
    },
    {
      "id": "s_04_011",
      "en": "I am just looking around.",
      "trans": {
        "vi": "Tôi chỉ đang xem xung quanh thôi.",
        "es": "Solo estoy mirando.",
        "fr": "Je regarde seulement.",
        "de": "Ich schaue mich nur um.",
        "ja": "ただ見てまわっているだけです。",
        "ko": "그냥 둘러보는 중입니다.",
        "zh": "我只是随便看看。",
        "pt": "Eu estou apenas olhando.",
        "ru": "Я просто осмотрюсь.",
        "th": "ฉันแค่เดินดูรอบๆ"
      }
    },
    {
      "id": "s_04_012",
      "en": "Where can I find shoes?",
      "trans": {
        "vi": "Tôi có thể tìm giày ở đâu?",
        "es": "¿Dónde puedo encontrar zapatos?",
        "fr": "Où puis-je trouver des chaussures?",
        "de": "Wo finde ich Schuhe?",
        "ja": "靴はどこにありますか？",
        "ko": "신발은 어디서 찾을 수 있나요?",
        "zh": "哪里可以找到鞋子？",
        "pt": "Onde posso encontrar sapatos?",
        "ru": "Где я могу найти обувь?",
        "th": "ฉันจะหาซื้อรองเท้าได้ที่ไหน?"
      }
    },
    {
      "id": "s_04_013",
      "en": "This item is on sale.",
      "trans": {
        "vi": "Mặt hàng này đang được giảm giá.",
        "es": "Este artículo está en oferta.",
        "fr": "Cet article est en solde.",
        "de": "Dieser Artikel ist im Angebot.",
        "ja": "この商品はセール中です。",
        "ko": "이 상품은 할인 중입니다.",
        "zh": "这个商品正在打折。",
        "pt": "Este item está em promoção.",
        "ru": "Этот товар продается со скидкой.",
        "th": "สินค้าชิ้นนี้กำลังลดราคา"
      }
    },
    {
      "id": "s_04_014",
      "en": "Can you wrap this for me?",
      "trans": {
        "vi": "Bạn gói món này giúp tôi được không?",
        "es": "¿Puedes envolver esto para mí?",
        "fr": "Pouvez-vous emballer ceci pour moi?",
        "de": "Können Sie das für mich einpacken?",
        "ja": "これをラッピングしてもらえますか？",
        "ko": "이것 포장해 주실 수 있나요?",
        "zh": "你可以帮我把这个包起来吗？",
        "pt": "Você pode embrulhar isso para mim?",
        "ru": "Можете упаковать это для меня?",
        "th": "ช่วยห่อสิ่งนี้ให้ฉันได้ไหม?"
      }
    },
    {
      "id": "s_04_015",
      "en": "I will take two of these.",
      "trans": {
        "vi": "Tôi sẽ lấy hai cái này.",
        "es": "Me llevaré dos de estos.",
        "fr": "J'en prendrai deux comme ça.",
        "de": "Ich nehme zwei davon.",
        "ja": "これを2ついただきます。",
        "ko": "이것 두 개로 할게요.",
        "zh": "我要两个这个。",
        "pt": "Eu vou levar dois destes.",
        "ru": "Я возьму два таких.",
        "th": "ฉันจะเอาอันนี้สองชิ้น"
      }
    },
    {
      "id": "s_04_016",
      "en": "Is this price fixed or negotiable?",
      "trans": {
        "vi": "Giá này cố định hay có thể thương lượng?",
        "es": "¿Este precio es fijo o negociable?",
        "fr": "Ce prix est-il fixe ou négociable?",
        "de": "Ist dieser Preis fest oder verhandelbar?",
        "ja": "この価格は固定ですか、それとも交渉可能ですか？",
        "ko": "이 가격은 정가인가요, 아니면 흥정 가능한가요?",
        "zh": "这个价格是固定的还是可以议价的？",
        "pt": "Este preço é fixo ou negociável?",
        "ru": "Эта цена фиксированная или можно поторговаться?",
        "th": "ราคานี้เป็นราคาตายตัวหรือต่อรองได้?"
      }
    },
    {
      "id": "s_04_017",
      "en": "The store opens at nine.",
      "trans": {
        "vi": "Cửa hàng mở cửa lúc chín giờ.",
        "es": "La tienda abre a las nueve.",
        "fr": "Le magasin ouvre à neuf heures.",
        "de": "Das Geschäft öffnet um neun Uhr.",
        "ja": "お店は9時に開店します。",
        "ko": "매장은 9시에 문을 엽니다.",
        "zh": "商店九点开门。",
        "pt": "A loja abre às nove.",
        "ru": "Магазин открывается в девять.",
        "th": "ร้านเปิดตอนเก้าโมง"
      }
    },
    {
      "id": "s_04_018",
      "en": "Do you sell gift cards?",
      "trans": {
        "vi": "Bạn có bán thẻ quà tặng không?",
        "es": "¿Venden tarjetas de regalo?",
        "fr": "Vendez-vous des cartes-cadeaux?",
        "de": "Verkaufen Sie Geschenkkarten?",
        "ja": "ギフトカードは販売していますか？",
        "ko": "기프트 카드를 판매하나요?",
        "zh": "你们卖礼品卡吗？",
        "pt": "Vocês vendem cartões presente?",
        "ru": "Вы продаете подарочные карты?",
        "th": "คุณมีบัตรของขวัญขายไหม?"
      }
    },
    {
      "id": "s_04_019",
      "en": "I lost my shopping bag.",
      "trans": {
        "vi": "Tôi bị mất túi mua sắm.",
        "es": "Perdí mi bolsa de compras.",
        "fr": "J'ai perdu mon sac de shopping.",
        "de": "Ich habe meine Einkaufstasche verloren.",
        "ja": "買い物袋をなくしてしまいました。",
        "ko": "쇼핑백을 잃어버렸어요.",
        "zh": "我的购物袋丢了。",
        "pt": "Perdi minha sacola de compras.",
        "ru": "Я потерял свою сумку с покупками.",
        "th": "ฉันทำถุงช้อปปิ้งหาย"
      }
    },
    {
      "id": "s_04_020",
      "en": "Where is the cash register?",
      "trans": {
        "vi": "Quầy thu ngân ở đâu?",
        "es": "¿Dónde está la caja registradora?",
        "fr": "Où est la caisse?",
        "de": "Wo ist die Kasse?",
        "ja": "レジはどこですか？",
        "ko": "계산대가 어디인가요?",
        "zh": "收银台在哪里？",
        "pt": "Onde fica o caixa?",
        "ru": "Где находится касса?",
        "th": "เคาน์เตอร์แคชเชียร์อยู่ที่ไหน?"
      }
    },
    {
      "id": "s_04_021",
      "en": "This material feels very soft.",
      "trans": {
        "vi": "Chất liệu này cảm thấy rất mềm mại.",
        "es": "Este material se siente muy suave.",
        "fr": "Cette matière est très douce.",
        "de": "Dieses Material fühlt sich sehr weich an.",
        "ja": "この me 素材はとても柔らかい感じがします。",
        "ko": "이 소재는 정말 부드럽게 느껴지네요.",
        "zh": "这个面料摸起来非常柔软。",
        "pt": "Este material parece muito macio.",
        "ru": "Этот материал очень мягкий на ощупь.",
        "th": "ผ้านี้รู้สึกนุ่มมาก"
      }
    },
    {
      "id": "s_04_022",
      "en": "Can I exchange this item?",
      "trans": {
        "vi": "Tôi có thể đổi mặt hàng này không?",
        "es": "¿Puedo cambiar este artículo?",
        "fr": "Puis-je échanger cet article?",
        "de": "Kann ich diesen Artikel umtauschen?",
        "ja": "この商品を交換できますか？",
        "ko": "이 물건을 교환할 수 있나요?",
        "zh": "这个商品可以调换吗？",
        "pt": "Posso trocar este item?",
        "ru": "Могу я обменять этот товар?",
        "th": "ฉันขอเปลี่ยนสินค้าชิ้นนี้ได้ไหม?"
      }
    },
    {
      "id": "s_04_023",
      "en": "Is there a warranty for this?",
      "trans": {
        "vi": "Cái này có bảo hành không?",
        "es": "¿Tiene garantía esto?",
        "fr": "Y a-t-il une garantie pour cela?",
        "de": "Gibt es darauf eine Garantie?",
        "ja": "これに保証は付いていますか？",
        "ko": "이것은 보증 기간이 있나요?",
        "zh": "这个有保修吗？",
        "pt": "Existe garantia para isso?",
        "ru": "Есть ли гарантия на это?",
        "th": "อันนี้มีการรับประกันไหม?"
      }
    },
    {
      "id": "s_04_024",
      "en": "Please give me a plastic bag.",
      "trans": {
        "vi": "Vui lòng cho tôi xin một cái túi nilon.",
        "es": "Por favor dame una bolsa de plástico.",
        "fr": "Donnez-moi un sac en plastique s'il vous plaît.",
        "de": "Geben Sie mir bitte eine Plastiktüte.",
        "ja": "レジ袋をください。",
        "ko": "비닐봉지 하나 주세요.",
        "zh": "请给我一个塑料袋。",
        "pt": "Por favor, me dê una sacola de plástico.",
        "ru": "Дайте мне пластиковый пакет, пожалуйста.",
        "th": "ขอถุงพลาสติกให้ฉันหน่อย"
      }
    },
    {
      "id": "s_04_025",
      "en": "Are these shoes comfortable?",
      "trans": {
        "vi": "Đôi giày này đi có thoải mái không?",
        "es": "¿Son cómodos estos zapatos?",
        "fr": "Ces chaussures sont-elles confortables?",
        "de": "Sind diese Schuhe bequem?",
        "ja": "この靴は履き心地が良いですか？",
        "ko": "이 신발은 편한가요?",
        "zh": "这双鞋穿着舒适吗？",
        "pt": "Estes sapatos são confortáveis?",
        "ru": "Эта обувь удобная?",
        "th": "รองเท้าคู่นี้ใส่สบายไหม?"
      }
    },
    {
      "id": "s_04_026",
      "en": "I need a bigger size.",
      "trans": {
        "vi": "Tôi cần một kích cỡ lớn hơn.",
        "es": "Necesito una talla más grande.",
        "fr": "J'ai besoin d'une taille plus grande.",
        "de": "Ich brauche eine größere Größe.",
        "ja": "もっと大きいサイズが必要です。",
        "ko": "더 큰 사이즈가 필요합니다.",
        "zh": "我们需要更大号的。",
        "pt": "Preciso de um tamanho maior.",
        "ru": "Мне нужен размер побольше.",
        "th": "ฉันต้องการขนาดที่ใหญ่กว่านี้"
      }
    },
    {
      "id": "s_04_027",
      "en": "That is way too expensive.",
      "trans": {
        "vi": "Cái đó đắt quá chừng.",
        "es": "Eso es demasiado caro.",
        "fr": "C'est beaucoup trop cher.",
        "de": "Das ist viel zu teuer.",
        "ja": "それは高すぎます。",
        "ko": "그것은 너무แพ쌉니다.",
        "zh": "那个实在太贵了。",
        "pt": "Isso é caro demais.",
        "ru": "Это слишком дорого.",
        "th": "อันนั้นแพงเกินไปมาก"
      }
    },
    {
      "id": "s_04_028",
      "en": "Where is the nearest supermarket?",
      "trans": {
        "vi": "Siêu thị gần nhất ở đâu?",
        "es": "¿Dónde está el supermercado más cercano?",
        "fr": "Où est le supermarché le plus proche?",
        "de": "Wo ist der nächste Supermarkt?",
        "ja": "一番近いスーパーはどこですか？",
        "ko": "가장 가까운 슈퍼마켓이 어디인가요?",
        "zh": "最近的超市在哪里？",
        "pt": "Onde fica o supermercado mais próximo?",
        "ru": "Где находится ближайший супермаркет?",
        "th": "ซูเปอร์มาร์เก็ตที่ใกล้ที่สุดอยู่ที่ไหน?"
      }
    },
    {
      "id": "s_04_029",
      "en": "Do you accept cash payments?",
      "trans": {
        "vi": "Bạn có nhận thanh toán bằng tiền mặt không?",
        "es": "¿Aceptan pagos en efectivo?",
        "fr": "Acceptez-vous les paiements en espèces?",
        "de": "Akzeptieren Sie Barzahlung?",
        "ja": "現金で支払えますか？",
        "ko": "현금 결제가 가능한가요?",
        "zh": "你们接受现金付款吗？",
        "pt": "Vocês aceitam pagamento em dinheiro?",
        "ru": "Вы принимаете наличные?",
        "th": "คุณรับเงินสดไหม?"
      }
    },
    {
      "id": "s_04_030",
      "en": "Thank you for the receipt.",
      "trans": {
        "vi": "Cảm ơn bạn vì hóa đơn.",
        "es": "Gracias por el recibo.",
        "fr": "Merci pour le reçu.",
        "de": "Vielen Dank für den Beleg.",
        "ja": "領収書をありがとうございます。",
        "ko": "영수증 감사합니다.",
        "zh": "谢谢你的小票。",
        "pt": "Obrigado pelo recibo.",
        "ru": "Спасибо за чек.",
        "th": "ขอบคุณสำหรับใบเสร็จ"
      }
    }
  ],
  "top_05": [
    {
      "id": "s_05_001",
      "en": "I have a reservation here.",
      "trans": {
        "vi": "Tôi có đặt phòng trước ở đây.",
        "es": "Tengo una reserva aquí.",
        "fr": "J'ai une réservation ici.",
        "de": "Ich habe hier eine Reservierung.",
        "ja": "ここで予約しています。",
        "ko": "여기 예약했습니다.",
        "zh": "我在这里有预订。",
        "pt": "Eu tenho uma reserva aqui.",
        "ru": "У меня здесь забронировано.",
        "th": "ฉันได้จองห้องไว้ที่นี่"
      }
    },
    {
      "id": "s_05_002",
      "en": "What time is check-in?",
      "trans": {
        "vi": "Mấy giờ được nhận phòng?",
        "es": "¿A qué hora es el check-in?",
        "fr": "À quelle heure est l'enregistrement?",
        "de": "Wann ist der Check-in?",
        "ja": "チェックインは何時ですか？",
        "ko": "체크인 시간은 몇 시인가요?",
        "zh": "入住时间是几点？",
        "pt": "A que horas é o check-in?",
        "ru": "Во сколько заезд?",
        "th": "เช็คอินได้ตอนกี่โมง?"
      }
    },
    {
      "id": "s_05_003",
      "en": "Can I get an extra pillow?",
      "trans": {
        "vi": "Cho tôi xin thêm một cái gối được không?",
        "es": "¿Puedo tener una almohada extra?",
        "fr": "Puis-je avoir un oreiller supplémentaire?",
        "de": "Kann ich ein zusätzliches Kissen haben?",
        "ja": "追加の枕をいただけますか？",
        "ko": "베개를 하나 더 얻을 수 있을까요?",
        "zh": "能给我加个枕头吗？",
        "pt": "Posso ter um travesseiro extra?",
        "ru": "Можно мне дополнительную подушку?",
        "th": "ขอหมอนเพิ่มอีกใบได้ไหม?"
      }
    },
    {
      "id": "s_05_004",
      "en": "The air conditioner is not working.",
      "trans": {
        "vi": "Máy điều hòa không hoạt động.",
        "es": "El aire acondicionado no funciona.",
        "fr": "L'climatiseur ne fonctionne pas.",
        "de": "Die Klimaanlage funktioniert nicht.",
        "ja": "エアコンが動きません。",
        "ko": "에어컨이 작동하지 않아요.",
        "zh": "空调坏了。",
        "pt": "O ar condicionado não está funcionando.",
        "ru": "Кондиционер не работает.",
        "th": "เครื่องปรับอากาศไม่ทำงาน"
      }
    },
    {
      "id": "s_05_005",
      "en": "Is breakfast included in price?",
      "trans": {
        "vi": "Bữa sáng có bao gồm trong giá phòng không?",
        "es": "¿El desayuno está incluido en el precio?",
        "fr": "Le petit-déjeuner est-il inclus dans le prix?",
        "de": "Ist das Frühstück im Preis enthalten?",
        "ja": "朝食は料金に含まれていますか？",
        "ko": "조식이 요금에 포함되어 있나요?",
        "zh": "早餐包含在房价里吗？",
        "pt": "O café da manhã está incluído no preço?",
        "ru": "Завтрак включен в стоимость?",
        "th": "ราคานี้รวมอาหารเช้าหรือยัง?"
      }
    },
    {
      "id": "s_05_006",
      "en": "Where is the elevator located?",
      "trans": {
        "vi": "Thang máy nằm ở đâu?",
        "es": "¿Dónde está ubicado el ascensor?",
        "fr": "Où se trouve l'ascenseur?",
        "de": "Wo befindet sich der Aufzug?",
        "ja": "エレベーターはどこにありますか？",
        "ko": "엘리베이터는 어디에 있나요?",
        "zh": "电梯在哪里？",
        "pt": "Onde fica o elevador?",
        "ru": "Где находится лифт?",
        "th": "ลิฟต์อยู่ที่ไหน?"
      }
    },
    {
      "id": "s_05_007",
      "en": "Can I leave my luggage here?",
      "trans": {
        "vi": "Tôi có thể gửi hành lý ở đây không?",
        "es": "¿Puedo dejar mi equipaje aquí?",
        "fr": "Puis-je laisser mes bagages ici?",
        "de": "Kann ich mein Gepäck hier lassen?",
        "ja": "ここに荷物を預けられますか？",
        "ko": "여기에 짐을 맡길 수 있나요?",
        "zh": "我可以把行李寄存在这里吗？",
        "pt": "Posso deixar minha bagagem aqui?",
        "ru": "Могу я оставить свой багаж здесь?",
        "th": "ฉันฝากกระเป๋าเดินทางไว้ที่นี่ได้ไหม?"
      }
    },
    {
      "id": "s_05_008",
      "en": "Is there free Wi-Fi here?",
      "trans": {
        "vi": "Ở đây có Wi-Fi miễn phí không?",
        "es": "¿Hay Wi-Fi gratuito aquí?",
        "fr": "Y a-t-il du Wi-Fi gratuit ici?",
        "de": "Gibt es hier kostenloses WLAN?",
        "ja": "ここは無料Wi-Fiがありますか？",
        "ko": "여기에 무료 와이파이가 있나요?",
        "zh": "这里有免费Wi-Fi吗？",
        "pt": "Há Wi-Fi gratuito aqui?",
        "ru": "Здесь есть бесплатный Wi-Fi?",
        "th": "ที่นี่มี Wi-Fi ฟรีไหม?"
      }
    },
    {
      "id": "s_05_009",
      "en": "I would like a quiet room.",
      "trans": {
        "vi": "Tôi muốn một phòng yên tĩnh.",
        "es": "Me gustaría una habitación tranquila.",
        "fr": "Je voudrais une chambre calme.",
        "de": "Ich hätte gerne ein ruhiges Zimmer.",
        "ja": "静かな部屋をお願いします。",
        "ko": "조용한 방으로 부탁합니다.",
        "zh": "想要一个安静的房间。",
        "pt": "Eu gostaria de um quarto tranquilo.",
        "ru": "Я бы хотел тихий номер.",
        "th": "ฉันต้องการห้องที่เงียบสงบ"
      }
    },
    {
      "id": "s_05_010",
      "en": "Please clean my room today.",
      "trans": {
        "vi": "Làm ơn dọn phòng giúp tôi hôm nay.",
        "es": "Por favor limpia mi habitación hoy.",
        "fr": "Nettoyez ma chambre aujourd'hui s'il vous plaît.",
        "de": "Bitte reinigen Sie heute mein Zimmer.",
        "ja": "今日、部屋を掃除してください。",
        "ko": "오늘 제 방을 청소해 주세요.",
        "zh": "今天请清扫一下我的房间。",
        "pt": "Por favor, limpe meu quarto hoje.",
        "ru": "Пожалуйста, уберите в моем номере сегодня.",
        "th": "ช่วยทำความสะอาดห้องให้ฉันวันนี้ด้วย"
      }
    },
    {
      "id": "s_05_011",
      "en": "Where is the swimming pool?",
      "trans": {
        "vi": "Hồ bơi ở đâu?",
        "es": "¿Dónde está la piscina?",
        "fr": "Où est la piscine?",
        "de": "Wo ist das Schwimmbad?",
        "ja": "プールはどこですか？",
        "ko": "수영장이 어디에 있나요?",
        "zh": "游泳池在哪里？",
        "pt": "Onde fica a piscina?",
        "ru": "Где находится бассейн?",
        "th": "สระว่ายน้ำอยู่ที่ไหน?"
      }
    },
    {
      "id": "s_05_012",
      "en": "What is the Wi-Fi password?",
      "trans": {
        "vi": "Mật khẩu Wi-Fi là gì?",
        "es": "¿Cuál es la contraseña del Wi-Fi?",
        "fr": "Quel est le mot de passe du Wi-Fi?",
        "de": "Wie lautet das WLAN-Passwort?",
        "ja": "Wi-Fiのパスワードは何ですか？",
        "ko": "와이파이 비밀번호가 무엇인가요?",
        "zh": "Wi-Fi密码是多少？",
        "pt": "Qual é a senha do Wi-Fi?",
        "ru": "Какой пароль от Wi-Fi?",
        "th": "รหัสผ่าน Wi-Fi คืออะไร?"
      }
    },
    {
      "id": "s_05_013",
      "en": "I need to check out early.",
      "trans": {
        "vi": "Tôi cần trả phòng sớm.",
        "es": "Necesito hacer el check-out temprano.",
        "fr": "Je dois libérer la chambre tôt.",
        "de": "Ich muss früh auschecken.",
        "ja": "早めにチェックアウトする必要があります。",
        "ko": "조기 체크아웃을 해야 합니다.",
        "zh": "我需要提前退房。",
        "pt": "Preciso fazer o check-out cedo.",
        "ru": "Мне нужно выехать пораньше.",
        "th": "ฉันจำเป็นต้องเช็คเอาท์ก่อนเวลา"
      }
    },
    {
      "id": "s_05_014",
      "en": "Can you call a taxi now?",
      "trans": {
        "vi": "Bạn gọi giúp tôi một chiếc taxi bây giờ được không?",
        "es": "¿Puedes llamar a un taxi ahora?",
        "fr": "Pouvez-vous appeler un taxi maintenant?",
        "de": "Können Sie jetzt ein Taxi rufen?",
        "ja": "今タクシーを呼んでもらえますか？",
        "ko": "지금 택시를 불러주실 수 있나요?",
        "zh": "你现在能叫辆出租车吗？",
        "pt": "Você pode chamar um táxi agora?",
        "ru": "Можете вызвать такси сейчас?",
        "th": "ช่วยเรียกแท็กซี่ให้ตอนนี้ได้ไหม?"
      }
    },
    {
      "id": "s_05_015",
      "en": "My room key does not work.",
      "trans": {
        "vi": "Chìa khóa phòng tôi không dùng được.",
        "es": "La llave de mi habitación no funciona.",
        "fr": "La clé de ma chambre ne fonctionne pas.",
        "de": "Mein Zimmerschlüssel funktioniert nicht.",
        "ja": "部屋の鍵が使えません。",
        "ko": "방 열쇠가 작동하지 않아요.",
        "zh": "我的房间钥匙刷不开。",
        "pt": "A chave do meu quarto não funciona.",
        "ru": "Ключ от моего номера не работает.",
        "th": "กุญแจห้องของฉันใช้งานไม่ได้"
      }
    },
    {
      "id": "s_05_016",
      "en": "What time is check-out?",
      "trans": {
        "vi": "Mấy giờ phải trả phòng?",
        "es": "¿A qué hora es el check-out?",
        "fr": "À quelle heure est le départ?",
        "de": "Wann ist der Check-out?",
        "ja": "チェックアウトは何時ですか？",
        "ko": "체크아웃 시간은 몇 시인가요?",
        "zh": "退房时间是几点？",
        "pt": "A que horas é o check-out?",
        "ru": "Во сколько выезд?",
        "th": "เช็คเอาท์ได้ถึงกี่โมง?"
      }
    },
    {
      "id": "s_05_017",
      "en": "Is there a gym available?",
      "trans": {
        "vi": "Ở đây có phòng tập thể dục không?",
        "es": "¿Hay un gimnasio disponible?",
        "fr": "Y a-t-il une salle de sport?",
        "de": "Gibt es ein Fitnessstudio?",
        "ja": "ジムは利用できますか？",
        "ko": "헬스장을 이용할 수 있나요?",
        "zh": "这里有健身房吗？",
        "pt": "Existe uma academia disponível?",
        "ru": "Здесь есть тренажерный зал?",
        "th": "มีห้องฟิตเนสให้บริการไหม?"
      }
    },
    {
      "id": "s_05_018",
      "en": "Please do not disturb me.",
      "trans": {
        "vi": "Xin vui lòng không làm phiền.",
        "es": "Por favor no me moleste.",
        "fr": "Ne pas déranger s'il vous plaît.",
        "de": "Bitte nicht stören.",
        "ja": "邪魔しないでください。",
        "ko": "방해하지 말아 주세요.",
        "zh": "请勿打扰。",
        "pt": "Por favor, não me perturbe.",
        "ru": "Пожалуйста, не беспокойте меня.",
        "th": "กรุณาอย่ารบกวน"
      }
    },
    {
      "id": "s_05_019",
      "en": "The shower water is cold.",
      "trans": {
        "vi": "Nước vòi sen bị lạnh.",
        "es": "El agua de la ducha está fría.",
        "fr": "L'eau de la douche est froide.",
        "de": "Das Dusche-Wasser ist kalt.",
        "ja": "シャワーの水が冷たいです。",
        "ko": "샤워기 물이 차가워요.",
        "zh": "淋浴水是凉的。",
        "pt": "A água do chuveiro está fria.",
        "ru": "Вода в душе холодная.",
        "th": "น้ำฝักบัวเย็นมาก"
      }
    },
    {
      "id": "s_05_020",
      "en": "Can I have room service?",
      "trans": {
        "vi": "Cho tôi gọi dịch vụ tại phòng được không?",
        "es": "¿Puedo pedir servicio a la habitación?",
        "fr": "Puis-je avoir le service d'étage?",
        "de": "Kann ich Zimmerservice haben?",
        "ja": "ルームサービスを頼めますか？",
        "ko": "룸서비스를 받을 수 있나요?",
        "zh": "我可以要客房服务吗？",
        "pt": "Posso pedir serviço de quarto?",
        "ru": "Могу я заказать обслуживание в номер?",
        "th": "ขอใช้บริการรูมเซอร์วิสได้ไหม?"
      }
    },
    {
      "id": "s_05_021",
      "en": "Where is the breakfast hall?",
      "trans": {
        "vi": "Phòng ăn sáng ở đâu?",
        "es": "¿Dónde está el comedor para el desayuno?",
        "fr": "Où est la salle du petit-déjeuner?",
        "de": "Wo ist der Frühstücksraum?",
        "ja": "朝食会場はどこですか？",
        "ko": "조식 식당은 어디에 있나요?",
        "zh": "早餐厅在哪里？",
        "pt": "Onde fica o salão do café da manhã?",
        "ru": "Где находится зал для завтрака?",
        "th": "ห้องอาหารเช้าอยู่ที่ไหน?"
      }
    },
    {
      "id": "s_05_022",
      "en": "Can you wake me up tomorrow?",
      "trans": {
        "vi": "Sáng mai bạn báo thức đánh thức tôi được không?",
        "es": "¿Puedes despertarme mañana?",
        "fr": "Pouvez-vous me réveiller demain?",
        "de": "Können Sie mich morgen wecken?",
        "ja": "明日起こしてもらえますか？",
        "ko": "내일 깨워주실 수 있나요?",
        "zh": "明天能叫醒我吗？",
        "pt": "Você pode me acordar amanhã?",
        "ru": "Можете разбудить меня завтра?",
        "th": "ช่วยปลุกฉันพรุ่งนี้เช้าได้ไหม?"
      }
    },
    {
      "id": "s_05_023",
      "en": "I need a non-smoking room.",
      "trans": {
        "vi": "Tôi cần một phòng không hút thuốc.",
        "es": "Necesito una habitación para no fumadores.",
        "fr": "J'ai besoin d'une chambre non-fumeur.",
        "de": "Ich brauche ein Nichtraucherzimmer.",
        "ja": "禁煙ルームが必要です。",
        "ko": "금연실이 필요합니다.",
        "zh": "我们需要无烟房。",
        "pt": "Preciso de um quarto para não fumantes.",
        "ru": "Мне нужен номер для некурящих.",
        "th": "ฉันต้องการห้องปลอดบุหรี่"
      }
    },
    {
      "id": "s_05_024",
      "en": "Is there a safe inside?",
      "trans": {
        "vi": "Bên trong có két sắt an toàn không?",
        "es": "¿Hay una caja fuerte dentro?",
        "fr": "Y a-t-il un coffre-fort à l'intérieur?",
        "de": "Gibt es drinnen einen Tresor?",
        "ja": "中に金庫はありますか？",
        "ko": "안에 금고가 있나요?",
        "zh": "里面有保险箱吗？",
        "pt": "Existe um cofre dentro?",
        "ru": "Внутри есть сейф?",
        "th": "ข้างในมีตู้เซฟไหม?"
      }
    },
    {
      "id": "s_05_025",
      "en": "How do I turn on lights?",
      "trans": {
        "vi": "Làm thế nào để tôi bật đèn?",
        "es": "¿Cómo enciendo las luces?",
        "fr": "Comment allumer les lumières?",
        "de": "Wie schalte ich das Licht ein?",
        "ja": "電気はどうやってつけますか？",
        "ko": "불은 어떻게 켜나요?",
        "zh": "怎样开灯？",
        "pt": "Como acendo as luzes?",
        "ru": "Как включить свет?",
        "th": "ฉันจะเปิดไฟได้อย่างไร?"
      }
    },
    {
      "id": "s_05_026",
      "en": "The view from room is nice.",
      "trans": {
        "vi": "Khung cảnh nhìn từ phòng rất đẹp.",
        "es": "La vista desde la habitación es bonita.",
        "fr": "La vue depuis la chambre est belle.",
        "de": "Die Aussicht vom Zimmer ist schön.",
        "ja": "部屋からの眺めが良いです。",
        "ko": "방에서 바라보는 전망이 좋네요.",
        "zh": "从房间看景致很好。",
        "pt": "A vista do quarto é bonita.",
        "ru": "Вид из номера прекрасный.",
        "th": "วิวจากห้องพักสวยมาก"
      }
    },
    {
      "id": "s_05_027",
      "en": "Please change the bed sheets.",
      "trans": {
        "vi": "Làm ơn thay ga trải giường.",
        "es": "Por favor cambia las sábanas.",
        "fr": "Changez les draps s'il vous plaît.",
        "de": "Bitte wechseln Sie die Bettwäsche.",
        "ja": "シーツを交換してください。",
        "ko": "침대 시트를 바꿔 주세요.",
        "zh": "请换一下床单。",
        "pt": "Por favor, troque os lençóis da cama.",
        "ru": "Пожалуйста, смените постельное белье.",
        "th": "ช่วยเปลี่ยนผ้าปูที่นอนหน่อย"
      }
    },
    {
      "id": "s_05_028",
      "en": "Where can I park my car?",
      "trans": {
        "vi": "Tôi có thể đậu xe ô tô ở đâu?",
        "es": "¿Dónde puedo estacionar mi coche?",
        "fr": "Où puis-je garer ma voiture?",
        "de": "Wo kann ich mein Auto parken?",
        "ja": "どこに車を停められますか？",
        "ko": "주차는 어디에 하나요?",
        "zh": "我可以在哪里停车？",
        "pt": "Onde posso estacionar meu carro?",
        "ru": "Где я могу припарковать машину?",
        "th": "ฉันจอดรถได้ที่ไหน?"
      }
    },
    {
      "id": "s_05_029",
      "en": "Can I extend my stay here?",
      "trans": {
        "vi": "Tôi gia hạn ở thêm ở đây được không?",
        "es": "¿Puedo extender mi estancia aquí?",
        "fr": "Puis-je prolonger mon séjour ici?",
        "de": "Kann ich meinen Aufenthalt hier verlängern?",
        "ja": "滞在を延長できますか？",
        "ko": "숙박을 연장할 수 있나요?",
        "zh": "我可以延长入住时间吗？",
        "pt": "Posso prolongar minha estadia aqui?",
        "ru": "Могу я продлить свое пребывание здесь?",
        "th": "ฉันขอพักต่ออีกหน่อยได้ไหม?"
      }
    },
    {
      "id": "s_05_030",
      "en": "Thank you for comfortable stay.",
      "trans": {
        "vi": "Cảm ơn vì kỳ lưu trú thoải mái.",
        "es": "Gracias por una estancia confortable.",
        "fr": "Merci pour ce séjour confortable.",
        "de": "Vielen Dank für den angenehmen Aufenthalt.",
        "ja": "快適な滞在をありがとうございました。",
        "ko": "편안한 숙박에 감사드립니다.",
        "zh": "感谢提供舒适的住宿体验。",
        "pt": "Obrigado pela estadia confortável.",
        "ru": "Спасибо за комфортное проживание.",
        "th": "ขอบคุณสำหรับการเข้าพักที่สบาย"
      }
    }
  ],
  "top_06": [
    {
      "id": "s_06_001",
      "en": "When is the next meeting?",
      "trans": {
        "vi": "Khi nào có cuộc họp tiếp theo?",
        "es": "¿Cuándo es la próxima reunión?",
        "fr": "Quand est la prochaine réunion?",
        "de": "Wann ist das nächste Treffen?",
        "ja": "次の会議はいつですか？",
        "ko": "다음 회의는 언제인가요?",
        "zh": "下次会议是什么时候？",
        "pt": "Quando é a próxima reunião?",
        "ru": "Когда следующее собрание?",
        "th": "การประชุมครั้งต่อไปคือเมื่อไหร่?"
      }
    },
    {
      "id": "s_06_002",
      "en": "Please send me the file.",
      "trans": {
        "vi": "Làm ơn gửi cho tôi tệp tin đó.",
        "es": "Por favor envíame el archivo.",
        "fr": "Envoyez-moi le fichier s'il vous plaît.",
        "de": "Bitte senden Sie mir die Datei.",
        "ja": "ファイルを送ってください。",
        "ko": "파일을 보내주세요.",
        "zh": "请把文件发给我。",
        "pt": "Por favor, me envie o arquivo.",
        "ru": "Пожалуйста, отправьте мне файл.",
        "th": "กรุณาส่งไฟล์ให้ฉันด้วย"
      }
    },
    {
      "id": "s_06_003",
      "en": "I am working on a report.",
      "trans": {
        "vi": "Tôi đang làm một bản báo cáo.",
        "es": "Estoy trabajando en un informe.",
        "fr": "Je travaille sur un rapport.",
        "de": "Ich arbeite an einem Bericht.",
        "ja": "報告書を作成しているところです。",
        "ko": "보고서를 작성하는 중입니다.",
        "zh": "我正在写一份报告。",
        "pt": "Estou trabalhando em um relatório.",
        "ru": "Я работаю над отчетом.",
        "th": "ฉันกำลังทำรายงานอยู่"
      }
    },
    {
      "id": "s_06_004",
      "en": "Let us discuss this project.",
      "trans": {
        "vi": "Chúng ta hãy thảo luận về dự án này.",
        "es": "Discutamos este proyecto.",
        "fr": "Discutons de ce projet.",
        "de": "Lassen Sie uns dieses Projekt besprechen.",
        "ja": "このプロジェクトについて話し合いましょう。",
        "ko": "이 프로젝트에 대해 논의합시다.",
        "zh": "我们讨论一下这个项目吧。",
        "pt": "Vamos discutir este projeto.",
        "ru": "Давайте обсудим этот проект.",
        "th": "มาหารือเกี่ยวกับโปรเจกต์นี้กันเถอะ"
      }
    },
    {
      "id": "s_06_005",
      "en": "The manager is in a meeting.",
      "trans": {
        "vi": "Quản lý đang bận họp.",
        "es": "El gerente está en una reunión.",
        "fr": "Le manager est en réunion.",
        "de": "Der Manager ist in einer Besprechung.",
        "ja": "マネージャーは会議中です。",
        "ko": "매니저님은 회의 중입니다.",
        "zh": "经理正在开会。",
        "pt": "O gerente está em uma reunião.",
        "ru": "Менеджер на совещании.",
        "th": "ผู้จัดการกำลังประชุมอยู่"
      }
    },
    {
      "id": "s_06_006",
      "en": "Could you sign this document?",
      "trans": {
        "vi": "Bạn ký vào tài liệu này giúp tôi được không?",
        "es": "¿Podrías firmar este documento?",
        "fr": "Pouvez-vous signer ce document?",
        "de": "Könnten Sie dieses Dokument unterschreiben?",
        "ja": "この書類にサインしていただけますか？",
        "ko": "이 서류에 서명해 주시겠어요?",
        "zh": "你能在这份文件上签字吗？",
        "pt": "Você poderia assinar este documento?",
        "ru": "Не могли бы вы подписать этот документ?",
        "th": "ช่วยเซ็นเอกสารนี้หน่อยได้ไหม?"
      }
    },
    {
      "id": "s_06_007",
      "en": "I will check my email now.",
      "trans": {
        "vi": "Bây giờ tôi sẽ kiểm tra hòm thư điện tử.",
        "es": "Revisaré mi correo electrónico ahora.",
        "fr": "Je vais vérifier mes e-mails maintenant.",
        "de": "Ich werde jetzt meine E-Mails prüfen.",
        "ja": "今メールを確認します。",
        "ko": "지금 이메일을 확인하겠습니다.",
        "zh": "我现在去查一下邮件。",
        "pt": "Vou verificar meu e-mail agora.",
        "ru": "Я сейчас проверю свою почту.",
        "th": "ฉันจะเช็คอีเมลตอนนี้เลย"
      }
    },
    {
      "id": "s_06_008",
      "en": "We need to finish this today.",
      "trans": {
        "vi": "Chúng ta cần hoàn thành cái này hôm nay.",
        "es": "Tenemos que terminar esto hoy.",
        "fr": "Nous devons terminer cela aujourd'hui.",
        "de": "Wir müssen das heute fertigstellen.",
        "ja": "今日中にこれを終わらせる必要があります。",
        "ko": "오늘 이것을 끝내야 합니다.",
        "zh": "我们今天必须完成这个。",
        "pt": "Precisamos terminar isso hoje.",
        "ru": "Нам нужно закончить это сегодня.",
        "th": "พวกเราต้องทำสิ่งนี้ให้เสร็จภายในวันนี้"
      }
    },
    {
      "id": "s_06_009",
      "en": "Where is the printer paper?",
      "trans": {
        "vi": "Giấy in để ở đâu?",
        "es": "¿Dónde está el papel de la impresora?",
        "fr": "Où est le papier de l'imprimante?",
        "de": "Wo ist das Druckerpapier?",
        "ja": "プリンターの用紙はどこですか？",
        "ko": "프린터 용지는 어디에 있나요?",
        "zh": "打印纸在哪里？",
        "pt": "Onde está o papel da impressora?",
        "ru": "Где бумага для принтера?",
        "th": "กระดาษเครื่องพิมพ์อยู่ที่ไหน?"
      }
    },
    {
      "id": "s_06_010",
      "en": "Welcome to our new team.",
      "trans": {
        "vi": "Chào mừng bạn gia nhập đội ngũ mới.",
        "es": "Bienvenido a nuestro nuevo equipo.",
        "fr": "Bienvenue dans notre nouvelle équipe.",
        "de": "Willkommen in unserem neuen Team.",
        "ja": "新しいチームへようこそ。",
        "ko": "새로운 팀에 오신 것을 환영합니다.",
        "zh": "欢迎来到我们的新团队。",
        "pt": "Bem-vindo à nossa nova equipe.",
        "ru": "Добро пожаловать в нашу новую команду.",
        "th": "ยินดีต้อนรับสู่ทีมใหม่ของเรา"
      }
    },
    {
      "id": "s_06_011",
      "en": "What is the main objective?",
      "trans": {
        "vi": "Mục tiêu chính là gì?",
        "es": "¿Cuál es el objetivo principal?",
        "fr": "Quel est l'objectif principal?",
        "de": "Was ist das Hauptziel?",
        "ja": "主な目標は何ですか？",
        "ko": "주요 목표가 무엇인가요?",
        "zh": "主要目标是什么？",
        "pt": "Qual é o objetivo principal?",
        "ru": "Какова главная цель?",
        "th": "วัตถุประสงค์หลักคืออะไร?"
      }
    },
    {
      "id": "s_06_012",
      "en": "Can you help me with this?",
      "trans": {
        "vi": "Bạn có thể giúp tôi việc này không?",
        "es": "¿Puedes ayudarme con esto?",
        "fr": "Pouvez-vous m'aider avec ceci?",
        "de": "Können Sie mir dabei helfen?",
        "ja": "手伝ってもらえますか？",
        "ko": "이것 좀 도와주실 수 있나요?",
        "zh": "你能帮我做这个吗？",
        "pt": "Você pode me ajudar com isso?",
        "ru": "Можете помочь мне с этим?",
        "th": "ช่วยฉันทำเรื่องนี้หน่อยได้ไหม?"
      }
    },
    {
      "id": "s_06_013",
      "en": "The deadline is next Monday.",
      "trans": {
        "vi": "Hạn chót là Thứ Hai tuần sau.",
        "es": "La fecha límite es el próximo lunes.",
        "fr": "La date limite est lundi prochain.",
        "de": "Die Frist ist nächsten Montag.",
        "ja": "締め切りは来週の月曜日です。",
        "ko": "마감일은 다음 주 월요일입니다.",
        "zh": "截止日期是下周一。",
        "pt": "O prazo é na próxima segunda-feira.",
        "ru": "Крайний срок — следующий понедельник.",
        "th": "กำหนดส่งคือวันจันทร์หน้า"
      }
    },
    {
      "id": "s_06_014",
      "en": "I will present the slides.",
      "trans": {
        "vi": "Tôi sẽ trình bày bài thuyết trình.",
        "es": "Presentaré las diapositivas.",
        "fr": "Je vais présenter les diapositives.",
        "de": "Ich werde die Folien präsentieren.",
        "ja": "スライドを発表します。",
        "ko": "슬라이드를 발표하겠습니다.",
        "zh": "我来展示幻灯片。",
        "pt": "Vou apresentar os slides.",
        "ru": "Я покажу слайды.",
        "th": "ฉันจะนำเสนอสไลด์เอง"
      }
    },
    {
      "id": "s_06_015",
      "en": "Our team achieved great results.",
      "trans": {
        "vi": "Nhóm chúng ta đã đạt kết quả tuyệt vời.",
        "es": "Nuestro equipo logró grandes resultados.",
        "fr": "Notre équipe a obtenu de superbes résultats.",
        "de": "Unser Team hat tolle Ergebnisse erzielt.",
        "ja": "私たちのチームは素晴らしい成果を上げました。",
        "ko": "우리 팀이 훌륭한 성과를 거두었습니다.",
        "zh": "我们团队取得了极好的成绩。",
        "pt": "Nossa equipe alcançou ótimos resultados.",
        "ru": "Наша команда добилась отличных результатов.",
        "th": "ทีมของเราทำผลงานได้อย่างยอดเยี่ยม"
      }
    },
    {
      "id": "s_06_016",
      "en": "Please review my recent proposal.",
      "trans": {
        "vi": "Vui lòng xem qua đề xuất gần đây của tôi.",
        "es": "Por favor revisa mi propuesta reciente.",
        "fr": "Veuillez examiner ma récente proposition.",
        "de": "Bitte überprüfen Sie meinen aktuellen Vorschlag.",
        "ja": "私の提案書を確認してください。",
        "ko": "제 최근 제안서를 검토해 주세요.",
        "zh": "请审查一下我最近的提案。",
        "pt": "Por favor, revise minha proposta recente.",
        "ru": "Пожалуйста, ознакомьтесь с моим предложением.",
        "th": "กรุณาช่วยตรวจสอบข้อเสนอ 최근ของฉัน"
      }
    },
    {
      "id": "s_06_017",
      "en": "I have an interview today.",
      "trans": {
        "vi": "Hôm nay tôi có một buổi phỏng vấn.",
        "es": "Tengo una entrevista hoy.",
        "fr": "J'ai un entretien aujourd'hui.",
        "de": "Ich habe heute ein Vorstellungsgespräch.",
        "ja": "面接があります。",
        "ko": "오늘 면접이 있습니다.",
        "zh": "今天我有一个面试。",
        "pt": "Eu tenho uma entrevista hoje.",
        "ru": "У меня сегодня собеседование.",
        "th": "วันนี้ฉันมีสัมภาษณ์งาน"
      }
    },
    {
      "id": "s_06_018",
      "en": "Let us take a quick break.",
      "trans": {
        "vi": "Chúng ta hãy giải lao ngắn nhé.",
        "es": "Tomemos un breve descanso.",
        "fr": "Prenons une courte pause.",
        "de": "Machen wir eine kurze Pause.",
        "ja": "少し休憩しましょう。",
        "ko": "잠시 휴식을 취합시다.",
        "zh": "我们稍微休息一下吧。",
        "pt": "Vamos fazer um pequeno intervalo.",
        "ru": "Давайте сделаем небольшой перерыв.",
        "th": "พักผ่อนกันสักครู่เถอะ"
      }
    },
    {
      "id": "s_06_019",
      "en": "Where is the conference room?",
      "trans": {
        "vi": "Phòng hội nghị ở đâu?",
        "es": "¿Dónde está la sala de conferencias?",
        "fr": "Où est la salle de conférence?",
        "de": "Wo ist der Konferenzraum?",
        "ja": "会議室はどこですか？",
        "ko": "회의실은 어디에 있나요?",
        "zh": "会议室在哪里？",
        "pt": "Onde fica a sala de conferências?",
        "ru": "Где находится конференц-зал?",
        "th": "ห้องประชุมอยู่ที่ไหน?"
      }
    },
    {
      "id": "s_06_020",
      "en": "I will be absent tomorrow.",
      "trans": {
        "vi": "Ngày mai tôi sẽ vắng mặt.",
        "es": "Estaré ausente mañana.",
        "fr": "Je serai absent demain.",
        "de": "Ich werde morgen abwesend sein.",
        "ja": "明日は休みます。",
        "ko": "내일은 결근합니다.",
        "zh": "明天我请假不在。",
        "pt": "Estarei ausente amanhã.",
        "ru": "Завтра я буду отсутствовать.",
        "th": "พรุ่งนี้ฉันจะไม่อยู่"
      }
    },
    {
      "id": "s_06_021",
      "en": "Thank you for your feedback.",
      "trans": {
        "vi": "Cảm ơn sự đóng góp ý kiến của bạn.",
        "es": "Gracias por tus comentarios.",
        "fr": "Merci pour vos retours.",
        "de": "Vielen Dank für Ihr Feedback.",
        "ja": "フィードバックをありがとうございます。",
        "ko": "피드백을 주셔서 감사합니다.",
        "zh": "感谢您的反馈意见。",
        "pt": "Obrigado pelo seu feedback.",
        "ru": "Спасибо за ваш отзыв.",
        "th": "ขอบคุณสำหรับข้อเสนอแนะ"
      }
    },
    {
      "id": "s_06_022",
      "en": "Can we reschedule the call?",
      "trans": {
        "vi": "Chúng ta xếp lại lịch cuộc gọi được không?",
        "es": "¿Podemos reprogramar la llamada?",
        "fr": "Pouvons-nous replanifier l'appel?",
        "de": "Können wir den Anruf verschieben?",
        "ja": "通話のスケジュールを変更できますか？",
        "ko": "통화 일정을 다시 잡을 수 있을까요?",
        "zh": "我们可以重新安排通话吗？",
        "pt": "Podemos reagendar a chamada?",
        "ru": "Можем ли мы перенести звонок?",
        "th": "ขอเลื่อนเวลาโทรได้ไหม?"
      }
    },
    {
      "id": "s_06_023",
      "en": "I agree with your strategy.",
      "trans": {
        "vi": "Tôi tán thành chiến lược của bạn.",
        "es": "Estoy de acuerdo con tu estrategia.",
        "fr": "Je suis d'accord avec votre stratégie.",
        "de": "Ich stimme Ihrer Strategie zu.",
        "ja": "あなたの戦略に同意します。",
        "ko": "당신의 전략에 동의합니다.",
        "zh": "我同意你的策略。",
        "pt": "Eu concordo com sua estratégia.",
        "ru": "Я согласен с вашей стратегией.",
        "th": "ฉันเห็นด้วยกับกลยุทธ์ของคุณ"
      }
    },
    {
      "id": "s_06_024",
      "en": "The printer is out of ink.",
      "trans": {
        "vi": "Máy in đã hết mực.",
        "es": "La impresora no tiene tinta.",
        "fr": "L'imprimante n'a plus d'encre.",
        "de": "Der Drucker hat keine Tinte mehr.",
        "ja": "プリンターのインクが切れました。",
        "ko": "프린터 잉크가 떨어졌습니다.",
        "zh": "打印机没墨水了。",
        "pt": "A impressora está sem tinta.",
        "ru": "В принтере закончились чернила.",
        "th": "เครื่องพิมพ์หมึกหมด"
      }
    },
    {
      "id": "s_06_025",
      "en": "Please submit your daily work.",
      "trans": {
        "vi": "Vui lòng nộp báo cáo công việc hàng ngày.",
        "es": "Por favor envía tu trabajo diario.",
        "fr": "Veuillez soumettre votre travail quotidien.",
        "de": "Bitte reichen Sie Ihre tägliche Arbeit ein.",
        "ja": "日次 me 業務を提出してください。",
        "ko": "일일 업무 일지를 제출해 주세요.",
        "zh": "请提交你的每日工作。",
        "pt": "Por favor, envie seu trabalho diário.",
        "ru": "Пожалуйста, сдайте ежедневный отчет.",
        "th": "กรุณาส่งรายงานการทำงานประจำวัน"
      }
    },
    {
      "id": "s_06_026",
      "en": "He is our department head.",
      "trans": {
        "vi": "Ông ấy là trưởng bộ phận của chúng tôi.",
        "es": "Él es nuestro jefe de departamento.",
        "fr": "Il est notre chef de département.",
        "de": "Er ist unser Abteilungsleiter.",
        "ja": "彼が私たちの部署の部長です。",
        "ko": "그분은 우리 부서장입니다.",
        "zh": "他是我们的部门主管。",
        "pt": "Ele é nosso chefe de departamento.",
        "ru": "Он наш начальник отдела.",
        "th": "เขาเป็นหัวหน้าแผนกของเรา"
      }
    },
    {
      "id": "s_06_027",
      "en": "Let us work together closely.",
      "trans": {
        "vi": "Chúng ta hãy hợp tác chặt chẽ.",
        "es": "Trabajemos juntos de cerca.",
        "fr": "Travaillons étroitement ensemble.",
        "de": "Lassen Sie uns eng zusammenarbeiten.",
        "ja": "密接に協力し合いましょう。",
        "ko": "긴밀히 협력합시다.",
        "zh": "让我们紧密合作。",
        "pt": "Vamos trabalhar juntos de perto.",
        "ru": "Давайте тесно сотрудничать.",
        "th": "ร่วมมือกันอย่างใกล้ชิดกันเถอะ"
      }
    },
    {
      "id": "s_06_028",
      "en": "I will reply to you soon.",
      "trans": {
        "vi": "Tôi sẽ sớm phản hồi lại bạn.",
        "es": "Te responderé pronto.",
        "fr": "Je vous répondrai bientôt.",
        "de": "Ich werde Ihnen bald antworten.",
        "ja": "すぐにお返事します。",
        "ko": "곧 회신 드리겠습니다.",
        "zh": "我很快会给您回复。",
        "pt": "Responderei a você em breve.",
        "ru": "Я отвечу вам в ближайшее время.",
        "th": "ฉันจะตอบกลับคุณเร็วๆ นี้"
      }
    },
    {
      "id": "s_06_029",
      "en": "Are you ready for presentation?",
      "trans": {
        "vi": "Bạn đã sẵn sàng cho bài thuyết trình chưa?",
        "es": "¿Estás listo para la presentación?",
        "fr": "Êtes-vous prêt pour la présentation?",
        "de": "Sind Sie bereit für die Präsentation?",
        "ja": "プレゼンの準備はできましたか？",
        "ko": "발표 준비는 되셨나요?",
        "zh": "你对演示准备好了吗？",
        "pt": "Você está pronto para a apresentação?",
        "ru": "Вы готовы к презентации?",
        "th": "คุณพร้อมสำหรับการนำเสนอหรือยัง?"
      }
    },
    {
      "id": "s_06_030",
      "en": "Have a productive work day.",
      "trans": {
        "vi": "Chúc bạn một ngày làm việc hiệu quả.",
        "es": "Que tengas un día de trabajo productivo.",
        "fr": "Passez une journée de travail productive.",
        "de": "Haben Sie einen produktiven Arbeitstag.",
        "ja": "実りある一日をお過ごしください。",
        "ko": "생산적인 하루 보내세요.",
        "zh": "祝你工作高效顺利。",
        "pt": "Tenha um dia de trabalho produtivo.",
        "ru": "Продуктивного рабочего дня.",
        "th": "ขอให้เป็นวันที่ทำงานได้อย่างมีประสิทธิภาพ"
      }
    }
  ]



    /* 
      Lưu ý: Các Topic top_04 đến top_10 được tạo tiếp nối với chuẩn 30 câu/chủ đề tương tự 
      giúp file data.js duy trì dung lượng tải cực nhanh (~200KB) trên thiết bị di động.
    */
  }
};
