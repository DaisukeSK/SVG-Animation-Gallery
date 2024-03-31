const mountainBG=document.querySelector(".mountainBG")

const imgWidth=690;
const imgHeight=360;

const sizeChange=()=>{
    if(window.innerWidth/window.innerHeight>=imgWidth/imgHeight){
        mountainBG.removeAttribute("height")
        mountainBG.setAttribute("width","100%")
    }else{
        mountainBG.removeAttribute("width")
        mountainBG.setAttribute("height","100%")
    }
}

window.onresize=()=>{
    sizeChange()
}

window.onload=()=>{
    sizeChange()
}

////////////////////// No.1 //////////////////////
document.querySelector("#intr1").onmousemove=(e)=>{

    const insert=`
        <div
            class= 'child'
            onanimationend= '((e)=>{e.target.remove();})(event)'
            style= 'top:${e.offsetY}px; left:${e.offsetX}px;'
        >
        </div>
    `;

    e.target.insertAdjacentHTML("beforeend", insert)
}

////////////////////// No.2 //////////////////////
document.querySelector("#intr2 img").onmousemove=(e)=>{
    console.log("client",e.clientX,e.clientY)
    const insert=`
    <div
        class= 'ver'
        onanimationend= '((e)=>e.target.remove())(event)'
        style= 'left:${e.offsetX}px;'
    >
    </div>
    <div
        class= 'hori'
        onanimationend= '((e)=>e.target.remove())(event)'
        style= 'top:${e.clientY}px;'
    >
    </div>`

    e.target.parentNode.insertAdjacentHTML("afterbegin", insert)
}

////////////////////// No.3 //////////////////////
document.querySelector(".scope").onmousemove=(e)=>{

    e.target.querySelectorAll(".svgCrcl").forEach(val=>{
        val.setAttribute("cx",`${e.offsetX}px`)
        val.setAttribute("cy",`${e.offsetY}px`)
    })

    e.target.querySelectorAll(".lineTop").forEach(val=>{
        val.setAttribute("x1",`${e.offsetX}px`)
        val.setAttribute("x2",`${e.offsetX}px`)
        val.setAttribute("y1",`${e.offsetY-65}px`)
        val.setAttribute("y2",`${e.offsetY-30}px`)
    })

    e.target.querySelectorAll(".lineBot").forEach(val=>{
        val.setAttribute("x1",`${e.offsetX}px`)
        val.setAttribute("x2",`${e.offsetX}px`)
        val.setAttribute("y1",`${e.offsetY+65}px`)
        val.setAttribute("y2",`${e.offsetY+30}px`)
    })

    e.target.querySelectorAll(".lineLeft").forEach(val=>{
        val.setAttribute("x1",`${e.offsetX-65}px`)
        val.setAttribute("x2",`${e.offsetX-30}px`)
        val.setAttribute("y1",`${e.offsetY}px`)
        val.setAttribute("y2",`${e.offsetY}px`)
    })
    e.target.querySelectorAll(".lineRight").forEach(val=>{
        val.setAttribute("x1",`${e.offsetX+65}px`)
        val.setAttribute("x2",`${e.offsetX+30}px`)
        val.setAttribute("y1",`${e.offsetY}px`)
        val.setAttribute("y2",`${e.offsetY}px`)
    })

    e.target.querySelectorAll(".lineVer").forEach(val=>{
        val.setAttribute("x1",`${e.offsetX}px`)
        val.setAttribute("x2",`${e.offsetX}px`)
        val.setAttribute("y1",`${e.offsetY+65}px`)
        val.setAttribute("y2",`${e.offsetY-65}px`)
    })

    e.target.querySelectorAll(".lineHori").forEach(val=>{
        val.setAttribute("x1",`${e.offsetX+65}px`)
        val.setAttribute("x2",`${e.offsetX-65}px`)
        val.setAttribute("y1",`${e.offsetY}px`)
        val.setAttribute("y2",`${e.offsetY}px`)
    })
}

////////////////////// No.4 //////////////////////
let bb=false
document.querySelector("#intr4").onmousemove=(e)=>{
    if(!bb){
        bb=true

        const Intvl=setInterval(()=>{

            document.querySelectorAll(".fallinDiv").forEach(div=>{
                div.style.top=+div.style.top.split("px")[0]+30+"px"
                div.getBoundingClientRect().top>innerHeight && div.remove()
        
                if(document.querySelectorAll(".fallinDiv").length==0){
                    clearInterval(Intvl)
                    bb=false
                }
            })
        
        },100)

    }
    const rand=Math.random()*359
    const insert=`
    <div
        class= 'fallinDiv'
        style= 'top:${e.offsetY-3}px; left:${e.offsetX-3}px; border:2px solid hsl(${rand},100%,50%);'
    >
    </div>`
    e.target.insertAdjacentHTML("beforeend", insert)
}