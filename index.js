const http = require('http') 
const fs = require('fs') 
const url = require('url') 

const port = 8080  

var server = http.createServer(function(req, res) {
	// use if statements to serve the required pages
	//index
        var rurl = req.url
       if (rurl == '/index') {
	fs.readFile('index.html', function(err, data) {
           if (err) {
	      res.statusCode = 404
              res.setHeader('Content-Type','text/html') 
              return  res.end('<h1> 404, Page not found </h1>')
	   }
	   else {
             res.statusCode = 200
             res.setHeader('Content-Type','text/html') 
             res.write(data);
	     return res.end();
	   }
	}); 	
      }  
	//about
      if (rurl == '/about') {
	  fs.readFile('about.html', function(err, data) {
           if (err) {
	      res.statusCode = 404
              res.setHeader('Content-Type','text/html') 
              return  res.end('<h1>404, Page not found </h1>')
	   }
	   else {
             res.statusCode = 200
             res.setHeader('Content-Type','text/html') 
             res.write(data);
	     return res.end();
	   }
	});
       }
	 //contact-me     
      if (rurl == '/contact-me') {
	  fs.readFile('contact-me.html', function(err, data) {
           if (err) {
	      res.statusCode = 404
              res.setHeader('Content-Type','text/html') 
              return  res.end('<h1>404, Page not found </h1>')
	   }
	   else {
             res.statusCode = 200
             res.setHeader('Content-Type','text/html') 
             res.write(data);
	     return res.end();
	   }
	});

      }

})

server.listen(port,function (error) {
	if (error) {
	   console.log("An error has occurred ", error )	

	}
	else {
          console.log("Server is listening on port: " + port)

	}

})
