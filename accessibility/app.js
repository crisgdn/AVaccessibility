
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const staticPath = path.join(__dirname,"./public");
app.use(express.static(staticPath));

router.get('/', function(req,res){

  res.sendFile(path.join(__dirname+'/public/index.html'));

});

router.get('/video', function(req,res){

  res.sendFile(path.join(__dirname+'/public/video.html'));

});

router.get('/audio', function(req,res){

  res.sendFile(path.join(__dirname+'/public/audio.html'));

});

router.get('/image', function(req,res){

  res.sendFile(path.join(__dirname+'/public/image.html'));

});

router.get('/form', function(req,res){

  res.sendFile(path.join(__dirname+'/public/form.html'));

});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');