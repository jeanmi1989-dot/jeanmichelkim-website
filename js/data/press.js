/* ============================================================
   press.js — 批評・レビュー（重要な批評）
   ------------------------------------------------------------
   ★ 新しい批評を追加する方法：
     配列 PRESS に { ... } をコピー＆追加してください。
     一番上（配列の先頭）がトップページに表示されます。

   ★ 各項目の意味：
     quote  : 引用文（3言語）
     source : 掲載媒体名・評者名
     date   : 掲載日（表示用文字列）
     url    : 記事へのリンク（無ければ "" のまま）
   ============================================================ */

const PRESS = [
  {
    quote: {
      fr: "Plongé dans la musique, Jean-Michel Kim devient l'incarnation même des notes qu'il joue. Rarement a-t-on vu un musicien si habité par son art.",
      ja: "音楽に深く没入すると、ジャン・ミッシェル キムは、自ら奏でる音符そのものの化身となる。これほどまでに芸術に全身を捧げた音楽家を目にすることは、めったにない。",
      en: "Immersed in the music, Jean-Michel Kim becomes the very embodiment of the notes he plays. Rarely has one seen a musician so completely possessed by his art."
    },
    source: "Victoria Okada — Crescendo Magazine",
    date: "21.12.2024",
    url: "https://www.crescendo-magazine.be/jean-michel-kim-a-la-salle-cortot-lart-de-se-fondre-dans-la-musique/"
  },
  {
    quote: {
      fr: "Par la richesse de sa palette expressive et, plus encore, par la sincérité de son approche musicale, Kim nous a offert un moment qui purifie l'âme.",
      ja: "多彩な表現力を持ち、何より音楽への真摯なアプローチのキムゆえに、心洗われる時間だった。",
      en: "Through the richness of his expressive palette and, above all, the sincerity of his approach to music, Kim gave us an experience that left the spirit renewed."
    },
    source: "Hiroko Ueda — 月刊『ショパン』/ Chopin Magazine",
    date: "10.2025",
    url: ""
  },
  {
    quote: {
      fr: "Dans cette œuvre hors du commun, son interprétation, constamment logique et sincère, […] révélait l'ampleur sereine d'un artiste promis à un grand avenir.",
      ja: "この稀有の作品を、論理的で常に真摯な態度に終始し、……おおらかな大器の相を感じさせる演奏であった。",
      en: "In this extraordinary work, his consistently logical and sincere approach […] revealed the broad, generous bearing of an artist of great promise."
    },
    source: "Haruhi Hata — 月刊『ショパン』/ Chopin Magazine",
    date: "04.2024",
    url: ""
  },
  {
    quote: {
      fr: "Un disque stupéfiant.",
      ja: "これは驚がくの一枚。",
      en: "An astonishing recording."
    },
    source: "Tokihiko Umetsu — 毎日新聞 / The Mainichi Shimbun",
    date: "18.01.2024",
    url: ""
  }
];
