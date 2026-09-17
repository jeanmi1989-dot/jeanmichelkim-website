/* ============================================================
   schedule.js — コンサート・スケジュール
   ------------------------------------------------------------
   ★ 新しい公演を追加する方法：
     下の配列 SCHEDULE に { ... } のブロックをコピー＆追加し、
     日付・都市・会場・プログラムを書き換えるだけでOKです。
     追加順は自由です（自動的に日付順に並び替わります）。

   ★ 各項目の意味：
     date       : "YYYY-MM-DD" 形式（例 "2026-09-14"）
     time       : 開演時間（表示用の文字列、無ければ ""）
     city       : 都市名（3言語）
     venue      : 会場名（3言語。会場の固有名詞は同じでもOK）
     program    : 演奏プログラム（3言語）
     ticketUrl  : チケット購入ページのURL（無ければ "" のまま）
     featured   : 現在は表示ロジックには未使用（将来の拡張用）
     highlight  : true にすると、トップページの一番目立つ場所に
                  大きく専用バナーとして表示されます（1件だけを想定）。
   ============================================================ */

const SCHEDULE = [

  /* ---------------- 今後の公演 ---------------- */

  {
    date: "2026-10-25",
    time: "14:00",
    city: { fr: "Kadoma (Osaka)", ja: "門真市（大阪府）", en: "Kadoma (Osaka)" },
    venue: {
      fr: "Kadoma Civic Culture Hall, Lumiere Hall — petite salle",
      ja: "門真市民文化ルミエールホール 小ホール",
      en: "Kadoma Civic Culture Hall, Lumiere Hall — Small Hall"
    },
    program: {
      fr: "Beethoven : Sonate n°17 « La Tempête », op. 31 n°2 · Chopin : Fantaisie-Polonaise, op. 61 · Liszt : Totentanz, S. 525 · Rachmaninov : Variations sur un thème de Corelli, op. 42",
      ja: "ベートーヴェン：ピアノ・ソナタ第17番 ニ短調 Op.31-2《テンペスト》／ショパン《幻想ポロネーズ》Op.61／リスト《死の舞踏》S.525／ラフマニノフ《コレルリの主題による変奏曲》Op.42",
      en: "Beethoven: Piano Sonata No. 17 “The Tempest,” Op. 31 No. 2 · Chopin: Polonaise-Fantaisie, Op. 61 · Liszt: Totentanz, S. 525 · Rachmaninoff: Variations on a Theme of Corelli, Op. 42"
    },
    ticketUrl: "https://teket.jp/13405/73376",
    featured: true
  },
  {
    date: "2026-10-30",
    time: "",
    city: { fr: "Tokyo", ja: "東京", en: "Tokyo" },
    venue: { fr: "Maison franco-japonaise", ja: "日仏会館", en: "Maison franco-japonaise" },
    program: {
      fr: "Conférence de Junichi Konuma sur Erik Satie, suivie d'un mini-récital d'environ trente minutes consacré à ses œuvres pour piano. Programme détaillé à venir.",
      ja: "小沼純一氏によるエリック・サティの講演後、サティのピアノ作品による約30分のミニ・リサイタル。曲目は後日発表。",
      en: "A lecture on Erik Satie by Junichi Konuma, followed by an approximately thirty-minute mini-recital of his piano works. Detailed program to be announced."
    },
    ticketUrl: "",
    featured: true
  },
  {
    date: "2026-11-06",
    time: "19:00",
    city: { fr: "Nagano", ja: "長野市", en: "Nagano" },
    venue: { fr: "Nagano City Arts Center — Recital Hall", ja: "長野市芸術館 リサイタルホール", en: "Nagano City Arts Center — Recital Hall" },
    program: {
      fr: "J.-S. Bach : Fantaisie en ut mineur, BWV 906 · Beethoven : Sonate n°17 « La Tempête », op. 31 n°2 · Chopin : Fantaisie-Polonaise, op. 61 · Ravel : Gaspard de la nuit · Rachmaninov : Variations sur un thème de Corelli, op. 42",
      ja: "J.S.バッハ：幻想曲 ハ短調 BWV 906／ベートーヴェン：ピアノ・ソナタ第17番 ニ短調 Op.31-2《テンペスト》／ショパン《幻想ポロネーズ》Op.61／ラヴェル《夜のガスパール》／ラフマニノフ《コレルリの主題による変奏曲》Op.42",
      en: "J. S. Bach: Fantasia in C minor, BWV 906 · Beethoven: Piano Sonata No. 17 “The Tempest,” Op. 31 No. 2 · Chopin: Polonaise-Fantaisie, Op. 61 · Ravel: Gaspard de la nuit · Rachmaninoff: Variations on a Theme of Corelli, Op. 42"
    },
    ticketUrl: "https://teket.jp/13405/74150",
    featured: true
  },
  {
    date: "2026-11-08",
    time: "14:00",
    city: { fr: "Tokyo", ja: "東京", en: "Tokyo" },
    venue: { fr: "Toppan Hall", ja: "TOPPANホール", en: "Toppan Hall" },
    program: {
      fr: "J.-S. Bach : Fantaisie en ut mineur, BWV 906 · Beethoven : Sonate n°17 « La Tempête », op. 31 n°2 · Chopin : Fantaisie-Polonaise, op. 61 · Ravel : Gaspard de la nuit · Rachmaninov : Variations sur un thème de Corelli, op. 42",
      ja: "J.S.バッハ：幻想曲 ハ短調 BWV 906／ベートーヴェン：ピアノ・ソナタ第17番 ニ短調 Op.31-2《テンペスト》／ショパン《幻想ポロネーズ》Op.61／ラヴェル《夜のガスパール》／ラフマニノフ《コレルリの主題による変奏曲》Op.42",
      en: "J. S. Bach: Fantasia in C minor, BWV 906 · Beethoven: Piano Sonata No. 17 “The Tempest,” Op. 31 No. 2 · Chopin: Polonaise-Fantaisie, Op. 61 · Ravel: Gaspard de la nuit · Rachmaninoff: Variations on a Theme of Corelli, Op. 42"
    },
    ticketUrl: "https://teket.jp/13405/72066",
    featured: true
  },
  {
    date: "2026-12-07",
    time: "",
    city: { fr: "Paris", ja: "パリ", en: "Paris" },
    venue: { fr: "Salle Cortot", ja: "サル・コルトー", en: "Salle Cortot" },
    program: {
      fr: "J.-S. Bach : Fantaisie en ut mineur, BWV 906 · Beethoven : Sonate n°17 « La Tempête », op. 31 n°2 · Chopin : Fantaisie-Polonaise, op. 61 · Ravel : Gaspard de la nuit · Rachmaninov : Variations sur un thème de Corelli, op. 42",
      ja: "J.S.バッハ：幻想曲 ハ短調 BWV 906／ベートーヴェン：ピアノ・ソナタ第17番 ニ短調 Op.31-2《テンペスト》／ショパン《幻想ポロネーズ》Op.61／ラヴェル《夜のガスパール》／ラフマニノフ《コレルリの主題による変奏曲》Op.42",
      en: "J. S. Bach: Fantasia in C minor, BWV 906 · Beethoven: Piano Sonata No. 17 “The Tempest,” Op. 31 No. 2 · Chopin: Polonaise-Fantaisie, Op. 61 · Ravel: Gaspard de la nuit · Rachmaninoff: Variations on a Theme of Corelli, Op. 42"
    },
    ticketUrl: "https://www.helloasso.com/associations/kyomei/evenements/recital-de-piano-jean-michel-kim-1",
    featured: true,
    highlight: true
  },
  {
    date: "2027-01-01",
    time: "",
    city: { fr: "Loches", ja: "ロシュ", en: "Loches" },
    venue: { fr: "Auditorium Régis Pasquier / Cordacor", ja: "Auditorium Régis Pasquier / Cordacor", en: "Auditorium Régis Pasquier / Cordacor" },
    program: {
      fr: "Cycle de trois ans (à partir de janvier 2027) consacré à l'intégrale des 32 sonates pour piano de Beethoven, à raison de deux à trois récitals par an. Dates et programmes détaillés à venir.",
      ja: "2027年1月より3年間にわたるベートーヴェン：ピアノ・ソナタ全32曲演奏会シリーズ（年2〜3公演）。各公演の日程と曲目は後日発表。",
      en: "A three-year cycle (from January 2027) devoted to Beethoven's complete 32 piano sonatas, with two to three recitals each year. Detailed dates and programs to be announced."
    },
    ticketUrl: "",
    featured: false
  },

  /* ---------------- 過去の公演 ---------------- */

  {
    date: "2025-11-05",
    time: "",
    city: { fr: "Paris", ja: "パリ", en: "Paris" },
    venue: { fr: "Salle Cortot", ja: "サル・コルトー", en: "Salle Cortot" },
    program: {
      fr: "« Entre ciel et abîme » — récital de piano. Schubert : Impromptu en fa mineur, op. 142 n°1, D 935 · Debussy : Deux Arabesques et Feux d'artifice · Prokofiev : Sonate n°3, op. 28 · Beethoven : Sonate n°29 « Hammerklavier », op. 106",
      ja: "『天と深淵のあいだ』ピアノ・リサイタル。シューベルト：即興曲 ヘ短調 Op.142-1, D 935／ドビュッシー：《2つのアラベスク》／「花火」／プロコフィエフ：ピアノ・ソナタ第3番 イ短調 Op.28／ベートーヴェン：ピアノ・ソナタ第29番《ハンマークラヴィーア》Op.106",
      en: "“Between Heaven and the Abyss” — piano recital. Schubert: Impromptu in F minor, Op. 142 No. 1, D 935 · Debussy: Two Arabesques and Feux d'artifice · Prokofiev: Piano Sonata No. 3, Op. 28 · Beethoven: Piano Sonata No. 29 “Hammerklavier,” Op. 106"
    },
    ticketUrl: "", featured: false
  },
  {
    date: "2025-12-12",
    time: "",
    city: { fr: "Nagano", ja: "長野市", en: "Nagano" },
    venue: { fr: "Hokuto Bunka Hall — petite salle", ja: "ホクト文化ホール 小ホール", en: "Hokuto Bunka Hall — Small Hall" },
    program: {
      fr: "« L'Esprit de la musique française », avec les sopranos Mihoko Kojima et Mami Kobashi. Mélodies de Duparc, Fauré, Hahn ; en soliste, Debussy : Deux Arabesques ; Liszt : Valse de l'opéra Faust de Gounod",
      ja: "『フランス音楽のエスプリ』小島美穂子・小橋麻美（ソプラノ）と共演。フランス歌曲（デュパルク、フォーレ、アーンほか）、ソロでドビュッシー《2つのアラベスク》、リスト《グノーの歌劇『ファウスト』によるワルツ》",
      en: "“The Spirit of French Music,” with sopranos Mihoko Kojima and Mami Kobashi. French songs by Duparc, Fauré and Hahn; solo works: Debussy's Two Arabesques and Liszt's Waltz from Gounod's Faust"
    },
    ticketUrl: "", featured: false
  },
  {
    date: "2025-12-14",
    time: "",
    city: { fr: "Tokyo", ja: "東京", en: "Tokyo" },
    venue: { fr: "Oji Hall, Ginza", ja: "銀座 王子ホール", en: "Oji Hall, Ginza" },
    program: {
      fr: "Concert de Noël, chant et piano, avec Kei Yonashiro (baryton) et Akiko Tomihira (soprano). Adam : O Holy Night · Berlin : White Christmas · Puccini : Valse de Musette (La Bohème) · Liszt : Valse de l'opéra Faust (piano seul)",
      ja: "歌とピアノで彩る 至福のクリスマスコンサート。与那城敬（バリトン）、冨平安希子（ソプラノ）と共演。アダン《オー・ホーリー・ナイト》、バーリン《ホワイト・クリスマス》、プッチーニ《ラ・ボエーム》より「ムゼッタのワルツ」、リスト《グノーの歌劇『ファウスト』によるワルツ》（ピアノ・ソロ）",
      en: "Christmas concert for voice and piano, with Kei Yonashiro (baritone) and Akiko Tomihira (soprano). Adam: O Holy Night · Berlin: White Christmas · Puccini: Musetta's Waltz (La Bohème) · Liszt: Waltz from Gounod's Faust (solo piano)"
    },
    ticketUrl: "", featured: false
  },
  {
    date: "2026-01-14",
    time: "",
    city: { fr: "Paris", ja: "パリ", en: "Paris" },
    venue: { fr: "Hôtel de Beauvais", ja: "オテル・ドゥ・ボヴェ", en: "Hôtel de Beauvais" },
    program: {
      fr: "Récital de piano présenté par la Société Chopin à Paris. Œuvres de Chopin, Debussy et Liszt",
      ja: "ショパン協会主催ピアノ・リサイタル。ショパン、ドビュッシー、リストの作品",
      en: "Piano recital presented by the Société Chopin à Paris. Works by Chopin, Debussy and Liszt"
    },
    ticketUrl: "", featured: false
  },
  {
    date: "2026-01-31",
    time: "",
    city: { fr: "Nantes", ja: "ナント", en: "Nantes" },
    venue: { fr: "Cité des Congrès", ja: "シテ・デ・コングレ", en: "Cité des Congrès" },
    program: {
      fr: "La Folle Journée de Nantes 2026. Ravel : Sonatine · Liszt : Les jeux d'eau à la Villa d'Este · Eisuke Tsuchida : Ondulation pour piano · Rachmaninov : Sonate n°2 (version de 1931)",
      ja: "ラ・フォル・ジュルネ・ド・ナント 2026。ラヴェル《ソナチネ》、リスト《エステ荘の噴水》、土田英介《ピアノのための波動》、ラフマニノフ《ピアノ・ソナタ第2番》（1931年版）",
      en: "La Folle Journée de Nantes 2026. Ravel: Sonatine · Liszt: Les jeux d'eau à la Villa d'Este · Eisuke Tsuchida: Ondulation for piano · Rachmaninoff: Piano Sonata No. 2 (1931 version)"
    },
    ticketUrl: "", featured: false
  },
  {
    date: "2026-03-05",
    time: "",
    city: { fr: "Loches", ja: "ロシュ", en: "Loches" },
    venue: { fr: "Auditorium Régis Pasquier / Cordacor", ja: "Auditorium Régis Pasquier / Cordacor", en: "Auditorium Régis Pasquier / Cordacor" },
    program: {
      fr: "Récital de piano. Ravel : Sonatine · Liszt : Sonate en si mineur. (Du 6 au 9 mars, pianiste officiel de la masterclass de violon de Régis Pasquier)",
      ja: "ピアノ・リサイタル。ラヴェル《ソナチネ》、リスト《ピアノ・ソナタ ロ短調》（翌日から3月9日まで、レジス・パスキエのヴァイオリン・マスタークラス公式ピアニストを務める）",
      en: "Piano recital. Ravel: Sonatine · Liszt: Piano Sonata in B minor. (From March 6 to 9, official pianist for Régis Pasquier's violin masterclass)"
    },
    ticketUrl: "", featured: false
  },
  {
    date: "2026-03-30",
    time: "",
    city: { fr: "Paris", ja: "パリ", en: "Paris" },
    venue: { fr: "Automobile Club de France", ja: "Automobile Club de France", en: "Automobile Club de France" },
    program: {
      fr: "4e Nuit du Piano — quatre récitals par Jean-Michel Kim, Ismaël Margain, Sacha Morin et Gaspard Thomas. Jean-Michel Kim interprète la Sonate en si mineur de Liszt",
      ja: "第4回 Nuit du Piano — ジャン・ミッシェル キム、イスマエル・マルガン、サシャ・モラン、ガスパール・トマによる4つのリサイタル。キムはリスト《ピアノ・ソナタ ロ短調》を演奏",
      en: "4th Nuit du Piano — four recitals by Jean-Michel Kim, Ismaël Margain, Sacha Morin and Gaspard Thomas. Kim performed Liszt's Piano Sonata in B minor"
    },
    ticketUrl: "", featured: false
  },
  {
    date: "2026-04-19",
    time: "",
    city: { fr: "Valence-sur-Baïse", ja: "ヴァランス＝シュル＝バイズ", en: "Valence-sur-Baïse" },
    venue: { fr: "Abbaye de Flaran, Salle de la Magdelaine", ja: "フララン修道院 Salle de la Magdelaine", en: "Abbaye de Flaran, Salle de la Magdelaine" },
    program: {
      fr: "« Les Moments Musicaux d'hiver ». Ravel : Sonatine, Jeux d'eau · Liszt : Totentanz · Chopin : Valse op. 70 n°3, Mazurkas op. 24 n°2 et op. 68 n°4, Nocturne op. 62 n°2, Andante spianato et Grande Polonaise brillante, op. 22",
      ja: "Les Moments Musicaux d'hiver。ラヴェル《ソナチネ》《水の戯れ》、リスト《死の舞踏》、ショパン：ワルツ Op.70-3、マズルカ Op.24-2／Op.68-4、ノクターン Op.62-2、《アンダンテ・スピアナートと華麗なる大ポロネーズ》Op.22",
      en: "“Les Moments Musicaux d'hiver.” Ravel: Sonatine, Jeux d'eau · Liszt: Totentanz · Chopin: Waltz Op. 70 No. 3, Mazurkas Op. 24 No. 2 and Op. 68 No. 4, Nocturne Op. 62 No. 2, Andante spianato and Grande Polonaise brillante, Op. 22"
    },
    ticketUrl: "", featured: false
  },
  {
    date: "2026-04-25",
    time: "",
    city: { fr: "Vaux-sur-Seine", ja: "ヴォー＝シュル＝セーヌ", en: "Vaux-sur-Seine" },
    venue: { fr: "Pavillon d'Artois", ja: "Pavillon d'Artois", en: "Pavillon d'Artois" },
    program: {
      fr: "Récital en duo avec Rika Masato (violon). Massenet : Méditation de Thaïs · Mozart : Sonate K. 304 · Fauré : Romance, op. 28 · Debussy : Sonate pour violon et piano · Fauré : Sonate n°1, op. 13",
      ja: "正戸里佳（ヴァイオリン）とのデュオ・リサイタル。マスネ《タイスの瞑想曲》、モーツァルト：ヴァイオリン・ソナタ ホ短調 K.304、フォーレ《ロマンス》Op.28、ドビュッシー：ヴァイオリン・ソナタ、フォーレ：ヴァイオリン・ソナタ第1番 Op.13",
      en: "Duo recital with violinist Rika Masato. Massenet: Méditation from Thaïs · Mozart: Violin Sonata K. 304 · Fauré: Romance, Op. 28 · Debussy: Violin Sonata · Fauré: Violin Sonata No. 1, Op. 13"
    },
    ticketUrl: "", featured: false
  },
  {
    date: "2026-06-07",
    time: "",
    city: { fr: "France", ja: "フランス", en: "France" },
    venue: { fr: "Résidence privée", ja: "個人邸", en: "Private residence" },
    program: {
      fr: "Concert de salon. Liszt : Totentanz · Chopin : Fantaisie-Polonaise · Ravel : Sonatine, et autres œuvres",
      ja: "サロン・コンサート。リスト《死の舞踏》、ショパン《幻想ポロネーズ》、ラヴェル《ソナチネ》ほか",
      en: "Salon concert. Liszt: Totentanz · Chopin: Polonaise-Fantaisie · Ravel: Sonatine, and other works"
    },
    ticketUrl: "", featured: false
  },
  {
    date: "2026-06-25",
    time: "",
    city: { fr: "Loches", ja: "ロシュ", en: "Loches" },
    venue: { fr: "Auditorium Régis Pasquier / Cordacor", ja: "Auditorium Régis Pasquier / Cordacor", en: "Auditorium Régis Pasquier / Cordacor" },
    program: {
      fr: "Concert de clôture de la masterclass de violon de Régis Pasquier, avec Jean-Michel Kim au piano",
      ja: "レジス・パスキエ ヴァイオリン・マスタークラス修了演奏会（ピアノ担当）",
      en: "Closing concert of Régis Pasquier's violin masterclass, with Jean-Michel Kim at the piano"
    },
    ticketUrl: "", featured: false
  }
];
