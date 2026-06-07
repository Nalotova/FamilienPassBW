export type Language = 'ru' | 'de' | 'en';

export interface LocationInfo {
  name: string;
  lat: number;
  lng: number;
  zip?: string;
}

// Major Baden-Württemberg cities/towns with coordinates and zip codes for lookup
export const MAJOR_BW_CITIES: LocationInfo[] = [
  { name: 'Stuttgart', lat: 48.7758, lng: 9.1829, zip: '70173' },
  { name: 'Karlsruhe', lat: 49.0069, lng: 8.4037, zip: '76133' },
  { name: 'Mannheim', lat: 49.4875, lng: 8.4660, zip: '68159' },
  { name: 'Freiburg im Breisgau', lat: 47.9990, lng: 7.8421, zip: '79098' },
  { name: 'Heidelberg', lat: 49.4077, lng: 8.6908, zip: '69115' },
  { name: 'Ulm', lat: 48.4011, lng: 9.9876, zip: '89073' },
  { name: 'Heilbronn', lat: 49.1426, lng: 9.2155, zip: '74072' },
  { name: 'Pforzheim', lat: 48.8922, lng: 8.7030, zip: '75172' },
  { name: 'Reutlingen', lat: 48.4913, lng: 9.2117, zip: '72764' },
  { name: 'Tübingen', lat: 48.5216, lng: 9.0576, zip: '72070' },
  { name: 'Ludwigsburg', lat: 48.8975, lng: 9.1917, zip: '71638' },
  { name: 'Esslingen am Neckar', lat: 48.7423, lng: 9.3094, zip: '73728' },
  { name: 'Villingen-Schwenningen', lat: 48.0583, lng: 8.4583, zip: '78048' },
  { name: 'Baden-Baden', lat: 48.7619, lng: 8.2408, zip: '76530' },
  { name: 'Triberg im Schwarzwald', lat: 48.1306, lng: 8.2325, zip: '78098' },
  { name: 'Konstanz', lat: 47.6779, lng: 9.1732, zip: '78462' },
  { name: 'Ravensburg', lat: 47.7801, lng: 9.6106, zip: '88212' },
  { name: 'Friedrichshafen', lat: 47.6542, lng: 9.4795, zip: '88045' },
  { name: 'Aalen', lat: 48.8371, lng: 10.0936, zip: '73430' },
  { name: 'Goffenburg (Offenburg)', lat: 48.4698, lng: 7.9405, zip: '77652' },
  { name: 'Rastatt', lat: 48.8574, lng: 8.2045, zip: '76437' },
  { name: 'Waiblingen', lat: 48.8302, lng: 9.3168, zip: '71332' },
  { name: 'Schwäbisch Hall', lat: 49.1122, lng: 9.7375, zip: '74523' },
  { name: 'Göppingen', lat: 48.7025, lng: 9.6517, zip: '73033' },
  { name: 'Biberach an der Riß', lat: 48.0984, lng: 9.7885, zip: '88400' },
  { name: 'Lörrach', lat: 47.6156, lng: 7.6612, zip: '79539' },
  { name: 'Titisee-Neustadt', lat: 47.9023, lng: 8.2136, zip: '79822' },
  { name: 'Singen (Hohentwiel)', lat: 47.7624, lng: 8.8359, zip: '78224' },
];

