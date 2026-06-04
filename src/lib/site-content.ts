export type Locale = "uz" | "ru";

export type LeadSource = "course" | "price" | "silver" | "premium";

type NavLink = { label: string; href: string };

export type SiteContent = {
  locale: Locale;
  navigation: {
    ariaLabel: string;
    languageLabel: string;
    links: NavLink[];
  };
  media: {
    hero: string;
    testimonials: Array<{ src: string; alt: string }>;
  };
  hero: {
    brandLine: string;
    titleStrong: string;
    titleRest: string;
    primaryCta: string;
    visualAlt: string;
  };
  problems: {
    title: string;
    items: Array<{ title: string; text: string; highlighted?: boolean }>;
  };
  consequences: {
    title: string;
    cta: string;
    items: Array<{ label: string; lead: string; text: string }>;
  };
  solution: {
    title: string;
    subtitle: string;
    cta: string;
    items: string[];
  };
  outcomes: {
    eyebrow: string;
    title: string;
    cta: string;
    items: string[];
  };
  founder: {
    eyebrow: string;
    name: string;
    role: string;
    facts: string[];
  };
  trust: {
    eyebrow: string;
    title: string;
    text: string;
  };
  bonuses: {
    eyebrow: string;
    title: string;
    note: string;
    items: string[];
  };
  scarcity: {
    title: string;
    text: string;
  };
  tariffs: {
    eyebrow: string;
    title: string;
    text: string;
    note: string;
    items: Array<{
      id: "silver" | "premium";
      name: string;
      tagline: string;
      features: string[];
      cta: string;
      highlighted?: boolean;
    }>;
  };
  notFor: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  catalogTeaser: {
    eyebrow: string;
    title: string;
    text: string;
  };
  ctas: {
    enroll: string;
    knowPrice: string;
    join: string;
    viewCourses: string;
  };
  leadForm: {
    titles: Record<LeadSource, string>;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    submit: string;
    sending: string;
    successTitle: string;
    successText: string;
    close: string;
    consent: string;
    errors: { name: string; phone: string; generic: string };
  };
};

