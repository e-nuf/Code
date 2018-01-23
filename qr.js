var qr = require('qr-image');
var fs = require('fs');
var http = require('http');
var url=require('url');
var du=null;

http.createServer(function (req,res) {

	var obj = url.parse(req.url,true);
	if(obj['query']['nam1']!= undefined)
		{du=obj['query']['nam1'];


	var qr_svg = qr.image(du,{type : 'png'});
	qr_svg.pipe(fs.createWriteStream('qrimg.png'));
	var svg_string = qr.imageSync(du,{type: 'png'});}	


	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<html>\n <body>\n');
	res.write('<p> <strong> <h1>Turn text to qr!</h1></strong></p><hr>');
	res.write('<form method="GET"> \n');
	res.write('Your Text <input type="text" name="nam1" placeholder="Enter here">\n');
	res.write('<br>');
	res.write('<br><input type="submit" value="submit">\n</form>');
	res.write('</body>\n</html>\n');
	res.end();
}).listen(8000);

