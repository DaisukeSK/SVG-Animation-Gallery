const svgBorderBG=['lightblue','url(#bg1)','url(#bg2)','url(#bg3)']

const instruction=document.querySelector(".instruction")
const container=document.querySelector(".container")
const frame=document.querySelector(".frame")
const timeBar=document.querySelector(".timeBar")
const secondDiv=document.querySelector(".secondDiv")
const levelDiv=document.querySelector(".level")
const levelNumber=document.querySelector(".level .levelNumber")
const question=document.querySelector(".question")
const rslt=document.querySelector(".rslt")
const second=document.querySelector(".secondHolder div")
const input=document.querySelector(".inputField")
const counter=document.querySelector(".counter span")
const svgForBorder=document.querySelector(".svgForBorder rect")
const levelUp=document.querySelector("svg.levelUp")
const levelDown=document.querySelector("svg.levelDown")
const checkSVG=document.querySelector("svg.checkSVG")
const loadingCircle=document.querySelector(".loadingCircle")
const count3=document.querySelector(".count3")

let terms={}
fetch("./terms.json")
.then((data)=>{
  return data.json()
  })
.then((data)=>{
  terms={...data}
})

counter.innerText=0
let correctAnswer=false
let count=0
let level=1
levelNumber.innerText=level
svgForBorder.setAttribute("fill",svgBorderBG[level-1])

////////////////////// Function //////////////////////
const showQuestion=()=>{
  correctAnswer=false
  levelDown.style.display="none"
  levelUp.style.display="none"
  checkSVG.style.display="none"
  secondDiv.style.color="black"
  levelDiv.style.animationName=null
  levelNumber.style.animationName=null
  counter.style.animationName=null
  counter.style.color="black"
  second.style.animationName="countDown"
  timeBar.style.animationName="shrink"
  container.style.animationName=null
  frame.style.animationName=null
  frame.style.backgroundColor=null
  rslt.innerText=""
  input.value=""
  input.disabled=false
  input.select()
  const rand=Math.floor(Math.random()*terms[level].length)
  console.log("rand",rand)
  question.innerText=terms[level][rand]

  input.oninput=(e)=>{
    if(e.target.value==question.innerText){
      correctAnswer=true
      count++
      counter.innerText=count
      counter.style.animationName="increaseCount"
      input.disabled=true

      if(count%10==0){
        level++
        levelUp.style.display="block"
        levelUp.querySelectorAll("animate").forEach(val=>val.beginElement())
        levelDiv.style.animationName="shake2"
        levelNumber.style.animationName="newLevel"
        levelNumber.innerText=level

        if(level>=3){
          svgForBorder.setAttribute("fill",svgBorderBG[2])
        }else{
          svgForBorder.setAttribute("fill",svgBorderBG[level-1])
        }

      }else{
        frame.style.backgroundColor="lightgreen"
        checkSVG.style.display="block"
        checkSVG.querySelector("animate").beginElement()
      }
    }
  }

  second.innerText=3;
  let i=2

  const interval=setInterval(()=>{
    second.innerText=i;

    if(i==0){
      console.log("rslt.innerText",rslt)
      if(!correctAnswer){
        if(level>1){
          levelDown.style.display="block"
          levelDown.querySelectorAll("animate").forEach(ani=>ani.beginElement())
        }
        counter.style.color="red"
        secondDiv.style.color="red"
        container.style.animationName="shake"
        frame.style.animationName="bgChange"
        input.disabled=true
        count=0
        counter.innerText=count
        level=1
        levelNumber.innerText=level
        svgForBorder.setAttribute("fill",svgBorderBG[0])
      }
      clearInterval(interval)
      
      setTimeout(()=>{
        showQuestion()

      }, 1000)
      timeBar.style.animationName=null
      second.style.animationName=null
    }
    i--
  },1000)
}// showQuestion

////////////////////// Onclick //////////////////////
document.querySelector(".start").onclick=(e)=>{

  console.log(e.target.parentNode)
  e.target.parentNode.style.display="none"
  loadingCircle.style.opacity="1"
  loadingCircle.querySelectorAll("animate").forEach(ani=>ani.beginElement())
  let c=2

  const initCount=setInterval(()=>{
    count3.innerText=c
    c--
  },1000)
  
  setTimeout(()=>{
    clearInterval(initCount)
    loadingCircle.style.display="none"
    container.style.display="block"
    showQuestion()
  },3000)
}