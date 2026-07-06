const rituals = [
  {
    id: "cut-style",
    category: "Hair",
    ru: {
      title: "Женская стрижка и укладка",
      price: "от €45",
      duration: "75 мин",
      description: "Форма, легкая укладка и рекомендации по домашнему уходу на базе Kevin Murphy, Davines, Kerastase и Redken.",
    },
    sr: {
      title: "Žensko šišanje i stilizovanje",
      price: "od €45",
      duration: "75 min",
      description: "Forma, lagano stilizovanje i preporuka kućne nege uz Kevin Murphy, Davines, Kerastase i Redken.",
    },
  },
  {
    id: "blowout",
    category: "Hair",
    ru: {
      title: "Укладка / blowout",
      price: "от €30",
      duration: "45 мин",
      description: "Быстрая салонная укладка перед ужином, съемкой, встречей или мероприятием у моря.",
    },
    sr: {
      title: "Feniranje / blowout",
      price: "od €30",
      duration: "45 min",
      description: "Brzo salonsko stilizovanje pre večere, snimanja, sastanka ili događaja pored mora.",
    },
  },
  {
    id: "color-toning",
    category: "Hair",
    ru: {
      title: "Окрашивание и тонирование",
      price: "от €90",
      duration: "150 мин",
      description: "Консультация по оттенку, бережное окрашивание, тонирование и подбор ухода для стойкости цвета.",
    },
    sr: {
      title: "Farbanje i toniranje",
      price: "od €90",
      duration: "150 min",
      description: "Konsultacija o nijansi, nežno farbanje, toniranje i izbor nege za dugotrajan sjaj boje.",
    },
  },
  {
    id: "complex-color",
    category: "Hair",
    ru: {
      title: "Сложное окрашивание / AirTouch",
      price: "от €160",
      duration: "240 мин",
      description: "Премиальная работа с цветом, мягкими переходами, сиянием длины и индивидуальной схемой ухода.",
    },
    sr: {
      title: "Složeno farbanje / AirTouch",
      price: "od €160",
      duration: "240 min",
      description: "Premium rad sa bojom, mekim prelazima, sjajem dužine i individualnim planom nege.",
    },
  },
  {
    id: "hair-care",
    category: "Hair",
    ru: {
      title: "Глубокий уход для волос",
      price: "от €55",
      duration: "60 мин",
      description: "Ритуал восстановления и блеска с Kevin Murphy, Kerastase, Davines, K18 или Olaplex.",
    },
    sr: {
      title: "Dubinska nega kose",
      price: "od €55",
      duration: "60 min",
      description: "Ritual obnavljanja i sjaja uz Kevin Murphy, Kerastase, Davines, K18 ili Olaplex.",
    },
  },
  {
    id: "scalp",
    category: "Hair",
    ru: {
      title: "SPA-уход кожи головы",
      price: "от €40",
      duration: "45 мин",
      description: "Очищение, массаж кожи головы, уход и подбор шампуня, маски или несмываемого средства.",
    },
    sr: {
      title: "SPA nega kože glave",
      price: "od €40",
      duration: "45 min",
      description: "Čišćenje, masaža kože glave, nega i izbor šampona, maske ili leave-in proizvoda.",
    },
  },
  {
    id: "face-care",
    category: "Face",
    ru: {
      title: "Уход для лица Sothys / IS Clinical",
      price: "от €70",
      duration: "60 мин",
      description: "Деликатное очищение, активные сыворотки, массаж и сияющий финиш без перегруза кожи.",
    },
    sr: {
      title: "Nega lica Sothys / IS Clinical",
      price: "od €70",
      duration: "60 min",
      description: "Nežno čišćenje, aktivni serumi, masaža i blistav završetak bez opterećenja kože.",
    },
  },
  {
    id: "express-face",
    category: "Face",
    ru: {
      title: "Экспресс-свечение лица",
      price: "от €35",
      duration: "30 мин",
      description: "Патчи, увлажнение, легкий массаж и быстрый эффект fresh skin перед событием.",
    },
    sr: {
      title: "Ekspres sjaj lica",
      price: "od €35",
      duration: "30 min",
      description: "Patchevi, hidratacija, lagana masaža i brz efekat fresh skin pre događaja.",
    },
  },
  {
    id: "body-ritual",
    category: "Body",
    ru: {
      title: "Ритуал для тела La Sultane de Saba",
      price: "от €65",
      duration: "80 мин",
      description: "Скраб, увлажнение, ароматный body-care и рекомендация средств для домашнего продолжения.",
    },
    sr: {
      title: "Ritual za telo La Sultane de Saba",
      price: "od €65",
      duration: "80 min",
      description: "Piling, hidratacija, mirisna body-care nega i preporuka proizvoda za nastavak kod kuće.",
    },
  },
  {
    id: "massage",
    category: "Body",
    ru: {
      title: "Relax massage",
      price: "от €60",
      duration: "60 мин",
      description: "Спокойный массаж после перелета, пляжа или насыщенного дня в Черногории.",
    },
    sr: {
      title: "Relax masaža",
      price: "od €60",
      duration: "60 min",
      description: "Mirna masaža posle leta, plaže ili intenzivnog dana u Crnoj Gori.",
    },
  },
  {
    id: "nails",
    category: "Detail",
    ru: {
      title: "Маникюр / педикюр",
      price: "от €35",
      duration: "90 мин",
      description: "Аккуратная детализация образа, чистый минимализм и premium finish без визуального шума.",
    },
    sr: {
      title: "Manikir / pedikir",
      price: "od €35",
      duration: "90 min",
      description: "Uredan detalj izgleda, čist minimalizam i premium finish bez vizuelne buke.",
    },
  },
  {
    id: "brow-lash",
    category: "Detail",
    ru: {
      title: "Брови и ресницы",
      price: "от €25",
      duration: "45 мин",
      description: "Форма, окрашивание, ламинирование и быстрые процедуры, которые легко добавить к визиту.",
    },
    sr: {
      title: "Obrve i trepavice",
      price: "od €25",
      duration: "45 min",
      description: "Oblikovanje, farbanje, laminacija i brze procedure koje se lako dodaju poseti.",
    },
  },
  {
    id: "men-kids",
    category: "Hair",
    ru: {
      title: "Мужская и детская стрижка",
      price: "от €25",
      duration: "45 мин",
      description: "Отдельный быстрый сценарий для men и kids, чтобы семейные визиты записывались в один поток.",
    },
    sr: {
      title: "Muško i dečije šišanje",
      price: "od €25",
      duration: "45 min",
      description: "Poseban brzi scenario za men i kids, da se porodične posete zakažu u jednom toku.",
    },
  },
  {
    id: "event",
    category: "Detail",
    ru: {
      title: "Событийный образ",
      price: "от €80",
      duration: "120 мин",
      description: "Укладка, легкий макияж, аромат и финальная детализация перед ужином, свадьбой или съемкой.",
    },
    sr: {
      title: "Izgled za događaj",
      price: "od €80",
      duration: "120 min",
      description: "Stilizovanje, lagana šminka, miris i završni detalji pre večere, venčanja ili snimanja.",
    },
  },
];

