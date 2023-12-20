
const outputTXT=document.querySelectorAll(".outputTXT")

const Input=document.querySelector(".Input")
const typeButtons=document.querySelectorAll("button.type")
const initText = document.querySelector(".initText")

const zoomOut = document.querySelector(".zoomOut")
const opacityAnimate = document.querySelector(".opacityAnimate")
const blackGradAnm = document.querySelectorAll(".blackGradAnm")

initText.style.transform=`translateX(-${initText.getBoundingClientRect().width/2}px)`

Input.oninput=(e)=>{

  initText.setAttribute("display","none")

  outputTXT.forEach(txt=>{
    txt.setAttribute("display","block")
    txt.innerHTML=e.target.value
  })
  
  e.target.value=="" && initText.setAttribute("display","block")
}

typeButtons.forEach((bttn,key)=>{

  bttn.onclick=()=>{

    if(key==0){
      outputTXT[0].setAttribute("stroke","LightSlateGrey")
      outputTXT[0].setAttribute("fill","none")
  
      outputTXT[1].setAttribute("stroke","url(#blueRadial)")
      outputTXT[1].setAttribute("fill","linear-gradient(blue,white,blue)")

    }else if(key==1){
      outputTXT[0].setAttribute("stroke","navy")
      outputTXT[0].setAttribute("fill","none")
  
      outputTXT[1].setAttribute("stroke","white")
      outputTXT[1].setAttribute("fill","url(#blueLines)")

    }else if(key==2){
      outputTXT[0].setAttribute("stroke","green")
      outputTXT[0].setAttribute("fill","url(#greenLight)")
  
      outputTXT[1].setAttribute("stroke","lightgreen")
      outputTXT[1].setAttribute("fill","url(#greenGrid)")

    }else if(key==3){
      zoomOut.setAttribute("values","5,5; 1,1;" );
      zoomOut.beginElement()

      opacityAnimate.setAttribute("values","0;1" );
      opacityAnimate.beginElement()
      
      outputTXT[0].setAttribute("stroke","#cccccc")
      outputTXT[0].setAttribute("fill","none")
  
      outputTXT[1].setAttribute("stroke","url(#metalicBG)")
      outputTXT[1].setAttribute("fill","url(#blackGrad)")

      setTimeout(()=>{

        blackGradAnm.forEach(val=>{
          val.setAttribute("dur","2s")
          val.beginElement()
        })
      },1000)
    }
  }
})