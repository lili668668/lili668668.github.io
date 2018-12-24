const fs = require('fs')
const template = require('lodash/template')
const git = require('simple-git')
const info = require('../info')
const zh = require('../../public/locales/zh/translations')
const en = require('../../public/locales/en/translations')

function translate (thing, language) {
  function translateAny (any) {
    if (Array.isArray(any)) return translateArray(any)
    if (typeof any === 'object') return translateObject(any)
    if (typeof any === 'string') return translateString(any)
    return any
  }

  function translateArray (array) {
    return array
      .map(item => translateAny(item))
  }

  function translateObject (object) {
    return Object.keys(object)
      .map(key => ({ [key]: translateAny(object[key]) }))
      .reduce((collection, item) => Object.assign({}, collection, item), {})
  }

  function translateString (string) {
    if (language === 'zh' && zh[string] !== undefined) return zh[string]
    if (language === 'en' && en[string] !== undefined) return en[string]
    return string
  }

  return translateAny(thing)
}

function commit () {
  git()
    .add('README.*')
    .commit('Update README files')
}

function main () {
  const languages = ['en', 'zh']
  const defaultLanguage = 'en'

  languages.forEach(lng => {
    const translatedInfo = translate(info, lng)

    const templatePath = `./src/readme/readme-template.${lng}.md`
    const readmePath = lng === defaultLanguage ? './README.md' : `./README.${lng}.md`

    const templateString = fs.readFileSync(templatePath, 'utf8')
    if (fs.existsSync(readmePath)) fs.unlinkSync(readmePath)
    fs.writeFileSync(readmePath, template(templateString)(translatedInfo))
  })

  commit()
}

main()
