//转化数据为json:JSON.stringify(body)
var queryString = require('query-string')

var request = {}

request.get = function (url, params) {
    if (params) {
        url += '?' + request.reframeParames(params)
    }
    return fetch(url)
        .then(res=>res.json())
}


request.post = function (url, body) {
    let fetchOptions = {
        method: 'POST',
        //headers: {
        //    'Accept': 'application/json',
        //    'Content-Type': 'application/json'
        //},
        body: queryString.stringify(body)
    }
    return fetch(url, fetchOptions)
        .then(res=>res.json())
}

//无用，用的是这：queryString.stringify(params) 
request.reframeParames=function(params){
    var pStr='';
    for(var p in params){
        pStr+='&';
        pStr+=p+"="+params[p];
    }

}

module.exports = request