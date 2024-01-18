console.log("what is on.")
let date = new Date()

let days = date.getFullYear()
console.log(days)
let currentdate = document.getElementById("currentdate")
currentdate.innerHTML=days
let modified = document.getElementById("lastModified")
modified.innerHTML = document.lastModified