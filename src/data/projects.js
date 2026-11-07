// I progetti mostrati nella pagina /projects.
// - id: nome "da codice" (camelCase); diventa il nome del file e della variabile nella card
// - year, stack: anno e tecnologie
// - demo, github: link completi (lascia null se non ci sono e la riga non compare)
// - contributors (facoltativo): username GitHub di chi ha lavorato con te, es. ['fcagnola']
// La descrizione sta in src/i18n/it.js ed en.js, sotto projects.items.<id>
//
// ⚠️ Solo il primo è vero: gli altri sono segnaposto da sostituire.

export const projects = [
  {
    id: 'chrctzn',
    year: 2026,
    stack: ['Vue', 'Vite', 'vue-i18n', 'Bootstrap'],
    demo: null,
    github: 'https://github.com/ChiaraCatizone/CHRctzn',
  },
  {
    id: 'cartooNlp',
    year: 2022,
    stack: ['Python', 'R', 'MALLET'],
    demo: null,
    contributors: ['fcagnola'],
    github: 'https://github.com/fcagnola/cartoonlp',
  },
  {
    id: 'NetArtRev',
    year: 2022,
    stack: ['Python', 'Jupyter Notebook','Plotly','SPARQL', 'RDF', 'Miro', 'HTML+CSS'],
    contributors: ['laurentfintoni', 'donellimargherita'],
    demo: 'https://laurentfintoni.github.io/Net-Art-Rev/',
    github: 'https://github.com/laurentfintoni/Net-Art-Rev',
  },
  {
    id: 'FlooData',
    year: 2022,
    stack: ['Python', 'RDF', 'DCAT-AP 2.0.0', 'Highcharts JS','Bulma'],
    contributors: ['GiuliaVenditti'],
    demo: 'https://chiaracati.github.io/FlooData/',
    github: 'https://github.com/ChiaraCati/FlooData',
  },
]