export const UI_TRANSLATIONS = {
  ru: {
    appTitle: "Landesfamilienpass BW 2026",
    base: "База",
    catalog: "Каталог",
    freeCoupons: "Свободные купоны",
    trips: "Поездки",
    mark: "Отметить",
    marked: "Отмечено",
    map: "Карта",
    openMap: "Открыть карту",
    resetPhCache: "Очистить кэш фото",
    photoNotFound: "Фото пока не найдено",
    loadingPhoto: "Загрузка фото...",
    couponConditions: "Условия купона",
    freeEntry: "Бесплатный вход",
    discount: "Скидка",
    specialPrice: "Специальная цена",
    freeLabel: "Бесплатно",
    discountLabel: "Скидка",
    specialPriceLabel: "Спеццена",
    city: "Город",
    type: "Тип",
    distance: "Расстояние",
    travelTime: "Время в пути",
    weather: "Погода",
    indoor: "В помещении",
    outdoor: "На улице",
    mixed: "Смешанный формат",
    note: "Заметка",
    addNote: "Добавить заметку",
    save: "Сохранить",
    cancel: "Отмена",
    edit: "Редактировать",
    used: "Использовано",
    unused: "Не использовано",
    available: "Доступно",
    remaining: "Осталось",
    useCoupon: "Использовать купон",
    useFreeCoupon: "Использовать свободный купон",
    placeName: "Название места",
    date: "Дата",
    history: "История",
    noResults: "Ничего не найдено",
    filters: "Фильтры",
    all: "Все",
    resetFilters: "Сбросить фильтры",
    sortBy: "Сортировка",
    sortByDistance: "По расстоянию",
    sortByCity: "По городу",
    sortByType: "По типу",
    closestFirst: "Сначала ближайшие",
    unusedFirst: "Сначала неиспользованные",
    freeFirst: "Сначала бесплатные",
    badWeather: "На плохую погоду",
    teenagers: "Для подростков",
    details: "Подробнее",
    website: "Сайт",
    googlePlacesPhoto: "Фото: Google Places",
    photoWrong: "Фото неверное",
    updatePhoto: "Обновить фото",
    manualPhotoUrl: "Ссылка на фото",
    savePhoto: "Сохранить фото",
    delete: "Удалить",
    confirm: "Подтвердить",
    yes: "Да",
    no: "Нет",
    placePhoto: "Фото места",
    photoSourceLabel: "Источник: ",
    manualSource: "Вручную",
    pastePhotoUrl: "Вставьте URL-адрес фотографии для этого места:",
    searchingLabel: "Поиск...",
    photoUpdatedLabel: "Фото обновлено!",
    notFoundInGoogleLabel: "Не найдено в Google Places",
    savedLabel: "Сохранено!",

    // Aliases to avoid breaking legacy code
    baseLabel: "База",
    changeLocation: "Изменить локацию",
    catalogTab: "Каталог",
    couponsTab: "Свободные купоны",
    ideasTab: "Поездки",
    searchPlaceholder: "Поиск по названию или городу...",
    filtersBtn: "Фильтры",
    filtersActive: "(активно)",
    resultsFound: "Найдено объектов",
    noResultsSub: "Попробуйте изменить параметры фильтра или поиска.",
    photoNotFoundLabel: "Фото пока не найдено",
    usedTag: "Использовано",
    revertBtn: "Использовано",
    markBtn: "Отметить",
    mapBtn: "Карта",
    km: "км",
    h: "ч",
    min: "мин",
    suitBadWeather: "На плохую погоду",
    suitDryWeather: "На хорошую погоду (на улице)",
    suitMixedWeather: "Смешанный формат",
    itemForTeens: "Для подростков",
    itemForKids: "Для детей",
    copuonCardDetails: "Условия купона",
    notesLabel: "Заметка",
    notesPlaceholder: "Добавить заметку",
    cancelBtn: "Отмена",
    openWebsite: "Сайт",
    toggleUsedBtn: "Использовать купон",
    toggleUnusedBtn: "Отменить использование",
    stateMuseumTitle: "Государственный музей на выбор",
    remainingCoupons: "Осталось купонов",
    outOf: "из",
    useCouponBtn: "Использовать свободный купон",
    usageFormTitle: "Внесите данные об использовании",
    cityLabel: "Город",
    cityPlaceholder: "Штутгарт",
    placeLabel: "Место",
    placePlaceholder: "Название музея",
    dateLabel: "Дата",
    saveCostBtn: "Сохранить",
    couponHistoryTitle: "История купонов",
    couponDisclaimer: "Разовый купон на бесплатный вход в государственные музеи BW (всего 6 шт. за год)",
    weekendIdeaTitle: "Идея на выходные: Штутгарт",
    weekendIdeaText: "6 объектов — отличный план на день!",
    seeAllIdeas: "Смотреть все подборки →",
    objectsInRegion: "объектов в этом регионе",
    freeTag: "Бесплатный вход",
    discountTag: "Скидка",
    specialTag: "Специальная цена",

    // Filters component specific aliases
    filtersTitle: "Фильтры",
    allTypes: "Все типы",
    anyConditions: "Любые",
    sortLabel: "Сортировка",
    sortDistance: "По расстоянию",
    sortCity: "По городу",
    sortType: "По типу",
    sortUnused: "Сначала неиспользованные",
    sortFree: "Сначала бесплатные",
    distFilterLabel: "Расстояние",
    distAny: "Все",
    distUpTo50: "До 50 км",
    distUpTo100: "До 100 км",
    distUpTo150: "До 150 км",
    distOver150: "Более 150 км",
    statusFilterLabel: "Статус",
    statusAll: "Все",
    statusUnused: "Не использовано",
    statusUsed: "Использовано",
    typeFilterLabel: "Тип",
    condFilterLabel: "Условия",
    filterIndoor: "На плохую погоду",
    filterTeens: "Для подростков",
    resetBtn: "Сбросить фильтры",

    // CouponsTab aliases
    couponsTitle: "Свободные купоны",
    ideasTitle: "Идеи поездок",
    ideasSubtitle: "Мы сгруппировали объекты по регионам, чтобы вы могли удобно спланировать поездку на целый день или выходные. Выберите направление и посмотрите, что находится рядом друг с другом.",
    couponsSubtitle: "Разовый купон на бесплатный вход в государственные музеи BW (всего 6 шт. за год)",
    couponsMuseumChoice: "Использовать свободный купон",
    couponsLeft: "Осталось купонов",
    couponsUseBtn: "Использовать купон",
    couponsFillForm: "Внесите данные об использовании",
    couponsPlaceLabel: "Название места",
    couponsNamePlaceholder: "Название музея",
    couponsSaveUsage: "Сохранить",
    couponsHistory: "История",

    // Wizard modal aliases
    locationModalTitle: "Где вы находитесь в Баден-Вюртемберге?",
    locationModalSubtitle: "Это позволит автоматически рассчитать расстояние и ориентировочное время в пути до всех 54 объектов Landesfamilienpass 2026.",
    detectGps: "Определить по GPS / Геолокации",
    gpsActive: "GPS координаты установлены!",
    gpsError: "Не удалось получить геопозицию. Пожалуйста, выберите город вручную.",
    searchCityZip: "Введите город, zip-код или выберите из списка...",
    popularCities: "Популярные города начала маршрута:",
    close: "Закрыть",
    geolocationNotSupported: "Геолокация не поддерживается вашим браузером.",
    gpsCoordsLabel: "📍 GPS Координаты",
    locating: "Определение...",
    foundCities: "Найденные города:",
    noMatchingCities: "Нет подходящих городов земли BW",
  },
  de: {
    appTitle: "Landesfamilienpass BW 2026",
    base: "Basis",
    catalog: "Katalog",
    freeCoupons: "Freie Gutscheine",
    trips: "Ausflüge",
    mark: "Markieren",
    marked: "Markiert",
    map: "Karte",
    openMap: "Karte öffnen",
    resetPhCache: "Foto-Cache löschen",
    photoNotFound: "Foto noch nicht gefunden",
    loadingPhoto: "Foto wird geladen...",
    couponConditions: "Gutscheinbedingungen",
    freeEntry: "Kostenfreier Eintritt",
    discount: "Ermäßigung",
    specialPrice: "Sonderpreis",
    freeLabel: "Kostenlos",
    discountLabel: "Ermäßigung",
    specialPriceLabel: "Sonderpreis",
    city: "Stadt",
    type: "Typ",
    distance: "Entfernung",
    travelTime: "Fahrzeit",
    weather: "Wetter",
    indoor: "Innenbereich",
    outdoor: "Außenbereich",
    mixed: "Gemischt",
    note: "Notiz",
    addNote: "Notiz hinzufügen",
    save: "Speichern",
    cancel: "Abbrechen",
    edit: "Bearbeiten",
    used: "Verwendet",
    unused: "Nicht verwendet",
    available: "Verfügbar",
    remaining: "Verbleibend",
    useCoupon: "Gutschein verwenden",
    useFreeCoupon: "Freien Gutschein verwenden",
    placeName: "Name des Ortes",
    date: "Datum",
    history: "Verlauf",
    noResults: "Keine Ergebnisse gefunden",
    filters: "Filter",
    all: "Alle",
    resetFilters: "Filter zurücksetzen",
    sortBy: "Sortierung",
    sortByDistance: "Nach Entfernung",
    sortByCity: "Nach Stadt",
    sortByType: "Nach Typ",
    closestFirst: "Nächste zuerst",
    unusedFirst: "Nicht verwendete zuerst",
    freeFirst: "Kostenfreie zuerst",
    badWeather: "Für schlechtes Wetter",
    teenagers: "Für Jugendliche",
    details: "Details",
    website: "Website",
    googlePlacesPhoto: "Foto: Google Places",
    photoWrong: "Foto falsch",
    updatePhoto: "Foto aktualisieren",
    manualPhotoUrl: "Foto-Link",
    savePhoto: "Foto speichern",
    delete: "Löschen",
    confirm: "Bestätigen",
    yes: "Ja",
    no: "Nein",
    placePhoto: "Ortsfoto",
    photoSourceLabel: "Quelle: ",
    manualSource: "Manuell",
    pastePhotoUrl: "Fügen Sie die Foto-URL für diesen Ort ein:",
    searchingLabel: "Suche...",
    photoUpdatedLabel: "Foto aktualisiert!",
    notFoundInGoogleLabel: "Nicht in Google Places gefunden",
    savedLabel: "Gespeichert!",

    // Aliases
    baseLabel: "Basis",
    changeLocation: "Ort ändern",
    catalogTab: "Katalog",
    couponsTab: "Freie Gutscheine",
    ideasTab: "Ausflüge",
    searchPlaceholder: "Suche nach Name oder Stadt...",
    filtersBtn: "Filter",
    filtersActive: "(aktiv)",
    resultsFound: "Sights gefunden",
    noResultsSub: "Versuchen Sie, die Filter- oder Sucheinstellungen zu ändern.",
    photoNotFoundLabel: "Foto noch nicht gefunden",
    usedTag: "Verwendet",
    revertBtn: "Verwendet",
    markBtn: "Markieren",
    mapBtn: "Karte",
    km: "km",
    h: "Std.",
    min: "Min.",
    suitBadWeather: "Für schlechtes Wetter",
    suitDryWeather: "Für schönes Wetter (Außenbereich)",
    suitMixedWeather: "Gemischt",
    itemForTeens: "Für Jugendliche",
    itemForKids: "Für jüngere Kinder",
    copuonCardDetails: "Gutscheinbedingungen",
    notesLabel: "Notiz",
    notesPlaceholder: "Notiz hinzufügen",
    cancelBtn: "Abbrechen",
    openWebsite: "Website",
    toggleUsedBtn: "Gutschein verwenden",
    toggleUnusedBtn: "Nutzung rückgängig machen",
    stateMuseumTitle: "Staatliches Museum nach Wahl",
    remainingCoupons: "Verbleibende Gutscheine",
    outOf: "von",
    useCouponBtn: "Freien Gutschein verwenden",
    usageFormTitle: "Nutzungsdaten eintragen",
    cityLabel: "Stadt",
    cityPlaceholder: "Stuttgart",
    placeLabel: "Ort",
    placePlaceholder: "Museumsname",
    dateLabel: "Datum",
    saveCostBtn: "Speichern",
    couponHistoryTitle: "Gutscheinverlauf",
    couponDisclaimer: "Einmalgutschein für freien Eintritt in staatliche Museen BW (insgesamt 6 Stück pro Jahr)",
    weekendIdeaTitle: "Wochenendidee: Stuttgart",
    weekendIdeaText: "6 Sights — toller Tagesplan!",
    seeAllIdeas: "Alle Ausflugsideen ansehen →",
    objectsInRegion: "Ziele in dieser Region",
    freeTag: "Kostenfreier Eintritt",
    discountTag: "Ermäßigung",
    specialTag: "Sonderpreis",

    // Filters component specific aliases
    filtersTitle: "Filter",
    allTypes: "Alle Typen",
    anyConditions: "Alle Bedingungen",
    sortLabel: "Sortierung",
    sortDistance: "Nach Entfernung",
    sortCity: "Nach Stadt",
    sortType: "Nach Typ",
    sortUnused: "Nicht verwendete zuerst",
    sortFree: "Kostenfreie zuerst",
    distFilterLabel: "Entfernung",
    distAny: "Alle",
    distUpTo50: "Bis 50 km",
    distUpTo100: "Bis 100 km",
    distUpTo150: "Bis 150 km",
    distOver150: "Über 150 km",
    statusFilterLabel: "Nutzungsstatus",
    statusAll: "Alle",
    statusUnused: "Nicht verwendet",
    statusUsed: "Verwendet",
    typeFilterLabel: "Typ",
    condFilterLabel: "Bedingungen",
    filterIndoor: "Für schlechtes Wetter",
    filterTeens: "Für Jugendliche",
    resetBtn: "Filter zurücksetzen",

    // CouponsTab aliases
    couponsTitle: "Freie Gutscheine",
    ideasTitle: "Ausflugsideen",
    ideasSubtitle: "Wir haben die Ziele nach Regionen gruppiert, damit Sie bequem einen Tages- oder Wochenendausflug planen können. Wählen Sie ein Ziel aus und sehen Sie, was nah beieinander liegt.",
    couponsSubtitle: "Einmalgutschein für freien Eintritt in staatliche Museen BW (insgesamt 6 Stück pro Jahr)",
    couponsMuseumChoice: "Freien Gutschein verwenden",
    couponsLeft: "Verbleibende Gutscheine",
    couponsUseBtn: "Gutschein verwenden",
    couponsFillForm: "Nutzungsdaten eintragen",
    couponsPlaceLabel: "Name des Ortes",
    couponsNamePlaceholder: "Museumsname",
    couponsSaveUsage: "Speichern",
    couponsHistory: "Verlauf",

    // Wizard modal aliases
    locationModalTitle: "Wo befinden Sie sich in Baden-Württemberg?",
    locationModalSubtitle: "Dadurch werden die Entfernung und die ungefähre Fahrzeit zu allen 54 Objekten des Landesfamilienpasses 2026 automatisch berechnet.",
    detectGps: "Über GPS / Standort bestimmen",
    gpsActive: "GPS-Koordinaten festgelegt!",
    gpsError: "Standort konnte nicht bestimmt werden. Bitte wählen Sie eine Stadt manuell aus.",
    searchCityZip: "Stadt, PLZ eingeben oder aus Liste wählen...",
    popularCities: "Beliebte Startorte:",
    close: "Schließen",
    geolocationNotSupported: "Standortbestimmung wird von Ihrem Browser nicht unterstützt.",
    gpsCoordsLabel: "📍 GPS Standort",
    locating: "Ortung...",
    foundCities: "Gefundene Städte:",
    noMatchingCities: "Keine passenden Städte in BW gefunden",
  },
  en: {
    appTitle: "Landesfamilienpass BW 2026",
    base: "Base",
    catalog: "Catalog",
    freeCoupons: "Free coupons",
    trips: "Trips",
    mark: "Mark",
    marked: "Marked",
    map: "Map",
    openMap: "Open map",
    resetPhCache: "Clear photo cache",
    photoNotFound: "Photo not found yet",
    loadingPhoto: "Loading photo...",
    couponConditions: "Coupon conditions",
    freeEntry: "Free entry",
    discount: "Discount",
    specialPrice: "Special price",
    freeLabel: "Free",
    discountLabel: "Discount",
    specialPriceLabel: "Special price",
    city: "City",
    type: "Type",
    distance: "Distance",
    travelTime: "Travel time",
    weather: "Weather",
    indoor: "Indoor",
    outdoor: "Outdoor",
    mixed: "Mixed",
    note: "Note",
    addNote: "Add note",
    save: "Save",
    cancel: "Cancel",
    edit: "Edit",
    used: "Used",
    unused: "Unused",
    available: "Available",
    remaining: "Remaining",
    useCoupon: "Use coupon",
    useFreeCoupon: "Use free coupon",
    placeName: "Place name",
    date: "Date",
    history: "History",
    noResults: "No results found",
    filters: "Filters",
    all: "All",
    resetFilters: "Reset filters",
    sortBy: "Sort by",
    sortByDistance: "By distance",
    sortByCity: "By city",
    sortByType: "By type",
    closestFirst: "Closest first",
    unusedFirst: "Unused first",
    freeFirst: "Free first",
    badWeather: "For bad weather",
    teenagers: "For teenagers",
    details: "Details",
    website: "Website",
    googlePlacesPhoto: "Photo: Google Places",
    photoWrong: "Wrong photo",
    updatePhoto: "Update photo",
    manualPhotoUrl: "Photo link",
    savePhoto: "Save photo",
    delete: "Delete",
    confirm: "Confirm",
    yes: "Yes",
    no: "No",
    placePhoto: "Place Photo",
    photoSourceLabel: "Source: ",
    manualSource: "Manual",
    pastePhotoUrl: "Paste the photo URL for this place:",
    searchingLabel: "Searching...",
    photoUpdatedLabel: "Photo updated!",
    notFoundInGoogleLabel: "Not found in Google Places",
    savedLabel: "Saved!",

    // Aliases
    baseLabel: "Base",
    changeLocation: "Change location",
    catalogTab: "Catalog",
    couponsTab: "Free coupons",
    ideasTab: "Trips",
    searchPlaceholder: "Search by name or city...",
    filtersBtn: "Filters",
    filtersActive: "(active)",
    resultsFound: "Sights found",
    noResultsSub: "Try changing the filter or search settings.",
    photoNotFoundLabel: "Photo not found yet",
    usedTag: "Used",
    revertBtn: "Used",
    markBtn: "Mark",
    mapBtn: "Map",
    km: "km",
    h: "h",
    min: "min",
    suitBadWeather: "For bad weather",
    suitDryWeather: "Only suitable in dry weather",
    suitMixedWeather: "Mixed",
    itemForTeens: "For teenagers",
    itemForKids: "For kids",
    copuonCardDetails: "Coupon conditions",
    notesLabel: "Note",
    notesPlaceholder: "Add note",
    cancelBtn: "Cancel",
    openWebsite: "Website",
    toggleUsedBtn: "Use coupon",
    toggleUnusedBtn: "Revert usage",
    stateMuseumTitle: "State Museum of Choice",
    remainingCoupons: "Coupons left",
    outOf: "of",
    useCouponBtn: "Use free coupon",
    usageFormTitle: "Enter usage details",
    cityLabel: "City",
    cityPlaceholder: "Stuttgart",
    placeLabel: "Place",
    placePlaceholder: "Museum name",
    dateLabel: "Date",
    saveCostBtn: "Save",
    couponHistoryTitle: "Admission History",
    couponDisclaimer: "Single-use coupon for free admission into state museums of Baden-Württemberg (6 per year total)",
    weekendIdeaTitle: "Weekend Idea: Stuttgart",
    weekendIdeaText: "6 Sights — perfect daily plan!",
    seeAllIdeas: "View all trip ideas →",
    objectsInRegion: "sights in this region",
    freeTag: "Free entry",
    discountTag: "Discount",
    specialTag: "Special price",

    // Filters component specific aliases
    filtersTitle: "Filters",
    allTypes: "All Types",
    anyConditions: "Any conditions",
    sortLabel: "Sort by",
    sortDistance: "By distance",
    sortCity: "By city",
    sortType: "By type",
    sortUnused: "Unused first",
    sortFree: "Free first",
    distFilterLabel: "Distance",
    distAny: "All",
    distUpTo50: "Up to 50 km",
    distUpTo100: "Up to 100 km",
    distUpTo150: "Up to 150 km",
    distOver150: "Over 150 km",
    statusFilterLabel: "Usage status",
    statusAll: "All",
    statusUnused: "Unused",
    statusUsed: "Used",
    typeFilterLabel: "Type",
    condFilterLabel: "Conditions",
    filterIndoor: "For bad weather",
    filterTeens: "For teenagers",
    resetBtn: "Reset filters",

    // CouponsTab aliases
    couponsTitle: "Free coupons",
    ideasTitle: "Trip Ideas",
    ideasSubtitle: "We have categorized the sights by regions to help you easily plan full-day or weekend road trips. Choose a destination and see which attractions are close to each other.",
    couponsSubtitle: "Single-use coupon for free admission into state museums of Baden-Württemberg (6 per year total)",
    couponsMuseumChoice: "Use free coupon",
    couponsLeft: "Coupons left",
    couponsUseBtn: "Use coupon",
    couponsFillForm: "Enter usage details",
    couponsPlaceLabel: "Place name",
    couponsNamePlaceholder: "Museum name",
    couponsSaveUsage: "Save",
    couponsHistory: "History",

    // Wizard modal aliases
    locationModalTitle: "Where are you in Baden-Württemberg?",
    locationModalSubtitle: "This will automatically calculate driving distances and approximate travel times to all 54 sights in the Landesfamilienpass 2026.",
    detectGps: "Detect via GPS / Geolocation",
    gpsActive: "GPS location established!",
    gpsError: "Could not track GPS coordinates. Please select a city manually.",
    searchCityZip: "Enter city, ZIP code or choose from the list...",
    popularCities: "Popular starting cities:",
    close: "Close",
    geolocationNotSupported: "Geolocation is not supported by your browser.",
    gpsCoordsLabel: "📍 GPS Location",
    locating: "Locating...",
    foundCities: "Found cities:",
    noMatchingCities: "No matching Baden-Württemberg cities found",
  }
};

