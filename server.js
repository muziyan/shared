const fs = require("fs");
const http = require("http");
const url = require("url");
const dotenv = require("./dotenv");
//引入env 配置文件
dotenv.config();

http.createServer((req,res)=>{
    let {pathname} = url.parse(req.url,true);

    if (pathname === "/"){
        res.end("listen port 3000");
    }

}).listen(process.env.LISTEN_PORT);

/**
 *
 * @param filename {string}
 * @param fileType {string}
 * @param res       {object}
 */
function showFile(filename,fileType,res) {
    if (fileType !== "object"){
        res = fileType;
        fileType = "index.html"
    }
    fs.readdir(process.cwd()+`\\${filename}`,(err,data)=>{
        if(err) throw err;
        data.forEach(v=>{
            if (v === fileType){
                fs.readFile(process.cwd()+`\\${filename}\\${v}`,'utf8',function (err,data) {
                    res.end(data)
                })
                //异步
            //     let stream = fs.createReadStream(process.cwd()+`\\${filename}\\${v}`);
            //     stream.setEncoding("utf8");
            //     stream.on("data",chunk=>{
            //        html = chunk;
            //         return html;
            //     })
            }
        })
    })
}