// English texts. Keys must match it.js.
export default {
  nav: {
    about: 'About',
    examples: 'Components examples',
    action: 'Action',
    anotherAction: 'Another action',
    somethingElse: 'Something else here',
    menu: 'Open menu',
  },
  theme: {
    toLight: 'Switch to day mode',
    toDark: 'Switch to night mode',
  },
  language: {
    switchTo: 'Passa all’italiano',
    short: 'IT',
  },
  home: {
    greeting: 'Welcome Stranger! 👽',
    subtitle: 'you just landed on my Web Page...',
    construction: 'Construction is happening. 🎉',
    sectionTitle: 'Here you will find',
    goToCv: 'Go to CV',
    soon: 'Coming soon',
    cards: {
      cv: { title: 'Curriculum Vitae', text: 'My path, experience and skills.', cta: 'Go to CV' },
      projects: {
        title: 'Projects',
        text: 'Things I have built and am working on.',
        cta: 'See projects',
      },
      experiments: { title: 'Experiments', text: 'Design and component trials.' },
      notes: { title: 'Notes', text: 'Notes on what I am learning.' },
      gallery: { title: 'Gallery', text: 'Images and visual work.' },
      contacts: { title: 'Contacts', text: 'Where to find me and how to reach me.' },
    },
  },
  about: {
    title: 'About',
    construction: 'Construction is happening. 🎉',
  },
  curriculum: {
    title: 'Curriculum Vitae',
    name: 'Chiara Catizone',
    role: "Software Engineer {'@'} NTT DATA Gov&Tech",
    location: 'Bologna, Italy',
    linkedin: 'LinkedIn profile',
    present: 'Present',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    skillsTitle: 'Skills',
    grade: 'Grade',
    experience: {
      nttEngineer: {
        role: 'Software Engineer',
        type: 'Full-time · Milan, remote',
        description: '',
      },
      nttAnalyst: {
        role: 'Analyst',
        type: 'Apprenticeship · Milan, remote',
        description: '',
      },
      nttIntern: {
        role: 'Analyst',
        type: 'Internship',
        description: '',
      },
      unibo: {
        role: 'Web Developer',
        type: 'Contract · CIRSFID, Bologna',
        description:
          'I built WordPress web resources to present the centre’s projects to the public. I also delivered a POC for hate speech classification, from extracting the data that defines it to selecting the most suitable LLMs for the task, as part of the FAST-LISA pilot project, an EU-backed initiative.',
      },
    },
    education: {
      master: "Master's degree in Digital Humanities and Digital Knowledge",
      bachelor: "Bachelor's degree in Drama, Art and Music Studies (DAMS)",
    },
  },
  projects: {
    title: 'Projects',
    intro: 'things I have built and am working on',
    all: 'all',
    filterLabel: 'Filter by year',
    // one description per project in src/data/projects.js (same key as the id)
    items: {
      chrctzn:
        'My personal website, rebuilt from scratch in Vue with day/night mode and two languages.',
      cartooNlp:
        'CartooNLP explores how the language of Disney films changed over almost a century, from 1937 to 2021. Starting from the subtitles of 59 films, the project uses topic modeling (MALLET) to group the films by theme and sentiment analysis (Syuzhet, R) to follow the emotional arc of the dialogue.',
      NetArtRev:
        'A data visualisation and storytelling project asking whether the internet and personal computers changed the make-up of art collections. It compares open data from two New York institutions: MoMA, representing the traditional art world, and Rhizome, devoted to net art and born-digital culture. The result is an interactive visual narrative published as a website.',
      FlooData:
        'An open data project on hydrogeological risk in Emilia-Romagna. It combines open datasets from ISPRA, the Emilia-Romagna Region and OpenCoesione into three new datasets covering disruptions, preventive and restorative interventions, and risk by province. It comes with a quality, legal and ethical analysis of the data, plus a website with interactive maps and charts.',
    },
  },
}
