// images
import image1 from '/images/hobby/bird1.jpg';
import image2 from '/images/hobby/bird2.jpg';
import image3 from '/images/hobby/bird3.jpg';

// types
export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

// gallery components
export const birdGallery: KeyedObject[] = [
  {
    id: '#1Gallery',
    image: image1,
    title: 'Family on the nest',
    dateTime: 'Tue Aug 24 2021',
  },
  {
    id: '#2Gallery',
    image: image2,
    title: 'Mother and children',
    dateTime: 'Fri Apr 30 2021',
  },
  {
    id: '#3Gallery',
    image: image3,
    title: 'Male society finch',
    dateTime: 'Fri Jun 25 2021',
  },
];
