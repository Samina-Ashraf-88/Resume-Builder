let btn = document.querySelector("#toggle");
let div = document.querySelector("#mode");


btn.addEventListener("click",()=>{
if(div.style.display==="none"){
div.style.display='block'
}else{
div.style.display='none'
};
});