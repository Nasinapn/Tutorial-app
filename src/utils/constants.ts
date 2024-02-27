import contact_1 from '../videos/contact/contact_1.mp4';
import contact_2 from '../videos/contact/contact_2.mp4';
import contact_3 from '../videos/contact/contact_3.mp4';
import contact_4 from '../videos/contact/contact_4.mp4';
import contact_5 from '../videos/contact/contact_5.mp4';
import contact_6 from '../videos/contact/contact_6.mp4';

import playstore_1 from '../videos/playstore/playstore_1.mp4';
import playstore_2 from '../videos/playstore/playstore_2.mp4';
import playstore_3 from '../videos/playstore/playstore_3.mp4';

import whatsapp_1 from '../videos/whatsapp/whatsapp_1.mp4';
import whatsapp_2 from '../videos/whatsapp/whatsapp_2.mp4';
import whatsapp_3 from '../videos/whatsapp/whatsapp_3.mp4';
import whatsapp_4 from '../videos/whatsapp/whatsapp_4.mp4';
import whatsapp_5 from '../videos/whatsapp/whatsapp_5.mp4';
import whatsapp_6 from '../videos/whatsapp/whatsapp_6.mp4';
import whatsapp_7 from '../videos/whatsapp/whatsapp_7.mp4';

import mail_1 from '../videos/gmail/mail_1.mp4';
import mail_2 from '../videos/gmail/mail_2.mp4';
import mail_3 from '../videos/gmail/mail_3.mp4';
import mail_4 from '../videos/gmail/mail_4.mp4';

export const APPS_LIST = [
  {id: 'contact', name: 'Contact'},
  {id: 'playstore', name: 'Playstore'},
  {id: 'whatsapp', name: 'Whatsapp'},
  {id: 'gmail', name: 'Gmail'},
];

// use id from above array as key here
export const TUTORIALSS_LIST: {
  [key: string]: Array<{id: string; name: string; video: any}>;
} = {
  contact: [
    {
      id: 'how_to_create_a_contact',
      name: 'How to create a contact',
      video: contact_1,
    },
    {
      id: 'how_to_call_a_contact',
      name: 'How to call a contact',
      video: contact_2,
    },
    {
      id: 'how_to_make_a_conference_call',
      name: 'How to make a conference call',
      video: contact_3,
    },
    {
      id: 'how_to_put_a_number_in_favourite',
      name: 'How to put a number in favourite',
      video: contact_4,
    },
    {
      id: 'how_to_block_a_number',
      name: 'How to block a number',
      video: contact_5,
    },
    {
      id: 'how_to_delete_a_contact',
      name: 'How to delete a contact',
      video: contact_6,
    },
  ],
  playstore: [
    {
      id: 'how_to_install_an_app',
      name: 'How install an app',
      video: playstore_1,
    },
    {
      id: 'how_to_update_apps',
      name: 'How to update apps',
      video: playstore_2,
    },
    {
      id: 'how_to_delete_or_unistall_an_app',
      name: 'How to delete or uninstall an app',
      video: playstore_3,
    },
  ],
  whatsapp: [
    {
      id: 'how_to_create_a_contact',
      name: 'How to create a contact',
      video: whatsapp_2,
    },
    {id: 'how_to_put_dp', name: 'How to put dp', video: whatsapp_3},
    {
      id: 'how_to_send_a_voice_message',
      name: 'How to send a voice message',
      video: whatsapp_4,
    },
    {
      id: 'how_to_send_a_contact',
      name: 'How to send a contact',
      video: whatsapp_5,
    },
    {
      id: 'how_to_make_a_voice_call',
      name: 'How to make a voice call',
      video: whatsapp_6,
    },
    {
      id: 'how_to_block_a_contact',
      name: 'How to block a contact',
      video: whatsapp_1,
    },
    {
      id: 'how_to_delete_a_message',
      name: 'How to delete a message',
      video: whatsapp_7,
    },
  ],
  gmail: [
    {id: 'how_compose_a_mail', name: 'How compose a mail', video: mail_1},
    {id: 'how_to_attach_a_file', name: 'How to attach a file', video: mail_2},
    {
      id: 'how_to_add_another_account',
      name: 'How to add another account',
      video: mail_3,
    },
    {
      id: 'how_to_check_latest_mail',
      name: 'How to check latest mail',
      video: mail_4,
    },
  ],
};
