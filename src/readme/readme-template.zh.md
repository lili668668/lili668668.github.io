# <%= nickname %> / <%= name %>

<% print(titles.join(' / ')); %>

> <%= content %>

- [英文](https://github.com/lili668668/lili668668.github.io/blob/react-website/README.md)

## 技能樹

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

## 經驗

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
  });
%>

## 相關連結

- [Gmail](mailto:<%= gmail %>)
- [GitHub](<%= github %>)
- [Facebook](<%= facebook %>)
- [Plurk](<%= plurk %>)
- [Medium](<%= medium %>)
- [Linkedin](<%= linkedin %>)

## 關於這個網站模板

你可以用這個網站模板製作一個自己的網站

1. Fork 這個專案，並把名字修改成 `<你自己的帳號>.github.io`

2. Clone 到 local 端，並安裝相依套件

  `$ git clone http://github.com/<your-account>/<your-account>.github.io`

  `$ npm install`

3. 修改 `src/info.json` 與 `deploy.js` 的資料

4. 刪除 `public/CNAME` 的檔案，或將 CNAME 修改成自己的 domain name

5. 佈署專案

  `$ npm run deploy`

6. Push 到 GutHub 上

  `$ git add .`

  `$ git commit`

  `$ git push origin react-website`
