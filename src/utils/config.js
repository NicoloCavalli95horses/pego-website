const config = {
  brand: [
    {
      name: "Palazzetti",
      url: "https://palazzetti.it/",
      src: "icons/palazzetti.svg",
    },
    {
      name: "MCZ",
      url: "https://www.mcz.it/it/",
      src: "icons/mcz.svg",
    },
    {
      name: "Anselmo Cola",
      url: "https://www.colastufe.com/",
      src: "icons/anselmocola.svg",
    },
    {
      name: "Termovana",
      url: "https://www.termovana.it/",
      src: "icons/termovana.svg",
    },
    {
      name: "Cadel",
      url: "https://www.cadelsrl.com/",
      src: "icons/cadel.svg",
    },
    {
      name: "Brisach",
      url: "https://www.brisach.com/",
      src: "icons/brisach.png",
    },
    {
      name: "Freepoint",
      url: "https://free-point.it/en/home-2/",
      src: "icons/freepoint.png",
    },
    {
      name: "Last Calor",
      url: "https://www.colastufe.com/",
    },
    {
      name: "Royal",
      url: "https://royal1915.it/",
      src: "icons/royal.png",
    },
    {
      name: "Red",
      url: "https://www.redheating.fr/en/",
      src: "icons/red.png",
    },
  ],
  cards: [
    {
      title: "Manutenzione straordinaria",
      description:
        "Su stufe a pellet Palazzetti, MCZ, Cadel, Anselmo Cola, Last Calor, Royal, Freepoint, Termovana, Red, Brisach. Una regolare manutenzione garantisce la sicurezza e diminuisce i consumi.",
    },
    {
      title: "Assistenza tecnica autorizzata",
      description:
        "Nelle riparazioni utilizziamo ricambi originali e offriamo la garanzia prevista dalla legislazione vigente.",
    },
    {
      title: "Rilascio libretto impianti",
      description:
        "Se ne sei sprovvisto, chiedici informazioni. Possiamo inserire e gestire il libretto di impianto nel catasto C.I.R.C.E.",
    },
    {
      title: "Prove di ventilazione",
      description:
        "La prova di ventilazione certifica che gli ambienti di installazione non superino la soglia di 4 Pascal di pressione negativa, laddove non è possibile effettuare un foro di aerazione permanente secondo la norma tecnica vigente.",
    },
  ],
  cities: [
    "altivole",
    "arcade",
    "asolo",
    "borso del grappa",
    "breda di piave",
    "caerano di san marco",
    "cappella maggiore",
    "carbonera",
    "casale sul sile",
    "casier",
    "castelcucco",
    "castelfranco veneto",
    "castello di godego",
    "cavaso del tomba",
    "cessalto",
    "chiarano",
    "cimadolmo",
    "cison di valmarino",
    "codognè",
    "colle umberto",
    "conegliano",
    "cordignano",
    "cornuda",
    "crocetta del montello",
    "farra di soligo",
    "follina",
    "fontanelle",
    "fonte",
    "fregona",
    "gaiarine",
    "giavera del montello",
    "godega di sant'urbano",
    "gorgo al monticano",
    "istrana",
    "loria",
    "mansuè",
    "mareno di piave",
    "maser",
    "maserada sul piave",
    "meduna di livenza",
    "miane",
    "mogliano veneto",
    "monastier di treviso",
    "monfumo",
    "montebelluna",
    "morgano",
    "moriago della battaglia",
    "motta di livenza",
    "nervesa della battaglia",
    "oderzo",
    "ormelle",
    "orsago",
    "paese",
    "pederobba",
    "pieve del grappa",
    "pieve di soligo",
    "ponte di piave",
    "ponzano veneto",
    "portobuffolé",
    "possagno",
    "povegliano",
    "preganziol",
    "quinto di treviso",
    "refrontolo",
    "resana",
    "revine lago",
    "riese pio x",
    "roncade",
    "salgareda",
    "san biagio di callalta",
    "san fior",
    "san pietro di feletto",
    "san polo di piave",
    "san vendemiano",
    "san zenone degli ezzelini",
    "santa lucia di piave",
    "sarmede",
    "segusino",
    "sernaglia della battaglia",
    "silea",
    "spresiano",
    "susegana",
    "tarzo",
    "trevignano",
    "treviso",
    "valdobbiadene",
    "vazzola",
    "vedelago",
    "vidor",
    "villorba",
    "vittorio veneto",
    "volpago del montello",
    "zenson di piave",
    "zero branco",
  ],
  counters: [
    {
      label: "Clienti fidelizzati",
      value: 2000,
      plus: true,
      animation_time: 3000,
      multiplier: 4,
      icon: "fa-solid fa-users",
    },
    {
      label: "Anni di esperienza",
      value: new Date().getFullYear() - 2004,
      plus: false,
      animation_time: 3000,
      multiplier: 1,
      icon: "fa-solid fa-cake-candles",
    },
    {
      label: "Comuni coperti",
      value: 92,
      plus: false,
      animation_time: 3000,
      multiplier: 1,
      icon: "fa-solid fa-map-location-dot",
    },
  ],
  faq: [
    {
      question: "A cosa serve la manutenzione della stufa a pellet?",
      answer: "La manutenzione della stufa a pellet serve a mantenere l’impianto performante e sicuro nel tempo, riducendo fortemente il rischio di guasto nella stagione invernale. Inoltre, una stufa non regolarmente mantenuta consuma più combustibile a parità di calore generato. Alcuni motori possono aumentare la rumorosità se non correttamente puliti.",
    },
    {
      question: "Cos'è il libretto di impianto CIRCE?",
      answer: "Nel libretto di impianto CIRCE (Regione Veneto) è registrato il tuo impianto e le operazioni di manutenzione su di esso eseguite. Puoi consultare il tuo libretto disponendo di codice catasto e codice chiave,",
      link_src: 'https://catasto-impianti-termici.regione.veneto.it/consultazione_anonima.php',
      link_text: 'cliccando qui.'
    },
    {
      question: "La mia stufa a pellet ha un problema o va in errore, come posso risolvere?",
      answer: "Generalmente in seguito a un malfunzionamento compare sul display o sulla schermata dell'applicazione un codice errore o la descrizione del problema. Comunicaci tale informazione e in che momento è emersa la problematica, assieme al nome del modello della stufa. Cercheremo di aiutarti telefonicamente o via email, qualora non fosse possibile fisseremo un appuntamento.",
    },
    {
      question: "Ho un caminetto da riparare, posso rivolgermi a voi?",
      answer: "Certamente, per la maggior parte dei modelli di caminetti delle marche che seguiamo c'è disponibilità di pezzi di ricambio, anche per modelli datati.",
    },
    {
      question: "La manutenzione comprende anche la pulizia della canna fumaria?",
      answer: "Laddove accessibile, offriamo il servizio di pulizia della canna fumaria contestualmente alla manutenzione. Puliamo la canna fumaria solo di apparecchi a pellet, non di stufe o caminetti a legna, per i quali possiamo metterti in contatto con spazzacamini professionisti."
    },
    {
      question: "Che pezzi di ricambio vengono usati per le riparazioni, qualora fossero necessarie?",
      answer: "Utilizziamo solamente pezzi di ricambio originali, forniti direttamente dalle aziende produttrici e dedicati precisamente alla tua stufa. Per questo chiediamo che ci sia comunicata la matricola identificativa del tuo apparecchio. Sui pezzi sostituiti è ovviamente vigente la garanzia europea."
    },
    {
      question: "In cosa consiste la manutenzione di una stufa a pellet?",
      answer: "Bisogna diffidare dalle manutenzioni poco approfondite: il controllo della stufa a pellet comprende la pulizia della camera di combustione e del giro fumi, la pulizia dei motori e il controllo delle sicurezze di serie sulla stufa. Inoltre, si pone attenzione alla funzionalità dell’impianto nella sua interezza. Tali operazioni richiedono circa un’ora e mezza."
    }
  ],
};

export { config };
