var fs = require('fs');

fs.writeFile('mynewfile2.txt', 'Hello content! soy Rola RG', function (err) {
  if (err) throw err;
  console.log('Saved! :)');
});