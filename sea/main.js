const body=document.querySelector("body")

const bubbleSVG=(key,n1,n2,n3)=>{
  return `<svg class="b${key+1}" width="50" height="100">`+
  `<circle cx="${n1}%" cy="${n2}%" r="${n3}" stroke="white" fill="none"></circle>`+
  `</svg>`;
};

let bubbles5="";
[[15,45,5],[50,70,3],[80,20,2],[75,40,4],[30,10,4]].forEach((val,key)=>{

    // bubbles5+=`<svg class="b${key+1}" width="50" height="100">`+
    // `<circle cx="${val[0]}%" cy="${val[1]}%" r="${val[2]}" stroke="white" fill="none"></circle>`+
    // `</svg>`
    bubbles5+=bubbleSVG(key,val[0],val[1],val[2]);
});

let bubbles4="";
[[15,65,5],[50,90,3],[60,20,2],[75,40,4]].forEach((val,key)=>{

    // bubbles4+=`<svg class="b${key+1}" width="50" height="100">`+
    // `<circle cx="${val[0]}%" cy="${val[1]}%" r="${val[2]}" stroke="white" fill="none"></circle>`+
    // `</svg>`
    bubbles4+=bubbleSVG(key,val[0],val[1],val[2]);
});

let bubbles3="";
[[15,30,5],[60,20,5],[45,50,3]].forEach((val,key)=>{

    // bubbles3+=`<svg class="b${key+1}" width="50" height="100">`+
    // `<circle cx="${val[0]}%" cy="${val[1]}%" r="${val[2]}" stroke="white" fill="none"></circle>`+
    // `</svg>`
    bubbles3+=bubbleSVG(key,val[0],val[1],val[2]);
});

let bubbles2="";
[[15,10,7],[60,40,5]].forEach((val,key)=>{

    // bubbles2+=`<svg class="b${key+1}" width="50" height="100">`+
    // `<circle cx="${val[0]}%" cy="${val[1]}%" r="${val[2]}" stroke="white" fill="none"></circle>`+
    // `</svg>`
    bubbles2+=bubbleSVG(key,val[0],val[1],val[2]);
});

let Interval_Light;
let Interval_Bubble;

