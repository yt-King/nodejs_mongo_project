import axios from "axios";

//配置axios示例
let instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000
})
//创建请求拦截器
instance.interceptors.request.use(config =>{
    //请求拦截要处理的内容
    return config
},err =>{
    console.error('请求失败',err)
})

//响应拦截
instance.interceptors.response.use(res =>{
    //请求成功对响应数据做处理
    return res //该返回对象会传到请求方法的响应对象中
}, err => {
    // 响应错误处理
    // location.href = '/login'
    return Promise.reject(err);
})

/**
 * 封装http请求方法
 * @param {*} option  配置对象，属性包括：
 * method ： 请求方法
 * path ： 请求地址
 * params ： 请求参数
 */
async function http(option = {}){
    let result = null
    if(option.method === 'get' || option.method === 'delete'){
        await instance[option.method](
            option.path,
            {
                params: option.params
            }
        ).then(res =>{
            result =res
        }).catch(err=>{
            result = err
        })
    }else if(option.method === 'post' || option.method === 'put'){
        await instance[option.method](
            option.path,
            option.params
        ).then(res =>{
            result =res
        }).catch(err=>{
            result = err
        })
    }
    return result
}

export default http