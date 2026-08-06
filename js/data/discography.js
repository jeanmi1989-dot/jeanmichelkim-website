/* ============================================================
   discography.js — CD / 録音作品
   ------------------------------------------------------------
   ★ 新しいCDを追加する方法：
     配列 DISCOGRAPHY に { ... } をコピー＆追加してください。
     cover には images/discography/ 内の画像ファイル名を指定します
     （画像が無い場合は自動的に代替表示になります）。
   ============================================================ */

const DISCOGRAPHY = [
  {
    cover: "images/discography/album-3.jpg",
    title: { fr: "Ivresse de l'aube", ja: "Ivresse de l'aube", en: "Ivresse de l'aube" },
    label: "Klarthe — KLA168",
    year: "2023",
    description: {
      fr: "Brenda Poupard, mezzo-soprano / Jean-Michel Kim, piano. Né de la rencontre entre la mélodie française et les formes les plus concises de la poésie japonaise, le haïku et le waka, cet album rassemble des œuvres de Sadao Bekku, Henriette Puig-Roget, Graciane Finzi, Fabien Waksman, Claude Delvincourt, Pauline Viardot, Kaoli Ono et Hideo Kobayashi. La voix et le piano y font renaître, dans une palette de couleurs délicate et changeante, les paysages et les émotions de la poésie japonaise ancienne. « Un disque stupéfiant. » — Tokihiko Umetsu, Mainichi Shimbun, 18 janvier 2024.",
      ja: "ブレンダ・プパール（メゾソプラノ）／ジャン・ミッシェル キム（ピアノ）。フランス歌曲と、日本の詩歌の最も凝縮された形である俳句・和歌との出会いから生まれたアルバム。フランスと日本の作曲家による作品を通して、古い詩に描かれた情景と感情を、声とピアノの繊細で多彩な色彩によって浮かび上がらせます。「これは驚がくの一枚。」— 梅津時比古（選・評）、毎日新聞、2024年1月18日",
      en: "Brenda Poupard, mezzo-soprano / Jean-Michel Kim, piano. Born from the meeting of French mélodie with the most concise forms of Japanese poetry, haiku and waka, this album brings together works by Sadao Bekku, Henriette Puig-Roget, Graciane Finzi, Fabien Waksman, Claude Delvincourt, Pauline Viardot, Kaoli Ono and Hideo Kobayashi. Voice and piano illuminate the landscapes and emotions of classical Japanese poetry through a delicate, constantly shifting palette of color. “An astonishing recording.” — Tokihiko Umetsu, The Mainichi Shimbun, January 18, 2024."
    },
    listenUrl: "",
    buyUrl: "https://www.amazon.co.jp/dp/B0CF66WHWZ"
  },
  {
    cover: "images/discography/album-1.jpg",
    title: { fr: "Ravel, Schubert, Chopin, Liszt", ja: "Ravel, Schubert, Chopin, Liszt", en: "Ravel, Schubert, Chopin, Liszt" },
    label: "Passavant Music — PAS121130",
    year: "2021",
    description: {
      fr: "Jean-Michel Kim, piano. Ce premier album solo réunit La Valse de Ravel, la Sonate pour piano n°13 en la majeur, D 664, de Schubert, la Sonate pour piano n°3 en si mineur, op. 58, de Chopin, et Auf dem Wasser zu singen de Schubert dans la transcription de Liszt. De la transparence classique au lyrisme chantant, des couleurs orchestrales à la virtuosité, il dessine en un seul disque l'étendue de l'univers musical de Jean-Michel Kim.",
      ja: "ジャン・ミッシェル キム（ピアノ）。ラヴェル《ラ・ヴァルス》、シューベルト《ピアノ・ソナタ第13番 イ長調 D 664》、ショパン《ピアノ・ソナタ第3番 ロ短調 Op.58》、リスト編曲によるシューベルト《水の上で歌う》を収録。古典的な透明感から歌うような叙情、管弦楽的な色彩とヴィルトゥオジティまで、ジャン・ミッシェル キムの幅広い音楽世界を一枚に描いた初のソロ・アルバムです。",
      en: "Jean-Michel Kim, piano. This debut solo album brings together Ravel's La Valse, Schubert's Piano Sonata No. 13 in A major, D 664, Chopin's Piano Sonata No. 3 in B minor, Op. 58, and Schubert's Auf dem Wasser zu singen in Liszt's transcription. From classical transparency and singing lyricism to orchestral color and virtuosity, the recording captures the breadth of Jean-Michel Kim's musical world."
    },
    listenUrl: "",
    buyUrl: "https://www.amazon.fr/dp/B09MSQGNHW"
  },
  {
    cover: "images/discography/album-2.jpg",
    title: { fr: "Tokyo Opera City Recital Live", ja: "東京オペラシティ・リサイタル・ライヴ", en: "Tokyo Opera City Recital Live" },
    label: "Exton / Octavia Records — OVCL-00754",
    year: "2021",
    description: {
      fr: "Keisuke Tsushima, violon / Jean-Michel Kim, piano. Enregistré en public au Tokyo Opera City, ce récital réunit la Sonate pour violon et clavier n°4 en ut mineur, BWV 1017, de J. S. Bach, la Sonate pour violon et piano n°2 en la majeur, op. 100, de Brahms, et la Sonate n°9 en la majeur, op. 47 « À Kreutzer », de Beethoven. Formé à Paris en 2011, le duo y déploie une respiration commune et un dialogue nourri à travers trois époques musicales.",
      ja: "對馬佳祐（ヴァイオリン）／ジャン・ミッシェル キム（ピアノ）。東京オペラシティで行われたリサイタルのライヴ録音。J.S.バッハ《ヴァイオリン・ソナタ第4番 ハ短調 BWV 1017》、ブラームス《ヴァイオリン・ソナタ第2番 イ長調 Op.100》、ベートーヴェン《ヴァイオリン・ソナタ第9番 イ長調 Op.47〈クロイツェル〉》を収録。2011年にパリで結成したデュオの緊密な呼吸と、三つの時代を貫く豊かな対話を伝えます。",
      en: "Keisuke Tsushima, violin / Jean-Michel Kim, piano. Recorded live at Tokyo Opera City, this recital features J. S. Bach's Violin Sonata No. 4 in C minor, BWV 1017, Brahms's Violin Sonata No. 2 in A major, Op. 100, and Beethoven's Violin Sonata No. 9 in A major, Op. 47, “Kreutzer.” Formed in Paris in 2011, the duo brings a shared sense of breath and a richly responsive dialogue to music spanning three eras."
    },
    listenUrl: "",
    buyUrl: "https://www.amazon.co.jp/dp/B098P7BL9H"
  }
];
