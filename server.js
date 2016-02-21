var express = require('express');
var app = express();
var path = require('path');

var publicPath = path.join(__dirname, 'public');

app.set('port', process.env.PORT || 3000);

app.use('/bundle.js', express.static(path.join(publicPath, 'bundle.js')));
app.use('/*', express.static(path.join(publicPath, 'index.html')));

app.listen(app.get('port'), function() {
  console.log('server listening on port :' + app.get('port'));
});
