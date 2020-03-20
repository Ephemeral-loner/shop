import axios from 'axios';
import { Indicator } from 'mint-ui';
//1 请求之前
axios.interceptors.request.use(function (config){
	Indicator.open({
		text:'Loading...',
		spinnerType:'fading-circle'
	})
	return config
},function (error){
	// 对请求错误做些什么
	return Promise.reject(error)
})

//3.请求之后的
axios.interceptors.response.use(function (response) {
	Indicator.close()
	return response
}, function (error){
	// 对响应错误做点什么
	return Promise.reject(error)
})

//2.
//axios promise综合使用
const axiosGet=(url,params)=>{
	return new Promise((resolve,reject)=>{
		axios.get(url,{params:params})
		.then((res)=>{
			resolve(res.data)
		})
		.catch((err)=>{
			reject(err)
		})
	})
}

const axiosPost=(url,params)=>{
	return new Promise((resolve,reject)=>{
		axios.post(url,{params:params})
		.then((res)=>{
			resolve(res.data)
		})
		.catch((err)=>{
			reject(err)
		})
	})
}

export default{
	get:axiosGet,
	post:axiosPost
}

//var obj={
//	name:"zhangsan",
//	sex:"男"
//}
//res=qs.stringfy(obj)
//res=name="zhangsan"&sex="男"
