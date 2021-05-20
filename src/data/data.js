const books = [
  {
    title: "Why Pray?",
    subTitle: "A Biblical Guide to the Power of Prayer",
    summary:
      "This is a book that takes the reader on a journey of prayer through the Bible. The Christian is aware of the need to maintain a strong life of prayer, but modern life throws its share of challenges. It is hoped that the deep insights gleaned from the lives of individuals who achieved great things for themselves and the world through prayer in the Bible, will serve to refresh and redouble our commitment to return to the age-old practice of communicating with the Lord Jesus Christ upon our knees.",
    pdfLink: "/books/WHY_PRAY.pdf",
    image: "/books/WHY_PRAY.png",
    pages: "158",
  },
  {
    title: "The One God Doctrine",
    subTitle: "Affirming The Strict Monotheism Of The Scriptures",
    summary:
      "This booklet focuses on Scriptures that declare the God of the Bile to be indivisibly one. It argues that God the Father was manifested in the flesh Himself. The postulates of the doctrine of the Trinity are considered and critqued.",
    pdfLink: "/books/THE_ONE_GOD_DOCTRINE.pdf",
    image: "/books/THE_ONE_GOD_DOCTRINE.png",
    pages: "92",
  },
  {
    title: "BE BAPTISED IN JESUS NAME!",
    subTitle: "The Role of Water in Salvation",
    summary:
      "This book discusses the necessity of baptism in Jesus name. The role of water in salvation is considered carefully. The Bible demonstrates that water is a mysterious element which is indispensable to both life and death. Jesus Himself affirmed the necessity of the new birth through water and the Spirit (John 3:5). The book also challenges the Trinitarian assumptions behind Matthew 28:19 arguing that the One true God robed Himself in flesh and assumed the name Jesus which is efficacious for salvation.",
    pdfLink:
      "/books/BE_BAPTISED_IN_JESUS_NAME_The_Role_of_Water_in_Salvation.pdf",
    image:
      "/books/BE_BAPTISED_IN_JESUS_NAME_The_Role_of_Water_in_Salvation.png",
    pages: "109",
  },
  {
    title: "The Right Hand of the Lord",
    subTitle: "Literal or Metaphorical?",
    summary:
      'This book is the first in a series that defend the One-God interpretation of the Bible. Mainstream Christianity understands the phrase "seated at the right hand of God" to imply a distinction between the Father and Jesus. In their view, this positions Jesus in a literal physical location to the right of the throne of God in heaven. This view is explored in this book and shown to be erroneous. The author argues, using scriptural evidence, that the phrase is metaphorical, and is in perfect harmony with the doctrine of the One True God in whom is no divisions or distinctions.',
    pdfLink: "/books/RIGHT_HAND_OF_THE_LORD.pdf",
    image: "/books/RIGHT_HAND_OF_THE_LORD.png",
    pages: "67",
  },
  {
    title: "THE SON OF GOD",
    subTitle:
      "The Necessity of Believing in the Divine Origin of Christ’s Body",
    summary:
      "This is a short treatise on the subject of the origin of the flesh and blood of Jesus. The book stresses the need to understand that the flesh and blood of our Lord has its origin in Jehovah alone. Christ is not consubstantial with humans, but with the Word of God/Holy Spirit. This belief is essential if our salvation is to be efficacious.",
    pdfLink:
      "/books/THE_NECESSITY_OF_BELEIVING_IN_THE_DIVINE_ORIGIN_OF_CHRISTS_BODY.pdf",
    image:
      "/books/THE_NECESSITY_OF_BELEIVING_IN_THE_DIVINE_ORIGIN_OF_CHRISTS_BODY.png",
    pages: "53",
  },
  {
    title: "The Second Man - The Lord from Heaven",
    subTitle:
      "A Critical Appraisal of Historical Christology from Chalcedon to the Monothelite Controversy (AD 681)",
    summary:
      "The central thesis of this book is: did God robe Himself in earthly human flesh or did He come in His own heavenly flesh? The belief that Christs flesh is heavenly will be shown to be a bedrock teaching in the Bible. Conversely, to believe that Jesus assumed human flesh - having its origin in the lowly dust - leaves one with a distorted view of the identity of the One True God in Christ and, sadly, a diminished view of His resplendent glory. It will be argued that a wrong understanding of the Word made flesh (John 1:14) doctrine (Christology) impacts negatively on a series of other foundational doctrines in the Bible among which are baptism in Jesus name and the Lords Supper.",
    pdfLink: "/books/The_Second_Man_The_Lord_from_Heaven.pdf",
    image: "/books/The_Second_Man_The_Lord_from_Heaven.png",
    pages: "196",
  },
  {
    title: "Young for God",
    subTitle: "",
    summary:
      "There are countless challenges facing the young today. This book is written with a burden to help the young navigate through these challenges using the word of God. What advice would the apostles have given youth today in regards to the omnipresent internet and social media for instance? It is argued that Christian youth can still look to the likes of David and Daniel as excellent role models in negotiating the trails and temptations common to youth today.",
    pdfLink: "/books/Young_for_God.pdf",
    image: "/books/Young_for_God.png",
    pages: "58",
  },
  {
    title: "Why Go To Church?",
    subTitle: "A Bible-based rationale for church attendance",
    summary:
      "There are countless challenges facing the young today. This book is written with a burden to help the young navigate through these challenges using the word of God. What advice would the apostles have given youth today in regards to the omnipresent internet and social media for instance? It is argued that Christian youth can still look to the likes of David and Daniel as excellent role models in negotiating the trails and temptations common to youth today.",
    pdfLink: "/books/WHY_GO_TO_CHURCH.pdf",
    image: "/books/WHY_GO_TO_CHURCH.png",
    pages: "80",
  },
  {
    title: "The Two Shall Become One Flesh",
    subTitle: "",
    summary:
      "This booklet explores the mystery of biblical marriage as a type of the relationship between Christ and His bride, the Church. The uniqueness of this relationship is witnessed in the creation of the woman, from the rib of the man. This corresponds to the bride of Christ, the Church, which was similarly purchased with blood and water issuing from the side of her husband, the Lord Jesus Christ. Paul's command for husbands to love their wives and wives to respect their husbands are twin pillars central to the success of a marriage.",
    pdfLink: "/books/The_Two_Shall_Become_One_Flesh.pdf",
    image: "/books/The_Two_Shall_Become_One_Flesh.png",
    pages: "52",
  },
  {
    title: "The Christian and Alcohol",
    subTitle: "A Case for Total Abstinence",
    summary:
      "This booklet makes the case for total abstinence from within a biblical framework. It considers the intoxication of giants of the faith, such as Noah and Lot, and argues for a zero tolerance policy towards alcohol.It also draws upon alcohol-related research from across the world to bolster the case for abstinence.",
    pdfLink: "/books/THE_CHRISTIAN_AND_ALCOHOL.pdf",
    image: "/books/THE_CHRISTIAN_AND_ALCOHOL.png",
    pages: "140",
  },
  {
    title: "The Government of God",
    subTitle: "Biblical Principles of Leadership",
    summary:
      'This book can perhaps be usefully perceived as an invitation to reflect on aspects of the principles of the government of God through the ages. In this present time, when authority has been compromised - partly because of the misuse of power and partly because of rebellion - there is an urgent need to reclaim sound biblical principles of authority and leadership. As the idiom says, we cannot throw out the baby with the bathwater. God has always had principles of governance for the people of His covenant. Each epoch or dispensation had a specific set of divine edicts drawn up between God and His people. The content varied but the principles always reflected the holy and moral nature of God. We can ascertain from the "pages" of the Bible that there has never been a time when God operated without principles of governance.',
    pdfLink: "/books/The_Government_of_God.pdf",
    image: "/books/The_Government_of_God.png",
    pages: "128",
  },
];

module.exports = books;
