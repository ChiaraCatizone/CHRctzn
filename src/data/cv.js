// Dati del Curriculum (presi dal profilo LinkedIn).
// Qui stanno le parti che non si traducono: date, aziende, competenze.
// I testi che cambiano con la lingua (ruolo, tipo di contratto, descrizione, titolo di studio)
// stanno in src/i18n/it.js ed en.js, sotto curriculum.experience.<id> e curriculum.education.<id>
//
// Date nel formato 'AAAA-MM'. end: null = "Presente"

export const linkedin = 'https://www.linkedin.com/in/chiara-catizone-918a07195/'

export const experience = [
  {
    id: 'nttEngineer',
    org: 'NTT DATA',
    start: '2026-03',
    end: null,
    skills: ['Software design'],
  },
  {
    id: 'nttAnalyst',
    org: 'NTT DATA',
    start: '2024-03',
    end: '2026-03',
    skills: ['Angular', 'JavaScript', 'HTML', '.NET', 'ASP.NET MVC', 'Data analysis'],
  },
  {
    id: 'nttIntern',
    org: 'NTT DATA',
    start: '2023-12',
    end: '2024-03',
    skills: [],
  },
  {
    id: 'unibo',
    org: 'Alma Mater Studiorum – Università di Bologna',
    start: '2022-07',
    end: '2023-12',
    skills: ['WordPress', 'Local LLMs'],
  },
]

export const education = [
  {
    id: 'master',
    org: 'Alma Mater Studiorum – Università di Bologna',
    start: '2019-10',
    end: '2023-03',
    grade: '109/110',
  },
  {
    id: 'bachelor',
    org: 'Alma Mater Studiorum – Università di Bologna',
    start: '2015-10',
    end: '2019-07',
    grade: '99/110',
  },
]

export const skills = [
  'Angular',
  'Vue',
  'JavaScript',
  'HTML',
  'CSS',
  '.NET',
  'ASP.NET MVC',
  'Python',
  'R',
  'WordPress',
  'Local LLMs',
  'Data analysis',
  'Web design',
  'Software design',
]
