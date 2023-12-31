
const bg1=document.querySelector(".bg1")
const bg2=document.querySelector(".bg2")
const input=document.querySelector('input[type="range"]')

document.onmousemove=(e)=>{
    bg1.style.left=-(bg1.getBoundingClientRect().width-window.innerWidth-100)*e.clientX/window.innerWidth+"px"
    bg2.style.top=-(bg2.getBoundingClientRect().height-window.innerHeight-100)*e.clientY/window.innerHeight+"px"
}

input.oninput=(e)=>{
    bg1.style.transition=`all ${3-e.target.value*3/10}s ease-in-out`;
    bg2.style.transition=`all ${3-e.target.value*3/10}s ease-in-out`;
}