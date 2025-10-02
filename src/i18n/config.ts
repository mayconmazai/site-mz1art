import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { updateMetaTags } from '../utils/updateMetaTags'

import ptBR from './locales/pt-BR.json'
import en from './locales/en.json'
import es from './locales/es.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': { translation: ptBR },
      'en': { translation: en },
      'es': { translation: es },
    },
    fallbackLng: 'pt-BR',
    supportedLngs: ['pt-BR', 'en', 'es'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Detectar primeiro pela URL (ex.: /en, /es), depois localStorage e navegador
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 1, // /en/ -> index 1
      caches: ['localStorage'],
    },
  })

// Atualizar meta tags quando o idioma mudar
i18n.on('languageChanged', (lng) => {
  updateMetaTags(lng)
})

// Atualizar meta tags no carregamento inicial
updateMetaTags(i18n.language)

export default i18n
