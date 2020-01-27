export function assert(exp,msg = "assert faild"){
    if(!exp){
        throw new Error(msg)
    }
}

export function merge(dest,src){
    for(let name in src){
        if(typeof src[name] === "object"){
            if(!dest[name]){
                dest[name] = {};
            }

            merge(dest[name],src[name])
        }else{
            dest[name] = src[name]
        }
    }
}