# ピアニスト公式サイト — 編集・公開ガイド

ビルド不要（Node.jsなどのインストール不要）の静的サイトです。
HTML/CSS/JSのファイルをそのまま編集して、そのままアップロードすれば公開できます。

## 1. まずはローカルで確認する

`index.html` をダブルクリックしてブラウザで開けば、その場で確認できます。
（写真が無い箇所は自動でプレースホルダー表示になります）

## 2. 内容を編集する — 触るのはこの5ファイルだけ

すべて `js/data/` フォルダの中にあります。コードは書かず、日本語・フランス語・英語の
文章と数値を書き換えるだけで反映されます。

| ファイル | 編集する内容 |
|---|---|
| `js/data/content.js` | サイト名、各ページの見出し、トップページの紹介文、**プロフィール本文（経歴）** |
| `js/data/schedule.js` | **コンサートの追加・編集**（日付・都市・会場・プログラム） |
| `js/data/press.js` | 批評・レビューの引用 |
| `js/data/discography.js` | CD情報 |
| `js/data/gallery.js` | ギャラリー写真のリスト |

各ファイルの先頭にコメントで書き方の説明が入っています。
`【要編集】` と書かれている部分は、公開前に必ずご自身の内容に差し替えてください。

### コンサートを1件追加する例（`js/data/schedule.js`）

```js
{
  date: "2026-12-05",
  time: "20:00",
  city: { fr: "Nice", ja: "ニース", en: "Nice" },
  venue: { fr: "Opéra de Nice", ja: "ニース歌劇場", en: "Opéra de Nice" },
  program: {
    fr: "Liszt — Années de pèlerinage",
    ja: "リスト：巡礼の年",
    en: "Liszt — Années de pèlerinage"
  },
  ticketUrl: "https://...",
  featured: false
},
```

配列 `SCHEDULE` の中にこのブロックを1つ追加するだけです。日付順の並び替え・
「今後の公演／過去の公演」の振り分けは自動で行われます。

## 3. 写真を入れる

`images/README.md` を参照してください。ファイル名を合わせて `images/` フォルダに
置くだけで反映されます（コード変更不要）。

## 4. 公開する（デプロイ）

このサイトは **GitHub Pages** で公開されています（GitHubリポジトリに
push すると、1分ほどで自動的に本番サイトへ反映されます）。

- リポジトリ: https://github.com/jeanmi1989-dot/jeanmichelkim-website
- 公開URL: https://jeanmichelkim.com

通常は、Claudeに「〇〇を直して」と依頼すれば、編集からpushまで
すべて代行します。手動で更新する場合は、変更後に以下を実行してください。

```
git add -A
git commit -m "変更内容のメモ"
git push
```

お問い合わせフォームは **Formspree**（https://formspree.io）を利用しています。
届いたメッセージは登録したGmail宛に届きます。

## 5. サイト構成

```
index.html         トップページ
biography.html      プロフィール（経歴）
schedule.html        コンサート・カレンダー
press.html            批評・レビュー
discography.html      ディスコグラフィー（CD）
gallery.html           写真ギャラリー
contact.html            コンタクト
css/style.css            デザイン（配色・フォント・レイアウト）
js/i18n.js                言語切り替えの仕組み（触らなくてOK）
js/components.js          共通ヘッダー・フッター（ナビゲーションの追加はここ）
js/render.js               動的表示の仕組み（触らなくてOK）
js/main.js                  起動処理（触らなくてOK）
js/data/                     ← 編集するのはここだけ
images/                        写真・動画
```

## 6. 言語切り替えについて

右上の「FR / JA / EN」ボタンで全ページの言語が切り替わります。
一度選んだ言語はブラウザに記憶され、次回訪問時も同じ言語で表示されます。
初回訪問時はブラウザの言語設定に応じて自動選択されます（フランス語環境→FR、
日本語環境→JA、それ以外→EN）。

## 7. 素材（写真・映像）の作り方

Higgsfieldを使った素材制作のガイドを `HIGGSFIELD_GUIDE.md` にまとめています。
サイトの雰囲気（アイボリー×黒×ゴールド、エディトリアルな余白）に合わせた
プロンプト例も記載しています。
