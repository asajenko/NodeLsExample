const express = require('express'),
    nms = require('./server/media_server'),
    app = express(),
    path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/player.html'))
})

app.listen(8080, () => console.log(`App listening on port 8080!`))
nms.run();
