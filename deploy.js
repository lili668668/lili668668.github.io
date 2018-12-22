const ghpages = require('gh-pages')

ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/lili668668/lili668668.github.io.git'
})

