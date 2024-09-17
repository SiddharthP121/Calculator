console.log("script is running")
let hours=document.querySelector(".hours")
let minutes=document.querySelector(".minutes")
let seconds=document.querySelector(".seconds")

setInterval(()=>{
let date= new Date()
let htime=date.getHours()
let mtime=date.getMinutes()
let stime=date.getSeconds()

let hrotation=30*htime+mtime/2
let mrotation= mtime*6
let srotation=stime*6

hours.style.transform=`rotate(${hrotation}deg)`
minutes.style.transform=`rotate(${mrotation}deg)`
seconds.style.transform=`rotate(${srotation}deg)`

},1000)