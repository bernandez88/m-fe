import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import local from 'locales/en/local.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'local';
    resources: {
      local: typeof local;
    };
  }
}

const i18n = i18next;

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  defaultNS: 'local',
  resources: {
    en: {
      local,
    },
  },
});

export default i18n;
