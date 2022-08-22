import formatMessage from 'format-message'

const i18n = {
  language: false,
  messages: {},
  translation: {
    set(translation) {
      if (translation !== undefined) {
        this.language = translation.language
        this.messages = translation.messages

        formatMessage.setup({
          locale: this.language.code,
          translations: this.messages,
          missingTranslation: 'ignore'
        })
      }
    }
  },
  get(message, params = []) {
    return formatMessage(message, params)
  }
}

export default (context, inject) => {
  inject('i18n', i18n)
}
