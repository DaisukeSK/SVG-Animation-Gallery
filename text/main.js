const outputTXT=document.querySelectorAll(".outputTXT")
const Input=document.querySelector('input[type="text"]')
const typeButtons=document.querySelectorAll("button.type")
const initText = document.querySelector(".initText")
const zoomOut = document.querySelector(".zoomOut")
const opacityAnimate = document.querySelector(".opacityAnimate")
const blackGradAnm = document.querySelectorAll(".blackGradAnm")

initText.style.transform=`translateX(-${initText.getBoundingClientRect().width/2}px)`

Input.oninput=(e)=>{
  e.target.value=="" ?
  initText.setAttribute("display","block"):
  initText.setAttribute("display","none")
  outputTXT.forEach(txt=>
    txt.innerHTML=e.target.value
  );
}

typeButtons.forEach((bttn,key)=>{
  bttn.onclick=()=>{
    if(key==0){
      outputTXT[0].setAttribute("stroke","LightSlateGrey")
      outputTXT[0].setAttribute("fill","none")
      outputTXT[1].setAttribute("stroke","url(#type1_1)")
      outputTXT[1].setAttribute("fill","url(#type1_2)")
    }else if(key==1){
      outputTXT[0].setAttribute("stroke","navy")
      outputTXT[0].setAttribute("fill","none")
      outputTXT[1].setAttribute("stroke","white")
      outputTXT[1].setAttribute("fill","url(#type2_1)")
    }else if(key==2){
      outputTXT[0].setAttribute("stroke","green")
      outputTXT[0].setAttribute("fill","url(#type3_1)")
      outputTXT[1].setAttribute("stroke","lightgreen")
      outputTXT[1].setAttribute("fill","url(#type3_2)")
    }else if(key==3){
      zoomOut.setAttribute("values","5,5; 1,1;" );
      zoomOut.beginElement()
      opacityAnimate.setAttribute("values","0;1" );
      opacityAnimate.beginElement()
      outputTXT[0].setAttribute("stroke","#cccccc")
      outputTXT[0].setAttribute("fill","none")
      outputTXT[1].setAttribute("stroke","url(#type4_2)")
      outputTXT[1].setAttribute("fill","url(#type4_1)")
      setTimeout(()=>{
        blackGradAnm.forEach(val=>{
          val.setAttribute("dur","2s")
          val.beginElement()
        })
      },1000)
    }
  }
})