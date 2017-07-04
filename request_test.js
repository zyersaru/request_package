var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    console.log('Error has occurred.', response.statusCode);
  })
  .on('response', function (response) {
    console.log('Response Status Code: ', response.statusCode);
    console.log('Response Status Message: ', response.statusMessage);
    console.log('Response Header: ', response.headers['content-type']);
    console.log('Downloading image...');
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('finish', function () {
    console.log('Download complete.')
  });