/* ============================================================
   content.js — テキストコンテンツ（3言語）
   ------------------------------------------------------------
   ★ ここを編集すればサイトの文言・プロフィールが変わります。
   ★ 改行して段落を分けたい場合は、配列に文字列を追加してください
     （bio, longBio は「段落ごとに1つの文字列」の配列です）。
   ============================================================ */

const CONTENT = {

  /* ---------- 共通UI文言 / 各ページの見出し・導入文 ---------- */
  ui: {
    fr: {
      site: { name: "Jean-Michel Kim", tagline: "Pianiste" },
      nav: {
        home: "Accueil", biography: "Biographie", schedule: "Calendrier",
        press: "Presse", discography: "Discographie", gallery: "Galerie", contact: "Contact"
      },
      common: {
        upcoming: "Prochains concerts", pastConcerts: "Concerts passés",
        showPast: "Afficher les concerts passés", hidePast: "Masquer les concerts passés",
        viewAll: "Voir le calendrier complet", buyTickets: "Billetterie",
        moreInfo: "Plus d'informations", listen: "Écouter", buy: "Acheter",
        readArticle: "Lire l'article", sendMessage: "Envoyer",
        emailLabel: "E-mail", nameLabel: "Nom", subjectLabel: "Sujet", messageLabel: "Message",
        managementLabel: "Management / Booking"
      },
      footer: {
        followMe: "Suivre", navigation: "Navigation", contactTitle: "Contact",
        rights: "Tous droits réservés."
      },
      pages: {
        home: {
          heroEyebrow: "Pianiste classique",
          heroSubtitle: "France · Japon",
          heroCta: "Découvrir le calendrier",
          introTitle: "Bienvenue",
          introText: [
            "Né à Tokyo et établi en France, le pianiste Jean-Michel Kim s'est formé au Conservatoire national supérieur de musique et de danse de Paris (CNSMDP) et a remporté le Premier Prix du Concours international de piano Albert Roussel en 2024.",
            "Il se produit régulièrement dans les grandes salles et festivals de France et du Japon, et consacre également une part essentielle de son activité à la musique de chambre et à l'accompagnement vocal."
          ],
          announceEyebrow: "Nouveau projet",
          announceTitle: "À partir de janvier 2027 — l'intégrale des 32 sonates pour piano de Beethoven",
          announceText: "Un cycle de trois ans, à raison de deux à trois récitals par an, à l'Auditorium Régis Pasquier / Cordacor (Loches).",
          upcomingTitle: "Prochains concerts",
          pressTitle: "La presse en parle",
          discoTitle: "Discographie"
        },
        biography: { eyebrow: "Portrait", title: "Biographie", factsTitle: "Repères" },
        schedule: { eyebrow: "Agenda", title: "Calendrier des concerts" },
        press: { eyebrow: "Revue de presse", title: "Critiques" },
        discography: { eyebrow: "Enregistrements", title: "Discographie" },
        gallery: { eyebrow: "Images", title: "Galerie" },
        contact: {
          eyebrow: "Écrire", title: "Contact",
          formIntro: "Pour toute demande de concert, interview ou information, merci d'utiliser le formulaire ci-dessous.",
          sentThanks: "Merci, votre message a bien été envoyé.",
          sendError: "Une erreur s'est produite. Merci de réessayer, ou de nous contacter via YouTube."
        }
      }
    },

    ja: {
      site: { name: "Jean-Michel Kim", tagline: "ピアニスト" },
      nav: {
        home: "ホーム", biography: "プロフィール", schedule: "スケジュール",
        press: "批評", discography: "ディスコグラフィー", gallery: "ギャラリー", contact: "コンタクト"
      },
      common: {
        upcoming: "今後の公演", pastConcerts: "過去の公演",
        showPast: "過去の公演を表示", hidePast: "過去の公演を隠す",
        viewAll: "すべてのスケジュールを見る", buyTickets: "チケット購入",
        moreInfo: "詳細を見る", listen: "試聴する", buy: "購入する",
        readArticle: "記事を読む", sendMessage: "送信する",
        emailLabel: "メールアドレス", nameLabel: "お名前", subjectLabel: "件名", messageLabel: "メッセージ",
        managementLabel: "マネジメント / ブッキング"
      },
      footer: {
        followMe: "フォローする", navigation: "サイト内", contactTitle: "コンタクト",
        rights: "All rights reserved."
      },
      pages: {
        home: {
          heroEyebrow: "クラシックピアニスト",
          heroSubtitle: "フランス・日本を拠点に活動",
          heroCta: "スケジュールを見る",
          introTitle: "ようこそ",
          introText: [
            "東京に生まれ、フランスを拠点に活動するピアニスト、ジャン・ミッシェル キム。パリ国立高等音楽院（CNSMDP）で研鑽を積み、2024年アルベール・ルーセル国際ピアノコンクールにて第1位を獲得。",
            "フランス、日本各地の主要ホール・音楽祭に定期的に出演しているほか、室内楽・声楽伴奏の分野でも幅広く活動している。"
          ],
          announceEyebrow: "新プロジェクト",
          announceTitle: "<span class=\"num\">2027</span>年<span class=\"num\">1</span>月より　ベートーヴェン ピアノ・ソナタ全<span class=\"num\">32</span>曲演奏会 開催決定",
          announceText: "Auditorium Régis Pasquier / Cordacor（ロシュ）にて、年<span class=\"num\">2〜3</span>公演、<span class=\"num\">3</span>年間にわたるシリーズ。",
          upcomingTitle: "今後の公演",
          pressTitle: "批評家の声",
          discoTitle: "ディスコグラフィー"
        },
        biography: { eyebrow: "プロフィール", title: "経歴", factsTitle: "略歴" },
        schedule: { eyebrow: "スケジュール", title: "コンサート・カレンダー" },
        press: { eyebrow: "批評", title: "批評・レビュー" },
        discography: { eyebrow: "録音", title: "ディスコグラフィー" },
        gallery: { eyebrow: "写真", title: "ギャラリー" },
        contact: {
          eyebrow: "お問い合わせ", title: "コンタクト",
          formIntro: "コンサートのご依頼、取材、その他のお問い合わせは以下のフォームよりご連絡ください。",
          sentThanks: "メッセージを送信しました。ありがとうございます。",
          sendError: "送信中にエラーが発生しました。お手数ですが再度お試しいただくか、YouTubeよりご連絡ください。"
        }
      }
    },

    en: {
      site: { name: "Jean-Michel Kim", tagline: "Pianist" },
      nav: {
        home: "Home", biography: "Biography", schedule: "Schedule",
        press: "Press", discography: "Discography", gallery: "Gallery", contact: "Contact"
      },
      common: {
        upcoming: "Upcoming concerts", pastConcerts: "Past concerts",
        showPast: "Show past concerts", hidePast: "Hide past concerts",
        viewAll: "View full schedule", buyTickets: "Tickets",
        moreInfo: "More information", listen: "Listen", buy: "Buy",
        readArticle: "Read the article", sendMessage: "Send message",
        emailLabel: "Email", nameLabel: "Name", subjectLabel: "Subject", messageLabel: "Message",
        managementLabel: "Management / Booking"
      },
      footer: {
        followMe: "Follow", navigation: "Navigation", contactTitle: "Contact",
        rights: "All rights reserved."
      },
      pages: {
        home: {
          heroEyebrow: "Classical Pianist",
          heroSubtitle: "Based between France and Japan",
          heroCta: "View schedule",
          introTitle: "Welcome",
          introText: [
            "Born in Tokyo and based in France, pianist Jean-Michel Kim trained at the Conservatoire national supérieur de musique et de danse de Paris (CNSMDP) and won First Prize at the 2024 Albert Roussel International Piano Competition.",
            "He performs regularly at major venues and festivals across France and Japan, and is equally active in chamber music and vocal accompaniment."
          ],
          announceEyebrow: "New project",
          announceTitle: "From January 2027 — the complete 32 Beethoven piano sonatas",
          announceText: "A three-year cycle, with two to three recitals each year, at the Auditorium Régis Pasquier / Cordacor (Loches).",
          upcomingTitle: "Upcoming concerts",
          pressTitle: "What the press says",
          discoTitle: "Discography"
        },
        biography: { eyebrow: "Portrait", title: "Biography", factsTitle: "At a glance" },
        schedule: { eyebrow: "Agenda", title: "Concert Schedule" },
        press: { eyebrow: "Press", title: "Reviews" },
        discography: { eyebrow: "Recordings", title: "Discography" },
        gallery: { eyebrow: "Images", title: "Gallery" },
        contact: {
          eyebrow: "Get in touch", title: "Contact",
          formIntro: "For booking requests, interviews, or any other inquiry, please use the form below.",
          sentThanks: "Thank you, your message has been sent.",
          sendError: "Something went wrong. Please try again, or reach out via YouTube."
        }
      }
    }
  },

  /* ---------- プロフィール本文（Biographyページ） ---------- */
  profile: {
    fr: {
      longBio: [
        "Né à Tokyo et établi en France, le pianiste Jean-Michel Kim se forme d'abord au lycée rattaché à la Tokyo Music University avant de rejoindre la France à l'âge de dix-neuf ans. Au Conservatoire national supérieur de musique et de danse de Paris, il étudie le piano auprès de Jacques Rouvier, Hortense Cartier-Bresson et Théodore Paraskivesco, ainsi que la musique de chambre auprès de Haruko Ueda, et obtient trois masters, en piano, musique de chambre et accompagnement vocal. Il poursuit ensuite son perfectionnement à l'École normale de musique de Paris auprès d'Henri Barda, où il obtient le Diplôme de concertiste. De 2018 à 2023, il est assistant de la classe de chant du CNSMDP.",
        "Lauréat du Premier Prix du Concours international de piano de Lagny et du Prix piano du Concours d'interprétation de la Mélodie française de Toulouse en 2017, il reçoit le Prix Pro Musicis en 2019. Nommé à l'International German Piano Award en 2023, il remporte en 2024 le Premier Prix du Concours international de piano Albert Roussel. La même année, l'album Ivresse de l'aube reçoit le Prix spécial du journal Mainichi.",
        "Il se produit en France dans des salles et festivals tels que la Salle Cortot, La Folle Journée de Nantes, Piano aux Jacobins, les Nancyphonies, Musique à La Prée et Piano en Valois. Au Japon, il est invité notamment au Toppan Hall, au Yamaha Hall, au Biwako Hall, au Hakuju Hall, à l'Oji Hall et au Tokyo Opera City Hall, et y effectue régulièrement des tournées de récitals depuis 2018.",
        "Parallèlement à son activité de soliste, Jean-Michel Kim accorde une place essentielle à la musique de chambre et au répertoire vocal. Il collabore notamment avec les violonistes Mie Kobayashi et Keisuke Tsushima, ainsi qu'avec la mezzo-soprano Brenda Poupard. Sa discographie comprend un premier album solo consacré à Ravel, Schubert, Chopin et Liszt (Passavant, 2021), le Tokyo Opera City Recital Live avec Keisuke Tsushima (Exton, 2021) et Ivresse de l'aube avec Brenda Poupard (Klarthe, 2023). Son jeu se distingue par une conception musicale forte et personnelle, portée par une technique toujours au service de l'œuvre et par un sens aigu du souffle, du drame et de la poésie."
      ],
      facts: [
        { label: "Né à", value: "Tokyo, Japon" },
        { label: "Formation", value: "CNSMDP (Jacques Rouvier, Hortense Cartier-Bresson, Théodore Paraskivesco) · École normale de musique de Paris (Henri Barda)" },
        { label: "Prix", value: "1er Prix, Concours international Albert Roussel (2024) · 1er Prix, Concours international de Lagny (2017) · Prix Pro Musicis (2019)" },
        { label: "Basé à", value: "France" }
      ]
    },
    ja: {
      longBio: [
        "東京に生まれ、フランスを拠点に活動するピアニスト、ジャン・ミッシェル キム。東京音楽大学付属高等学校で学んだのち、19歳で渡仏。パリ国立高等音楽院（CNSMDP）では、ジャック・ルヴィエ、オルタンス・カルティエ＝ブレッソン、テオドール・パラスキヴェスコにピアノを、上田晴子に室内楽を学び、ピアノ、室内楽、声楽伴奏の三部門で修士課程を修了した。さらに、エコール・ノルマル音楽院でアンリ・バルダに師事し、演奏家ディプロムを取得。2018年から2023年まで、パリ国立高等音楽院声楽科でアシスタントを務めた。",
        "2017年ラニー国際ピアノコンクール第1位、同年トゥールーズ・フランス歌曲解釈コンクールのピアノ賞、2019年プロ・ムジシス賞を受賞。2023年にはインターナショナル・ジャーマン・ピアノ・アワードにノミネートされ、2024年アルベール・ルーセル国際ピアノコンクールで第1位を獲得した。同年、アルバム『Ivresse de l'aube』が毎日新聞にて特選に選出されている。",
        "これまでサル・コルトー、ラ・フォル・ジュルネ・ド・ナント、ピアノ・オー・ジャコバン、ナンシーフォニー、ミュジック・ア・ラ・プレ、ピアノ・アン・ヴァロワなどフランス各地の主要なホールや音楽祭に出演。日本でもトッパンホール、ヤマハホール、びわ湖ホール、白寿ホール、王子ホール、東京オペラシティなどで演奏し、2018年以降、定期的にリサイタル・ツアーを行っている。",
        "ソリストとしての活動に加え、室内楽と声楽の分野にも深く取り組み、ヴァイオリニストの小林美恵、對馬佳祐、メゾソプラノのブレンダ・プパールらと共演を重ねている。ディスコグラフィーには、ラヴェル、シューベルト、ショパン、リストを収録したソロ・アルバム（Passavant、2021年）、對馬佳祐との『東京オペラシティ・リサイタル・ライヴ』（Exton、2021年）、ブレンダ・プパールとの『Ivresse de l'aube』（Klarthe、2023年）がある。力強く個性的な音楽構想と、常に音楽に奉仕する演奏技術によって、作品の内面に息づくドラマと詩情を鮮やかに描き出している。"
      ],
      facts: [
        { label: "出身", value: "東京" },
        { label: "学歴", value: "パリ国立高等音楽院／CNSMDP（ジャック・ルヴィエ、オルタンス・カルティエ＝ブレッソン、テオドール・パラスキヴェスコ）／エコール・ノルマル音楽院パリ（アンリ・バルダ）" },
        { label: "受賞歴", value: "2024年アルベール・ルーセル国際ピアノコンクール第1位／2017年ラニー国際ピアノコンクール第1位／2019年プロ・ムジシス賞" },
        { label: "拠点", value: "フランス" }
      ]
    },
    en: {
      longBio: [
        "Born in Tokyo and based in France, pianist Jean-Michel Kim studied at the music high school affiliated with Tokyo Music University before moving to France at the age of nineteen. At the Conservatoire national supérieur de musique et de danse de Paris, he studied piano with Jacques Rouvier, Hortense Cartier-Bresson and Théodore Paraskivesco, and chamber music with Haruko Ueda, earning master's degrees in piano, chamber music and vocal accompaniment. He continued his studies with Henri Barda at the École normale de musique de Paris, where he received the Diplôme de concertiste. From 2018 to 2023, he served as an assistant in the vocal department of the Paris Conservatoire.",
        "His distinctions include First Prize at the Lagny International Piano Competition and the Pianist's Prize at the Toulouse French Mélodie Interpretation Competition in 2017, followed by the Pro Musicis Prize in 2019. He was nominated for the International German Piano Award in 2023 and won First Prize at the Albert Roussel International Piano Competition in 2024. That same year, the album Ivresse de l'aube received the Mainichi Shimbun Special Prize.",
        "Kim has appeared at major French venues and festivals including Salle Cortot, La Folle Journée de Nantes, Piano aux Jacobins, the Nancyphonies, Musique à La Prée and Piano en Valois. In Japan, he has performed at Toppan Hall, Yamaha Hall, Biwako Hall, Hakuju Hall, Oji Hall and Tokyo Opera City Hall, and has returned regularly for recital tours since 2018.",
        "Alongside his work as a soloist, Jean-Michel Kim is deeply committed to chamber music and vocal repertoire. His collaborators include violinists Mie Kobayashi and Keisuke Tsushima, and mezzo-soprano Brenda Poupard. His discography comprises a debut solo album devoted to Ravel, Schubert, Chopin and Liszt (Passavant, 2021), Tokyo Opera City Recital Live with Keisuke Tsushima (Exton, 2021), and Ivresse de l'aube with Brenda Poupard (Klarthe, 2023). His playing is marked by a powerful and individual musical vision, supported by a technique consistently placed at the service of the score and by a keen sense of breath, drama and poetry."
      ],
      facts: [
        { label: "Born in", value: "Tokyo, Japan" },
        { label: "Education", value: "Paris Conservatoire / CNSMDP (Jacques Rouvier, Hortense Cartier-Bresson, Théodore Paraskivesco) · École normale de musique de Paris (Henri Barda)" },
        { label: "Awards", value: "First Prize, Albert Roussel International Piano Competition (2024) · First Prize, Lagny International Piano Competition (2017) · Pro Musicis Prize (2019)" },
        { label: "Based in", value: "France" }
      ]
    }
  },

  /* ---------- 連絡先・SNS（footer / contactページ共通） ---------- */
  /* ★ メールアドレスはコード上に一切書かない方針（お問い合わせは
     Formspree経由のフォームのみ）。instagram / facebook を載せたく
     なったら、youtube と同じ形 { label: "...", url: "..." } を
     追加するだけで footerとcontactページ両方に自動的に表示されます。 */
  contactDetails: {
    youtube: { label: "YouTube", url: "https://www.youtube.com/@jeanmi1989" }
  }
};
