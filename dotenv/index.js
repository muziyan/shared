const fs = require("fs");
const path = require("path");

function log(message) {
    console.log(`[dotenv]['DEBUG'] ${message}`)
}


//换行符
const NEWLINE = "\n"
//match匹配正则
const RE_INT_KEY_VAL =/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/
//再度换行
const RE_NEWLINES = /\\n/g
//匹配换行
const NEWLINES_MATCH = /\n|\r|\r\n/

/**
 *
 * @param src {string}
 * @param options {object}
 * @returns {{}}
 */
function parse(src,options){
    const debug = Boolean(options && options.debug);
    const obj = {};

    src.toString().split(NEWLINES_MATCH).forEach(function (line,idx) {
        // line 每一行的内容

        //每一行切割出来的数据
        //keyValue[0] 是整行数据
        //keyValue[1] 是变量名
        //keyValue[2] 是值
        const keyValueArr = line.match(RE_INT_KEY_VAL);

        //.env里面无内容就不执行
        if (keyValueArr !== null){
            const key = keyValueArr[1];

            //去除值来判断有没有 " || '
            let val = (keyValueArr[2] || "");
            let end = val.length - 1;
            //判断是不是双引号
            const isDoubleQuoted = val[0] === '"' && val[end] === '"';
            //判断是不是单引号
            const isSingleQuoted = val[0] === "'" && val[end] === "'";

            if (isSingleQuoted || isDoubleQuoted){
                //" || ' 的内容截取出来
                val = val.substring(1,end);

                // if double quoted expand newlines
                if (isDoubleQuoted){

                    val = val.replace(RE_NEWLINES,NEWLINE);
                }
            }else{
                //清除左右两边的空格
                //clear the left and right spaces
                val = val.trim();
            }
            obj[key] = val;
        }else if(debug){
            log(`did not match key and value when parsing line ${idx + 1} : ${line}`)
        }

    });
    return obj;
}


function config(options) {
    //默认路径设置在引用此文件的根目录
    let dotenvPath = path.resolve(process.cwd(),".env");
    //默认编码
    let encoding = "utf8";
    //调试，默认不开
    let debug = false;

    //判断需要更改的默认值
    if (options){
        if (options.path !== null){
            dotenvPath = options.path;
        }
        if (options.encoding !== null){
            encoding = options.encoding;
        }
        if (options.debug !== null){
            debug = true
        }
    }

    try{

        //解析获取的.env转换成字面量数据
        const parsed = parse(fs.readFileSync(dotenvPath,{encoding}),{debug});

        //将值赋给process.env 使process可以获取
        Object.keys(parsed).forEach(function (key) {
            if (!Object.prototype.hasOwnProperty.call(process.env,key)){
                process.env[key] = parsed[key]
            }else if (debug){
                log(`"${key}" is already defined in \`process.env\` and will not be overwritten`)
            }
        });

        return {parsed};
    }catch (e) {
        return {error : e}
    }
}

//导出
module.exports.config = config;
module.exports.parse = parse;
