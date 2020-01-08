//封装axios

import axios from "axios"
//终极方案：instance(config)本身就是一个promise
export function request(config) {
    //1、创建axios实例
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000",
        timeout: 5000
    })
    //2、axios拦截器
    instance.interceptors.request.use(config => {
        console.log("请求成功拦截")
        return config //必须返回
    }, error => {
        console.log("请求失败拦截")
        return error
    })
    instance.interceptors.response.use(response => {
        console.log("响应成功拦截")
        console.log(response)
        return response.data
    }, error => {
        console.log("响应失败拦截") //服务器返回错误码
        return error
    })
    //3、发送真正的请求
    return instance(config)
}