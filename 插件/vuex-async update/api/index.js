
import Vue from "vue"
import axios from 'axios'
var baseUrl = "http://waterapi.qijiatech.com";
export function zhang(data){
    return axios.request({
        url: baseUrl+'/api/Sheshi/JianSheQingkuang',
        method: 'post',
        params: data
    })
}
