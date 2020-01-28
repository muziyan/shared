import Axios from './axios';

Axios.interceptors.request.use(function (config) {
    config.headers.interceptors = "true";
    return config;
})

(async () => {
    let res = await Axios("./test/demo.json", {
        headers: {
            a: 12
        },
        transformRequest(config){
            config.headers.aaa = 12;
            return config;
        },
        transformResponse(res){
            res.data = JSON.parse(res.data);

            return res;
        }
    })
    console.log(res);
})();