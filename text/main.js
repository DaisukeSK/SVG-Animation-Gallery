const outputTXT=document.querySelectorAll(".outputTXT")
const Input=document.querySelector('input[type="text"]')
const typeButtons=document.querySelectorAll("button.type")
const initText = document.querySelector(".initText")
const zoomOut = document.querySelector(".zoomOut")
const opacityAnimate = document.querySelector(".opacityAnimate")
const blackGradAnm = document.querySelectorAll(".blackGradAnm")
const svg = document.querySelector(".outputDiv svg")
const translate = document.querySelectorAll(".translate")
const skew = document.querySelectorAll(".skew")

initText.style.transform=`translateX(-${initText.getBoundingClientRect().width/2}px)`

Input.oninput=(e)=>{

    svg.setAttribute("width",outputTXT[0].getBoundingClientRect().width+100)

    e.target.value=="" ?
    initText.setAttribute("display","block"):
    initText.setAttribute("display","none")

    outputTXT.forEach(txt=>
        txt.innerHTML=e.target.value
    );
}

typeButtons.forEach((bttn,key)=>{
    bttn.onclick=()=>{
        outputTXT[0].setAttribute("fill","none")
        outputTXT[0].setAttribute("stroke-width","9")

        outputTXT[0].setAttribute("font-family","arial")
        outputTXT[1].setAttribute("font-family","arial")

        translate[0].removeAttribute("values")
        translate[1].removeAttribute("values")

        skew[0].removeAttribute("values")
        skew[1].removeAttribute("values")

        outputTXT[0].setAttribute("font-style","italic")
        outputTXT[1].setAttribute("font-style","italic")

        if(key==0){
            outputTXT[0].setAttribute("stroke","LightSlateGrey")
            outputTXT[1].setAttribute("stroke","url(#type1_1)")
            outputTXT[1].setAttribute("fill","url(#type1_2)")
        }else if(key==1){
            outputTXT[0].setAttribute("stroke","navy")
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
            outputTXT[1].setAttribute("stroke","url(#type4_2)")
            outputTXT[1].setAttribute("fill","url(#type4_1)")
            setTimeout(()=>{
                blackGradAnm.forEach(val=>{
                val.setAttribute("dur","2s")
                val.beginElement()
                })
            },1000)
        }else if(key==4){
            outputTXT[0].setAttribute("stroke-width","3")
            outputTXT[0].setAttribute("stroke","grey")
            
            outputTXT[0].setAttribute("font-family","Times New Roman")
            outputTXT[1].setAttribute("font-family","Times New Roman")

            outputTXT[1].setAttribute("stroke","none")
            outputTXT[1].setAttribute("fill","url(#type5_1)")

        }else if(key==5){
            translate[0].setAttribute("values","60;-60;60")
            translate[1].setAttribute("values","60;-60;60")

            skew[0].setAttribute("values","-25;25;-25")
            skew[1].setAttribute("values","-25;25;-25")

            outputTXT[0].removeAttribute("font-style")
            outputTXT[1].removeAttribute("font-style")

            outputTXT[0].setAttribute("stroke","none")
            outputTXT[1].setAttribute("stroke","none")

            outputTXT[0].setAttribute("font-family","Times New Roman")
            outputTXT[1].setAttribute("font-family","Times New Roman")

            outputTXT[0].setAttribute("fill","url(#type6_1)")
            outputTXT[1].setAttribute("fill","url(#type6_2)")
        }
    }
})