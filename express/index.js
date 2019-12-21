const http = require("http");

function createServer(){

    let app = (req,res) =>{
        res.end("listen running")
    };

    //启动服务并监听
    app.listen = function () {
        let server = http.createServer();
        server.listen(...arguments);
    };


    return app;
}

module.exports = createServer;