const fs = require('fs')
const template = require('lodash/template')
const markdownpdf = require('markdown-pdf')
const git = require('simple-git')
const config = require('../../package.json')
const info = require('../info')
const zh = require('../../public/locales/zh/translations')
const en = require('../../public/locales/en/translations')

const languages = ['en', 'zh']

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

function makeString(lng, templateString) {
  const translatedInfo = {
    ...translate(info, lng),
    englishVersionPath: `https://github.com/${config.github}/${config.github}.github.io/blob/react-website/README${config.defaultLanguage === 'en' ? '' : '.en'}.md`,
    chineseVersionPath: `https://github.com/${config.github}/${config.github}.github.io/blob/react-website/README${config.defaultLanguage === 'zh' ? '' : '.zh'}.md`
  }

  return template(templateString)(translatedInfo)
}

function commitReadme () {
  git()
    .add('README.*')
    .commit('Update README files')
}

function makeReadme() {
  languages.forEach(lng => {
    const templatePath = `./src/file-template/readme-template.${lng}.md`
    const readmePath = lng === config.defaultLanguage ? './README.md' : `./README.${lng}.md`

    const templateString = fs.readFileSync(templatePath, 'utf8')
    if (fs.existsSync(readmePath)) fs.unlinkSync(readmePath)
    fs.writeFileSync(readmePath, makeString(lng, templateString))
  })

  commitReadme()
}

function makeResume() {
  languages.forEach(lng => {
    const templatePath = `./src/file-template/resume-template.${lng}.md`
    const resumePath = `./Resume.${lng}.pdf`

    const templateString = fs.readFileSync(templatePath, 'utf8')
    if (fs.existsSync(resumePath)) fs.unlinkSync(resumePath)
    markdownpdf({
      remarkable: {
        html: true
      }
    })
      .from.string(makeString(lng, templateString)).to(resumePath, commitResume)
  })
}

function commitResume() {
  git()
    .add('Resume.*')
    .commit('Update Resume files')
}

function main () {
  makeReadme()
  makeResume()
}

main()
