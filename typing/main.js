// const terms=["shark","whale","dog","phone","zebra","pen","query","tree","ant"]

const svgBorderBG=['lightblue','url(#bg1)','url(#bg2)','url(#bg3)']

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
const growingCircle=document.querySelector(".growingCircle")
const count3=document.querySelector(".count3")
// const growingCircleAnimate=document.querySelector(".growingCircle animate")
// const animate=document.querySelectorAll(".animate")

let terms={}
fetch("./terms.json")
.then((data)=>{
  return data.json()
}).then((data)=>{
  // console.log(data)


  terms={...data}
}).then(()=>{
  console.log("terms",terms)

  counter.innerText=0

  let answer=false
  let count=0
  let level=1
  levelNumber.innerText=level

  svgForBorder.setAttribute("fill",svgBorderBG[level-1])
  console.log("fill1",svgBorderBG[level-1])
  console.log("attr",svgForBorder.getAttribute("fill"))
  const aaa=()=>{
    console.log("fill1",svgBorderBG[level-1])
  console.log("attr",svgForBorder.getAttribute("fill"))
    // animate.forEach(val=>{
    //   val.setAttribute("attributeName","offset")
    //   console.log(val.getAttribute("dur"))
    // })
    answer=false
    levelDown.style.display="none"
    levelUp.style.display="none"
    // levelUp.querySelectorAll("animate").forEach(val=>{val.beginElement()})
    checkSVG.style.display="none"
    secondDiv.style.color="black"
    
    levelDiv.style.animationName=null
    levelNumber.style.animationName=null
    counter.style.animationName=null
    counter.style.color="black"
    second.style.animationName="countDown"
    
    // timeBar.style.visibility="visible"
    
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
        
        answer=true
        // rslt.innerText="Right"
        count++
        
        counter.innerText=count
        counter.style.animationName="increaseCount"
        // input.value=""
        input.disabled=true
        // timeBar.style.visibility="hidden"
        if(count%10==0){
          level++
          // animate.forEach(val=>{
            //   val.setAttribute("dur","1s")
            // })
            levelUp.style.display="block"
            levelUp.querySelectorAll("animate").forEach(val=>{val.beginElement()})
          levelDiv.style.animationName="shake2"
          levelNumber.style.animationName="newLevel"
          levelNumber.innerText=level
          svgForBorder.setAttribute("fill",svgBorderBG[level-1])
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
        if(!answer){
          // container.style.backgroundColor="pink"
          if(level>1){

            levelDown.style.display="block"
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
          aaa()
  
        }, 1000)
        timeBar.style.animationName=null
        second.style.animationName=null
      }else{
        
      }
      
      i--
    },1000)
    
  
  
  }
  
  
  
  document.querySelector(".start").onclick=(e)=>{

    let c=2
    const initCount=setInterval(()=>{

      count3.innerText=c
      c--
    },1000)
    
    e.target.style.display="none"
    growingCircle.style.opacity="1"
    growingCircle.querySelectorAll("animate").forEach(val=>{val.beginElement()})
    setTimeout(()=>{
      clearInterval(initCount)
      growingCircle.style.display="none"
      container.style.display="block"
      aaa()


    },3000)
  }
  

})  

  
