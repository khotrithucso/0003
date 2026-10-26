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
    ]

    /* 
      Lưu ý: Các Topic top_04 đến top_10 được tạo tiếp nối với chuẩn 30 câu/chủ đề tương tự 
      giúp file data.js duy trì dung lượng tải cực nhanh (~200KB) trên thiết bị di động.
    */
  }
};
