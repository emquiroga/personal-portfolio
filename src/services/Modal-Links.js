"use strict";
const linksJSON = "https://github.com/emquiroga/personal-portfolio/blob/main/src/services/Links.json"
const myInit = {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json'
    },
    mode: 'no-cors',
    cache: 'default'
};

fetch(linksJSON, myInit)
.then(function(resp){
    return resp.json();
})
.then(function(data){
    console.log(data);
})