export function getLocalized(value: any, currentLanguage: Language): string {
  if (typeof value === "string") return value;
  if (!value) return "";
  return value[currentLanguage] || value?.ru || value?.de || value?.en || "";
}

const typeTranslations: Record<string, { ru: string; de: string; en: string }> = {
  museum: { ru: "Музей", de: "Museum", en: "Museum" },
  schloss: { ru: "Замок", de: "Schloss", en: "Castle" },
  kloster: { ru: "Монастырь", de: "Kloster", en: "Monastery" },
  park: { ru: "Парк", de: "Park", en: "Park" },
  zoo: { ru: "Зоопарк", de: "Zoo", en: "Zoo" },
  freizeitpark: { ru: "Парк развлечений", de: "Freizeitpark", en: "Amusement park" },
  science_center: { ru: "Научный центр", de: "Science Center", en: "Science center" },
  bad: { ru: "Бассейн", de: "Bad", en: "Swimming pool" },
  museum_village: { ru: "Музей под открытым небом", de: "Freilichtmuseum", en: "Open-air museum" },
  bergwerk: { ru: "Шахта / рудник", de: "Bergwerk", en: "Mine" },
  other: { ru: "Другое", de: "Sonstiges", en: "Other" }
};

export function normalizeType(type: string): string {
  if (!type) return "other";
  const value = type.toLowerCase();

  if (value.includes("kloster") || value.includes("монастырь")) return "kloster";
  if (value.includes("museum") || value.includes("музей")) return "museum";
  if (value.includes("schloss") || value.includes("замок")) return "schloss";
  if (value.includes("park") || value.includes("парк")) return "park";
  if (value.includes("zoo") || value.includes("wilhelma") || value.includes("зоопарк")) return "zoo";
  if (value.includes("science") || value.includes("научн")) return "science_center";
  if (value.includes("bad") || value.includes("freibad") || value.includes("бассейн")) return "bad";
  if (value.includes("bergwerk") || value.includes("шахта")) return "bergwerk";

  return "other";
}

