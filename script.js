let string="";
let buttons=document.querySelectorAll(".btn")
let input=document.getElementById("pair")
Array.from(buttons).forEach(buttons => {
buttons.addEventListener("click",(e)=>{
    if (e.target.innerHTML== "=") {
        string=eval(string);
        input.value=string;
    }
    else if(e.target.innerHTML=="AC"){
        string="";
        input.value=string;
    }
    else if(e.target.innerHTML=="DEL"){
        string=string.substring(0,string.length-1);
        input.value=string;
    }
   
    else{
        string=string+e.target.innerHTML;
        input.value=string;
    }
})    
});

