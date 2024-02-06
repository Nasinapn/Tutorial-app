import whatsapp_1 from '../videos/whatsapp/whatsapp_1.mp4';

export const APPS_LIST = [
  {id: 'whatsapp', name: 'Whatsapp'},
  {id: 'instagram', name: 'Instagram'},
  {id: 'phonepe', name: 'PhonePe'},
  {id: 'gpay', name: 'GPay'},
];

// use id from above array as key here
export const TUTORIALSS_LIST: {
  [key: string]: Array<{id: string; name: string; video: any}>;
} = {
  whatsapp: [
    {id: 'whatsapp_tutorial_1', name: 'Whatsapp Tutorial 1', video: whatsapp_1},
    {id: 'whatsapp_tutorial_2', name: 'Whatsapp Tutorial 2', video: whatsapp_1},
    {id: 'whatsapp_tutorial_3', name: 'Whatsapp Tutorial 3', video: whatsapp_1},
  ],
  instagram: [
    {
      id: 'instagram_tutorial_1',
      name: 'Instagram Tutorial 1',
      video: whatsapp_1,
    },
    {
      id: 'instagram_tutorial_2',
      name: 'Instagram Tutorial 2',
      video: whatsapp_1,
    },
    {
      id: 'instagram_tutorial_3',
      name: 'Instagram Tutorial 3',
      video: whatsapp_1,
    },
  ],
  phonepe: [
    {id: 'phonepe_tutorial_1', name: 'PhonePe Tutorial 1', video: whatsapp_1},
    {id: 'phonepe_tutorial_2', name: 'PhonePe Tutorial 2', video: whatsapp_1},
    {id: 'phonepe_tutorial_3', name: 'PhonePe Tutorial 3', video: whatsapp_1},
  ],
  gpay: [
    {id: 'gpay_tutorial_1', name: 'GPay Tutorial 1', video: whatsapp_1},
    {id: 'gpay_tutorial_2', name: 'GPay Tutorial 2', video: whatsapp_1},
    {id: 'gpay_tutorial_3', name: 'GPay Tutorial 3', video: whatsapp_1},
  ],
};
