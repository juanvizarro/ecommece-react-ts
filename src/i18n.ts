import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locale/en.json'
import es from './locale/es.json'


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { ...en },
            es: { ...es }
        },
        lng: 'en',
        interpolation: {
            escapeValue: false
        }
    })