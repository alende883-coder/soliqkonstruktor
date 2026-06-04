import type { Locale } from "@/lib/site-content";

export type CourseCategory =
  | "accounting"
  | "tax"
  | "one-c"
  | "management"
  | "law"
  | "career";

export type CourseAccent = "blue" | "red" | "green" | "amber" | "dark";

export type Course = {
  id: string;
  title: string;
  description: string;
  category: CourseCategory;
  releaseLabel?: string;
  priceLabel?: string;
  icon: CourseCategory;
  accent: CourseAccent;
  getCourseUrl?: string;
  featured?: boolean;
};

export type CoursePageLabels = {
  title: string;
  eyebrow: string;
  text: string;
  searchPlaceholder: string;
  allCategories: string;
  resultLabel: string;
  emptyTitle: string;
  emptyText: string;
  openCourse: string;
  pendingLink: string;
  release: string;
  price: string;
  categories: Record<CourseCategory, string>;
  sort: {
    label: string;
    featured: string;
    az: string;
    za: string;
  };
};

export const coursePageContent: Record<Locale, CoursePageLabels> = {
  uz: {
    eyebrow: "Kurslar katalogi",
    title: "IN PLUS kurslari",
    text:
      "Kartalar hozircha statik ma'lumotdan chiqadi. Real GetCourse havolalari qo'shilganda foydalanuvchi shu yerdan to'g'ridan-to'g'ri kurs sahifasiga o'tadi.",
    searchPlaceholder: "Kurs nomi yoki yo'nalishini qidirish",
    allCategories: "Barchasi",
    resultLabel: "ta kurs",
    emptyTitle: "Mos kurs topilmadi",
    emptyText: "Qidiruv so'zini o'zgartiring yoki boshqa yo'nalishni tanlang.",
    openCourse: "GetCourse sahifasiga o'tish",
    pendingLink: "Havola keyin qo'shiladi",
    release: "Chiqish sanasi",
    price: "Narx",
    categories: {
      accounting: "Buxgalteriya",
      tax: "Soliq",
      "one-c": "1C",
      management: "Boshqaruv",
      law: "Qonunchilik",
      career: "Karyera",
    },
    sort: {
      label: "Saralash",
      featured: "Tavsiya etilgan",
      az: "Nomi (A-Z)",
      za: "Nomi (Z-A)",
    },
  },
  ru: {
    eyebrow: "Каталог курсов",
    title: "Курсы IN PLUS",
    text:
      "Карточки пока берутся из статических данных. После добавления реальных ссылок GetCourse пользователь будет переходить прямо на страницу нужного курса.",
    searchPlaceholder: "Поиск по названию или направлению",
    allCategories: "Все",
    resultLabel: "курсов",
    emptyTitle: "Курсы не найдены",
    emptyText: "Измените поисковый запрос или выберите другое направление.",
    openCourse: "Перейти в GetCourse",
    pendingLink: "Ссылка будет добавлена",
    release: "Дата выхода",
    price: "Цена",
    categories: {
      accounting: "Бухгалтерия",
      tax: "Налоги",
      "one-c": "1C",
      management: "Управление",
      law: "Законодательство",
      career: "Карьера",
    },
    sort: {
      label: "Сортировка",
      featured: "Рекомендуемые",
      az: "Название (А-Я)",
      za: "Название (Я-А)",
    },
  },
};

