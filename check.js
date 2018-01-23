 var sys = require ('sys'),
url = require('url'),
http = require('http'),
qs = require('querystring');
var du= null;
var fs = require('fs');
http.createServer(function (req, res) {
res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<html>\n   <body>\n');
	res.write('<p> <strong> <h1>Hey there</h1></strong></p><hr>');
	res.write('<form method="POST"> \n');
	res.write('SSID  <input type="text" name="nam1" placeholder="Enter here">\n');
	res.write('<br>');
	res.write('<br><input type="submit" value="submit">\n</form>');
	res.write('</body>\n</html>\n');
	
	
	
    
            var body='';
            req.on('data', function (data) {
                body +=data;
            });
            req.on('end',function(){
                var POST =  qs.parse(body);
                console.log(POST);
            });
    
	



}).listen(8080);