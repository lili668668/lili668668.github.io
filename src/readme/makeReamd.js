const template = require('lodash/template')
const fs = require('fs')
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

function main () {
  const language = 'zh'

  const translatedInfo = translate(info, language)

  const templatePath = `./readme-template.${language}.md`
  const readmePath = '../../README.md'

  const templateString = fs.readFileSync(templatePath, 'utf8')

  if (fs.existsSync(readmePath)) fs.unlinkSync(readmePath)

  fs.writeFileSync(readmePath, template(templateString)(translatedInfo))
}

main()
