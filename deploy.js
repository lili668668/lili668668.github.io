const ghpages = require('gh-pages')
const config = require('./package.json')

ghpages.publish('build', {
  branch: 'master',
  repo: `git@github.com:${config.github}/${config.github}.github.io.git`,
  message: `Update version ${config.version}`
}, (err) => {
  if (err) console.log(err)
})

