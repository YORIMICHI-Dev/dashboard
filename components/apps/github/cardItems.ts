import type { cardsType } from '@/types/cardTypes/cardType';

import img1 from '/images/githubCard/github-blog.png';
import img2 from '/images/githubCard/github-chat.png';
import img3 from '/images/githubCard/github-chat.png';

/*--Blog Cards--*/
export const githubCard: cardsType[] = [
  {
    coveravatar: img3,
    title: 'Dashboard ',
    link: 'https://github.com/YORIMICHI-Dev/dashboard',
    category: 'Dashboard',
    languages: ['Typescript', 'Nuxt3'],
    time: '2023/12',
  },
  {
    coveravatar: img2,
    title:
      'Chat Gpt clone application with chat gpt-3.5',
    link: 'https://github.com/YORIMICHI-Dev/chat-app',
    category: 'Chat App',
    languages: ['Typescript', 'Next.js', 'Python', 'FastAPI'],
    time: '2023/06',
  },
  {
    coveravatar: img1,
    title: 'Coding skill blog',
    link: 'https://github.com/YORIMICHI-Dev/Blog',
    category: 'Old Blog',
    languages: ['Typescript', 'JavaScript', 'Next.js'],
    time: '2023/04',
  },
];
