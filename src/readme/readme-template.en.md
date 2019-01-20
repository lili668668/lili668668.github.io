# <img src="<%= mdAvatar %>" width="60" height="60"> <%= nickname %> / <%= name %>

<% print(titles.join(' / ')); %>

<img src="<%= mdPhoto %>" width="240">

> <%= content %>

- [Chinese Version](<%= chineseVersionPath %>)

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
  experienceGroups.forEach(function(group) {
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

4. Remove `public/CNAME` or change CNAME to your own domain name

5. Deploy project

  `$ npm run deploy`

6. Push to your GitHub

  `$ git add .`

  `$ git commit`

  `$ git push origin react-website`