const serviceCategories = [
  { id: "Hair", ru: "Волосы", sr: "Kosa" },
  { id: "Face", ru: "Лицо", sr: "Lice" },
  { id: "Body", ru: "Тело", sr: "Telo" },
  { id: "Detail", ru: "Детали", sr: "Detalji" },
];

const products = [
  {
    id: "km-hydrate-mask",
    category: "hair",
    brand: "Kevin Murphy",
    title: "HYDRATE-ME.MASQUE 200 ml",
    price: 63,
    priceLabel: "€63",
    badge: "New",
    image: "https://static.tildacdn.com/stor3638-6166-4338-a265-313062383765/13027800.png",
  },
  {
    id: "km-angel-wash",
    category: "hair",
    brand: "Kevin Murphy",
    title: "ANGEL.WASH",
    price: 20,
    priceLabel: "from €20",
    badge: "2 sizes",
    image: "https://static.tildacdn.com/stor3636-6538-4130-b362-383631613234/99572188.png",
  },
  {
    id: "lavhair-repair-mask",
    category: "hair",
    brand: "LAvHAIR",
    title: "RepairPro Mask 400 ml",
    price: 27,
    priceLabel: "€27",
    badge: "Hair",
    image: "https://static.tildacdn.com/stor3134-3039-4932-a665-396532353665/56015025.jpg",
  },
  {
    id: "sisters-lip-hydrater",
    category: "face",
    brand: "Sister's Aroma",
    title: "Lip Hydrater 10 ml",
    price: 15,
    priceLabel: "€15",
    badge: "Face",
    image: "https://static.tildacdn.com/stor3436-3563-4435-b635-396337396336/71557143.webp",
  },
  {
    id: "jm-white-cocoon",
    category: "face",
    brand: "JM SOLUTION",
    title: "White Cocoon Eye Patch 60 pcs",
    price: 25,
    priceLabel: "€25",
    badge: "Eye care",
    image: "https://static.tildacdn.com/stor6238-3563-4631-b261-646366363861/49750931.jpg",
  },
  {
    id: "sultane-body-lotion",
    category: "body",
    brand: "La Sultane de Saba",
    title: "Ayurvedic Amber Vanilla Patchouli Body Lotion 200 ml",
    price: 60,
    priceLabel: "€60",
    badge: "Hit",
    image: "https://static.tildacdn.com/stor6631-3030-4739-a139-366539366261/26691991.jpg",
  },
  {
    id: "sisters-sugar-porn",
    category: "perfume",
    brand: "Sister's Aroma",
    title: "Sugar Porn Travel 10 ml",
    price: 20,
    priceLabel: "€20",
    badge: "Perfume",
    image: "https://static.tildacdn.com/stor3265-3632-4635-a665-623331616636/37715006.webp",
  },
  {
    id: "sisters-hand-peony",
    category: "body",
    brand: "Sister's Aroma",
    title: "Hand Cream Peony 30 ml",
    price: 15,
    priceLabel: "€15",
    badge: "New",
    image: "https://static.tildacdn.com/stor6139-3738-4264-b433-313865376461/40920004.png",
  },
  {
    id: "kerastase-elixir",
    category: "hair",
    brand: "Kerastase",
    title: "Elixir Ultime Huile Rose 100 ml",
    price: 60,
    priceLabel: "€60",
    badge: "Care",
    image: "https://static.tildacdn.com/stor3839-3438-4431-a236-316332376162/82640618.png",
  },
  {
    id: "ruby-red-hairpin",
    category: "hair",
    brand: "Fiona Franchimon",
    title: "Hairpin No1 Ruby Red",
    price: 45,
    priceLabel: "€45",
    badge: "Gift",
    image: "https://static.tildacdn.com/stor6362-6262-4533-b965-306336396365/84232550.jpg",
  },
  {
    id: "bracelet-butterfly",
    category: "jewelry",
    brand: "Blind me!",
    title: "Bracelet Butterfly",
    price: 30,
    priceLabel: "€30",
    badge: "Jewelry",
    image: "https://static.tildacdn.com/stor3939-6134-4434-b432-313262323461/20215372.jpg",
  },
  {
    id: "prreti-cica-patch",
    category: "face",
    brand: "PRRETI",
    title: "Real Cica Hydrogel Eye Patch 60 pcs",
    price: 25,
    priceLabel: "€25",
    badge: "Face",
    image: "https://static.tildacdn.com/stor3139-3066-4930-b531-346339393265/50232569.jpg",
  },
];

