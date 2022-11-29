/*
 * @Descripttion: 
 * @Date: 2022-08-10 11:28:44
 * @LastEditTime: 2022-11-23 15:53:24
 */
import { createI18n } from 'vue-i18n' // import from runtime only

import { getCookie } from '@/utils/auth'


// User defined lang
import enLocale from './en'
import zhLocale from './zh-cn'

const messages = {
  en: {
    ...enLocale,
    // ...elementEnLocale
  },
  'zh-cn': {
    ...zhLocale,
    // ...elementZhLocale
  }
}

export const getLocale = () => {
  const cookieLanguage = getCookie('userLanguage')
  if (cookieLanguage) {
    return cookieLanguage
  }
  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }

  // Default language is english
  return 'zh'
}



const i18n = createI18n({
  locale: getLocale(),
  messages: messages
})

export default i18n