export function translateType(type: string, lang: Language): string {
  const key = normalizeType(type);
  return typeTranslations[key]?.[lang] || typeTranslations[key]?.ru || type;
}

export function normalizeWeather(value: string): string {
  if (!value) return "mixed";
  const v = value.toLowerCase();

  if (v.includes("innen") || v.includes("indoor") || v.includes("помещени")) return "indoor";
  if (v.includes("außen") || v.includes("outdoor") || v.includes("улице")) return "outdoor";
  if (v.includes("mixed") || v.includes("gemischt") || v.includes("смешанн")) return "mixed";

  return value;
}

export function translateWeather(value: string, lang: Language): string {
  const key = normalizeWeather(value);

  const labels: Record<string, { ru: string; de: string; en: string }> = {
    indoor: { ru: "В помещении", de: "Innenbereich", en: "Indoor" },
    outdoor: { ru: "На улице", de: "Außenbereich", en: "Outdoor" },
    mixed: { ru: "Смешанный формат", de: "Gemischt", en: "Mixed" }
  };

  return labels[key]?.[lang] || labels[key]?.ru || value;
}

export function getLocalizedCouponInfo(place: any, currentLanguage: Language): string {
  if (typeof place.couponInfo === "object") {
    return place.couponInfo[currentLanguage] || place.couponInfo.ru || place.couponInfo.de || place.couponInfo.en || "";
  }

  const raw = place.conditionDetails || place.couponInfo || "";

  if (currentLanguage === "ru") {
    if (raw === "Kostenfreier Eintritt") return "Бесплатный вход";
    if (raw.includes("Kostenfreier Eintritt")) {
      return raw.replace("Kostenfreier Eintritt", "Бесплатный вход");
    }
    if (raw.includes("Ermäßigung")) return raw; 
  }

  if (currentLanguage === "en") {
    if (raw === "Kostenfreier Eintritt") return "Free entry";
    if (raw.includes("Kostenfreier Eintritt")) {
      return raw.replace("Kostenfreier Eintritt", "Free entry");
    }
  }

  return raw;
}

