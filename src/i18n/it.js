// Testi in italiano. Le chiavi devono essere le stesse di en.js.
export default {
  nav: {
    about: 'Chi sono',
    examples: 'Esempi di componenti',
    action: 'Azione',
    anotherAction: "Un'altra azione",
    somethingElse: "Qualcos'altro",
    menu: 'Apri il menu',
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
    construction: 'Lavori in corso. 🎉',
    sectionTitle: 'Qui troverai',
    soon: 'In arrivo',
    cards: {
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
    construction: 'Lavori in corso. 🎉',
  },
  curriculum: {
    title: 'Curriculum Vitae',
    construction: 'Lavori in corso. 🎉',
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
      NetArtRev: 'Un progetto di data visualization e storytelling che si chiede se internet e il personal computer abbiano cambiato la composizione delle collezioni d’arte. Confronta i dati aperti di due istituzioni newyorkesi: il MoMA, che rappresenta il mondo dell’arte tradizionale, e Rhizome, dedicata alla net art e alla cultura digitale. Il risultato è un racconto visivo interattivo pubblicato come sito web.',
      FlooData: 'Un progetto di open data sul rischio idrogeologico in Emilia-Romagna. Integra dataset aperti di ISPRA, Regione Emilia-Romagna e OpenCoesione in tre nuovi dataset su dissesti, interventi preventivi e riparativi e rischio per provincia. È accompagnato da un’analisi di qualità, licenze ed etica dei dati, e da un sito con mappe e grafici interattivi.',
    },
  },
}
