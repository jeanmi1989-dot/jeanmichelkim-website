/* ============================================================
   gallery.js — 写真ギャラリー
   ------------------------------------------------------------
   ★ 写真を追加する方法：
     1. images/gallery/ フォルダに写真を入れる
     2. 下の配列に { src: "images/gallery/ファイル名.jpg", alt: {...} } を追加
     画像が見つからない場合は自動的に代替表示になるので、
     先に項目だけ追加しておいて後から写真を差し替えることもできます。

   （2026年8月 — Jean-Baptiste Millot撮影のポートレートを反映）
   ============================================================ */

const GALLERY = [
  { src: "images/gallery/photo-1.jpg", alt: { fr: "Portrait au piano", ja: "ピアノを前にしたポートレート", en: "Portrait at the piano" } },
  { src: "images/gallery/photo-2.jpg", alt: { fr: "Portrait en pied", ja: "全身ポートレート", en: "Full-length portrait" } },
  { src: "images/gallery/photo-3.jpg", alt: { fr: "Portrait, profil", ja: "横顔のポートレート", en: "Profile portrait" } },
  { src: "images/gallery/photo-4.jpg", alt: { fr: "Portrait, gros plan", ja: "クローズアップ・ポートレート", en: "Close-up portrait" } }
];