// Coordinates of the 54 Sights in Landesfamilienpass 2026
export const SIGHT_COORDINATES: Record<string, { lat: number; lng: number }> = {
  p1: { lat: 48.7761, lng: 9.1798 }, // Landesmuseum Württemberg (Stuttgart)
  p2: { lat: 49.0135, lng: 8.4044 }, // Badisches Landesmuseum (Karlsruhe)
  p3: { lat: 48.7781, lng: 9.1869 }, // Staatsgalerie Stuttgart
  p4: { lat: 49.4807, lng: 9.8973 }, // Schloss und Schlossgarten Weikersheim
  p5: { lat: 49.4836, lng: 8.4621 }, // Barockschloss Mannheim
  p6: { lat: 47.7766, lng: 9.2783 }, // Kloster und Schloss Salem
  p7: { lat: 49.0119, lng: 8.3995 }, // Kunsthalle Karlsruhe
  p8: { lat: 48.7611, lng: 8.2395 }, // Kunsthalle Baden-Baden
  p9: { lat: 49.0112, lng: 8.3846 }, // ZKM Karlsruhe
  p10: { lat: 49.1287, lng: 8.5912 }, // Schloss Bruchsal
  p11: { lat: 48.3622, lng: 9.9921 }, // Kloster Wiblingen (Ulm)
  p12: { lat: 47.7650, lng: 8.8183 }, // Festungsruine Hohentwiel (Singen)
  p13: { lat: 48.8052, lng: 9.1901 }, // Museum für Naturkunde Stuttgart
  p14: { lat: 49.0115, lng: 8.4005 }, // Museum für Naturkunde Karlsruhe
  p15: { lat: 48.7812, lng: 9.1701 }, // Linden-Museum (Stuttgart)
  p16: { lat: 48.7869, lng: 9.0839 }, // Schloss Solitude (Stuttgart)
  p17: { lat: 48.7818, lng: 9.2687 }, // Grabkapelle auf dem Württemberg (Stuttgart)
  p18: { lat: 48.8211, lng: 8.2435 }, // Schloss Favorite (Rastatt)
  p19: { lat: 47.6698, lng: 9.1776 }, // Archäologisches Landesmuseum (Konstanz)
  p20: { lat: 48.7772, lng: 9.1852 }, // Haus der Geschichte (Stuttgart)
  p21: { lat: 49.4795, lng: 8.4950 }, // Technoseum (Mannheim)
  p22: { lat: 48.0084, lng: 9.6582 }, // Kloster Schussenried (Bad Schussenried)
  p23: { lat: 47.6696, lng: 9.5855 }, // Neues Schloss (Tettnang)
  p24: { lat: 48.7188, lng: 9.6895 }, // Burg Wäscherschloss (Wäschenbeuren)
  p25: { lat: 49.4106, lng: 8.7161 }, // Schloss Heidelberg
  p26: { lat: 48.8975, lng: 9.1917 }, // Residenzschloss Ludwigsburg
  p27: { lat: 49.4912, lng: 9.7719 }, // Residenzschloss Mergentheim
  p28: { lat: 49.3842, lng: 8.5714 }, // Schloss und Schlossgarten Schwetzingen
  p29: { lat: 48.3444, lng: 8.4042 }, // Kloster Alpirsbach
  p30: { lat: 48.5611, lng: 9.0601 }, // Kloster und Schloss Bebenhausen (Tübingen)
  p31: { lat: 47.6938, lng: 9.2718 }, // Neues Schloss (Meersburg)
  p32: { lat: 48.8587, lng: 8.2045 }, // Residenzschloss Rastatt
  p33: { lat: 49.0012, lng: 8.8111 }, // Kloster Maulbronn
  p34: { lat: 47.7028, lng: 9.5639 }, // Ravensburger Spieleland (Meckenbeuren)
  p35: { lat: 48.2678, lng: 7.7243 }, // Europa-Park (Rust)
  p36: { lat: 49.0461, lng: 9.0371 }, // Erlebnispark Tripsdrill (Cleebronn)
  p37: { lat: 48.8058, lng: 9.2065 }, // Wilhelma (Stuttgart)
  p38: { lat: 48.8998, lng: 9.1969 }, // Blühendes Barock (Ludwigsburg)
  p39: { lat: 48.0142, lng: 9.4387 }, // Keltenmuseum Heuneburg (Herbertingen)
  p40: { lat: 48.4116, lng: 9.4921 }, // Biosphärenzentrum Schwäbische Alb (Münsingen)
  p41: { lat: 48.6366, lng: 9.5186 }, // Urweltsteinbruch Holzmaden
  p42: { lat: 49.0482, lng: 9.0355 }, // Wildkatzenwelt Stromberg (Cleebronn)
  p43: { lat: 48.0067, lng: 9.6450 }, // Museumsdorf Kürnbach (Bad Schussenried)
  p44: { lat: 48.5678, lng: 9.4000 }, // Freilichtmuseum Beuren
  p45: { lat: 49.2278, lng: 9.2152 }, // Besucherbergwerk Bad Friedrichshall
  p46: { lat: 48.7875, lng: 9.2335 }, // Mercedes-Benz Museum (Stuttgart)
  p47: { lat: 47.6538, lng: 9.4796 }, // Dornier Museum (Friedrichshafen)
  p48: { lat: 48.8351, lng: 10.0911 }, // explorhino Science Center (Aalen)
  p49: { lat: 48.5583, lng: 10.2906 }, // Meteorkrater-Museum (Sontheim)
  p50: { lat: 47.9221, lng: 9.7548 }, // Strand- und Freibad (Bad Waldsee)
  p51: { lat: 47.7719, lng: 8.2464 }, // Schwarzwaldhaus der Sinne (Grafenhausen)
  p52: { lat: 49.1672, lng: 8.6256 }, // Freizeitzentrum Hardtsee (Ubstadt-Weiher)
  p53: { lat: 47.7052, lng: 9.1947 }, // Insel Mainau (Konstanz)
  p54: { lat: 47.8258, lng: 10.0232 }, // Museum im Bock (Leutkirch im Allgäu)
  p55: { lat: 48.8340, lng: 9.1524 }, // Porsche Museum Stuttgart
};

