

const outputTXT=document.querySelectorAll(".outputTXT")
const outputSVG=document.querySelectorAll(".outputSVG")
// const txt2=document.querySelectorAll(".txt2")
const Input=document.querySelector(".Input")
const typeButtons=document.querySelectorAll("button.type")
const initText = document.querySelector(".initText")
const zoomOut = document.querySelector(".zoomOut")
const opacityAnimate = document.querySelector(".opacityAnimate")
const grad = document.querySelectorAll(".grad")
// const levelDiv=document.querySelector(".level")
// const levelNumber=document.querySelector(".level .levelNumber")
// const question=document.querySelector(".question")
// const rslt=document.querySelector(".rslt")
// const second=document.querySelector(".secondHolder div")
// const input=document.querySelector(".inputField")
// const counter=document.querySelector(".counter span")
// const svgForBorder=document.querySelector(".svgForBorder rect")
// const levelUp=document.querySelector("svg.levelUp")
// const levelDown=document.querySelector("svg.levelDown")
// const checkSVG=document.querySelector("svg.checkSVG")
// const growingCircle=document.querySelector(".growingCircle")
// const count3=document.querySelector(".count3")
// const growingCircleAnimate=document.querySelector(".growingCircle animate")
// const animate=document.querySelectorAll(".animate")

console.log(outputTXT[0].innerHTML)

console.log("initText",initText.getBoundingClientRect().width)

initText.style.transform=`translateX(-${initText.getBoundingClientRect().width/2}px)`

// outputTXT.forEach(val=>{
//   val.innerHTML="Type Something..."
// })

Input.oninput=(e)=>{

  initText.setAttribute("display","none")
  
  outputTXT[0].setAttribute("display","block")
  outputTXT[1].setAttribute("display","block")
  // outputTXT[2].setAttribute("display","block")

  console.log(e.target.value)
  outputTXT[0].innerHTML=e.target.value
  outputTXT[1].innerHTML=e.target.value
  // outputTXT[2].innerHTML=e.target.value


  if(e.target.value==""){
    initText.setAttribute("display","block")
  }


}

typeButtons.forEach((val,key)=>{

  
  val.onclick=()=>{

    
    
    // outputSVG.style.backgroundColor="none"

    if(key==0){
  
      console.log("val",typeButtons[key])
      // outputTXT[0].setAttribute("stroke","url(#img1)")
      outputTXT[0].setAttribute("stroke","LightSlateGrey")
      outputTXT[0].setAttribute("fill","none")
  
  
      outputTXT[1].setAttribute("stroke","url(#radial1)")
      // outputTXT[1].setAttribute("fill","linear-gradient(blue,white,blue)")
      outputTXT[1].setAttribute("fill","linear-gradient(blue,white,blue)")
      // outputTXT[1].setAttribute("fill","url(#img1)")
    }else if(key==1){
      console.log("val",typeButtons[key])
      outputTXT[0].setAttribute("stroke","navy")
      outputTXT[0].setAttribute("fill","none")
  
  
      outputTXT[1].setAttribute("stroke","url(#img1)")
      outputTXT[1].setAttribute("stroke","white")
      outputTXT[1].setAttribute("fill","url(#grad_anime)")
    }else if(key==2){
      console.log("val",typeButtons[key])
      outputTXT[0].setAttribute("stroke","green")
      outputTXT[0].setAttribute("fill","url(#green)")
  
  
      outputTXT[1].setAttribute("stroke","lightgreen")
      outputTXT[1].setAttribute("fill","url(#greengrid)")
    }else if(key==3){
      zoomOut.setAttribute("values","5,5; 1,1;" );
      zoomOut.beginElement()

      opacityAnimate.setAttribute("values","0;1" );
      opacityAnimate.beginElement()
      console.log(outputSVG)
      // outputSVG.style.backgroundColor="black"
      console.log("val",typeButtons[key])
      outputTXT[0].setAttribute("stroke","url(#metalicBG)")
      outputTXT[0].setAttribute("fill","none")
  
  
      outputTXT[1].setAttribute("stroke","white")
      outputTXT[1].setAttribute("fill","url(#grad_animeTest)")

      setTimeout(()=>{

        grad.forEach(val=>{
          val.setAttribute("dur","1s")
          val.beginElement()
        })
      },1300)
    }
  }
})