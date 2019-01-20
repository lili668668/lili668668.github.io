# <img src="<%= mdAvatar %>" width="60" height="60"> <%= nickname %> / <%= name %>

<% print(titles.join(' / ')); %>

<img src="<%= mdPhoto %>" width="240">

<%= content %>

## 技能樹

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

## 經驗

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
  });
%>

## 相關連結

- Gmail: <%= gmail %>
- GitHub: <%= github %>
- Facebook: <%= facebook %>
- Medium: <%= medium %>
- Linkedin: <%= linkedin %>
