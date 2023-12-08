
const colorsArray=[
    {1:"cyan", 2:"lightblue", 3:"blue", bg:'rgba(0, 0, 255, 0.5)'},
    {1:"orange", 2:"red", 3:"yellow", bg:'rgba(255, 0, 0, 0.5)'},
    {1:"green", 2:"lightgreen", 3:"chartreuse", bg:'rgba(0, 128, 0, 0.5)'}
]

const styleTransform=[
    "translateY(-50%)",
    "translateY(-50%) scale(.7, .7)",
    "translateY(-50%) scale(.7, .7) rotate(90deg)"
]

let type=0
let color=0

const colorButtons=document.querySelectorAll(".color1, .color2, .color3")
const shapeButtons=document.querySelectorAll(".shape1, .shape2, .shape3")

colorButtons[0].style.pointerEvents="none"
colorButtons[0].style.outline='3px solid white'
colorButtons[0].style.boxShadow= "0px 0px 5px 3px #ffffff";

shapeButtons[0].style.pointerEvents="none"
shapeButtons[0].style.outline='3px solid white'
shapeButtons[0].style.boxShadow= "0px 0px 5px 3px #ffffff";

shapeButtons[0].querySelector("circle").setAttribute("fill",colorsArray[0]["bg"])
shapeButtons[1].querySelector("rect").setAttribute("fill",colorsArray[0]["bg"])
shapeButtons[2].querySelector("path").setAttribute("stroke",colorsArray[0]["bg"])


colorButtons.forEach((val,key)=>{
val.querySelector("circle").setAttribute("fill",colorsArray[key]["bg"])

})

const typeChange=(num, color, width)=>{

    if(num==0){
        return `<circle cx="50%" cy="50%" r="50%" fill=${color} stroke="none" filter="blur(7px)">`
    }else if(num==1){
        return `<rect x="0" y="0" width="100%" height="100%" fill=${color} stroke="none">`
    }else if(num==2){
        return `<path d='
        M${width*0.732/3.464} 0
        l${width*2/3.464} 0
        l${width*1/3.464} ${width/2}
        l-${width*1/3.464} ${width/2}
        l-${width*2/3.464} 0
        l-${width*1/3.464} -${width/2}
        l${width*1/3.464} -${width/2}
        l${width*2/3.464} 0'
        fill="none" stroke=${color} stroke-width="30">`
    }

}

const makeCircle=()=>{
    const xx=Math.random()*100
    const yy=Math.random()*100
    const glow=Math.random()*5+5
    const delay=Math.random()*5
    const diameter=Math.random()*150+100

    const rand=Math.ceil(Math.random()*3)

    // let color= rand<1? "cyan": 1<=rand && rand<2? "lightblue":"lightgreen"

    const svg= 

    `<svg width=${diameter} height=${diameter}
    style="top:${xx}%; left:${yy}%; animation-duration: ${glow}s; animation-delay: ${delay}s;
    transform:${styleTransform[type]};">`+

    typeChange(type, colorsArray[color][rand], diameter)+
    
    '</svg>'
    document.querySelector(".circle").insertAdjacentHTML("afterbegin", svg)
    document.querySelector(".circle svg").onanimationend=(e)=>{e.target.remove()}
}

const bgChange=(color)=>{
    document.querySelector("body").style.background=`linear-gradient(${colorsArray[color][1]},${colorsArray[color][2]},${colorsArray[color][3]})`
}

window.onload=()=>{
    bgChange(color)
    
    for(let i=0; i<=20; i++){

        makeCircle()
    }
    document.querySelectorAll(".circle svg").forEach(val=>{
        val.style.animationIterationCount=4;
        
    })

}


// console.log("///////////// Start /////////////")
setInterval(()=>{
    makeCircle()
    // console.log(document.querySelectorAll(".circle svg").length)
},2000)


colorButtons.forEach((val,key)=>{
    val.onclick=(e)=>{
        color=key

        colorButtons.forEach((val2,key)=>{
            val2.style.outline='none'
            val2.style.boxShadow='none'
            val2.style.pointerEvents= 'auto';
        })

        e.target.closest("div").style.outline='3px solid white'
        e.target.closest("div").style.boxShadow= "0px 0px 5px 3px #ffffff";
        e.target.closest("div").style.pointerEvents= 'none';

        shapeButtons[0].querySelector("circle").setAttribute("fill",colorsArray[key]["bg"])
        shapeButtons[1].querySelector("rect").setAttribute("fill",colorsArray[key]["bg"])
        shapeButtons[2].querySelector("path").setAttribute("stroke",colorsArray[key]["bg"])


        console.log("Clicked")
        bgChange(color)
        
        document.querySelectorAll(".circle svg").forEach(svg=>{
            const rand=Math.ceil(Math.random()*3)
            
            if(svg.firstChild.tagName=="path"){
                svg.firstChild.setAttribute("stroke",colorsArray[key][rand])
            }else{

                svg.firstChild.setAttribute("fill",colorsArray[key][rand])
            }

        })
    
    }
})


shapeButtons.forEach((val,key)=>{


    val.onclick=(e)=>{
        type=key
        console.log("Clicked",val.classList[0])

        shapeButtons.forEach((val2,key)=>{
            val2.style.outline='none'
            val2.style.boxShadow='none'
            val2.style.pointerEvents= 'auto';
        })


        e.target.closest("div").style.outline='3px solid white'
        e.target.closest("div").style.boxShadow= "0px 0px 5px 3px #ffffff";
        e.target.closest("div").style.pointerEvents= 'none';
 
        
        // console.log("SVg",val)
        document.querySelectorAll(".circle svg").forEach(svg=>{
            console.log("Size",typeof Math.round(svg.getAttribute("width")),Math.round(svg.getAttribute("width")),Math.round(svg.getAttribute("height")))
            
            svg.style.transform=styleTransform[key]

            console.log("val",svg.firstChild.tagName)
           
            let fill=svg.firstChild.getAttribute("fill")!=="none"?svg.firstChild.getAttribute("fill"):svg.firstChild.getAttribute("stroke")
            console.log("fill",fill)
            svg.firstChild.remove()
            // svg.insertAdjacentHTML("beforeend",`<rect x="0" y="0" width="60%" height="60%" fill=${fill} stroke="none">`)
            svg.insertAdjacentHTML("beforeend",typeChange(type, fill, Math.round(svg.getAttribute("width"))))
    
        })
    }

})
