import Vue from 'vue'
import Axios from 'axios'
export const getdata = (params) => {
    return Axios.get('/api/production/list', params)
        .then(res => {
            return res
        })
}
