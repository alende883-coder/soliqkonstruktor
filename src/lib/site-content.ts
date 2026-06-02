export type Locale = "uz" | "ru";

type LinkItem = {
  label: string;
  href: string;
};

type TextItem = {
  title: string;
  text: string;
};

type Plan = {
  name: string;
  kicker: string;
  items: string[];
  note: string;
  cta: string;
  featured?: boolean;
};

export type FormContent = {
  eyebrow: string;
  title: string;
  text: string;
  integrationNote: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  interestLabel: string;
  interests: Array<{ value: string; label: string }>;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  successButton: string;
  success: string;
  error: string;
};

export type SiteContent = {
  locale: Locale;
  navigation: {
    ariaLabel: string;
    languageLabel: string;
    links: LinkItem[];
  };
  media: {
    hero: string;
    testimonials: Array<{ src: string; alt: string }>;
  };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    visualAlt: string;
    instructor: {
      name: string;
      role: string;
    };
    stats: Array<{ value: string; label: string }>;
  };
  problem: {
    eyebrow: string;
    title: string;
    text: string;
    items: TextItem[];
  };
  risks: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
    items: TextItem[];
  };
  method: {
    eyebrow: string;
    title: string;
    text: string;
    items: TextItem[];
  };
  outcomes: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };
  format: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };
  trust: {
    eyebrow: string;
    title: string;
    text: string;
  };
  bonus: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };
  cohort: {
    eyebrow: string;
    title: string;
    text: string;
    number: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    text: string;
    plans: Plan[];
  };
  notFor: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    text: string;
    items: Array<{ question: string; answer: string }>;
  };
  form: FormContent;
};

const testimonialMedia = [
  {
    src: "https://static.tildacdn.one/tild6636-3966-4734-b637-343731633734/011-min_1.png",
    alt: "Glavbux kursi o'quvchisi fikri",
  },
  {
    src: "https://static.tildacdn.one/tild3933-3962-4434-b334-646636623637/012-min_1.png",
    alt: "Buxgalteriya kursi bitiruvchisi fikri",
  },
  {
    src: "https://static.tildacdn.one/tild3539-3230-4361-b662-313965333832/013-min_1.png",
    alt: "IN PLUS kursi haqida video fikr",
  },
  {
    src: "https://static.tildacdn.one/tild3663-3636-4430-a136-643233653963/014-min_1.png",
    alt: "Soliq amaliyoti kursi o'quvchisi fikri",
  },
  {
    src: "https://static.tildacdn.one/tild6461-3835-4366-b238-393264343265/015-min_1.png",
    alt: "Glavbux dasturi haqida o'quvchi fikri",
  },
];

