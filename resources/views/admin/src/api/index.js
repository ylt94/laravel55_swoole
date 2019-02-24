import Vue from 'vue'
import axios from 'axios'


const baseUrl = 'http://localhost:8000/api'


function get(url,params){
    var request_url = baseUrl + '/' + url
    axios.get(request_url,params)
    .then(function (response) {
        console.log(response);
    })
}

function post(url,params){
    var request_url = baseUrl + '/' + url
    axios.post(request_url,params)
    .then(function (response) {
        console.log(response);
    })
}

export default{
    get,
    post,
}