var request = require('request');
var express = require('express');
var url = require('url');
var app = express();
var apiKey = '38c4137437abd38b827b53f73f03c64b';

var movieName='';


app.get('/',function(req,res){
	res.send('Hey there. Search movies using  MOVIE ID');
})

app.get('/movie',function(req,res){
	res.write('\n<html>\n<body>\n <form action="/result" >\n<input type="text" name="nam1" placeholder="Enter movie id here">\n<input type="submit" value="submit"> </form> \n</body>\n</html>\n');

	
})

app.get('/result',function(req,res){

	var urlobj = url.parse(req.url,true);
	if(urlobj['query']['nam1']!=null && urlobj['query']['nam1']!="" && urlobj['query']['nam1']!=" ")
	{movieName = urlobj['query']['nam1'];
	}

	 let ur = "https://api.themoviedb.org/3/search/movie/?api_key="+apiKey+"&query="+movieName;
	 //http://api.openweathermap.org/data/2.5/weather?q="+loc+"&APPID="+apiKey
	 console.log(movieName);
	
	 request(ur,function(err,resp,body){
   	if (err)
   		console.log(err);
   	else
   		{ console.log(body);

   let message = JSON.parse(body);
   let tem = message.results[0].overview; 
   //let temperature = tem.toFixed(2);
  // let weather = "It is " + temperature +"C at "+message.name;
   console.log(tem);
 
	res.send(tem);}
	
})})

var server = app.listen(8081,function(){

	var host = server.address().address
	var port = server.address().port
	console.log('done');
	
})