export const courseCatalog: Record<Locale, Course[]> = {
  uz: [
    {
      id: "three-month-accountant",
      title: "3 oy ichida buxgalter",
      description:
        "Buxgalteriya, soliq hujjatlari va 1C bo'yicha asosiy amaliy ko'nikmalarni tartibli o'rganish.",
      category: "accounting",
      releaseLabel: "Ochiq guruhlar bo'yicha",
      priceLabel: "GetCourse sahifasida",
      icon: "accounting",
      accent: "blue",
      featured: true,
    },
    {
      id: "glavbux",
      title: "Glavbux amaliyoti",
      description:
        "Bosh buxgalter mas'uliyati, hisobot yopish, hujjatlar nazorati va jamoa bilan ishlash.",
      category: "career",
      releaseLabel: "Yangi oqim",
      priceLabel: "GetCourse sahifasida",
      icon: "career",
      accent: "dark",
      featured: true,
    },
    {
      id: "one-c-production",
      title: "1Cda ishlab chiqarish va eksport",
      description:
        "1Cda ishlab chiqarish, eksport, qurilish va TMZ jarayonlarini amaliy misollar orqali yuritish.",
      category: "one-c",
      releaseLabel: "Kurs jadvali bo'yicha",
      priceLabel: "GetCourse sahifasida",
      icon: "one-c",
      accent: "green",
      featured: true,
    },
    {
      id: "tax-letters",
      title: "Soliq xatlariga javob yozish",
      description:
        "Soliq organlaridan kelgan xatlarga qonuniy asos bilan javob tayyorlash va muddatlarni nazorat qilish.",
      category: "tax",
      releaseLabel: "Master-klass",
      priceLabel: "GetCourse sahifasida",
      icon: "tax",
      accent: "red",
    },
    {
      id: "tax-benefits",
      title: "Soliq imtiyozlaridan foydalanish",
      description:
        "Qonuniy imtiyozlarni topish, tahlil qilish va kompaniya foydasiga ishlatish bo'yicha amaliy yo'l.",
      category: "law",
      releaseLabel: "Yangilanadi",
      priceLabel: "GetCourse sahifasida",
      icon: "law",
      accent: "amber",
    },
    {
      id: "monthly-closing",
      title: "Oy yakuni va balans yopish",
      description:
        "Har oyda balans, foyda hisobotlari va asosiy moliyaviy ko'rsatkichlarni tartibli yopish.",
      category: "accounting",
      releaseLabel: "Video kurs",
      priceLabel: "GetCourse sahifasida",
      icon: "accounting",
      accent: "blue",
    },
    {
      id: "audit-preparation",
      title: "Tekshiruv va auditga tayyorgarlik",
      description:
        "Tekshiruvlardan oldin hujjatlar, hisobotlar va ichki jarayonlarni tayyor holga keltirish.",
      category: "tax",
      releaseLabel: "Amaliy kurs",
      priceLabel: "GetCourse sahifasida",
      icon: "tax",
      accent: "green",
    },
    {
      id: "tax-refund",
      title: "Ortiqcha to'langan soliqlarni qaytarish",
      description:
        "Ortiqcha to'lovlarni aniqlash, asoslash va qaytarish jarayonini hujjatlar bilan yuritish.",
      category: "tax",
      releaseLabel: "Yo'nalish bo'yicha",
      priceLabel: "GetCourse sahifasida",
      icon: "tax",
      accent: "red",
    },
  ],
  ru: [
    {
      id: "three-month-accountant",
      title: "Бухгалтер за 3 месяца",
      description:
        "Практические основы бухгалтерии, налоговых документов и 1C в структурном формате.",
      category: "accounting",
      releaseLabel: "По открытым потокам",
      priceLabel: "На странице GetCourse",
      icon: "accounting",
      accent: "blue",
      featured: true,
    },
    {
      id: "glavbux",
      title: "Практика главного бухгалтера",
      description:
        "Ответственность главбуха, закрытие отчетности, контроль документов и работа с командой.",
      category: "career",
      releaseLabel: "Новый поток",
      priceLabel: "На странице GetCourse",
      icon: "career",
      accent: "dark",
      featured: true,
    },
    {
      id: "one-c-production",
      title: "Производство и экспорт в 1C",
      description:
        "Производство, экспорт, строительство и ТМЗ в 1C на практических примерах.",
      category: "one-c",
      releaseLabel: "По расписанию курса",
      priceLabel: "На странице GetCourse",
      icon: "one-c",
      accent: "green",
      featured: true,
    },
    {
      id: "tax-letters",
      title: "Ответы на письма налоговой",
      description:
        "Подготовка законных ответов на письма налоговых органов и контроль сроков.",
      category: "tax",
      releaseLabel: "Мастер-класс",
      priceLabel: "На странице GetCourse",
      icon: "tax",
      accent: "red",
    },
    {
      id: "tax-benefits",
      title: "Налоговые льготы",
      description:
        "Как находить, анализировать и применять законные налоговые возможности в пользу компании.",
      category: "law",
      releaseLabel: "Обновляется",
      priceLabel: "На странице GetCourse",
      icon: "law",
      accent: "amber",
    },
    {
      id: "monthly-closing",
      title: "Закрытие месяца и баланса",
      description:
        "Системное закрытие баланса, отчета о прибыли и ключевых финансовых показателей.",
      category: "accounting",
      releaseLabel: "Видеокурс",
      priceLabel: "На странице GetCourse",
      icon: "accounting",
      accent: "blue",
    },
    {
      id: "audit-preparation",
      title: "Подготовка к проверкам и аудиту",
      description:
        "Подготовка документов, отчетов и внутренних процессов перед проверками.",
      category: "tax",
      releaseLabel: "Практический курс",
      priceLabel: "На странице GetCourse",
      icon: "tax",
      accent: "green",
    },
    {
      id: "tax-refund",
      title: "Возврат переплаченных налогов",
      description:
        "Выявление, обоснование и сопровождение возврата переплаченных налогов.",
      category: "tax",
      releaseLabel: "По направлению",
      priceLabel: "На странице GetCourse",
      icon: "tax",
      accent: "red",
    },
  ],
};

export function getFeaturedCourses(locale: Locale) {
  return courseCatalog[locale].filter((course) => course.featured).slice(0, 3);
}