// SIGHT TRANSLATIONS (EN and DE) FOR ALL 54 SIGHTS
export const PLACE_TRANSLATIONS: Record<string, {
  de: { name: string; city: string; description: string; conditionDetails?: string };
  en: { name: string; city: string; description: string; conditionDetails?: string };
}> = {
  p1: {
    de: { name: "Landesmuseum Württemberg", city: "Stuttgart", description: "Das kulturhistorische Landesmuseum mit prachtvollen Schätzen im Alten Schloss." },
    en: { name: "Württemberg State Museum", city: "Stuttgart", description: "The primary historical-cultural museum of the state, located inside the Old Castle." }
  },
  p2: {
    de: { name: "Badisches Landesmuseum", city: "Karlsruhe", description: "Das große Museum für Kultur und Geschichte im prächtigen Schloss Karlsruhe." },
    en: { name: "Baden State Museum", city: "Karlsruhe", description: "A major cultural history museum occupying the majestic Karlsruhe Palace." }
  },
  p3: {
    de: { name: "Staatsgalerie Stuttgart", city: "Stuttgart", description: "Eine der bedeutendsten Kunstsammlungen Deutschlands mit Kunst vom Mittelalter bis zur Gegenwart." },
    en: { name: "Stuttgart State Gallery", city: "Stuttgart", description: "One of Germany's most prominent art museums, showcasing classics and modern masterpieces." }
  },
  p4: {
    de: { name: "Schloss und Schlossgarten Weikersheim", city: "Weikersheim", description: "Ein wunderschönes Renaissanceschloss mit einem der kunstvollsten Barockgärten Baden-Württembergs." },
    en: { name: "Weikersheim Palace and Garden", city: "Weikersheim", description: "A gorgeous Renaissance palace featuring a stunningly preserved baroque pleasure garden." }
  },
  p5: {
    de: { name: "Barockschloss Mannheim", city: "Mannheim", description: "Eines der größten Barockschlösser der Welt mit herrschaftlichen Schauräumen." },
    en: { name: "Mannheim Baroque Palace", city: "Mannheim", description: "One of the largest baroque palaces in Europe, complete with grand neoclassical halls." }
  },
  p6: {
    de: { name: "Kloster und Schloss Salem", city: "Salem", description: "Eines der besterhaltenen und eindrucksvollsten Zisterzienserklöster im Bodenseegebiet." },
    en: { name: "Salem Monastery and Palace", city: "Salem", description: "An expansive gothic abbey and palace enclave situated near picturesque Lake Constance." }
  },
  p7: {
    de: { name: "Staatliche Kunsthalle Karlsruhe", city: "Karlsruhe", description: "Ein renommiertes Kunstmuseum mit Schätzen europäischer Malerei aus sieben Jahrhunderten." },
    en: { name: "Karlsruhe Art Gallery", city: "Karlsruhe", description: "A prestigious classical art museum exhibiting spectacular European works over seven centuries." }
  },
  p8: {
    de: { name: "Staatliche Kunsthalle Baden-Baden", city: "Baden-Baden", description: "Ausstellungsforum für zeitgenössische Kunst in der weltbekannten Bäderstadt." },
    en: { name: "Baden-Baden Art Museum", city: "Baden-Baden", description: "A contemporary arts center presenting international exhibitions in the historic thermal spa resort." }
  },
  p9: {
    de: { name: "ZKM | Zentrum für Kunst und Medien", city: "Karlsruhe", description: "Ein weltweit einzigartiges Haus für interaktive Medienkunst und digitale Kultur." },
    en: { name: "ZKM Center for Art and Media", city: "Karlsruhe", description: "A unique interactive technology museum, presenting digital mediums and cyber arts." }
  },
  p10: {
    de: { name: "Schloss Bruchsal", city: "Bruchsal", description: "Die einzige geistliche Barockresidenz am Oberrhein, berühmt für ihr prunkvolles Treppenhaus." },
    en: { name: "Bruchsal Palace", city: "Bruchsal", description: "The grand baroque residence of the prince-bishops, featuring a famous ornate central staircase." }
  },
  p11: {
    de: { name: "Kloster Wiblingen", city: "Ulm", description: "Ehemalige Benediktinerabtei mit einem atemberaubenden, farbenprächtigen barocken Bibliotheksaal." },
    en: { name: "Wiblingen Abbey", city: "Ulm", description: "A Benedictine monastery renowned for its breathtakingly colorful rococo library hall." }
  },
  p12: {
    de: { name: "Festungsruine Hohentwiel", city: "Singen", description: "Die größte Festungsruine Deutschlands auf einem markanten Vulkankegel gelegen." },
    en: { name: "Hohentwiel Fortress Ruins", city: "Singen", description: "Germany's largest fortress ruin, majestically situated atop a steep volcanic peak." }
  },
  p13: {
    de: { name: "Naturkundemuseum Stuttgart", city: "Stuttgart", description: "Naturkundemuseum mit beeindruckenden Dinosaurierfossilien im Museum am Löwentor." },
    en: { name: "Stuttgart Museum of Natural History", city: "Stuttgart", description: "A fantastic biological and paleontological exhibition featuring real prehistoric dinosaurs." }
  },
  p14: {
    de: { name: "Staatliches Museum für Naturkunde", city: "Karlsruhe", description: "Faszinierende Ausstellungen über Geologie, Mineralogie und exotische Lebende Tiere." },
    en: { name: "Karlsruhe Natural History Museum", city: "Karlsruhe", description: "An incredible science sanctuary showcasing animal taxonomy, rare minerals, and live aquariums." }
  },
  p15: {
    de: { name: "Linden-Museum", city: "Stuttgart", description: "Eines der führenden Museen für Völkerkunde mit Schätzen aus Afrika, Asien und Amerika." },
    en: { name: "Linden Museum", city: "Stuttgart", description: "A premier national ethnological museum showcasing historic cultures from across the world." }
  },
  p16: {
    de: { name: "Schloss Solitude", city: "Stuttgart", description: "Ein malerisches Lust- und Jagdschloss des Herzogs Carl Eugen mit weitem Panoramablick." },
    en: { name: "Solitude Palace", city: "Stuttgart", description: "A charming neoclassical hunting lodge built by Duke Karl Eugen, boasting scenic hilltop vistas." }
  },
  p17: {
    de: { name: "Grabkapelle auf dem Württemberg", city: "Stuttgart", description: "Mausoleum in den Weinbergen – ein ewiges Liebesdenkmal mit herrlichem Ausblick." },
    en: { name: "Sepulchral Chapel on Württemberg", city: "Stuttgart", description: "A romantic Greek-orthodox memorial chapel overlooking beautiful cascading vineyards." }
  },
  p18: {
    de: { name: "Schloss Favorite Rastatt", city: "Rastatt", description: "Das älteste deutsche Porzellanschloss mit einer weltberühmten Sammlung barocker Handwerkskunst." },
    en: { name: "Favorite Palace Rastatt", city: "Rastatt", description: "Europe's earliest baroque decorative porcelain palace, surrounded by a lush English garden." }
  },
  p19: {
    de: { name: "Archäologisches Landesmuseum", city: "Konstanz", description: "Faszinierende archäologische Funde aus Tausenden von Jahren Landesgeschichte am Bodensee." },
    en: { name: "Archaeological Museum Konstanz", city: "Konstanz", description: "A fascinating archaeological museum displaying regional lake dwelling artifacts and historical treasures." }
  },
  p20: {
    de: { name: "Haus der Geschichte Baden-Württemberg", city: "Stuttgart", description: "Ein modernes Museum zur bewegten Geschichte der Region und der Demokratieentwicklung." },
    en: { name: "House of History Baden-Württemberg", city: "Stuttgart", description: "An engaging museum illustrating regional social and political history from Napoleon to modern times." }
  },
  p21: {
    de: { name: "Technoseum", city: "Mannheim", description: "Das Landesmuseum für Technik und Arbeit mit vielen spannenden Experimentierstationen." },
    en: { name: "Technoseum Mannheim", city: "Mannheim", description: "An interactive museum tracking the evolution of physics, steam power, computing, and industry." }
  },
  p22: {
    de: { name: "Kloster Schussenried", city: "Bad Schussenried", description: "Prämonstratenserkloster mit einem prachtvollen, barocken Bibliothekssaal." },
    en: { name: "Schussenried Abbey", city: "Bad Schussenried", description: "A historic monastery featuring a gorgeous, richly painted baroque library." }
  },
  p23: {
    de: { name: "Neues Schloss Tettnang", city: "Tettnang", description: "Eine opulente barocke Residenz der hochadeligen Grafen von Montfort." },
    en: { name: "Tettnang New Palace", city: "Tettnang", description: "The opulent baroque residence of the Counts of Montfort, styled with French period designs." }
  },
  p24: {
    de: { name: "Burg Wäscherschloss", city: "Wäschenbeuren", description: "Die Wiege der Staufer – eine trutzige, sehr gut erhaltene staufische Dienstmannenburg." },
    en: { name: "Wäscherschloss Castle", city: "Wäschenbeuren", description: "An authentic, deeply preserved medieval fortress serving as the ancestral cradle of the Hohenstaufen." }
  },
  p25: {
    de: { name: "Schloss Heidelberg", city: "Heidelberg", description: "Die weltberühmte Schlossruine, der Inbegriff deutscher Romantik hoch über dem Neckar." },
    en: { name: "Heidelberg Castle", city: "Heidelberg", description: "The globally famous castle ruin, a true icon of German Romanticism hovering over the river Neckar." }
  },
  p26: {
    de: { name: "Residenzschloss Ludwigsburg", city: "Ludwigsburg", description: "Das 'Schwäbische Versailles' – eine der größten barocken Schlossanlagen Europas." },
    en: { name: "Ludwigsburg Residential Palace", city: "Ludwigsburg", description: "Known as the 'Swabian Versailles', one of Europe's largest original baroque palaces." }
  },
  p27: {
    de: { name: "Residenzschloss Mergentheim", city: "Bad Mergentheim", description: "Residenzschloss des Deutschen Ordens – weitreichende Einblicke in ritterliche Ordenstraditionen." },
    en: { name: "Mergentheim Residential Palace", city: "Bad Mergentheim", description: "The grand high-medieval headquarter of the Teutonic Knights, preserving deep crusader heritage." }
  },
  p28: {
    de: { name: "Schloss und Schlossgarten Schwetzingen", city: "Schwetzingen", description: "Einzigartige Kurfürstenresidenz mit einem spektakulären, weitläufigen Barockgarten." },
    en: { name: "Schwetzingen Palace and Gardens", city: "Schwetzingen", description: "A serene palace surrounded by an incredibly complex botanical garden and mosque-folly." }
  },
  p29: {
    de: { name: "Kloster Alpirsbach", city: "Alpirsbach", description: "Ein fast unberührtes romanisches Kloster aus dem 11. Jahrhundert mitten im Schwarzwald." },
    en: { name: "Alpirsbach Abbey", city: "Alpirsbach", description: "An elegant, perfectly preserved 11th-century Romanesque monastery deep in the Black Forest." }
  },
  p30: {
    de: { name: "Kloster und Schloss Bebenhausen", city: "Tübingen", description: "Ein intimes Jagdschloss und beschauliches mittelalterliches Zisterzienserkloster." },
    en: { name: "Bebenhausen Abbey and Palace", city: "Tübingen", description: "A tranquil medieval Cistercian monastery later adapted into a royal hunting lodge." }
  },
  p31: {
    de: { name: "Neues Schloss Meersburg", city: "Meersburg", description: "Die barocke Residenz der Konstanzer Fürstbischöfe mit Panoramablick auf den See." },
    en: { name: "Meersburg New Castle", city: "Meersburg", description: "The luxurious baroque palace of the Prince-Bishops of Konstanz, offering stunning lake panoramas." }
  },
  p32: {
    de: { name: "Residenzschloss Rastatt", city: "Rastatt", description: "Die erste barocke Residenz am Oberrhein, erbaut nach dem Vorbild von Versailles." },
    en: { name: "Rastatt Residential Palace", city: "Rastatt", description: "The earliest baroque residence in the Upper Rhine, inspired directly by Versailles." }
  },
  p33: {
    de: { name: "Kloster Maulbronn", city: "Maulbronn", description: "UNESCO-Welterbe und die am besten erhaltene mittelalterliche Klosteranlage nördlich der Alpen." },
    en: { name: "Maulbronn Monastery", city: "Maulbronn", description: "UNESCO World Heritage site and the most perfectly preserved medieval monastery north of the Alps." }
  },
  p34: {
    de: { name: "Ravensburger Spieleland", city: "Meckenbeuren", description: "Der Freizeitpark am Bodensee mit über 70 Attraktionen rund um Spiele-Klassiker." },
    en: { name: "Ravensburger Spieleland", city: "Meckenbeuren", description: "A famous board-game themed family amusement park featuring over 70 dynamic rides." }
  },
  p35: {
    de: { name: "Europa-Park", city: "Rust", description: "Deutschlands größter Freizeitpark mit spektakulären Achterbahnen und europäischen Themenbereichen." },
    en: { name: "Europa-Park", city: "Rust", description: "Germany's biggest amusement park, offering adrenaline-pumping coasters and European themed lands." }
  },
  p36: {
    de: { name: "Erlebnispark Tripsdrill", city: "Cleebronn", description: "Erlebnispark und Wildparadies mit liebevollen schwäbischen Holzachterbahnen." },
    en: { name: "Tripsdrill Adventure Park", city: "Cleebronn", description: "Germany's historic amusement park featuring high-speed wooden coasters and an animal reserve." }
  },
  p37: {
    de: { name: "Wilhelma", city: "Stuttgart", description: "Einzigartige Kombination aus prachtvollem botanischem Garten und traditionsreichem Zoo." },
    en: { name: "Wilhelma Zoo & Botanical Garden", city: "Stuttgart", description: "A beautiful historic Moorish-themed zoological-botanical garden, home to diverse species." }
  },
  p38: {
    de: { name: "Blühendes Barock Ludwigsburg", city: "Ludwigsburg", description: "Die älteste und schönste Gartenschau Deutschlands mit dem märchenhaften Märchengarten." },
    en: { name: "Blooming Baroque Gardens", city: "Ludwigsburg", description: "An expansive, colorful park surrounding the palace, complete with a magical fairytale zone." }
  },
  p39: {
    de: { name: "Keltenmuseum Heuneburg", city: "Herbertingen", description: "Rekonstruierte frühkeltische Fürstenstadt an der Donau – Geschichte zum Anfassen." },
    en: { name: "Heuneburg Celtic Museum", city: "Herbertingen", description: "The oldest dry-stone mud brick fort north of the Alps, reconstructing an early Celtic fortress town." }
  },
  p40: {
    de: { name: "Biosphärenzentrum Schwäbische Alb", city: "Münsingen", description: "Interaktive Ausstellung über die beeindruckende Natur- und Kulturlandschaft der Schwäbischen Alb." },
    en: { name: "Swabian Alb Biosphere Center", city: "Münsingen", description: "An interactive ecological sanctuary detailing regional ecosystems and biodiversity." }
  },
  p41: {
    de: { name: "Urweltsteinbruch Holzmaden", city: "Holzmaden", description: "Fossiliensuchen für die ganze Familie in einem echten versteinerten Meeresboden." },
    en: { name: "Holzmaden Fossil Quarry", city: "Holzmaden", description: "An outdoor fossil quarry where visitors can hammer and search for real prehistoric ichthyosaur fossils." }
  },
  p42: {
    de: { name: "Wildkatzenwelt Stromberg", city: "Cleebronn", description: "Informationszentrum und Erlebnispfad rund um die heimlichen, wilden Jäger des Waldes." },
    en: { name: "Stromberg Wildcat World", city: "Cleebronn", description: "An engaging nature sanctuary dedicated to the native, reclusive European wildcats." }
  },
  p43: {
    de: { name: "Oberschwäbisches Museumsdorf Kürnbach", city: "Bad Schussenried", description: "Ein lebendiges Freilichtmuseum mit historischen Schilfdachhäusern und alten Haustierrassen." },
    en: { name: "Kürnbach Open Air Museum", city: "Bad Schussenried", description: "A nostalgic open-air cultural village showcasing thatched-roof farmhouses and vintage steam engines." }
  },
  p44: {
    de: { name: "Freilichtmuseum Beuren", city: "Beuren", description: "Museumsdorf der Schwäbischen Alb mit historischen Wirtschaftsgebäuden und Gärten." },
    en: { name: "Beuren Open Air Museum", city: "Beuren", description: "An educational historical village showcasing ancient Swabian farmhouses, bakeries, and barns." }
  },
  p45: {
    de: { name: "Besucherbergwerk Bad Friedrichshall", city: "Bad Friedrichshall", description: "Eine aufregende Einfahrt in die tiefen Salzstollen, 180 Meter unter der Erdoberfläche." },
    en: { name: "Bad Friedrichshall Salt Mine", city: "Bad Friedrichshall", description: "Descend 180 meters underground into a spectacular rock salt exhibition mine." }
  },
  p46: {
    de: { name: "Mercedes-Benz Museum", city: "Stuttgart", description: "Eine architektonische Ikone, die die komplette Automobilgeschichte der Welt inszeniert." },
    en: { name: "Mercedes-Benz Museum", city: "Stuttgart", description: "A magnificent double-helix architectural landmark containing 130 years of automotive history." }
  },
  p47: {
    de: { name: "Dornier Museum Friedrichshafen", city: "Friedrichshafen", description: "Das Museum für Luft- und Raumfahrtgeschichte direkt am Bodensee-Flughafen." },
    en: { name: "Dornier Aerospace Museum", city: "Friedrichshafen", description: "A sprawling aerospace museum situated adjacent to the Friedrichshafen airport runway." }
  },
  p48: {
    de: { name: "explorhino Science Center", city: "Aalen", description: "Spannendes mathematisch-naturwissenschaftliches Mitmach-Museum für junge Entdecker." },
    en: { name: "explorhino Science Center", city: "Aalen", description: "A wonderful hands-on science interactive museum designed for curious young minds." }
  },
  p49: {
    de: { name: "Meteorkrater-Museum", city: "Sontheim", description: "Museum im weltberühmten Steinheimer Becken – Zeuge eines gewaltigen Meteoriteneinschlags." },
    en: { name: "Meteor Crater Museum", city: "Sontheim", description: "Discover the prehistoric geological impact of a giant cosmic meteor 15 million years ago." }
  },
  p50: {
    de: { name: "Strand- und Freibad Bad Waldsee", city: "Bad Waldsee", description: "Erholung pur mit beheizten Pools und echtem Seezugang im oberschwäbischen Kurort." },
    en: { name: "Bad Waldsee Beach Pool", city: "Bad Waldsee", description: "Pure recreation featuring solar-heated swimming pools and directly accessible sandy lake shores." }
  },
  p51: {
    de: { name: "Schwarzwaldhaus der Sinne", city: "Grafenhausen", description: "Das interaktive Erlebnismuseum zum Fühlen, Hören, Sehen und Riechen im Schwarzwald." },
    en: { name: "Black Forest House of the Senses", city: "Grafenhausen", description: "An amazing sensory playground designed to explore human perception, sound, and lighting optical illusions." }
  },
  p52: {
    de: { name: "Freizeitzentrum Hardtsee", city: "Ubstadt-Weiher", description: "Badesee mit weitläufigen Grünstränden, Segel- und Freizeitmöglichkeiten." },
    en: { name: "Hardtsee Recreation Center", city: "Ubstadt-Weiher", description: "A pristine swimming lake featuring expansive soft sand beaches and paddleboarding lanes." }
  },
  p53: {
    de: { name: "Insel Mainau", city: "Konstanz", description: "Die magische Blumeninsel im Bodensee mit prachtvollen Palmenhäusern und Schlössern." },
    en: { name: "Mainau Flower Island", city: "Konstanz", description: "The famous tropical flower island on Lake Constance, boasting majestic redwood trees and butterfly sanctuaries." }
  },
  p54: {
    de: { name: "Museum im Bock", city: "Leutkirch im Allgäu", description: "Das liebevoll gestaltete städtische Heimatmuseum der historischen Allgäustadt." },
    en: { name: "Museum im Bock", city: "Leutkirch im Allgäu", description: "A charming local history museum housed inside an authentic 14th-century townhouse." }
  },
  p55: {
    de: { name: "Porsche Museum", city: "Stuttgart", description: "Das Porsche Museum in Stuttgart mit einer Ausstellung von Sportwagen, Markengeschichte und Automobildesign." },
    en: { name: "Porsche Museum", city: "Stuttgart", description: "The Porsche Museum in Stuttgart featuring an exhibition of sports cars, brand history, and automotive design." }
  }
};

