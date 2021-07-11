var http = require('http');
var qs=require('querystring');
var topic=require('./lib/topic');
var author = require('./lib/author');
var template=require('./lib/template.js');


var app = http.createServer(function(request, response) {
    var varUrl = request.url; // ?id=HTML
    var myURL = new URL('http://localhost:4000' + varUrl); // http://localhost......TML
    var queryData = myURL.searchParams.get('id'); // id (HTML)
    var pathName = myURL.pathname;
    if(pathName === '/'){
        if(queryData===null){
            topic.home(request,response);
        }
        else{
            topic.page(request,response);
        }
    }
    else if(pathName ==='/create'){
        topic.create(request,response);
    }
    else if(pathName==='/create_process'){
        topic.create_process(request,response);
    }
    else if(pathName==='/update'){
        topic.update(request,response);
    }
    else if(pathName==='/update_process'){
        topic.update_process(request,response);
    }
    else if(pathName==='/delete_process'){
        topic.delete(request,response);
    }
    else if(pathName === '/author'){
        author.home(request, response);
    }
    else if(pathName === '/author/create_process'){
        author.create_process(request, response);
    }
    else if(pathName === '/author/update'){
        author.update(request, response);
    }
    else if(pathName === '/author/update_process'){
        author.update_process(request, response);
    }
    else if(pathName === '/author/delete'){
        author.delete(request, response);
    }
    else{
        response.writeHead(404);
        response.end('Not found');
    };

    });
    app.listen(4000);