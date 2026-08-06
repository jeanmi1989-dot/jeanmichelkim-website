# Higgsfieldで素材を作る — サイトに合わせた制作ガイド

このサイトのデザイン（アイボリー×黒×ゴールド、大きな余白、エディトリアルな
セリフ体）に映像・写真の雰囲気を合わせるためのガイドです。
バラバラのトーンで生成すると素人っぽく見えてしまうので、**全カットで同じ
キーワード・同じ色調**を使い回すのがプロっぽく仕上げる一番のコツです。

## 0. 全体トーン（毎回このキーワードを混ぜる）

```
cinematic editorial portrait photography, warm ivory and black tones,
soft directional key light, subtle golden rim light, shallow depth of field,
elegant, timeless, high-end classical music branding, film grain, muted grade,
35mm lens look, no text, no logo
```

顔を安定させたい場合は、Higgsfieldのキャラクター参照／顔参照機能に
ご自身の実写ポートレート写真を1〜2枚アップロードし、それを全カットの
参照素材として使い回してください。カットごとに違う参照写真を使うと
別人のように見えてしまうので注意してください。

---

## 1. 必要な素材リスト

| 用途 | ファイル名 | 形式 | 比率・サイズ目安 |
|---|---|---|---|
| トップページ背景（メイン） | `images/hero.jpg`（動画なら`hero.mp4`も） | 写真 or 動画 | 横長 16:9〜21:9、2000px以上 |
| トップページ紹介写真 | `images/portrait-home.jpg` | 写真 | 縦 4:5 |
| プロフィール写真 | `images/portrait-bio.jpg` | 写真 | 縦 4:5 |
| ギャラリー | `images/gallery/photo-1.jpg`〜`photo-6.jpg` | 写真 | 縦 4:5（横写真も可） |
| CDジャケット | `images/discography/album-1.jpg`など | 写真 | 正方形 1:1 |

## 2. カット別プロンプト例

### ① ヒーロー（トップページ背景・最重要カット）
グランドピアノに向かう／弾いている姿を、映画的な引きの構図で。

```
wide cinematic shot of an elegant [female/male] classical pianist playing a
black grand piano on a dim stage, dramatic single spotlight from above,
smoke haze, deep black background, gold rim light on silhouette, editorial
fashion-film aesthetic, slow motion feel, 21:9 wide frame, negative space on
left side for text overlay
```

→ **動画（推奨）** にする場合、Higgsfieldのカメラモーション機能で
「ゆっくりしたドリーイン」または「静止＋微風で衣装が揺れる程度」を選ぶと、
派手すぎず上品なループになります。

### ② ポートレート（紹介・プロフィール用）
```
close-up editorial portrait of a classical pianist, hands resting on piano
keys, soft window light from the side, ivory and charcoal wardrobe, calm
confident expression, blurred background, medium format film look, 4:5 vertical
```

### ③ ギャラリー（バリエーション用に6パターン程度）
- ピアノに座る全身ショット（ステージ／リハーサル室）
- 鍵盤に置いた手元のクローズアップ
- 楽屋・舞台袖での自然な一枚
- コンサートホールの客席から見た遠景ショット
- 屋外・自然光でのアーティスティックポートレート
- 白黒（モノクロ）仕上げの1枚（他と質感を変えて緩急をつける）

各カットに ①のトーン共通キーワード を必ず混ぜてください。

### ④ CDジャケット
```
minimalist album cover, classical pianist portrait, ivory background,
elegant serif typography space at bottom third, gold foil accent line,
square format, high-end record label aesthetic
```

## 3. 動画をヒーローに使う場合の技術仕様

- コーデック: H.264 (.mp4)
- 長さ: 6〜12秒のシームレスループが理想（自動再生・無音前提）
- 書き出し設定: `muted` `autoplay` `loop` （サイト側は対応済み）
- ファイルサイズ: できれば8MB以下（重いと表示が遅くなります）
- 必ず `images/hero.jpg` も静止画として用意し、動画読み込み前のポスター
  画像として使ってください（`index.html` の `poster` 属性で指定済み）

## 4. サイトへの反映方法

1. Higgsfieldで書き出したファイルをダウンロード
2. 上の表のファイル名にリネーム
3. `pianist-website/images/`（ギャラリー・CDはさらにサブフォルダ）に配置
4. `index.html` をブラウザで開いて（またはページを再読み込みして）確認

コードの変更は一切不要です。ファイルを置き換えるだけで反映されます。
