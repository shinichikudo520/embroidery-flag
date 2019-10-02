var PORT = 3000;



var http = require('http');

var url = require('url');

var fs = require('fs');

var mine = require('./mime').types;

var path = require('path');

var httpProxy = require('http-proxy');


var proxy = httpProxy.createProxyServer({

        
    target: 'https://dr.beilequan.com/',
        //接口地址

        changeOrigin: true,
    ignorePath: false,

    '/api': {
        target: 'https://dr.beilequan.com/', //服务器域名，不需要带端口号，如果是服务器ip地址，则需要带端口号
        changeOrigin: true, //处理跨域接口
        ignorePath: false,
        rewrite: path => path.replace(/^\/api/, '')
    },

    // pathRewrite: { '^/api': '' },

         // 下面的设置用于https

    //     ssl: {

    //               key: fs.readFileSync('server_decrypt.key', 'utf8'),

    //             cert: fs.readFileSync('server.crt', 'utf8')

    //          },

    //     secure: false

});



proxy.on('error', function(err, req, res) {

        
    res.writeHead(500, {

                 'content-type': 'text/plain'

             });

        
    console.log(err);

        
    res.end('Something went wrong. And we are reporting a custom error message.');

});

proxy.on('proxyRes', function(proxyRes, req, res) {
    let host = proxyRes.req.getHeader('host');
    let path = proxyRes.req.path;

    //console.log('host',host);
    //console.log('path',path);

})



var server = http.createServer(function(request, response) {

        
    var pathname = url.parse(request.url).pathname;

         //var realPath = path.join("main-pages", pathname); // 指定根目录

        
    var realPath = path.join("../", pathname);

        
    console.log(pathname);

        
    console.log(realPath);

        
    var ext = path.extname(realPath);

        
    ext = ext ? ext.slice(1) : 'unknown';



         //判断如果是接口访问，则通过proxy转发

        
    if (pathname.indexOf("api") > 0) {
        // delete request.headers.host;//一定要把host删除，不然会出现404，我在这里踩了好久的坑！
        // pathname = pathname.substr(4);
        // //console.log(request);

        //console.log('调用接口');

                 proxy.web(request, response, { target: 'http://39.100.138.97:80/' });

                 return;

             }

    // proxy.web(request, response,{target: 'http://47.74.230.207:80/'});



        
    fs.exists(realPath, function(exists) {

        //console.log(realPath,'realPath',exists,'exists');
                
        if (!exists) {

                        
            response.writeHead(404, {

                                 'Content-Type': 'text/plain'

                             });



                        
            response.write("This request URL " + pathname + " was not found on this server.");

                        
            response.end();

                    
        } else {

                        
            fs.readFile(realPath, "binary", function(err, file) {

                                
                if (err) {

                                        
                    response.writeHead(500, {

                                                 'Content-Type': 'text/plain'

                                             });

                                        
                    response.end(err);

                                    
                } else {

                                        
                    var contentType = mine[ext] || "text/plain";

                                        
                    response.writeHead(200, {

                                                 'Content-Type': contentType

                                             });

                                        
                    response.write(file, "binary");

                                        
                    response.end();

                                    
                }

                            
            });

                    
        }

            
    });

});

server.listen(PORT);

//console.log("Server runing at port: " + PORT + ".");