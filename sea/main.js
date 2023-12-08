

let bubbles5="";
[[15,45,5],[50,70,3],[80,20,2],[75,40,4],[30,10,4]].forEach((val,key)=>{

    bubbles5+=`<svg class="b${key+1}" width="50" height="100">`+
    `<circle cx="${val[0]}%" cy="${val[1]}%" r="${val[2]}" stroke="white" fill="none"></circle>`+
    `</svg>`
})

let bubbles4="";
[[15,65,5],[50,90,3],[60,20,2],[75,40,4]].forEach((val,key)=>{

    bubbles4+=`<svg class="b${key+1}" width="50" height="100">`+
    `<circle cx="${val[0]}%" cy="${val[1]}%" r="${val[2]}" stroke="white" fill="none"></circle>`+
    `</svg>`
})

let bubbles3="";
[[15,30,5],[60,20,5],[45,50,3]].forEach((val,key)=>{

    bubbles3+=`<svg class="b${key+1}" width="50" height="100">`+
    `<circle cx="${val[0]}%" cy="${val[1]}%" r="${val[2]}" stroke="white" fill="none"></circle>`+
    `</svg>`
})

let bubbles2="";
[[15,10,7],[60,40,5]].forEach((val,key)=>{

    bubbles2+=`<svg class="b${key+1}" width="50" height="100">`+
    `<circle cx="${val[0]}%" cy="${val[1]}%" r="${val[2]}" stroke="white" fill="none"></circle>`+
    `</svg>`
})

let Interval_Light;
let Interval_Bubble;

const makeBubble=(sec)=>{

  
  Interval_Bubble=setInterval(()=>{
    const xx=Math.random()*100
    const delay=Math.random()*3
    const scale=Math.random()*0.7+0.3
    const rand=Math.random()*4
    let bubbleNum= rand<1? bubbles2: (1<=rand && rand<2)? bubbles3: (2<=rand && rand<3)? bubbles4:bubbles5
    
    console.log("rand",rand)
    
    let bubble=
    `<div class="bubble" style="left:${xx}%; animation-delay:${delay}s; transform:scale(${scale*100}%); animation-duration: ${3/scale}s; opacity:${scale};">`+
    bubbleNum+`</div>`
  
    document.querySelector("#bubble").insertAdjacentHTML("afterbegin",bubble)
    // console.log("bubble")
    document.querySelector(".bubble").onanimationend=(e)=>{e.target.remove()}
  
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
  
  
        
  }, sec)
}

  const makeLight=(sec)=>{
    Interval_Light=setInterval(()=>{
  
      const width=Math.random()*100+100
      const height=Math.random()*700+400
      const animetionNum=Math.ceil(Math.random()*22)
      const duration=Math.random()*5+10
    
      let light=
      `<svg class="light" width="${width}" height="${height}" style="top: -300px; animation-name: move${animetionNum}; animation-duration: ${duration}s;">`+
          `<defs>`+
            `<linearGradient id="grad_anime" x1="0%" y1="0%" x2="0%" y2="100%">`+
              `<stop offset="0" style="stop-color:white;stop-opacity:.5">`+
              `</stop>`+
              
              `<stop offset="1" style="stop-color:white;stop-opacity:0"/>`+
            `</linearGradient>`+
          `</defs>`+
          `<path d="M${width/2} 0 l-${width/2} ${height} l${width} 0 Z" fill="url(#grad_anime)" filter="blur(7px)"/>`+
        
        `</svg>`
    
        document.querySelector("#light").insertAdjacentHTML("afterbegin",light)
        // console.log("------------------------------")
        
        // console.log(document.querySelectorAll(".light").length)
        document.querySelector(".light").onanimationend=(e)=>{e.target.remove()}
    
    
          
    }, sec)
  }

makeBubble(3000)
makeLight(3000)

// console.log("bubbles5",bubbles5)

document.querySelector('input[name="bubble"]').oninput=(e)=>{

  console.log("e",e.target.value)
  clearInterval(Interval_Bubble)
  makeBubble(6000-e.target.value*1000)
  
}

document.querySelector('input[name="light"]').oninput=(e)=>{

  console.log("e",e.target.value)
  clearInterval(Interval_Light)
  makeLight(6000-e.target.value*1000)
  
}



