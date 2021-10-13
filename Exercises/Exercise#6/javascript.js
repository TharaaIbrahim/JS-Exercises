let btn1=document.getElementById("btn1");
btn1.style.cursor="pointer";
let more=document.getElementById("showMore");
btn1.addEventListener('click',()=>{
    more.style.display="block";
});
let btn2=document.getElementById("btn2");
btn2.style.cursor="pointer";
btn2.addEventListener('click',()=>{
    more.style.display="none";

});