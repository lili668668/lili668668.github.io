# <%= nickname %> / <%= name %>

<% print(titles.join(' / ')); %>

> <%= content %>

## Skills

<%
  skillGroups.forEach(function(group) {
    print(`### ${group.title}\n\n`);
    group.items.forEach(function(item) {
      print(`- ${item.title}\n`);
      print(`  > ${item.description}\n`);
    });
    print('\n');
  });
%>

## Experience

<%
  experienceGroup.forEach(function(group) {
    print(`### ${group.title}\n\n`);
    group.items.forEach(function(item) {
      print(`- ${item.title}\n`);
      print(`  > ${item.description}\n`);
    });
    print('\n');
  });
%>

## Side Projects

<%
  apps.forEach(function(app) {
    print(`- [${app.name}](${app.link})\n`);
    print(`  > ${app.description}\n`);
  })
%>

## Contact And Other Links

- [Gmail](mailto:<%= gmail %>)
- [GitHub](<%= github %>)
- [Facebook](<%= facebook %>)
- [Plurk](<%= plurk %>)
- [Medium](<%= medium %>)
- [Linkedin](<%= linkedin %>)

## About the template

You can use this template to make your own website.

1. Fork this project

2. Clone to local and install dependancies

  `$ git clone http://github.com/<your-account>/<your-account>.github.io`

  `$ npm install`

3. Modify `src/info.json` and `deploy.js` information

4. Deploy project

  `$ npm run deploy`

5. Push to your GitHub

  `$ git push origin react-website`
