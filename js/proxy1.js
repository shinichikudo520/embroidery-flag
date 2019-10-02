var http = require("http");
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});


proxy.on('error', function(err, req, res) {
    res.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    res.end('500');
})


// app.get(/.*?\.mp3$/, proxyer);//把请求MP3的链接使用代理
function proxyer(req, res, next) {
    delete req.headers.host; //一定要把host删除，不然会出现404，我在这里踩了好久的坑！
    proxy.web(req, res, { target: 'https://dr.beilequan.com/' });
}


// if(pathname.indexOf("hiiap") > 0){

//     proxy.web(request, response);

//     return;

// }

var server = http.createServer(function(req, res) {
    var host = req.headers.host,
        ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    //console.log("client ip:" + ip + ", host:" + host); 
    delete req.headers.host;
    switch (host) {
        case 'http://localhost:3000/':
            //把请求url的host主机为www.mizuiren.com 80 端口的请求转发到http://fs.open.kugou.com去获取数据，可以理解为直接把请求地址 http://www.mizuiren.com替换成http://fs.open.kugou.com
            proxy.web(req, res, { target: 'https://dr.beilequan.com/' });
            break;
        default:
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('你访问的是代理服务器，但是代理域名规则找不到你的请求!');
    }
});
//console.log("proxy listening on port 3000") 
server.listen(3000);