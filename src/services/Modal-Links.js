"use strict";

fetch("./Links.json")
.then(res => res.json())
.then(data => {
    console.log(data);
});


export const liveLink = () => {
  
}
