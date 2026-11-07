// Testi in italiano. Le chiavi devono essere le stesse di en.js.
export default {
  nav: {
    backHome: 'Torna alla home',
  },
  theme: {
    toLight: 'Passa alla modalità giorno',
    toDark: 'Passa alla modalità notte',
  },
  language: {
    switchTo: 'Switch to English',
    short: 'EN',
  },
  home: {
    greeting: 'Benvenuto straniero! 👽',
    subtitle: 'Sei appena atterrato sulla mia pagina web...',
    description:
      'Questo è il mio angolo di web: qui raccolgo chi sono, il mio percorso e i progetti a cui ho lavorato, tra codice e arte.',
    construction: 'Lavori in corso. 🎉',
    sectionTitle: 'Qui troverai',
    soon: 'In arrivo',
    cards: {
      about: {
        title: 'Chi sono',
        text: 'Due parole su di me, tra arte, codice e un gatto revisore.',
        cta: 'Scopri chi sono',
      },
      cv: {
        title: 'Curriculum Vitae',
        text: 'Il mio percorso, le esperienze e le competenze.',
        cta: 'Vai al CV',
      },
      projects: {
        title: 'Progetti',
        text: 'Le cose che ho costruito e a cui sto lavorando.',
        cta: 'Vai ai progetti',
      },
      experiments: { title: 'Esperimenti', text: 'Prove di design e componenti.' },
      notes: { title: 'Note', text: 'Appunti su quello che sto imparando.' },
      gallery: { title: 'Galleria', text: 'Immagini e lavori visivi.' },
      contacts: { title: 'Contatti', text: 'Dove trovarmi e come scrivermi.' },
    },
  },
  about: {
    title: 'Chi sono',
    illustration: 'Un canederlo più una Brasilena fa un cuore',
    p1: 'Ciao, sono Chiara! Sono nata a Bolzano, da mamma bolzanina e papà calabrese: sono cresciuta tra canederli e Brasilena, montagne e mare, e forse è da lì che mi viene la naturalezza nello stare a metà tra mondi diversi.',
    p2: 'Da ragazzina passavo le giornate a disegnare e a sperimentare con l’HTML. Dopo il liceo artistico, un anno in Irlanda grazie a una borsa di studio europea e una triennale legata all’arte a Bologna, dove vivo dal 2015, ha vinto la tecnologia (e la serotonina di un codice che funziona): ho scelto la magistrale in Digital Humanities.',
    p3: 'In magistrale ho conosciuto persone davvero brillanti, e lavorare insieme a loro su diversi progetti è stato prezioso: mi ha fatto venire voglia di vedere da vicino come si costruisce il software ogni giorno, così ho deciso di entrare in azienda.',
    p4: 'Oggi lavoro come software engineer in NTT DATA Gov&Tech e mi occupo soprattutto di backend in .NET. Ne vado molto orgogliosa, perché ci sono arrivata per una strada diversa e inaspettata.',
    p5: 'L’arte però non l’ho mai lasciata davvero, perché non ho mai sentito il bisogno di scegliere una sola parte di me: mi piace essere una persona dai mille interessi, che passa dal codice alla matita senza sentirsi fuori posto in nessuno dei due mondi.',
    p6: 'Lo stesso vale per il tempo libero, che riempio con tante passioni diverse: disegno, a matita o in digitale, leggo e gioco. Sono affezionata a Pokémon e al Professor Layton, e ho amato molto Uncharted e The Last of Us. Guardo anche parecchi anime: i miei preferiti sono Tokyo Ghoul, JoJo, The Apothecary Diaries ed Evangelion. Appena posso viaggio, e i posti che porto nel cuore sono il Giappone e la Corea del Sud.',
    p7: 'Dalla fine del 2018 con me vive Iago, il mio gatto, che nel tempo si è guadagnato il ruolo di code reviewer ufficiale. Supervisiona ogni riga dalla sua postazione accanto alla tastiera, approva con le fusa e, quando qualcosa non lo convince, ci cammina sopra. Finora nessuna delle sue review è stata ignorata.',
  },
  footer: {
    // {claude} viene sostituito dal link (vedi <i18n-t> in AppFooter.vue)
    contactTitle: 'Parliamo?',
    contactText: 'Se ti va di scrivermi, mi trovi qui.',
    builtWith: 'fatto con',
    help: 'con l’aiuto di {claude} come assistente',
  },
  curriculum: {
    title: 'Curriculum Vitae',
    name: 'Chiara Catizone',
    role: "Software Engineer {'@'} NTT DATA Gov&Tech",
    location: 'Bologna, Italia',
    linkedin: 'Profilo LinkedIn',
    present: 'Presente',
    experienceTitle: 'Esperienza',
    educationTitle: 'Formazione',
    skillsTitle: 'Competenze',
    grade: 'Voto',
    experience: {
      nttEngineer: {
        role: 'Software Engineer',
        type: 'Tempo pieno · Milano, da remoto',
        description: '',
      },
      nttAnalyst: {
        role: 'Analista',
        type: 'Apprendistato · Milano, da remoto',
        description: '',
      },
      nttIntern: {
        role: 'Analista',
        type: 'Stage',
        description: '',
      },
      unibo: {
        role: 'Sviluppatore web',
        type: 'A contratto · CIRSFID, Bologna',
        description:
          'Ho sviluppato risorse web in WordPress per presentare al pubblico i progetti del centro. Ho realizzato un POC per la classificazione del linguaggio d’odio: dall’estrazione dei dati per definirlo fino alla scelta degli LLM più adatti al compito, nel progetto pilota FAST-LISA, iniziativa sostenuta dall’UE.',
      },
    },
    education: {
      master: 'Laurea magistrale in Digital Humanities and Digital Knowledge',
      bachelor: 'Laurea triennale in DAMS – Discipline delle Arti, della Musica e dello Spettacolo',
    },
  },
  projects: {
    title: 'Progetti',
    intro: 'cose che ho costruito e a cui sto lavorando',
    with: 'con',
    all: 'tutti',
    filterLabel: 'Filtra per anno',
    // una descrizione per ogni progetto di src/data/projects.js (stessa chiave dell'id)
    items: {
      chrctzn:
        'Il mio sito personale, rifatto da zero in Vue con modalità giorno/notte e due lingue.',
      cartooNlp:
        'CartooNLP esplora come cambia il linguaggio dei film Disney in quasi un secolo, dal 1937 al 2021. Partendo dai sottotitoli di 59 film, il progetto usa il topic modeling (MALLET) per raggruppare i film per temi e la sentiment analysis (Syuzhet, R) per seguire l’andamento emotivo dei dialoghi.',
      NetArtRev:
        'Un progetto di data visualization e storytelling che si chiede se internet e il personal computer abbiano cambiato la composizione delle collezioni d’arte. Confronta i dati aperti di due istituzioni newyorkesi: il MoMA, che rappresenta il mondo dell’arte tradizionale, e Rhizome, dedicata alla net art e alla cultura digitale. Il risultato è un racconto visivo interattivo pubblicato come sito web.',
      FlooData:
        'Un progetto di open data sul rischio idrogeologico in Emilia-Romagna. Integra dataset aperti di ISPRA, Regione Emilia-Romagna e OpenCoesione in tre nuovi dataset su dissesti, interventi preventivi e riparativi e rischio per provincia. È accompagnato da un’analisi di qualità, licenze ed etica dei dati, e da un sito con mappe e grafici interattivi.',
    },
  },
}
