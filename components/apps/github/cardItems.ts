import type { cardsType } from '@/types/cardTypes/cardType';

import img1 from '/images/githubCard/blog-img1.jpg'
import img2 from '/images/githubCard/blog-img1.jpg'
import img3 from '/images/githubCard/blog-img1.jpg'

/*--Blog Cards--*/
export const githubCard: cardsType[] = [
  {
    coveravatar: img3,
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    link: 'https://github.com/YORIMICHI-Dev/dashboard',
    category: 'Dashboard',
    languages: ['Typescript', 'Nuxt3'],
    time: '2023/12',
  },
  {
    coveravatar: img2,
    title:
      'Intel loses bid to revive antitrust case against patent foe Fortress',
    link: 'https://github.com/YORIMICHI-Dev/chat-app',
    category: 'Chat App',
    languages: ['Typescript', 'Next.js', 'Python', 'FastAPI'],
    time: '2023/06',
  },
  {
    coveravatar: img1,
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
    link: 'https://github.com/YORIMICHI-Dev/Blog',
    category: 'Old Blog',
    languages: ['Typescript', 'JavaScript', 'Next.js'],
    time: '2023/04',
  },
];