const state = {
  lang: "ru",
  selectedServiceId: rituals[0].id,
  serviceCategory: "Hair",
  bookingServiceCategory: "Hair",
  selectedTime: "10:30",
  filter: "all",
  cart: {},
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function money(value) {
  return `€${value}`;
}

const translations = {
  ru: {
    selectedService: "Выбранный ритуал",
    addMore: "Добавить еще в корзину",
    inCart: "В корзине",
    choose: "Выбрать",
    heroToast: "Подобрали сценарий записи. Заполните контакты, и менеджер подтвердит время.",
    bookingToast: "Заявка отправлена. Менеджер свяжется через WhatsApp или Telegram.",
    promoEmpty: "Введите промокод перед активацией.",
    promoSaved: "Промокод сохранен для проверки менеджером.",
    checkoutToast: "Checkout принят. Сумма корзины:",
    partnerToast: "Сообщение отправлено. Команда Monteme свяжется с вами по email.",
  },
  sr: {
    selectedService: "Izabrani ritual",
    addMore: "Dodaj još u korpu",
    inCart: "U korpi",
    choose: "Izabrati",
    heroToast: "Scenario zakazivanja je izabran. Popunite kontakte i menadžer će potvrditi termin.",
    bookingToast: "Zahtev je poslat. Menadžer će vas kontaktirati preko WhatsApp-a ili Telegram-a.",
    promoEmpty: "Unesite promo kod pre aktivacije.",
    promoSaved: "Promo kod je sačuvan za proveru od strane menadžera.",
    checkoutToast: "Checkout je primljen. Ukupan iznos korpe:",
    partnerToast: "Poruka je poslata. Monteme tim će vam se javiti putem email-a.",
  },
};

const pageCopy = {
  ru: {
    navServices: "Услуги",
    navBooking: "Запись",
    navPartners: "Партнеры",
    heroCopy: "Премиальный beauty atelier и curated shop: запись к мастеру, персональная анкета, подбор домашнего ухода и доставка по Черногории в одном спокойном интерфейсе.",
    heroBadge1: "Private booking",
    heroBadge2: "Curated care",
    heroBadge3: "Montenegro delivery",
    heroBook: "Записаться",
    heroShop: "Собрать уход",
    heroServiceLabel: "Услуга",
    heroDateLabel: "Дата",
    heroSubmit: "Подобрать время",
    servicesTitle: "Салонное меню на русском или любом другом языке",
    servicesText: "Расширили список услуг под премиальный салон: волосы, окрашивание, уходы, лицо, тело, ногти, брови, ресницы и событийные образы.",
    bookingTitle: "Запись сразу собирает контекст клиента",
    bookingText: "Анкета уточняет город, канал связи, цель визита и важные детали. Менеджер получает не просто имя и телефон, а готовый запрос для премиального сервиса.",
    shopTitle: "Shop продолжает эффект после визита",
    shopText: "Витрина не живет отдельно от салона: после выбора ритуала клиент сразу может собрать домашний уход. Товары, бренды и цены взяты из текущего каталога Monteme.",
    partnersTitle: "Бренды, которые усиливают доверие к салону",
    partnersText: "Вместо обычной полосы логотипов блок работает как витрина статуса: клиент сразу видит, что Monteme собирает профессиональные и нишевые бренды для салонного результата и домашнего ухода.",
    partnerFormTitle: "Свяжитесь с нами по любым вопросам",
    partnerFormText: "Форма из референса сохранена по смыслу: имя, email и сообщение. В MVP она демонстрирует заявки на сотрудничество, отзывы, закупки и персональные запросы.",
    partnerName: "Ваше имя",
    partnerEmail: "Ваш E-mail",
    partnerMessage: "Текст",
    partnerSubmit: "Отправить",
    partnerNamePlaceholder: "Ваше имя",
    partnerEmailPlaceholder: "hello@email.com",
    partnerMessagePlaceholder: "Расскажите, с чем хотите обратиться",
    checkoutTitle: "Checkout сохраняет ощущение сервиса",
    checkoutText: "Форма выглядит легче, чем обычная корзина: имя, email, телефон, город доставки, промокод и понятное обещание связи от менеджера после оформления.",
  },
  sr: {
    navServices: "Usluge",
    navBooking: "Zakazivanje",
    navPartners: "Partneri",
    heroCopy: "Premium beauty atelier i curated shop: zakazivanje kod stručnjaka, personalizovani upitnik, izbor kućne nege i dostava u Crnoj Gori u jednom mirnom interfejsu.",
    heroBadge1: "Privatno zakazivanje",
    heroBadge2: "Kurirana nega",
    heroBadge3: "Dostava u Crnoj Gori",
    heroBook: "Zakaži termin",
    heroShop: "Izaberi negu",
    heroServiceLabel: "Usluga",
    heroDateLabel: "Datum",
    heroSubmit: "Pronađi termin",
    servicesTitle: "Salonski meni na srpskom jeziku",
    servicesText: "Proširili smo listu usluga za premium salon: kosa, farbanje, tretmani, lice, telo, nokti, obrve, trepavice i izgled za događaje.",
    bookingTitle: "Zakazivanje odmah prikuplja kontekst klijenta",
    bookingText: "Upitnik beleži grad, kanal komunikacije, cilj posete i važne detalje. Menadžer dobija spreman zahtev za premium servis.",
    shopTitle: "Shop produžava efekat posete",
    shopText: "Prodavnica nije odvojena od salona: posle izbora rituala klijent odmah može da sastavi kućnu negu. Proizvodi, brendovi i cene su iz Monteme kataloga.",
    partnersTitle: "Brendovi koji pojačavaju poverenje u salon",
    partnersText: "Umesto običnog reda logotipa, ovaj blok radi kao signal statusa: klijent vidi da Monteme bira profesionalne i niche brendove za salonski rezultat i kućnu negu.",
    partnerFormTitle: "Kontaktirajte nas za sva pitanja",
    partnerFormText: "Forma iz reference je zadržana po značenju: ime, email i poruka. U MVP-u prikazuje saradnje, recenzije, nabavke i personalizovane zahteve.",
    partnerName: "Vaše ime",
    partnerEmail: "Vaš E-mail",
    partnerMessage: "Tekst",
    partnerSubmit: "Pošalji",
    partnerNamePlaceholder: "Vaše ime",
    partnerEmailPlaceholder: "hello@email.com",
    partnerMessagePlaceholder: "Napišite kako možemo da pomognemo",
    checkoutTitle: "Checkout čuva osećaj servisa",
    checkoutText: "Forma izgleda lakše od obične korpe: ime, email, telefon, grad dostave, promo kod i jasno obećanje da će se menadžer javiti posle slanja.",
  },
};

function text(key) {
  return translations[state.lang][key] || translations.ru[key] || key;
}

function serviceText(ritual) {
  return ritual[state.lang] || ritual.ru;
}

function categoryLabel(categoryId) {
  const category = serviceCategories.find((item) => item.id === categoryId);
  return category ? category[state.lang] || category.ru : categoryId;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderRitualFilters() {
  $("#ritualFilters").innerHTML = serviceCategories
    .map((category) => {
      const active = category.id === state.serviceCategory ? " active" : "";
      const count = rituals.filter((ritual) => ritual.category === category.id).length;
      return `
        <button class="ritual-filter-button${active}" type="button" data-service-filter="${escapeHtml(category.id)}">
          <span>${escapeHtml(categoryLabel(category.id))}</span>
          <small>${count}</small>
        </button>
      `;
    })
    .join("");
}

function renderBookingServiceFilters() {
  $("#bookingServiceFilters").innerHTML = serviceCategories
    .map((category) => {
      const active = category.id === state.bookingServiceCategory ? " active" : "";
      const count = rituals.filter((ritual) => ritual.category === category.id).length;
      return `
        <button class="booking-service-filter-button${active}" type="button" data-booking-service-filter="${escapeHtml(category.id)}">
          <span>${escapeHtml(categoryLabel(category.id))}</span>
          <small>${count}</small>
        </button>
      `;
    })
    .join("");
}

function renderRituals() {
  const visibleRituals = rituals.filter((ritual) => ritual.category === state.serviceCategory);
  $("#ritualGrid").innerHTML = visibleRituals
    .map((ritual, index) => {
      const current = serviceText(ritual);
      const active = ritual.id === state.selectedServiceId ? " active" : "";
      const featured = index < 2 ? " ritual-card_featured" : "";
      return `
        <article class="ritual-card${featured}${active}" data-service="${escapeHtml(ritual.id)}">
          <div>
            <span class="ritual-category">${escapeHtml(categoryLabel(ritual.category))}</span>
            <h3>${escapeHtml(current.title)}</h3>
            <p>${escapeHtml(current.description)}</p>
            <div class="ritual-meta">
              <span>${escapeHtml(current.price)}</span>
              <span>${escapeHtml(current.duration)}</span>
            </div>
          </div>
          <button class="button button-light" type="button" data-select-service="${escapeHtml(ritual.id)}">
            <i data-lucide="calendar-plus"></i>
            <span>${escapeHtml(text("choose"))}</span>
          </button>
        </article>
      `;
    })
    .join("");
  refreshIcons();
}

function renderServicePicker() {
  const visibleRituals = rituals.filter((ritual) => ritual.category === state.bookingServiceCategory);
  $("#servicePicker").innerHTML = visibleRituals
    .map((ritual) => {
      const current = serviceText(ritual);
      const active = ritual.id === state.selectedServiceId ? " class=\"active\"" : "";
      return `
        <button${active} type="button" data-select-service="${escapeHtml(ritual.id)}">
          <span class="service-tile-category">${escapeHtml(categoryLabel(ritual.category))}</span>
          <strong>${escapeHtml(current.title)}</strong>
          <small>${escapeHtml(current.price)} · ${escapeHtml(current.duration)}</small>
        </button>
      `;
    })
    .join("");
}

function renderHeroServiceSelect() {
  const select = $("#heroService");
  if (!select) return;
  select.innerHTML = rituals
    .map((ritual) => {
      const current = serviceText(ritual);
      const selected = ritual.id === state.selectedServiceId ? " selected" : "";
      return `<option value="${escapeHtml(ritual.id)}"${selected}>${escapeHtml(current.title)}</option>`;
    })
    .join("");
}

function renderProducts() {
  const visible = products.filter((product) => state.filter === "all" || product.category === state.filter);
  $("#productGrid").innerHTML = visible
    .map((product) => {
      const qty = state.cart[product.id] || 0;
      const inCart = qty > 0 ? " in-cart" : "";
      const countBadge = qty > 0 ? `<span class="product-count">${qty}</span>` : "";
      const cartLine = qty > 0 ? `<span class="product-cart-line">${escapeHtml(text("inCart"))}: ${qty}</span>` : "";
      return `
        <article class="product-card${inCart}" data-product="${escapeHtml(product.id)}">
          <div class="product-media">
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.title)}" loading="lazy">
            <span class="product-badge">${escapeHtml(product.badge)}</span>
            ${countBadge}
          </div>
          <div class="product-info">
            <span class="product-brand">${escapeHtml(product.brand)}</span>
            <h3 class="product-title">${escapeHtml(product.title)}</h3>
            ${cartLine}
            <div class="product-bottom">
              <strong class="product-price">${escapeHtml(product.priceLabel)}</strong>
              <button class="icon-button" type="button" data-add-product="${escapeHtml(product.id)}" aria-label="${escapeHtml(text("addMore"))}">
                <i data-lucide="${qty > 0 ? "plus-circle" : "plus"}"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  refreshIcons();
}

function updateBookingSummary() {
  const ritual = rituals.find((item) => item.id === state.selectedServiceId) || rituals[0];
  const current = serviceText(ritual);
  $("#bookingSummary").innerHTML = `
    <span>${escapeHtml(text("selectedService"))}</span>
    <strong>${escapeHtml(current.title)}</strong>
    <small>${escapeHtml(current.duration)} · ${escapeHtml(current.price)} · ${escapeHtml(state.selectedTime)}</small>
  `;
}

function selectService(id) {
  const ritual = rituals.find((item) => item.id === id);
  if (!ritual) return;
  state.selectedServiceId = id;
  state.serviceCategory = ritual.category;
  state.bookingServiceCategory = ritual.category;
  renderRitualFilters();
  renderBookingServiceFilters();
  renderRituals();
  renderServicePicker();
  renderHeroServiceSelect();
  updateBookingSummary();
}

function renderCart() {
  const entries = Object.entries(state.cart)
    .map(([id, qty]) => ({ product: products.find((item) => item.id === id), qty }))
    .filter((entry) => entry.product && entry.qty > 0);

  $("#cartCount").textContent = entries.reduce((sum, entry) => sum + entry.qty, 0);
  $("#cartEmpty").classList.toggle("visible", entries.length === 0);
  $("#cartItems").innerHTML = entries
    .map(({ product, qty }) => `
      <article class="cart-item">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.title)}">
        <div>
          <h4>${escapeHtml(product.title)}</h4>
          <p>${escapeHtml(product.brand)} · ${escapeHtml(product.priceLabel)}</p>
        </div>
        <div class="cart-controls" aria-label="Количество">
          <button type="button" data-cart-minus="${escapeHtml(product.id)}">-</button>
          <strong>${qty}</strong>
          <button type="button" data-cart-plus="${escapeHtml(product.id)}">+</button>
        </div>
      </article>
    `)
    .join("");

  const total = entries.reduce((sum, entry) => sum + entry.product.price * entry.qty, 0);
  $("#cartTotal").textContent = money(total);
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  state.cart[id] = (state.cart[id] || 0) + 1;
  renderCart();
  renderProducts();
  showToast(`${product.title}: ${text("inCart").toLowerCase()} ${state.cart[id]}`);
}

function changeCartQty(id, delta) {
  if (!state.cart[id]) return;
  state.cart[id] += delta;
  if (state.cart[id] <= 0) {
    delete state.cart[id];
  }
  renderCart();
  renderProducts();
}

function openCart() {
  document.body.classList.add("cart-open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  $("#siteHeader").classList.add("solid");
}

function closeCart() {
  document.body.classList.remove("cart-open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  $("#siteHeader").classList.remove("solid");
}

function scrollToSection(target) {
  const element = typeof target === "string" ? document.querySelector(target) : target;
  if (!element) return;
  const headerHeight = $("#siteHeader").getBoundingClientRect().height;
  const top = element.getBoundingClientRect().top + window.scrollY - headerHeight + 1;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3200);
}

function initDateInputs() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const format = (date) => date.toISOString().slice(0, 10);
  $$('input[type="date"]').forEach((input) => {
    input.min = format(today);
    input.value = format(tomorrow);
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  state.lang = lang;
  document.documentElement.lang = lang === "sr" ? "sr" : "ru";
  $$("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  applyTranslations();
  renderRitualFilters();
  renderBookingServiceFilters();
  renderRituals();
  renderServicePicker();
  renderHeroServiceSelect();
  renderProducts();
  updateBookingSummary();
}

function applyTranslations() {
  const dictionary = pageCopy[state.lang] || pageCopy.ru;
  $$("[data-i18n]").forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (typeof value === "string") node.textContent = value;
  });
  $$("[data-i18n-placeholder]").forEach((node) => {
    const value = dictionary[node.dataset.i18nPlaceholder];
    if (typeof value === "string") node.setAttribute("placeholder", value);
  });
}

function bindEvents() {
  window.addEventListener("scroll", () => {
    $("#siteHeader").classList.toggle("scrolled", window.scrollY > 24);
  }, { passive: true });

  document.addEventListener("click", (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (anchor && anchor.hash && document.querySelector(anchor.hash)) {
      event.preventDefault();
      closeCart();
      scrollToSection(anchor.hash);
      return;
    }

    const languageButton = event.target.closest("[data-lang]");
    if (languageButton) {
      setLanguage(languageButton.dataset.lang);
      return;
    }

    const serviceFilterButton = event.target.closest("[data-service-filter]");
    if (serviceFilterButton) {
      state.serviceCategory = serviceFilterButton.dataset.serviceFilter;
      renderRitualFilters();
      renderRituals();
      return;
    }

    const bookingServiceFilterButton = event.target.closest("[data-booking-service-filter]");
    if (bookingServiceFilterButton) {
      state.bookingServiceCategory = bookingServiceFilterButton.dataset.bookingServiceFilter;
      renderBookingServiceFilters();
      renderServicePicker();
      return;
    }

    const serviceButton = event.target.closest("[data-select-service]");
    if (serviceButton) {
      selectService(serviceButton.dataset.selectService);
      return;
    }

    const addButton = event.target.closest("[data-add-product]");
    if (addButton) {
      addToCart(addButton.dataset.addProduct);
      return;
    }

    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      state.filter = filterButton.dataset.filter;
      $$("#shopFilters button").forEach((button) => {
        button.classList.toggle("active", button === filterButton);
      });
      renderProducts();
      return;
    }

    const plusButton = event.target.closest("[data-cart-plus]");
    if (plusButton) {
      changeCartQty(plusButton.dataset.cartPlus, 1);
      return;
    }

    const minusButton = event.target.closest("[data-cart-minus]");
    if (minusButton) {
      changeCartQty(minusButton.dataset.cartMinus, -1);
    }
  });

  $("#timeGrid").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    state.selectedTime = button.textContent.trim();
    $$("#timeGrid button").forEach((item) => item.classList.toggle("active", item === button));
    updateBookingSummary();
  });

  $("#cartButton").addEventListener("click", openCart);
  $("#closeCart").addEventListener("click", closeCart);
  $("#cartOverlay").addEventListener("click", closeCart);
  $("#cartCheckout").addEventListener("click", closeCart);

  $("#heroBooking").addEventListener("submit", (event) => {
    event.preventDefault();
    selectService($("#heroService").value || state.selectedServiceId);
    scrollToSection("#booking");
    showToast(text("heroToast"));
  });

  $("#bookingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const ritual = rituals.find((item) => item.id === state.selectedServiceId) || rituals[0];
    showToast(`${serviceText(ritual).title}: ${text("bookingToast")}`);
  });

  $("#promoButton").addEventListener("click", () => {
    const promo = $("#promoInput").value.trim();
    showToast(promo ? text("promoSaved") : text("promoEmpty"));
  });

  $("#checkoutForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const total = $("#cartTotal").textContent;
    showToast(`${text("checkoutToast")} ${total}.`);
  });

  const partnerForm = $("#partnerForm");
  if (partnerForm) {
    partnerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      showToast(text("partnerToast"));
    });
  }
}

function init() {
  initDateInputs();
  renderRitualFilters();
  renderBookingServiceFilters();
  renderRituals();
  renderServicePicker();
  renderHeroServiceSelect();
  renderProducts();
  renderCart();
  updateBookingSummary();
  $("#timeGrid button").classList.add("active");
  setLanguage("ru");
  bindEvents();
  refreshIcons();
}

init();
