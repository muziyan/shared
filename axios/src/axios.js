import _default from "./default"
import { merge , assert } from "./common"
import request from "./request";


class Axios{
    constructor(){
        let _this = this;
        //return a proxy object
        return new Proxy(request,{
            // set a get methond
            get(data,name){
                return _this[name]
            },
            // set a set method
            set(data,name,val){
                _this[name] = val;

                return true;
            },
            apply(fn,thisArg,args){
                console.log(fn,thisArg,args)
            }
        })
    }

    _preprocessArgs(method,...args){
        let options;
        if(args.length === 1 && typeof args[0] === "string"){
            options = {method, url:args[0]}
        }else if(args.length === 1 && args[0].constructor === Object){
            options = {
                ...args,
                method,
            }
        }else{
            return undefined;
        }
        return options;
    }

    get(...args){
        let options = this._preprocessArgs("get",args);

        if(!options){
            if (args.length == 2) {
                assert(typeof args[0] == 'string', 'args[0] must is string');
                assert(
                  typeof args[1] == 'object' &&
                    args[1] &&
                    args[1].constructor == Object,
                  'args[1] must is JSON',
                );
        
                options = {
                  ...args[1],
                  url: args[0],
                  method: 'get',
                };
                console.log(options);
              } else {
                assert(false, 'invaild args');
              }

    }
}

    post(){
        let options = this._preprocessArgs("post",args);
        if(!options){
            if(args.length === 2){
                assert(typeof args[0] === "string","args[0] must is string");
            }else if(args.length === 3){
                assert(typeof args[0] === "string","args[0] must is string");
                assert(
                    typeof args[1] == 'object' && args[1] && args[1].constructor == Object,
                    'args[1] must is JSON',
                )

                options = {
                    ...args[2],
                    url: args[0],
                    data: args[1],
                    method: 'post',
                  };
                  console.log(options);
    

            }else{
                assert(false,"invaild arguments");
            }
        }
    }

    delete(){
        let options = this._preprocessArgs("delete",args);
        if(!options){
            assert(typeof args[0] === "string","args[0] must is string");
            assert(
                typeof args[1] == 'object' && args[1] && args[1].constructor == Object,
                'args[1] must is JSON'
            )


            options = {
                ...args[1],
                url: args[0],
                method: 'get',
            };

            console.log(options);
        }
    }
}

//将默认方法和协议天剑进入
Axios.create = Axios.prototype.create = function(options = {}){
    let axios = new Axios();

    let res = { 
        ...JSON.parse(JSON.stringify(_default))
    };

    //递归确定传进来的默认参数
    merge(res,options)

    axios.default = res;

    return axios;
}

export default Axios.create();