import { nanoid } from 'nanoid';
import Resume from '../resume/resume.pdf'

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Derek Black',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'DerekBlack1.jpg',
  paragraphOne: `Hi I'm Derek Black. I'm an exceptionally creative and dependable entry level web developer. I have a stellar customer service record and a superb work ethic. `,
  paragraphTwo: `My objective is to be able to work for an encouraging and stable company that will assist me in developing , improving, and obtaining the necessary skills in order to become the best developer possible.`,
  paragraphThree: '',
  resume: Resume, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'giphyAPI.PNG',
    title: 'Giphy Search API',
    info: 'This Search App takes a searched term and uses the GiphyAPI to bring back a GIF and display it.',
    info2: ' Made with Giphy API, HTML, CSS, JavaScript',
    url: 'https://db-gif-api.web.app/',
    repo: 'https://github.com/DerekBlack94/GifyAPI', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'FBC-thumbnail.PNG',
    title: 'Family Bike Chain Repair App',
    info: 'I developed this app for a local bicyel shop to keep track of tasks, repairs and customers bikes.',
    info2: 'This application uses JavaScript, React, REST-API and SQL server. The database is deployed to Heroku while the Client is deployed to Netlify',
    url: 'https://quirky-hoover-de0d50.netlify.app',
    repo: 'https://github.com/DerekBlack94/FBC-Task-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PokemonAPI2.PNG',
    title: 'Scary Pokemon Story API',
    info: 'This was my very first API project, I pull Pokemon data from the PokeAPI and displayit along side some of the series most loved and feared Pokemon',
    info2: 'Utilizes HTML, CSS and JavaScript',
    url: 'https://derekblack94.github.io/pokemonAPI/',
    repo: 'https://github.com/DerekBlack94/pokemonAPI', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email',
  email: 'derekblack94@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/derek-black-7478791ba',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DerekBlack94',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
