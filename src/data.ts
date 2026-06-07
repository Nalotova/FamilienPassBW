import { Place } from './types';

export const PLACES: Place[] = [
  {
    id: 'p1', name: 'Landesmuseum Württemberg', city: 'Stuttgart', type: 'музей',
    description: 'Главный исторический музей земли Баден-Вюртемберг, расположенный в Старом замке.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 130, travelTimeMins: 120,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/StuttgartLandesmuseum', website: 'https://www.landesmuseum-stuttgart.de'
  },
  {
    id: 'p2', name: 'Badisches Landesmuseum', city: 'Karlsruhe', type: 'музей',
    description: 'Большой культурно-исторический музей во дворце Карлсруэ.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 120, travelTimeMins: 90,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/KarlsruheLandesmuseum', website: 'https://www.landesmuseum.de'
  },
  {
    id: 'p3', name: 'Staatsgalerie Stuttgart', city: 'Stuttgart', type: 'музей',
    description: 'Один из крупнейших художественных музеев Германии.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 130, travelTimeMins: 120,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/StuttgartStaatsgalerie', website: 'https://www.staatsgalerie.de'
  },
  {
    id: 'p4', name: 'Schloss und Schlossgarten Weikersheim', city: 'Weikersheim', type: 'замок',
    description: 'Великолепный ренессансный замок с садом в стиле барокко.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 240, travelTimeMins: 160,
    weather: 'mixed', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/WeikersheimSchloss', website: 'https://www.schloss-weikersheim.de'
  },
  {
    id: 'p5', name: 'Barockschloss Mannheim', city: 'Mannheim', type: 'замок',
    description: 'Один из самых больших барочных дворцов Европы.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 180, travelTimeMins: 120,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/MannheimSchloss', website: 'https://www.schloss-mannheim.de'
  },
  {
    id: 'p6', name: 'Kloster und Schloss Salem', city: 'Salem', type: 'монастырь',
    queryName: 'Kloster und Schloss Salem Germany',
    description: 'Огромный монастырский и дворцовый комплекс около Боденского озера.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 110, travelTimeMins: 80,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1548625361-155deee21181?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/SalemKloster', website: 'https://www.salem.de'
  },
  {
    id: 'p7', name: 'Kunsthalle Karlsruhe', city: 'Karlsruhe', type: 'музей',
    description: 'Известный художественный музей с обширной коллекцией живописи.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 120, travelTimeMins: 90,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/KunsthalleKarlsruhe', website: 'https://www.kunsthalle-karlsruhe.de'
  },
  {
    id: 'p8', name: 'Kunsthalle Baden-Baden', city: 'Baden-Baden', type: 'музей',
    description: 'Музей современного искусства без собственной коллекции (сменные выставки).',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 90, travelTimeMins: 75,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/KunsthalleBadenBaden', website: 'https://www.kunsthalle-baden-baden.de'
  },
  {
    id: 'p9', name: 'ZKM Karlsruhe', city: 'Karlsruhe', type: 'музей',
    queryName: 'ZKM Karlsruhe Germany',
    description: 'Центр искусств и медиатехнологий, интерактивные и цифровые инсталляции.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 120, travelTimeMins: 90,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/ZKMKarlsruhe', website: 'https://zkm.de'
  },
  {
    id: 'p10', name: 'Schloss Bruchsal', city: 'Bruchsal', type: 'замок',
    description: 'Единственный барочный дворец на Верхнем Рейне, резиденция епископов.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 140, travelTimeMins: 100,
    weather: 'mixed', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/BruchsalSchloss', website: 'https://www.schloss-bruchsal.de'
  },
  {
    id: 'p11', name: 'Kloster Wiblingen', city: 'Ulm', type: 'монастырь',
    description: 'Бывший бенедиктинский монастырь с уникальной барочной библиотекой.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 170, travelTimeMins: 120,
    weather: 'indoor', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Wiblingen', website: 'https://www.kloster-wiblingen.de'
  },
  {
    id: 'p12', name: 'Festungsruine Hohentwiel', city: 'Singen', type: 'замок',
    description: 'Крупнейшие руины крепости в Германии на вершине вулкана.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 80, travelTimeMins: 70,
    weather: 'outdoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Hohentwiel', website: 'https://www.festungsruine-hohentwiel.de'
  },
  {
    id: 'p13', name: 'Museum für Naturkunde Stuttgart', city: 'Stuttgart', type: 'музей',
    description: 'Музей естествознания с динозаврами и палеонтологическими находками.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 130, travelTimeMins: 120,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/NaturkundeStuttgart', website: 'https://www.naturkundemuseum-bw.de'
  },
  {
    id: 'p14', name: 'Museum für Naturkunde Karlsruhe', city: 'Karlsruhe', type: 'музей',
    description: 'Крупный музей естественной истории, популярный среди семей.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 120, travelTimeMins: 90,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/NaturkundeKarlsruhe', website: 'https://www.smnk.de'
  },
  {
    id: 'p15', name: 'Linden-Museum', city: 'Stuttgart', type: 'музей',
    description: 'Государственный музей этнологии, культуры со всего мира.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 130, travelTimeMins: 120,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1531088009183-5ec5b5675e20?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/LindenMuseum', website: 'https://www.lindenmuseum.de'
  },
  {
    id: 'p16', name: 'Schloss Solitude', city: 'Stuttgart', type: 'замок',
    description: 'Охотничий замок-дворец герцога Карла Евгения.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 130, travelTimeMins: 120,
    weather: 'mixed', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Solitude', website: 'https://www.schloss-solitude.de'
  },
  {
    id: 'p17', name: 'Grabkapelle auf dem Württemberg', city: 'Stuttgart', type: 'другое',
    description: 'Живописная часовня-мавзолей среди виноградников.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 135, travelTimeMins: 120,
    weather: 'outdoor', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Grabkapelle', website: 'https://www.grabkapelle-wuerttemberg.de'
  },
  {
    id: 'p18', name: 'Schloss Favorite', city: 'Rastatt', type: 'замок',
    description: 'Уникальный фарфоровый дворец и парк.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 100, travelTimeMins: 80,
    weather: 'mixed', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/FavoriteRastatt', website: 'https://www.schloss-favorite-rastatt.de'
  },
  {
    id: 'p19', name: 'Archäologisches Landesmuseum', city: 'Konstanz', type: 'музей',
    queryName: 'Archäologisches Landesmuseum Konstanz Germany',
    description: 'Археологический музей, рассказывающий о древней истории региона.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 90, travelTimeMins: 80,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/ALMKonstanz', website: 'https://www.alm-bw.de'
  },
  {
    id: 'p20', name: 'Haus der Geschichte', city: 'Stuttgart', type: 'музей',
    description: 'Музей современной истории земли Баден-Вюртемберг.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 130, travelTimeMins: 120,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/HausDerGeschichte', website: 'https://www.hdgbw.de'
  },
  {
    id: 'p21', name: 'Technoseum', city: 'Mannheim', type: 'science center',
    description: 'Интерактивный музей техники и истории индустриализации.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 180, travelTimeMins: 120,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Technoseum', website: 'https://www.technoseum.de'
  },
  {
    id: 'p22', name: 'Kloster Schussenried', city: 'Bad Schussenried', type: 'монастырь',
    description: 'Монастырь с одной из красивейших барочных библиотек.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 140, travelTimeMins: 105,
    weather: 'indoor', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Schussenried', website: 'https://www.kloster-schussenried.de'
  },
  {
    id: 'p23', name: 'Neues Schloss', city: 'Tettnang', type: 'замок',
    description: 'Барочный дворец графов Монфортов.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 130, travelTimeMins: 100,
    weather: 'indoor', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Tettnang', website: 'https://www.schloss-tettnang.de'
  },
  {
    id: 'p24', name: 'Burg Wäscherschloss', city: 'Wäschenbeuren', type: 'замок',
    description: 'Хорошо сохранившийся средневековый замок Гогенштауфенов.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 180, travelTimeMins: 135,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Waescher', website: 'https://www.burg-waescherschloss.de'
  },
  {
    id: 'p25', name: 'Schloss Heidelberg', city: 'Heidelberg', type: 'замок',
    queryName: 'Schloss Heidelberg Germany',
    description: 'Знаменитые живописные руины замка над рекой Неккар.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 180, travelTimeMins: 130,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Heidelberg', website: 'https://www.schloss-heidelberg.de'
  },
  {
    id: 'p26', name: 'Residenzschloss Ludwigsburg', city: 'Ludwigsburg', type: 'замок',
    description: 'Один из самых больших в Европе барочных дворцовых комплексов.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 145, travelTimeMins: 105,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Ludwigsburg', website: 'https://www.schloss-ludwigsburg.de'
  },
  {
    id: 'p27', name: 'Residenzschloss Mergentheim', city: 'Bad Mergentheim', type: 'замок',
    description: 'Бывшая резиденция Тевтонского ордена.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 230, travelTimeMins: 150,
    weather: 'indoor', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Mergentheim', website: 'https://www.schloss-mergentheim.de'
  },
  {
    id: 'p28', name: 'Schloss und Schlossgarten Schwetzingen', city: 'Schwetzingen', type: 'замок',
    description: 'Дворец с великолепным ландшафтным парком и садами.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 170, travelTimeMins: 110,
    weather: 'mixed', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Schwetzingen', website: 'https://www.schloss-schwetzingen.de'
  },
  {
    id: 'p29', name: 'Kloster Alpirsbach', city: 'Alpirsbach', type: 'монастырь',
    description: 'Раннероманский монастырь с аутентичной архитектурой в Шварцвальде.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 40, travelTimeMins: 45,
    weather: 'indoor', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Alpirsbach', website: 'https://www.kloster-alpirsbach.de'
  },
  {
    id: 'p30', name: 'Kloster und Schloss Bebenhausen', city: 'Tübingen', type: 'монастырь',
    description: 'Один из наиболее хорошо сохранившихся цистерцианских монастырей.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 110, travelTimeMins: 80,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Bebenhausen', website: 'https://www.kloster-bebenhausen.de'
  },
  {
    id: 'p31', name: 'Neues Schloss', city: 'Meersburg', type: 'замок',
    description: 'Барочная резиденция князей-епископов Констанца на берегу Боденского озера.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 110, travelTimeMins: 75,
    weather: 'mixed', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/MeersburgNeuesSchloss', website: 'https://www.neues-schloss-meersburg.de'
  },
  {
    id: 'p32', name: 'Residenzschloss Rastatt', city: 'Rastatt', type: 'замок',
    description: 'Великолепный барочный дворец маркграфа Людвига Вильгельма.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 100, travelTimeMins: 80,
    weather: 'indoor', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1598977123418-45f04b615a0e?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/RastattSchloss', website: 'https://www.schloss-rastatt.de'
  },
  {
    id: 'p33', name: 'Kloster Maulbronn', city: 'Maulbronn', type: 'монастырь',
    description: 'Объект наследия ЮНЕСКО, великолепно сохранившийся монастырский комплекс.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 130, travelTimeMins: 100,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1558005889-6e36d3db6bc9?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Maulbronn', website: 'https://www.kloster-maulbronn.de'
  },
  {
    id: 'p34', name: 'Ravensburger Spieleland', city: 'Meckenbeuren', type: 'парк',
    description: 'Семейный парк развлечений с аттракционами и играми от Ravensburger.',
    couponType: 'special_price', couponInfo: {"de":"Aktionspreis: 35 € p.P. (statt 48 €), nur gültig am 27.06. und 28.06.","ru":"Акционная цена: 35 € с человека (вместо 48 €), действительно только 27.06 и 28.06","en":"Promo price: €35 per person (instead of €48), valid only on 27.06 and 28.06"}, distanceKm: 130, travelTimeMins: 100,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Spieleland', website: 'https://www.spieleland.de'
  },
  {
    id: 'p35', name: 'Europa-Park', city: 'Rust', type: 'парк',
    queryName: 'Europa-Park Rust Germany',
    description: 'Один из крупнейших парков развлечений в Европе.',
    couponType: 'discount', couponInfo: {"de":"5 € EMOTIONS Gutscheinkarte pro Person bei Vorzeigen eines online erworbenen Tagesticket am 13.09.","ru":"Подарочная карта EMOTIONS номиналом 5 € на человека при предъявлении онлайн-билета на 13.09","en":"€5 EMOTIONS gift card per person when presenting an online ticket purchased for 13.09"}, distanceKm: 55, travelTimeMins: 60,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/EuropaPark', website: 'https://www.europapark.de'
  },
  {
    id: 'p36', name: 'Erlebnispark Tripsdrill', city: 'Cleebronn', type: 'парк',
    description: 'Старейший парк развлечений в Германии с аутентичным швабским колоритом.',
    couponType: 'discount', couponInfo: {"de":"Um 6 € ermäßigter Eintritt pro Person, nur online bestellbar für 17.05. oder 13.09.","ru":"Скидка 6 € на человека, доступно для онлайн-заказа только на 17.05 или 13.09","en":"€6 discount per person, only available for online booking on 17.05 or 13.09"}, distanceKm: 160, travelTimeMins: 120,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1481966115753-963394378f23?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Tripsdrill', website: 'https://tripsdrill.de'
  },
  {
    id: 'p37', name: 'Wilhelma', city: 'Stuttgart', type: 'зоопарк',
    queryName: 'Wilhelma Stuttgart Germany',
    description: 'Знаменитый зоологический и ботанический сад во дворцовом комплексе.',
    couponType: 'discount', couponInfo: {"de":"Ermäßigung Abendtarif (nicht online, nur an der Kasse)\\nSaison: 01.03. – 31.10.","ru":"Скидка на вечерний тариф. Не онлайн, только в кассе. Сезон: 01.03 – 31.10.","en":"Discount on the evening rate. Not online, only at the ticket office. Season: 01.03 – 31.10."}, distanceKm: 130, travelTimeMins: 120,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Wilhelma', website: 'https://www.wilhelma.de'
  },
  {
    id: 'p38', name: 'Blühendes Barock', city: 'Ludwigsburg', type: 'парк',
    description: 'Обширные сады и парк сказок у замка Людвигсбург.',
    couponType: 'discount', couponInfo: {"de":"Ermäßigter Eintritt nicht für Sonderveranstaltungen","ru":"Скидка на вход не распространяется на специальные мероприятия","en":"Discounted admission not valid for special events"}, distanceKm: 145, travelTimeMins: 105,
    weather: 'outdoor', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Barock', website: 'https://www.blueba.de'
  },
  {
    id: 'p39', name: 'Keltenmuseum Heuneburg', city: 'Herbertingen', type: 'музей',
    description: 'Музей под открытым небом на месте древнего кельтского поселения.',
    couponType: 'special_price', couponInfo: {"de":"Ermäßigter Familieneintritt, Sonderpreis 5 €. Saison: 01.04. – 01.11.","ru":"Льготный семейный вход, специальная цена 5 €. Сезон: 01.04 – 01.11.","en":"Reduced family admission, special price €5. Season: 01.04 – 01.11."}, distanceKm: 120, travelTimeMins: 90,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Heuneburg', website: 'https://www.heuneburg.de'
  },
  {
    id: 'p40', name: 'Biosphärenzentrum Schwäbische Alb', city: 'Münsingen', type: 'другое',
    description: 'Информационный центр биосферного заповедника с интерактивной выставкой.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 140, travelTimeMins: 105,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Biosphaere', website: 'https://www.biosphaerengebiet-alb.de'
  },
  {
    id: 'p41', name: 'Urweltsteinbruch Holzmaden', city: 'Holzmaden', type: 'другое',
    description: 'Карстовый карьер, где можно самим искать окаменелости.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 160, travelTimeMins: 110,
    weather: 'outdoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Holzmaden', website: 'https://www.urweltsteinbruch.de'
  },
  {
    id: 'p42', name: 'Wildkatzenwelt Stromberg', city: 'Cleebronn', type: 'парк',
    description: 'Центр изучения диких кошек в природном парке.',
    couponType: 'special_price', couponInfo: {"de":"Familienpreis 3,50 €","ru":"Семейная цена 3,50 €","en":"Family price €3.50"}, distanceKm: 160, travelTimeMins: 120,
    weather: 'outdoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Stromberg', website: 'https://www.naturpark-stromberg-heuchelberg.de'
  },
  {
    id: 'p43', name: 'Museumsdorf Kürnbach', city: 'Bad Schussenried', type: 'музей',
    description: 'Историческая швабская деревня-музей под открытым небом.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt. Saison: 29.03. – 01.11.","ru":"Бесплатный вход. Сезон: 29.03 – 01.11.","en":"Free entry. Season: 29.03 – 01.11."}, distanceKm: 140, travelTimeMins: 105,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Kuernbach', website: 'https://www.museumsdorf-kuernbach.de'
  },
  {
    id: 'p44', name: 'Freilichtmuseum Beuren', city: 'Beuren', type: 'музей',
    description: 'Музей под открытым небом, показывающий традиционную жизнь региона.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt. Saison: 29.03. – 01.11.","ru":"Бесплатный вход. Сезон: 29.03 – 01.11.","en":"Free entry. Season: 29.03 – 01.11."}, distanceKm: 150, travelTimeMins: 105,
    weather: 'mixed', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Beuren', website: 'https://www.freilichtmuseum-beuren.de'
  },
  {
    id: 'p45', name: 'Besucherbergwerk Bad Friedrichshall', city: 'Bad Friedrichshall', type: 'другое',
    description: 'Соляная шахта, куда можно спуститься на экскурсию на глубину 180 метров.',
    couponType: 'discount', couponInfo: {"de":"Ermäßigung auf Familien-/Einzelticket\\nSaison: 01.05. – 03.10.","ru":"Скидка на семейный/индивидуальный билет. Сезон: 01.05. – 03.10.","en":"Discount on family/single ticket. Season: 01.05. – 03.10."}, distanceKm: 180, travelTimeMins: 120,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Besucherbergwerk', website: 'https://www.salzwerke.de'
  },
  {
    id: 'p46', name: 'Mercedes-Benz Museum', city: 'Stuttgart', type: 'музей',
    queryName: 'Mercedes-Benz Museum Stuttgart Germany',
    description: 'Грандиозный музей истории автомобилестроения бренда Mercedes-Benz.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 130, travelTimeMins: 120,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Mercedes', website: 'https://www.mercedes-benz.com/museum'
  },
  {
    id: 'p47', name: 'Dornier Museum', city: 'Friedrichshafen', type: 'музей',
    description: 'Музей аэрокосмической техники, расположенный прямо в аэропорту.',
    couponType: 'discount', couponInfo: {"de":"Erwachsene 11,00 € (statt 14,00 €), Kinder/Jugendliche (bis 16 Jahre) frei","ru":"Взрослые 11,00 € вместо 14,00 €, дети и подростки до 16 лет бесплатно","en":"Adults €11.00 instead of €14.00, children/teenagers up to 16 free"}, distanceKm: 120, travelTimeMins: 90,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Dornier', website: 'https://www.dorniermuseum.de'
  },
  {
    id: 'p48', name: 'explorhino Science Center', city: 'Aalen', type: 'science center',
    description: 'Интерактивный научный центр для детей и подростков.',
    couponType: 'discount', couponInfo: {"de":"Ermäßigte Familienkarte 20 € (statt 24 €)","ru":"Семейный билет со скидкой 20 € (вместо 24 €)","en":"Discounted family ticket €20 (instead of €24)"}, distanceKm: 200, travelTimeMins: 135,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Explorhino', website: 'https://www.explorhino.de'
  },
  {
    id: 'p49', name: 'Meteorkrater-Museum', city: 'Sontheim', type: 'музей',
    description: 'Музей метеоритного кратера Штайнхайм.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 220, travelTimeMins: 140,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1518364538800-6bcb3f25da49?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Meteorkrater', website: 'https://www.meteorkrater.de'
  },
  {
    id: 'p50', name: 'Strand- und Freibad', city: 'Bad Waldsee', type: 'бассейн',
    description: 'Открытый бассейн и пляж на озере для летнего отдыха.',
    couponType: 'discount', couponInfo: {"de":"Ermäßigte Familiensaisonkarte: 75 € (statt 115 €)","ru":"Сезонный семейный абонемент со скидкой: 75 € (вместо 115 €)","en":"Discounted family season ticket: €75 (instead of €115)"}, distanceKm: 150, travelTimeMins: 110,
    weather: 'outdoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Waldsee', website: 'https://www.bad-waldsee.de'
  },
  {
    id: 'p51', name: 'Schwarzwaldhaus der Sinne', city: 'Grafenhausen', type: 'музей',
    description: 'Интерактивный музей в Шварцвальде, посвященный пяти чувствам.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 60, travelTimeMins: 60,
    weather: 'indoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/SchwarzHaus', website: 'https://www.schwarzwaldhausdersinne.de'
  },
  {
    id: 'p52', name: 'Freizeitzentrum Hardtsee', city: 'Ubstadt-Weiher', type: 'бассейн',
    description: 'Большое озеро для купания с песчаным пляжем и инфраструктурой.',
    couponType: 'discount', couponInfo: {"de":"Ermäßigte Jahresfamilienkarte","ru":"Годовой семейный абонемент со скидкой","en":"Discounted family annual ticket"}, distanceKm: 140, travelTimeMins: 100,
    weather: 'outdoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Hardtsee', website: 'https://www.hardtsee.de'
  },
  {
    id: 'p53', name: 'Insel Mainau', city: 'Konstanz', type: 'парк',
    queryName: 'Insel Mainau Germany',
    description: 'Знаменитый «Остров цветов» на Боденском озере.',
    couponType: 'special_price', couponInfo: {"de":"Aktionspreis Familie mit 1 Erw. 42 €; Familie mit 2 Erw. 68 €, nur an der Kasse einlösbar 30.07. – 12.09.","ru":"Акционная семейная цена: 42 € для семьи с 1 взрослым, 68 € для семьи с 2 взрослыми. Только в кассе. Действует 30.07 – 12.09.","en":"Promo family price: €42 for family with 1 adult, €68 for family with 2 adults. Only at box office. Valid 30.07 – 12.09."}, distanceKm: 100, travelTimeMins: 90,
    weather: 'outdoor', goodForTeens: true, photoUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Mainau', website: 'https://www.mainau.de'
  },
  {
    id: 'p54', name: 'Museum im Bock', city: 'Leutkirch im Allgäu', type: 'музей',
    description: 'Исторический краеведческий музей города Лёйткирх.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 170, travelTimeMins: 110,
    weather: 'indoor', goodForTeens: false, photoUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80',
    googleMapsUrl: 'https://maps.app.goo.gl/Bock', website: 'https://www.leutkirch.de'
  },
  {
    id: 'p55', name: 'Porsche Museum Stuttgart', city: 'Stuttgart', type: 'музей',
    queryName: 'Porsche Museum Stuttgart Germany',
    description: 'Музей Porsche в Штутгарте с экспозицией спортивных автомобилей, истории бренда и автомобильного дизайна.',
    couponType: 'free', couponInfo: {"de":"Kostenfreier Eintritt","ru":"Бесплатный вход","en":"Free entry"}, distanceKm: 130, travelTimeMins: 120,
    weather: 'indoor', goodForTeens: true, photoUrl: '',
    googleMapsUrl: 'https://maps.app.goo.gl/search/Porsche+Museum+Stuttgart', website: 'https://www.porsche.com/museum'
  }
];

export const TRIP_IDEAS_GROUPS = [
  {
    name: 'Stuttgart & Umgebung',
    places: ['p37', 'p46', 'p3', 'p1', 'p15', 'p13', 'p26', 'p38', 'p16', 'p17']
  },
  {
    name: 'Bodensee / Konstanz',
    places: ['p19', 'p53', 'p6', 'p31', 'p47', 'p23']
  },
  {
    name: 'Karlsruhe',
    places: ['p2', 'p7', 'p9', 'p14', 'p8', 'p18']
  },
  {
    name: 'Oberschwaben & Allgäu',
    places: ['p34', 'p22', 'p43', 'p50', 'p54', 'p39']
  },
  {
    name: 'Neckar-Alb & Bäder',
    places: ['p25', 'p5', 'p28', 'p21']
  }
];