// Haversine formula to compute distance in km
export function getHaversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return Math.round(d);
}

// Map Place types to EN/DE
export const PLACE_TYPE_TRANSLATIONS: Record<string, { de: string; en: string; ru: string }> = {
  'музей': { de: 'Museum', en: 'Museum', ru: 'Музей' },
  'замок': { de: 'Schloss / Burg', en: 'Palace / Castle', ru: 'Замок / Дворец' },
  'монастырь': { de: 'Kloster', en: 'Monastery', ru: 'Монастырь' },
  'science center': { de: 'Science Center', en: 'Science Center', ru: 'Научный центр' },
  'бассейн': { de: 'Badesee / Pool', en: 'Swimming Pool', ru: 'Бассейн / Озеро' },
  'парк': { de: 'Freizeitpark', en: 'Amusement Park', ru: 'Парк развлечений' },
  'зоопарк': { de: 'Zoo / Tierpark', en: 'Zoo / Botanical Garden', ru: 'Зоопарк' },
  'другое': { de: 'Sonstiges', en: 'Other', ru: 'Другое' }
};

// Map Place conditions to EN/DE
export const PLACE_CONDITION_TRANSLATIONS: Record<string, { de: string; en: string; ru: string }> = {
  'бесплатно': { de: 'Kostenlos', en: 'Free Admission', ru: 'Бесплатно' },
  'скидка': { de: 'Ermäßigung', en: 'Discounted Price', ru: 'Скидка' },
  'специальная цена': { de: 'Sonderpreis', en: 'Special Rate', ru: 'Специальная цена' },
  'неизвестно': { de: 'Unbekannt', en: 'Unknown', ru: 'Неизвестно' }
};
