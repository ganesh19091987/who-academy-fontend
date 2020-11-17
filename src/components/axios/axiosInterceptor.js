/*
Component : Axios Interceptor
*/
/** ****************************** Import Packages **************************** */
import axios from "axios";


var baseUrl = "http://localhost:3010/api";

const requestAxios = axios.interceptors.request.use(async (config) => {
	config.headers["Authorization"] = "bearer whoacademy"|| undefined;
	config.baseURL = baseUrl;
	return config;
},
error => {
	return Promise.reject(error);
}
);

// Add a response interceptor
const responseAxios = axios.interceptors.response.use(function (response) {
	if (response.status !== 200) {		
			// handle response
	}
	return response;
}, function (error) { //}, function (error) {
	return Promise.reject();
});

export {
	requestAxios,
	responseAxios,
	baseUrl
};
