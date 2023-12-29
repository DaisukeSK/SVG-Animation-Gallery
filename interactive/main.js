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


document.querySelector("#intr1").onmousemove=(e)=>{
  // console.log("e",e.offsetX,e.offsetY)
  // console.log("parent:",e.target.parentElement.querySelector(".output"))

  const insert=`
  <div class="child"
  onanimationend='((e)=>{e.target.remove();})(event)'
  
  style="top:${e.offsetY}px; left:${e.offsetX}px;">
  
  </div>
  `;
  
  e.target.insertAdjacentHTML("beforeend",insert)
  // document.querySelector("#intr1 .child:last-of-type").onanimationend=(e)=>{e.target.remove()}
  console.log("intr1",document.querySelectorAll(".child").length)
}



document.querySelector("#intr2 img").onmousemove=(e)=>{
  // console.log("e",e.offsetX,e.offsetY)
  const insert=
  `<div class="ver"
  onanimationend='((e)=>e.target.remove())(event)'
  
  style="left:${e.offsetX}px;"></div><div class="hori"
  onanimationend='((e)=>e.target.remove())(event)'
  style="top:${e.offsetY}px;"></div>`

  e.target.parentNode.insertAdjacentHTML("afterbegin",insert)
  // document.querySelector("#intr2 .ver:nth-last-child(2)").onanimationend=(e)=>{e.target.remove()}
  // document.querySelector("#intr2 .hori:nth-last-child(1)").onanimationend=(e)=>{e.target.remove()}
  // console.log("fall",document.querySelector("#intr2 .ver:last-child"))
  // console.log("fall",document.querySelector("#intr2 .hori:last-child"))
  console.log("ver",document.querySelectorAll("#intr2 .ver").length)
  console.log("hori",document.querySelectorAll("#intr2 .hori").length)
}

document.querySelector(".scope").onmousemove=(e)=>{
  // console.log(e.offsetX)
  // console.log(e.target.querySelector("circle"))

  // e.target.querySelector("circle").setAttribute("cx",`${e.offsetX}px`)
  // e.target.querySelector("circle").setAttribute("cy",`${e.offsetY}px`)

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



  // document.querySelector("img").style.top=`${e.offsetY}px`
  // document.querySelector("img").style.left=`${e.offsetX}px`

}



let bb=false
document.querySelector("#intr4").onmousemove=(e)=>{

  if(!bb){

    bb=true
    const Intvl=setInterval(()=>{
  
      console.log("Intvl",Intvl)
  
      // console.log("Interval")
      // console.log("offset",e.offsetY,e.offsetX)
      // console.log("setInterval Running")
  
      document.querySelectorAll(".fallinDiv").forEach(val=>{
  
        console.log("length",document.querySelectorAll(".fallinDiv").length)
  
        val.style.top=+val.style.top.split("px")[0]+30+"px"
  
        if(val.getBoundingClientRect().top>innerHeight){
          val.remove()
        }
  
        if(document.querySelectorAll(".fallinDiv").length==0){
          clearInterval(Intvl)
          console.log("setInterval Stop",typeof Intvl)
          bb=false
        }
      })
  
    },100)
  }

  const rand=Math.random()*359


  // console.log("offset",e.offsetY,e.offsetX)
  const insert=`<div class="fallinDiv" style="top:${e.offsetY-3}px; left:${e.offsetX-3}px; border:2px solid hsl(${rand},100%,50%)"></div>`
  e.target.insertAdjacentHTML("beforeend",insert)
  // document.querySelector("#fall .fallinDiv:last-of-type").onanimationend=(e)=>{e.target.remove()}
  // console.log("fallin",document.querySelectorAll(".fallinDiv").length)

}
