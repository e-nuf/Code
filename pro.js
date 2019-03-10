//trying out to put encrypted password to file and create qr code.

var http= require('http');
var cry= require('crypto');
var fs = require('fs');
var url = require('url');
var qr = require('qr-image');
var du=null;
var ps=null;
http.createServer(function(req,res) {

	

	var urlobj = url.parse(req.url,true);
	if(urlobj['query']['nam1']!=undefined  && urlobj['query']['nam2']!=undefined)
	{du = urlobj['query']['nam1'];
	 ps = urlobj['query']['nam2'];


	var img = qr.image(du, {type:'png'});
	img.pipe(fs.createWriteStream('login_name.png'));
	var string = qr.imageSync(du, {type:'png'});

            
    

	var cipher = cry.createCipher('aes-128-cbc','mypassword')
	var crypt = cipher.update(ps,'utf8','hex');
	crypt += cipher.final('hex');
	console.log(crypt);


	fs.appendFile('new.txt',du,function(err){
	if(err) throw err;});


	fs.appendFile('new.txt',crypt,function(err){
	if(err) throw err;});}



	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<html>\n   <body>\n');
	res.write('<p> <strong> <h1>Hey there</h1></strong></p><hr>');
	res.write('<form method="GET"> \n');
	res.write('SSID  <input type="text" name="nam1" placeholder="Enter here">\n');
	res.write('<br>');
	res.write('Password       <input type="password" placeholder="Enter Here" name="nam2">\n');
	res.write('<br><input type="submit" value="submit">\n</form>');
	res.write('</body>\n</html>\n');
	
	res.end();

}).listen(8080);
