# <img src="<%= mdAvatar %>" width="60" height="60"> <%= nickname %> / <%= name %>

<% print(titles.join(' / ')); %>

<img src="<%= mdPhoto %>" width="240">

<%= content %>

## Skills

<%
  skillGroups.forEach(function(group) {
    print(`### ${group.title}\n\n`);
    group.items.forEach(function(item) {
      print(`- ${item.title}\n`);
      print(`${item.description}\n`);
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
      print(`${item.description}\n`);
    });
    print('\n');
  });
%>

## Side Projects

<%
  apps.forEach(function(app) {
    print(`- ${app.name}: ${app.link}\n`);
    print(`${app.description}\n`);
  })
%>

## Contact And Other Links

- Gmail: <%= gmail %>
- GitHub: <%= github %>
- Facebook: <%= facebook %>
- Medium: <%= medium %>
- Linkedin: <%= linkedin %>
