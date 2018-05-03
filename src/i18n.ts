import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

import { isProduction } from 'utils/envHandler';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'ja',
    whitelist: ['en', 'ja'],
    ns: ['models', 'pages', 'text', 'ui'],
    defaultNS: 'pages',
    debug: !isProduction(),
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