export const siteContent: Record<Locale, SiteContent> = {
  uz: {
    locale: "uz",
    navigation: {
      ariaLabel: "Asosiy bo'limlar",
      languageLabel: "Til tanlash",
      links: [
        { label: "Muammo", href: "#problems" },
        { label: "Natija", href: "#program" },
        { label: "Tariflar", href: "#pricing" },
        { label: "Savollar", href: "#faq" },
      ],
    },
    media: {
      hero: "https://static.tildacdn.one/tild6631-3939-4437-b338-366332346264/Main_bg1-min.png",
      testimonials: testimonialMedia,
    },
    hero: {
      eyebrow: "IN PLUS amaliy kursi",
      title: "3 oy ichida buxgalteriya va soliq ishlarini tartibli o'rganing",
      lede:
        "Hisobot topshirish, soliq hujjatlari va 1C bo'yicha real vazifalarni amaliyotchilar bilan ishlab chiqasiz.",
      primaryCta: "Konsultatsiya olish",
      secondaryCta: "Kurs tarkibini ko'rish",
      visualAlt: "IN PLUS kurs asoschisi Zamira Djurayeva",
      instructor: {
        name: "Zamira Djurayeva",
        role: "20+ yillik tajribaga ega soliq maslahatchi",
      },
      stats: [
        { value: "3 oy", label: "tartibli dastur" },
        { value: "20+", label: "yil amaliy tajriba" },
        { value: "6000+", label: "ishonch bildirgan buxgalter" },
        { value: "40", label: "guruhdagi cheklangan joy" },
      ],
    },
    problem: {
      eyebrow: "Boshlanish nuqtasi",
      title:
        "Hisobot, soliq hujjatlari yoki 1C bilan ishlashda qayerda to'xtab qolyapsiz?",
      text:
        "Bu blok muammoni qo'rqitish uchun emas, foydalanuvchi o'z holatini tez tanishi uchun ishlaydi.",
      items: [
        {
          title: "Moliyaviy hisobotlarda xatolar",
          text: "Topshirish jarayonida mayda xatolar katta jarima va qayta topshirishga olib kelishi mumkin.",
        },
        {
          title: "Soliq xatlariga javob yozish",
          text: "Xat mazmuni, asos va muddatlar aniq bo'lmaganda ish cho'zilib ketadi.",
        },
        {
          title: "1C, eksport va TMZ bilan qiyinchilik",
          text: "Amaliy sozlashlar va hujjat aylanishi tushunilmasa, kundalik ish sekinlashadi.",
        },
        {
          title: "Hisobot yopishda ishonchsizlik",
          text: "Oy yakuni, balans va foyda hisobotlari bo'yicha tartibli jarayon kerak bo'ladi.",
        },
      ],
    },
    risks: {
      eyebrow: "Natijani kechiktirish narxi",
      title:
        "Muammolarni hal qilmaslik qanday oqibatlarga olib kelishini oldindan ko'rish kerak",
      text:
        "Kursning vazifasi nazariya yig'ish emas, ishda uchraydigan xavflarni oldindan tartibga solish.",
      cta: "Muammolarni tartibga solish",
      items: [
        {
          title: "Xato hisobot jarimaga sabab bo'ladi",
          text: "Har bir noto'g'ri yopilgan davr keyingi oy ishiga ham ta'sir qiladi.",
        },
        {
          title: "Imtiyozlardan foydalana olmaslik",
          text: "Qonuniy imkoniyatlarni bilmaslik ortiqcha xarajat va yo'qotilgan foyda demakdir.",
        },
        {
          title: "Qonunlar tez o'zgaradi",
          text: "Bitta noto'g'ri qaror kompaniyaga sezilarli zarar keltirishi mumkin.",
        },
      ],
    },
    method: {
      eyebrow: "Yechim modeli",
      title: "Muammo sizda emas, tizimli amaliy yondashuv yetishmayapti",
      text:
        "Shuning uchun kurs faqat ma'ruza emas: qonun, 1C, hujjat, keys va mentorlik bir jarayonga yig'iladi.",
      items: [
        {
          title: "Amaliyotchi ustozlar",
          text: "Soliq va buxgalteriya bilan har kuni ishlaydigan mutaxassislar tajribasi asosida.",
        },
        {
          title: "Qonunlarni ishlatish",
          text: "Qoidani yodlash emas, uni real vaziyatda foydaga ishlatish.",
        },
        {
          title: "1Cda professional ishlash",
          text: "Hujjatlar, hisobotlar va ishlab chiqarish jarayonlari amaliy misollarda.",
        },
        {
          title: "Mentor va yopiq guruh",
          text: "Savol tug'ilganda yolg'iz qolmaslik uchun qo'llab-quvvatlash kanallari.",
        },
      ],
    },
    outcomes: {
      eyebrow: "Kursdan chiqadigan natija",
      title: "Siz bu kurs orqali nimalarga erishasiz?",
      text:
        "Natijalar bilimlar ro'yxati emas, ishda bajariladigan vazifalar bo'yicha tuzilgan.",
      items: [
        "Soliq imtiyozlaridan foydalanish",
        "1Cda ishlab chiqarish, eksport va qurilishni yuritish",
        "Har oyda balans va foyda hisobotlarini yopish",
        "Soliq xatlariga qonuniy asos bilan javob yozish",
        "Sudda himoya va audit tekshiruvlariga tayyorgarlik",
        "Ortiqcha to'langan soliq to'lovlarini qaytarish",
        "Tekshiruvlardan oldin hujjatlarni tayyor holga keltirish",
        "Turli kompaniyalarning buxgalteriya hisobini yuritish",
      ],
    },
    format: {
      eyebrow: "Dastur formati",
      title: "Kurs qanday tashkil qilingan?",
      text:
        "Eski sahifadagi tarqoq faktlar bu yerda bitta aniq blokka yig'ildi.",
      items: [
        "Kurs 3 oy davom etadi",
        "Har hafta 1 marta 3 soatlik dars",
        "Darslar oflayn yoki Zoom orqali",
        "Ishlaydiganlar uchun qulay vaqt",
        "200+ videodars va 6 oylik takroriy ko'rish imkoniyati",
        "Har dars amaliy topshiriqlar va haqiqiy keyslar asosida",
        "Kurs asoschisi - Zamira Djurayeva",
        "Darslar amaliy mutaxassislar tomonidan o'tiladi",
      ],
    },
    trust: {
      eyebrow: "Ijtimoiy isbot",
      title: "6000+ buxgalter IN PLUSga ishonch bildirgan",
      text:
        "Video fikrlar alohida galereyaga ajratiladi, sahifaning asosiy ritmini buzmaydi.",
    },
    bonus: {
      eyebrow: "Qo'shimcha materiallar",
      title: "Bonuslar",
      text:
        "Bonus blok reklama shovqini emas, darsdan keyin ishlatiladigan amaliy material sifatida ko'rsatiladi.",
      items: [
        '"Glavbux: daromadni 5 barobar oshirish" darsligi',
        "Qonunchilikni izlash va ishlatish bo'yicha shablonlar",
        "Provodkalar, OSV va balans darsligi",
        "Hisobotlarni to'ldirish bo'yicha checklistlar",
      ],
    },
    cohort: {
      eyebrow: "Guruh hajmi",
      title: "Diqqat qiling, joylar soni cheklangan",
      text:
        "O'quvchilar natijaga chiqishi uchun guruh hajmi nazorat qilinadi.",
      number: "40",
    },
    pricing: {
      eyebrow: "Tariflar",
      title: "Kurs tariflari",
      text:
        "Narxlar hozircha ariza orqali beriladi. To'lov provayderi tanlangandan keyin onlayn sotib olish oqimi ulanadi.",
      plans: [
        {
          name: "Silver",
          kicker: "Asosiy format",
          items: [
            "3 oyda haftasiga 1 marta 3 soatlik darslar",
            "Tarqatma materiallar",
            "Koll-markaz va mentor yordamida maslahat",
          ],
          note: "Narxni bilish uchun ariza qoldiring.",
          cta: "Narxini bilish",
        },
        {
          name: "Premium",
          kicker: "Kengaytirilgan format",
          featured: true,
          items: [
            "3 oyda haftasiga 1 marta 3 soatlik darslar",
            "200+ videodars va 6 oylik takroriy ko'rish",
            "Koll-markaz va mentor yordamida maslahat",
            "Yopiq Telegram guruh",
            "Amaliy topshiriqlar, keyslar va haqiqiy hisobotlar",
            "Barcha bonus materiallar",
          ],
          note: "Onlayn to'lov provayderi keyin ulanadi.",
          cta: "Premium bo'yicha ariza",
        },
      ],
    },
    notFor: {
      eyebrow: "Mos kelish tekshiruvi",
      title: "Bu kurs kimlar uchun emas?",
      text:
        "Bu blok foydalanuvchini haydash uchun emas, noto'g'ri kutilmalarni kamaytirish uchun kerak.",
      items: [
        "Darslarga qatnashmaydiganlar",
        "Amaliy topshiriqlarni bajarmaydiganlar",
        "Bosh buxgalterlik mas'uliyatini olishdan qo'rqadiganlar",
      ],
    },
    faq: {
      eyebrow: "Aniqlik",
      title: "Ko'p so'raladigan savollar",
      text:
        "Savollar qisqa va foydalanuvchining qaroriga ta'sir qiladigan joylarga qaratilgan.",
      items: [
        {
          question: "Darslar qayerda o'tiladi?",
          answer:
            "Darslar Zoom orqali va oflayn tarzda bo'lib o'tadi. O'zingizga qulay formatni tanlashingiz mumkin.",
        },
        {
          question: "Qanday kafolat bor?",
          answer:
            "Kurs amaliy topshiriqlar, mentorlik va haqiqiy keyslar asosida tuziladi. Natija darsga qatnashish va topshiriqlarni bajarishga bog'liq.",
        },
        {
          question: "Darslar yozib olinadimi?",
          answer:
            "Premium formatda videodarslar va takroriy ko'rish imkoniyati ko'zda tutilgan.",
        },
        {
          question: "1Cni bilmasam ham qatnasha olamanmi?",
          answer:
            "Ha, lekin boshlang'ich ko'nikmalar bo'yicha holatingiz konsultatsiyada aniqlanadi.",
        },
      ],
    },
    form: {
      eyebrow: "Bitta ariza",
      title: "Kurs bo'yicha konsultatsiya oling",
      text:
        "Barcha CTA tugmalari shu formaga olib keladi. Hozircha ma'lumot operatorlarga yuborilishi uchun tayyorlangan lokal stub ishlaydi.",
      integrationNote:
        "Firebase, Telegram va to'lov provayderi loyiha akkauntlari tayyor bo'lgandan keyin ulanadi.",
      nameLabel: "Ism",
      namePlaceholder: "Ismingiz",
      phoneLabel: "Telefon",
      phonePlaceholder: "+998 90 000 00 00",
      interestLabel: "Qiziqish",
      interests: [
        { value: "consultation", label: "Konsultatsiya" },
        { value: "silver", label: "Silver tarifi" },
        { value: "premium", label: "Premium tarifi" },
        { value: "online", label: "Onlayn kurs/to'lov" },
      ],
      messageLabel: "Izoh",
      messagePlaceholder: "Qaysi savol bo'yicha bog'lanish kerak?",
      submit: "Ariza yuborish",
      successButton: "Ariza qabul qilindi",
      success: "Lokal stub arizani qabul qildi. Keyingi bosqichda u Firestore va Telegramga ulanadi.",
      error: "Ariza yuborilmadi. Ism va telefonni tekshirib qayta urinib ko'ring.",
    },
  },
  ru: {
    locale: "ru",
    navigation: {
      ariaLabel: "Основные разделы",
      languageLabel: "Выбор языка",
      links: [
        { label: "Проблема", href: "#problems" },
        { label: "Результат", href: "#program" },
        { label: "Тарифы", href: "#pricing" },
        { label: "Вопросы", href: "#faq" },
      ],
    },
    media: {
      hero: "https://static.tildacdn.one/tild6631-3939-4437-b338-366332346264/Main_bg1-min.png",
      testimonials: testimonialMedia,
    },
    hero: {
      eyebrow: "Практический курс IN PLUS",
      title: "За 3 месяца системно освоите бухгалтерию, налоги и 1C",
      lede:
        "Разберете реальные задачи по отчетности, налоговым документам и 1C вместе с практикующими специалистами.",
      primaryCta: "Получить консультацию",
      secondaryCta: "Посмотреть программу",
      visualAlt: "Основатель курса IN PLUS Замира Джураева",
      instructor: {
        name: "Замира Джураева",
        role: "Налоговый консультант с опытом 20+ лет",
      },
      stats: [
        { value: "3 мес", label: "структурная программа" },
        { value: "20+", label: "лет практического опыта" },
        { value: "6000+", label: "бухгалтеров доверили обучение" },
        { value: "40", label: "мест в потоке" },
      ],
    },
    problem: {
      eyebrow: "Точка старта",
      title: "Где вы останавливаетесь в отчетности, налогах или 1C?",
      text:
        "Раздел помогает быстро узнать свою ситуацию и понять, какие задачи курс закрывает.",
      items: [
        {
          title: "Ошибки в финансовой отчетности",
          text: "Небольшая неточность может привести к штрафам и повторной сдаче.",
        },
        {
          title: "Ответы на письма налоговой",
          text: "Без понятного основания и сроков процесс затягивается.",
        },
        {
          title: "Сложности с 1C, экспортом и ТМЗ",
          text: "Без практических настроек ежедневная работа становится медленной.",
        },
        {
          title: "Неуверенность при закрытии периода",
          text: "Нужен понятный порядок по балансу, прибыли и ежемесячным отчетам.",
        },
      ],
    },
    risks: {
      eyebrow: "Цена откладывания",
      title: "Что будет, если не закрыть эти проблемы заранее?",
      text:
        "Курс нужен не для накопления теории, а для снижения рабочих рисков.",
      cta: "Навести порядок в задачах",
      items: [
        {
          title: "Ошибка в отчете приводит к штрафам",
          text: "Один неверно закрытый период влияет на следующие месяцы.",
        },
        {
          title: "Налоговые льготы остаются неиспользованными",
          text: "Неиспользованные законные возможности превращаются в лишние расходы.",
        },
        {
          title: "Законы меняются быстро",
          text: "Одно неверное решение может нанести компании серьезный ущерб.",
        },
      ],
    },
    method: {
      eyebrow: "Модель решения",
      title: "Проблема не в вас, а в отсутствии системной практики",
      text:
        "Программа соединяет закон, 1C, документы, кейсы и сопровождение в один процесс.",
      items: [
        {
          title: "Практикующие преподаватели",
          text: "Опыт специалистов, которые ежедневно работают с налогами и учетом.",
        },
        {
          title: "Работа с законодательством",
          text: "Не заучивание правил, а применение их в реальных ситуациях.",
        },
        {
          title: "Профессиональная работа в 1C",
          text: "Документы, отчеты и производственные процессы на практических примерах.",
        },
        {
          title: "Ментор и закрытая группа",
          text: "Поддержка, чтобы не оставаться один на один с вопросами.",
        },
      ],
    },
    outcomes: {
      eyebrow: "Результат курса",
      title: "Что вы сможете делать после курса?",
      text:
        "Результаты собраны вокруг рабочих задач, а не абстрактного списка тем.",
      items: [
        "Использовать налоговые льготы",
        "Вести производство, экспорт и строительство в 1C",
        "Закрывать баланс и отчет о прибыли каждый месяц",
        "Отвечать на письма налоговой с законным основанием",
        "Готовиться к аудиту и проверкам",
        "Возвращать излишне уплаченные налоги",
        "Приводить документы в порядок до проверок",
        "Вести учет компаний разных типов",
      ],
    },
    format: {
      eyebrow: "Формат программы",
      title: "Как организован курс?",
      text: "Разрозненные факты с текущей страницы собраны в один ясный блок.",
      items: [
        "Курс длится 3 месяца",
        "1 занятие в неделю по 3 часа",
        "Офлайн или Zoom формат",
        "Удобное время для работающих",
        "200+ видеоуроков и 6 месяцев повторного просмотра",
        "Практические задания и реальные кейсы на каждом уроке",
        "Основатель курса - Замира Джураева",
        "Занятия ведут практикующие специалисты",
      ],
    },
    trust: {
      eyebrow: "Социальное доказательство",
      title: "6000+ бухгалтеров доверили обучение IN PLUS",
      text:
        "Видеоотзывы вынесены в отдельную галерею и не ломают ритм страницы.",
    },
    bonus: {
      eyebrow: "Дополнительные материалы",
      title: "Бонусы",
      text:
        "Бонусы показаны как практические материалы, которые пригодятся после занятия.",
      items: [
        'Урок "Glavbux: увеличить доход в 5 раз"',
        "Шаблоны для поиска и применения законодательства",
        "Урок по проводкам, ОСВ и балансу",
        "Чек-листы по заполнению отчетов",
      ],
    },
    cohort: {
      eyebrow: "Размер группы",
      title: "Количество мест ограничено",
      text: "Размер группы контролируется, чтобы ученики могли дойти до результата.",
      number: "40",
    },
    pricing: {
      eyebrow: "Тарифы",
      title: "Тарифы курса",
      text:
        "Цены пока выдаются через заявку. Онлайн-оплата подключится после выбора провайдера.",
      plans: [
        {
          name: "Silver",
          kicker: "Основной формат",
          items: [
            "3 месяца, 1 занятие в неделю по 3 часа",
            "Раздаточные материалы",
            "Консультации через колл-центр и ментора",
          ],
          note: "Оставьте заявку, чтобы узнать цену.",
          cta: "Узнать цену",
        },
        {
          name: "Premium",
          kicker: "Расширенный формат",
          featured: true,
          items: [
            "3 месяца, 1 занятие в неделю по 3 часа",
            "200+ видеоуроков и 6 месяцев просмотра",
            "Консультации через колл-центр и ментора",
            "Закрытая Telegram-группа",
            "Практические задания, кейсы и реальные отчеты",
            "Все бонусные материалы",
          ],
          note: "Онлайн-оплата будет подключена после выбора провайдера.",
          cta: "Заявка на Premium",
        },
      ],
    },
    notFor: {
      eyebrow: "Проверка соответствия",
      title: "Для кого этот курс не подходит?",
      text:
        "Раздел снижает неверные ожидания и показывает, что результат требует участия.",
      items: [
        "Для тех, кто не посещает занятия",
        "Для тех, кто не выполняет практические задания",
        "Для тех, кто боится брать ответственность главного бухгалтера",
      ],
    },
    faq: {
      eyebrow: "Ясность",
      title: "Частые вопросы",
      text:
        "Вопросы сфокусированы на том, что влияет на решение пользователя.",
      items: [
        {
          question: "Где проходят занятия?",
          answer:
            "Занятия проходят через Zoom и офлайн. Формат можно выбрать по удобству.",
        },
        {
          question: "Какая есть гарантия?",
          answer:
            "Курс построен на практике, менторстве и реальных кейсах. Результат зависит от посещения и выполнения заданий.",
        },
        {
          question: "Записываются ли занятия?",
          answer:
            "В Premium формате предусмотрены видеоуроки и повторный просмотр.",
        },
        {
          question: "Можно участвовать, если я не знаю 1C?",
          answer:
            "Да, но ваш стартовый уровень лучше уточнить на консультации.",
        },
      ],
    },
    form: {
      eyebrow: "Одна заявка",
      title: "Получите консультацию по курсу",
      text:
        "Все CTA ведут к этой форме. Сейчас подключен локальный stub, который потом заменится на Firebase и Telegram.",
      integrationNote:
        "Firebase, Telegram и платежный провайдер подключаются после готовности проектных аккаунтов.",
      nameLabel: "Имя",
      namePlaceholder: "Ваше имя",
      phoneLabel: "Телефон",
      phonePlaceholder: "+998 90 000 00 00",
      interestLabel: "Интерес",
      interests: [
        { value: "consultation", label: "Консультация" },
        { value: "silver", label: "Тариф Silver" },
        { value: "premium", label: "Тариф Premium" },
        { value: "online", label: "Онлайн-курс/оплата" },
      ],
      messageLabel: "Комментарий",
      messagePlaceholder: "По какому вопросу связаться?",
      submit: "Отправить заявку",
      successButton: "Заявка принята",
      success: "Локальный stub принял заявку. На следующем этапе он будет подключен к Firestore и Telegram.",
      error: "Заявка не отправилась. Проверьте имя и телефон и попробуйте еще раз.",
    },
  },
};
