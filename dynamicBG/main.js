
const bg1=document.querySelector(".bg1")
const bg2=document.querySelector(".bg2")


document.onmousemove=(e) => {
    // console.log("-------------------------")
    // console.log(e.clientY/window.innerHeight) // THIS should do what you want
    // console.log(e.clientX/window.innerWidth)
    // console.log("bg1",bg2.getBoundingClientRect().height-window.innerHeight)



    bg1.style.left=-(bg1.getBoundingClientRect().width-window.innerWidth-100)*e.clientX/window.innerWidth+"px"
    bg2.style.top=-(bg2.getBoundingClientRect().height-window.innerHeight-100)*e.clientY/window.innerHeight+"px"
}