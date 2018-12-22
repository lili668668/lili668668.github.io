const ghpages = require('gh-pages')
const config = require('./package.json')

ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/lili668668/lili668668.github.io.git',
  message: `Update version ${config.version}`
}, (err) => {
  if (err) console.log(err)
})

