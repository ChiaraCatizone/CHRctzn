// English texts. Keys must match it.js.
export default {
  nav: {
    backHome: 'Back to home',
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
    description:
      'This is my corner of the web: here I collect who I am, my path and the projects I have worked on, between code and art.',
    construction: 'Construction is happening. 🎉',
    sectionTitle: 'Here you will find',
    goToCv: 'Go to CV',
    soon: 'Coming soon',
    cards: {
      about: {
        title: 'About me',
        text: 'A few words about me: art, code and a cat code reviewer.',
        cta: 'Read more',
      },
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
    title: 'About me',
    illustration: 'A canederlo plus a Brasilena makes a heart',
    p1: 'Hi, I’m Chiara! I was born in Bolzano, to a mum from Bolzano and a dad from Calabria: I grew up between canederli and Brasilena, mountains and sea, and maybe that’s where my ease at living halfway between different worlds comes from.',
    p2: 'As a teenager I spent my days drawing and tinkering with HTML. After art school, a year in Ireland on a European scholarship and an art-related bachelor’s in Bologna, where I’ve lived since 2015, technology won (along with the serotonin of working code): I chose a master’s in Digital Humanities.',
    p3: 'During my master’s I met some truly brilliant people, and working with them on different projects was invaluable: it made me want to see up close how software gets built every day, so I decided to join a company.',
    p4: 'Today I work as a software engineer at NTT DATA Gov&Tech, mostly on .NET backend. I’m very proud of it, because I got here along a different and unexpected path.',
    p5: 'I never really left art behind, though, because I’ve never felt the need to choose just one part of myself: I like being a person with a thousand interests, moving from code to pencil without feeling out of place in either world.',
    p6: 'The same goes for my free time, which I fill with many different passions: I draw, in pencil or digitally, I read and I play. I’m fond of Pokémon and Professor Layton, and I really loved Uncharted and The Last of Us. I also watch quite a lot of anime: my favourites are Tokyo Ghoul, JoJo, The Apothecary Diaries and Evangelion. Whenever I can I travel, and the places closest to my heart are Japan and South Korea.',
    p7: 'Since the end of 2018 I’ve lived with Iago, my cat, who over time has earned the role of official code reviewer. He supervises every line from his spot next to the keyboard, approves with a purr and, when something doesn’t convince him, walks all over it. So far none of his reviews has been ignored.',
  },
  footer: {
    contactTitle: 'Let’s talk?',
    contactText: 'If you’d like to get in touch, you can find me here.',
    builtWith: 'built with',
    help: 'with {claude} as a helping hand',
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
    download: 'Download CV as PDF',
    downloading: 'Preparing the PDF…',
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
