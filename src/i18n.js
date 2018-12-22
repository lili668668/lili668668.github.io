import i18n from 'i18next'
import { initReactI18n } from 'react-i18next/hooks'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18n)
  .init({
    load: 'currentOnly',
    fallbackLng: 'zh',
    lng: 'zh',

    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json'
    },

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    fallbackNS: 'translations',

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true
    }
  })


export default i18n
