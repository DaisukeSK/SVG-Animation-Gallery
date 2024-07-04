
const bg=document.querySelector(".bgContainer div")

document.onmousemove=(e)=>{
    bg.style.left=-(bg.getBoundingClientRect().width-window.innerWidth)*e.clientX/window.innerWidth+"px"
    bg.style.top=-(bg.getBoundingClientRect().height-window.innerHeight)*e.clientY/window.innerHeight+"px"
}