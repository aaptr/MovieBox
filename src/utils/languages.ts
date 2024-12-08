export const languages = {
  _lang: 'lang',

  setLangToLocalStorage(lang: string) {
    localStorage.setItem(this._lang, lang)
  },

  getLangFromLocalStorage() {
    return localStorage.getItem(this._lang)
  }
}