const testimonialMedia = [
  {
    src: "https://static.tildacdn.one/tild6636-3966-4734-b637-343731633734/011-min_1.png",
    alt: "IN PLUS o'quvchisi fikri",
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

const heroImage =
  "https://static.tildacdn.one/tild6631-3939-4437-b338-366332346264/Main_bg1-min.png";

export const siteContent: Record<Locale, SiteContent> = {
  uz: {
    locale: "uz",
    navigation: {
      ariaLabel: "Asosiy bo'limlar",
      languageLabel: "Til tanlash",
      links: [
        { label: "Muammolar", href: "/#problems" },
        { label: "Natijalar", href: "/#outcomes" },
        { label: "Tariflar", href: "/#tariffs" },
        { label: "Kurslar", href: "/courses" },
        { label: "Savollar", href: "/#faq" },
      ],
    },
    media: {
      hero: heroImage,
      testimonials: testimonialMedia,
    },
    hero: {
      brandLine: "Tajribali mutaxassislardan buxgalteriya va soliq darslarini",
      titleStrong: "3 oy ichida buxgalter",
      titleRest:
        "sifatida bilimingizni oshirib, oylik 20-30 mln daromadga chiqing",
      primaryCta: "Kursga ro'yxatdan o'tish",
      visualAlt: "IN PLUS kursi asoschisi Zamira Djurayeva",
    },
    problems: {
      title:
        "Siz hisobot topshirishda, soliq hujjatlari bilan ishlashda yoki 1C dasturida muammolaga duch kelyapsizmi?",
      items: [
        {
          title: "Moliyaviy hisobotlarni",
          text: "topshirishda xatolar",
          highlighted: true,
        },
        {
          title: "Soliqdan kelgan xatga",
          text: "qanday javob yozishni bilmaslik",
        },
        {
          title: "1C dasturida ishlab",
          text: "chiqarish, eksport yoki TMZ bilan qiynalish",
        },
        {
          title: "Hisobotlarni yopishda",
          text: "ishonchsizlik",
        },
      ],
    },
    consequences: {
      title:
        "Muammolaringizni hal qilmaslik qanday oqibatlarga olib kelishini o'ylab ko'rdingizmi?",
      cta: "Muammolardan qutulish",
      items: [
        {
          label: "1-MUAMMO",
          lead: "Har bir xato yozilgan hisobot",
          text: "natijasi millionlab jarimaga sabab bo'ladi",
        },
        {
          label: "2-MUAMMO",
          lead: "Qonuniy imtiyozlardan",
          text: "foydalanolmaslik",
        },
        {
          label: "3-MUAMMO",
          lead: "Har yili o'zgaradigan qonunlarni bilmaslik",
          text:
            "natijasida 1ta noto'g'ri qaror bilan kompaniyaga millionlab zarar keltirish",
        },
      ],
    },
    solution: {
      title: "Xo'sh, bu muammolardan qanday qutulish mumkin?",
      subtitle:
        "Muammo sizda emas, sizga faqat amaliyotchi ustozlar va strategik yondashuv uchun bilimlar yetishmayapti.",
      cta: "Kursda o'qishni boshlash",
      items: [
        "20 yildan oshiq tajribaga ega soliq maslahatchilardan o'rganasiz",
        "Qonunlarni to'g'ri tushunishni va o'z foydangizga ishlatishni o'rganasiz!",
        "Hisobotlarni to'g'ri yopishni hamda 1Cda professional ishlashni amaliy misollarda ko'rasiz!",
        "Jarayonni osonlashtiradigan mentor, koll-markaz va yopiq guruhlarga ega bo'lasiz",
      ],
    },
    outcomes: {
      eyebrow: "Natijalar",
      title: "Siz bu kurs orqali nimalarga erishasiz?",
      cta: "Kursda bepul qatnashishni boshlash",
      items: [
        "Soliq imtiyozlaridan foydalanish",
        "1Cda ishlab chiqarish, eksport va qurilishni yuritish",
        "Har oyda balans va foyda hisobotlarini yopish",
        "Soliq xatlariga qonuniy asos bilan javob yozish",
        "Sudda himoya, audit tekshiruvlarida tayyorlik",
        "Ortiqcha to'langan soliq to'lovlarini qaytarish",
        "Tekshiruvlardan oldin hujjatlarni tayyor holga keltirish",
        "Barcha turdagi kompaniyalarning buxgalteriya hisobini yuritish bilimi",
      ],
    },
    founder: {
      eyebrow: "Kurs asoschisi",
      name: "Zamira Djurayeva",
      role: "20+ yillik tajribaga ega soliq maslahatchi",
      facts: [
        "200+ videodars + 6 oylik takroriy ko'rish imkoniyati",
        "Har dars amaliy topshiriqlar va haqiqiy keyslar asosida",
        "Qulay vaqt: ishlaydiganlar uchun moslashtirilgan",
        "Darslar oflayn/Zoom orqali",
        "Har hafta 1 marta 3 soatlik dars",
        "Kurs 3 oy davom etadi",
        "Darslar xalqaro tashkilotlarda ishlagan amaliy mutaxassislar tomonidan o'tiladi",
      ],
    },
    trust: {
      eyebrow: "Ijtimoiy isbot",
      title: "6000+ dan ortiq buxgalterlar bizga ishonch bildirgan",
      text: "Quyida ularning fikrlari bilan tanishishingiz mumkin!",
    },
    bonuses: {
      eyebrow: "Bonuslar",
      title: "Ro'yxatdan o'tganlarga maxsus bonuslar",
      note: "faqat 9 daqiqa ichida ro'yxatdan o'tsangiz",
      items: [
        "Hisobotlarni to'ldirish bo'yicha checklistlar",
        "Provodkalar, OSV va balans darsligi",
        "Qonunchilikni izlash va ishlatish bo'yicha shablonlar",
        "\"Glavbux: daromadini 5 barobar oshirish\" darsligi",
      ],
    },
    scarcity: {
      title: "Diqqat qiling! Joylar soni cheklangan!",
      text:
        "O'quvchilarimiz natijaga chiqishi uchun faqat 40 ta buxgalterni kursga qabul qilamiz",
    },
    tariffs: {
      eyebrow: "Kurs tariflari",
      title: "Kurs tariflari",
      text: "O'zingizga mos tarifni tanlang va narxlar bilan tanishish uchun ariza qoldiring.",
      note: "Narxlar bilan tanishish uchun ariza qoldiring!",
      items: [
        {
          id: "silver",
          name: "SILVER",
          tagline: "Asosiy tarif",
          features: [
            "200+ videodarslar va 6 oylik takroriy ko'rish",
            "Amaliy topshiriqlar, keyslar va haqiqiy hisobotlar",
            "3 oyda haftasiga 1 marta 3 soatlik darslar (oflayn/Zoom)",
            "Tarqatma materiallar",
          ],
          cta: "Silver tarifini tanlash",
        },
        {
          id: "premium",
          name: "PREMIUM",
          tagline: "To'liq tarif",
          features: [
            "SILVER tarifidagi barcha imkoniyatlar",
            "Hisobotlarni to'ldirish bo'yicha checklistlar",
            "Provodkalar, OSV va balans darsligi hamda shablonlar",
            "\"Glavbux\" darsligi va yopiq Telegram guruh",
            "Koll-markaz va mentor yordamida maslahat",
          ],
          cta: "Premium tarifini tanlash",
          highlighted: true,
        },
      ],
    },
    notFor: {
      eyebrow: "Diqqat",
      title: "Bu kurs kimlar uchun emas?",
      subtitle: "Aksincha bo'lsa – bu aynan siz uchun!",
      items: [
        "Bosh buxgalterlik mas'uliyatini olishdan qo'rqadiganlar",
        "Amaliy topshiriqlarni bajarmaydiganlar",
        "Darslarga qatnashmaydiganlar",
      ],
    },
    faq: {
      eyebrow: "Aniqlik",
      title: "Ko'p so'raladigan savollar",
      items: [
        {
          question: "Darslar qayerda o'tiladi?",
          answer:
            "Darslar oflayn hamda Zoom orqali onlayn o'tkaziladi. O'zingizga qulay formatni tanlashingiz mumkin.",
        },
        {
          question: "Qanday kafolat bor?",
          answer:
            "Amaliy topshiriqlarni bajarib, darslarda qatnashsangiz natijaga chiqasiz. Barcha materiallar 6 oy davomida sizda qoladi.",
        },
        {
          question: "Darslar yozib olinadimi?",
          answer:
            "Ha, barcha darslar yozib olinadi va siz ularni 6 oy davomida qayta ko'rishingiz mumkin.",
        },
        {
          question: "1Cni bilmasam ham qatnasha olamanmi?",
          answer:
            "Ha, kurs noldan boshlanadi. 1Cni bilmasangiz ham amaliy misollar orqali bosqichma-bosqich o'rganasiz.",
        },
      ],
    },
    catalogTeaser: {
      eyebrow: "Kurslar",
      title: "IN PLUS'ning barcha kurslari",
      text: "Buxgalteriya, soliq, 1C va biznes amaliyoti bo'yicha to'liq kurslar katalogini ko'ring.",
    },
    ctas: {
      enroll: "Kursga ro'yxatdan o'tish",
      knowPrice: "Narxni bilish",
      join: "Kursda qatnashaman",
      viewCourses: "Barcha kurslar",
    },
    leadForm: {
      titles: {
        course: "Kursga ro'yxatdan o'tish uchun ushbu formani to'ldiring",
        price: "Narxlar bilan tanishish uchun ushbu formani to'ldiring",
        silver:
          "Silver tarifiga ro'yxatdan o'tish uchun ushbu formani to'ldiring",
        premium:
          "Premium tarifiga ro'yxatdan o'tish uchun ushbu formani to'ldiring",
      },
      nameLabel: "1. Ismingizni kiriting",
      namePlaceholder: "Ismingiz",
      phoneLabel: "2. Telefon raqamingizni kiriting",
      phonePlaceholder: "90 123 45 67",
      submit: "Tasdiqlash",
      sending: "Yuborilmoqda...",
      successTitle: "Arizangiz qabul qilindi!",
      successText: "Operatorlarimiz tez orada siz bilan bog'lanadi.",
      close: "Yopish",
      consent: "Ma'lumotlaringiz faqat siz bilan bog'lanish uchun ishlatiladi.",
      errors: {
        name: "Iltimos, ismingizni to'g'ri kiriting (2-60 ta belgi).",
        phone: "Telefon raqamini to'liq kiriting (9 ta raqam).",
        generic: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
      },
    },
  },
  ru: {
    locale: "ru",
    navigation: {
      ariaLabel: "Основные разделы",
      languageLabel: "Выбор языка",
      links: [
        { label: "Проблемы", href: "/ru#problems" },
        { label: "Результаты", href: "/ru#outcomes" },
        { label: "Тарифы", href: "/ru#tariffs" },
        { label: "Курсы", href: "/ru/courses" },
        { label: "Вопросы", href: "/ru#faq" },
      ],
    },
    media: {
      hero: heroImage,
      testimonials: testimonialMedia,
    },
    hero: {
      brandLine: "Уроки бухгалтерии и налогов от опытных специалистов",
      titleStrong: "Бухгалтер за 3 месяца",
      titleRest:
        "— повышайте квалификацию и выходите на доход 20-30 млн в месяц",
      primaryCta: "Записаться на курс",
      visualAlt: "Основатель курса IN PLUS Замира Джураева",
    },
    problems: {
      title:
        "Сталкиваетесь с трудностями при сдаче отчетности, работе с налоговыми документами или в программе 1C?",
      items: [
        {
          title: "Ошибки при сдаче",
          text: "финансовой отчетности",
          highlighted: true,
        },
        {
          title: "Не знаете, как ответить",
          text: "на письмо из налоговой",
        },
        {
          title: "Трудности в 1C",
          text: "с производством, экспортом или ТМЗ",
        },
        {
          title: "Неуверенность",
          text: "при закрытии отчетности",
        },
      ],
    },
    consequences: {
      title:
        "Задумывались ли вы, к каким последствиям приводит нерешенность ваших проблем?",
      cta: "Избавиться от проблем",
      items: [
        {
          label: "ПРОБЛЕМА 1",
          lead: "Каждый отчет с ошибкой",
          text: "оборачивается миллионными штрафами",
        },
        {
          label: "ПРОБЛЕМА 2",
          lead: "Невозможность использовать",
          text: "законные льготы",
        },
        {
          label: "ПРОБЛЕМА 3",
          lead: "Незнание ежегодно меняющихся законов:",
          text: "одно неверное решение приносит компании миллионные убытки",
        },
      ],
    },
    solution: {
      title: "Так как же избавиться от этих проблем?",
      subtitle:
        "Проблема не в вас — вам просто не хватает наставников-практиков и знаний для стратегического подхода.",
      cta: "Начать обучение на курсе",
      items: [
        "Учитесь у налоговых консультантов с опытом более 20 лет",
        "Научитесь правильно понимать законы и использовать их в свою пользу!",
        "На практических примерах увидите, как правильно закрывать отчеты и профессионально работать в 1C!",
        "Получите наставника, колл-центр и закрытые группы, которые упростят процесс",
      ],
    },
    outcomes: {
      eyebrow: "Результаты",
      title: "Чего вы достигнете на этом курсе?",
      cta: "Начать бесплатное участие в курсе",
      items: [
        "Использование налоговых льгот",
        "Ведение производства, экспорта и строительства в 1C",
        "Ежемесячное закрытие баланса и отчета о прибыли",
        "Ответы на письма налоговой с законным обоснованием",
        "Защита в суде и готовность к аудиторским проверкам",
        "Возврат переплаченных налогов",
        "Подготовка документов перед проверками",
        "Знание ведения бухгалтерии для любых типов компаний",
      ],
    },
    founder: {
      eyebrow: "Основатель курса",
      name: "Замира Джураева",
      role: "Налоговый консультант с опытом более 20 лет",
      facts: [
        "200+ видеоуроков + 6 месяцев повторного просмотра",
        "Каждый урок на основе практических заданий и реальных кейсов",
        "Удобное время: адаптировано для работающих",
        "Занятия офлайн / через Zoom",
        "1 раз в неделю занятие по 3 часа",
        "Курс длится 3 месяца",
        "Занятия ведут практикующие специалисты из международных организаций",
      ],
    },
    trust: {
      eyebrow: "Социальное доказательство",
      title: "Более 6000 бухгалтеров доверились нам",
      text: "Ниже вы можете ознакомиться с их отзывами!",
    },
    bonuses: {
      eyebrow: "Бонусы",
      title: "Специальные бонусы для записавшихся",
      note: "только если зарегистрируетесь в течение 9 минут",
      items: [
        "Чек-листы по заполнению отчетности",
        "Пособие по проводкам, ОСВ и балансу",
        "Шаблоны для поиска и применения законодательства",
        "Пособие «Главбух: увеличить доход в 5 раз»",
      ],
    },
    scarcity: {
      title: "Внимание! Количество мест ограничено!",
      text:
        "Чтобы наши ученики достигали результата, мы набираем на курс только 40 бухгалтеров",
    },
    tariffs: {
      eyebrow: "Тарифы курса",
      title: "Тарифы курса",
      text: "Выберите подходящий тариф и оставьте заявку, чтобы узнать цены.",
      note: "Оставьте заявку, чтобы узнать цены!",
      items: [
        {
          id: "silver",
          name: "SILVER",
          tagline: "Базовый тариф",
          features: [
            "200+ видеоуроков и 6 месяцев повторного доступа",
            "Практические задания, кейсы и реальные отчеты",
            "Занятия 3 часа раз в неделю в течение 3 месяцев (офлайн/Zoom)",
            "Раздаточные материалы",
          ],
          cta: "Выбрать тариф Silver",
        },
        {
          id: "premium",
          name: "PREMIUM",
          tagline: "Полный тариф",
          features: [
            "Все возможности тарифа SILVER",
            "Чек-листы по заполнению отчетности",
            "Пособие по проводкам, ОСВ, балансу и шаблоны",
            "Пособие «Главбух» и закрытая группа в Telegram",
            "Поддержка колл-центра и ментора",
          ],
          cta: "Выбрать тариф Premium",
          highlighted: true,
        },
      ],
    },
    notFor: {
      eyebrow: "Внимание",
      title: "Кому этот курс не подходит?",
      subtitle: "Если наоборот — этот курс именно для вас!",
      items: [
        "Тем, кто боится брать ответственность главного бухгалтера",
        "Тем, кто не выполняет практические задания",
        "Тем, кто не посещает занятия",
      ],
    },
    faq: {
      eyebrow: "Ясность",
      title: "Частые вопросы",
      items: [
        {
          question: "Где проходят занятия?",
          answer:
            "Занятия проходят офлайн и онлайн через Zoom. Вы можете выбрать удобный для себя формат.",
        },
        {
          question: "Какая есть гарантия?",
          answer:
            "Если вы выполняете практические задания и посещаете занятия — вы достигнете результата. Все материалы остаются у вас на 6 месяцев.",
        },
        {
          question: "Записываются ли занятия?",
          answer:
            "Да, все занятия записываются, и вы можете пересматривать их в течение 6 месяцев.",
        },
        {
          question: "Смогу ли я участвовать, если не знаю 1C?",
          answer:
            "Да, курс начинается с нуля. Даже не зная 1C, вы освоите программу шаг за шагом на практических примерах.",
        },
      ],
    },
    catalogTeaser: {
      eyebrow: "Курсы",
      title: "Все курсы IN PLUS",
      text: "Посмотрите полный каталог курсов по бухгалтерии, налогам, 1C и бизнес-практике.",
    },
    ctas: {
      enroll: "Записаться на курс",
      knowPrice: "Узнать цену",
      join: "Хочу на курс",
      viewCourses: "Все курсы",
    },
    leadForm: {
      titles: {
        course: "Заполните форму для записи на курс",
        price: "Заполните форму, чтобы узнать цены",
        silver: "Заполните форму для записи на тариф Silver",
        premium: "Заполните форму для записи на тариф Premium",
      },
      nameLabel: "1. Введите ваше имя",
      namePlaceholder: "Ваше имя",
      phoneLabel: "2. Введите номер телефона",
      phonePlaceholder: "90 123 45 67",
      submit: "Подтвердить",
      sending: "Отправка...",
      successTitle: "Заявка принята!",
      successText: "Наши операторы свяжутся с вами в ближайшее время.",
      close: "Закрыть",
      consent: "Ваши данные используются только для связи с вами.",
      errors: {
        name: "Пожалуйста, введите корректное имя (2-60 символов).",
        phone: "Введите номер телефона полностью (9 цифр).",
        generic: "Произошла ошибка. Пожалуйста, попробуйте еще раз.",
      },
    },
  },
};