const makeBubble=()=>{

  
  // Interval_Bubble=setInterval(()=>{
    const xx=Math.random()*100;
    const delay=Math.random()*3;
    const scale=Math.random()*0.7+0.3;
    const rand=Math.random()*4;
    let bubbleNum= rand<1? bubbles2: (1<=rand && rand<2)? bubbles3: (2<=rand && rand<3)? bubbles4:bubbles5;
    
    // console.log("rand",rand);
    
    let bubble=
    `<div class="bubble"
    onanimationend='((e)=>{e.target.remove();})(event)'

    
    style="left:${xx}%; animation-delay:${delay}s; transform:scale(${scale*100}%); animation-duration: ${3/scale}s; opacity:${scale};">`+
    bubbleNum+`</div>`;
  
    body.insertAdjacentHTML("afterbegin",bubble);
    // console.log("bubble")

    // document.querySelector(".bubble").onanimationend=(e)=>{e.target.remove(); console.log("Removed.")};
  
    // console.log("bubble:",document.querySelectorAll(".bubble").length)
    // document.querySelectorAll(".bubble").forEach(val=>{
    //   // console.log("val",val.getBoundingClientRect().top)
    //   if(val.getBoundingClientRect().top==-100){
    //     val.remove()
    //   }
    // })
  
  
  
    // const width=Math.random()*100+100
    // const height=Math.random()*700+400
    // const animetionNum=Math.ceil(Math.random()*22)
    // const duration=Math.random()*5+10
  
    // let light=
    // `<svg class="light" width="${width}" height="${height}" style="top: -300px; animation-name: move${animetionNum}; animation-duration: ${duration}s;">`+
    //     `<defs>`+
    //       `<linearGradient id="grad_anime" x1="0%" y1="0%" x2="0%" y2="100%">`+
    //         `<stop offset="0" style="stop-color:white;stop-opacity:.5">`+
    //         `</stop>`+
            
    //         `<stop offset="1" style="stop-color:white;stop-opacity:0"/>`+
    //       `</linearGradient>`+
    //     `</defs>`+
    //     `<path d="M${width/2} 0 l-${width/2} ${height} l${width} 0 Z" fill="url(#grad_anime)" filter="blur(7px)"/>`+
      
    //   `</svg>`
  
    //   document.querySelector("#light").insertAdjacentHTML("afterbegin",light)
    //   // console.log("------------------------------")
      
    //   // console.log(document.querySelectorAll(".light").length)
    //   document.querySelector(".light").onanimationend=(e)=>{e.target.remove()}
  
  // console.log("B length:",document.querySelectorAll(".bubble").length)
        
  // }, sec);
};

  const makeLight=(iteration)=>{
    // Interval_Light=setInterval(()=>{
  
      const width=Math.random()*100+100;
      const height=Math.random()*700+400;
      const duration=(Math.random()*5+10)*1000;

      const deg=Math.random()*160-80;
      // const direction=Math.round(Math.random());
      let direction;
      // if(deg>=60){
      //   direction=0
      // }else if(deg<=-60){
      //   direction=1
      // }else{
      //   direction=Math.round(Math.random());
      // }

      deg>=60? direction=0:
      deg<=-60? direction=1:
      direction=Math.round(Math.random());

      direction==0 && (direction=-1)

      // console.log("deg,dir",Math.round(deg),direction)
    


      // width="${width}" height="${height}" style="top: -300px; animation-name: move${animetionNum}; animation-duration: ${duration}s;">`+
      let light=
      `<svg class="light"
      width="${width}" height="${height}" style="top: -300px">
          <defs>
            <linearGradient id="grad_anime" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0" style="stop-color:white;stop-opacity:.5">
              </stop>
              <stop offset="1" style="stop-color:white;stop-opacity:0"/>
              </linearGradient>
            </defs>
          <path d="M${width/2} 0 l-${width/2} ${height} l${width} 0 Z" fill="url(#grad_anime)" filter="blur(7px)"/>
        </svg>`;
    
        body.insertAdjacentHTML("afterbegin",light);
        // console.log("------------------------------")
        
        // console.log(document.querySelectorAll(".light").length)


        document.querySelector(".light").animate(
          {
            // trasnform: [`rotate(${deg}deg) translateX(-50%)`,`rotate(${deg+20*direction}deg) translateX(-50%)`],
            transform: [`rotate(${deg}deg) translateX(-50%)`, `rotate(${deg+20*direction}deg) translateX(-50%)`],
            opacity:[0,1,0]
          },
          {
            duration:duration,
            iterations: iteration,
            fill: "both",
          }
        )
    
        document.querySelectorAll(".light").forEach(li=>{

          // console.log("playstate",(li))

          // li.getAnimations()[0]["playState"]=='finished' && li.remove()
          
          // if(li.getAnimations()[0]["playState"]){
            
          //   if(li.getAnimations()[0]["playState"]=='finished'){
  
          //     li.remove()
          //   }

          // }

          Promise.all(
            li.getAnimations({ subtree: true })
              .map(animation => animation.finished)
          ).then(() => li.remove());
          
        })
        
        console.log("L length:",document.querySelectorAll(".light").length)
    // }, sec);
  };

  
  // console.log("bubbles5",bubbles5)

document.querySelector('input[name="bubble"]').oninput=(e)=>{
  
  console.log("e",e.target.value);
  clearInterval(Interval_Bubble);
  


  Interval_Bubble=setInterval(()=>{makeBubble()},6000-e.target.value*1000)
  
};

document.querySelector('input[name="light"]').oninput=(e)=>{
  
  console.log("e",e.target.value);
  clearInterval(Interval_Light);
  

  Interval_Light=setInterval(()=>{makeLight(3);},6000-e.target.value*1000)
  
};


setTimeout(()=>{
  for(let i=0;i<=4;i++){
    makeLight(1)
    makeLight(2)
  }

  Interval_Bubble=setInterval(()=>{makeBubble()},3000)
  Interval_Light=setInterval(()=>{makeLight(3);},3000)
  
},100)

// makeBubble(3000);