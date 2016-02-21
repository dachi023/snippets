var express = require('express');
var app = express();
var path = require('path')

app.set('port', process.env.PORT || 3000);

app.use('/bundle.js', express.static(path.join(__dirname, 'public', 'bundle.js')))

app.use('/*', express.static(path.join(__dirname, 'public', 'index.html')));

app.listen(app.get('port'), function() {
  console.log('server listening on port :' + app.get('port'));
});
