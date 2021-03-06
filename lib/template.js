module.exports = {
  HTML: function(title, list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  list: function(fileList) {
    var list = '<ul>';
    fileList.forEach(filename => {
      list += `<li><a href="/?id=${filename}">${filename}</a></li>`;
    });
    list += '</ul>';
    return list;
  }
}