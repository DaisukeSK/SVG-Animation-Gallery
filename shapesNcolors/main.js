
const colorsArray =[
    {1:"cyan", 2:"lightblue", 3:"blue", bg:'rgba(0, 0, 255, 0.5)'},
    {1:"orange", 2:"yellow", 3:"red", bg:'rgba(255, 0, 0, 0.5)'},
    {1:"chartreuse", 2:"lightgreen", 3:"green", bg:'rgba(0, 128, 0, 0.5)'}
];

const styleTransform =[
    "translateY(-50%)",
    "translateY(-50%) scale(.7, .7)",
    "translateY(-50%) scale(.7, .7) rotate(90deg)"
];

let type=0;
let color=0;

const boxShadowStyle="0px 0px 5px 3px #ffffff";
const outlineStyle='3px solid white';

const colorButtons=document.querySelectorAll(".color1, .color2, .color3");
const shapeButtons=document.querySelectorAll(".shape1, .shape2, .shape3");



const typeChange=(num, color, width)=>{

    switch(num){
        case 0: return `<circle cx="50%" cy="50%" r="50%" fill=${color} stroke="none" filter="blur(7px)">`;
        case 1: return `<rect x="0" y="0" width="100%" height="100%" fill=${color} stroke="none">`;
        default : return`<path d='
            M${width*0.732/3.464} 0
            l${width*2/3.464} 0
            l${width*1/3.464} ${width/2}
            l-${width*1/3.464} ${width/2}
            l-${width*2/3.464} 0
            l-${width*1/3.464} -${width/2}
            l${width*1/3.464} -${width/2}
            l${width*2/3.464} 0'
            fill="none" stroke=${color} stroke-width="30">`;
    }
};

const makeCircle=()=>{
    const xx=Math.random()*100;
    const yy=Math.random()*100;
    const glow=Math.random()*5+5;
    const delay=Math.random()*5;
    const diameter=Math.random()*150+100;
    const rand=Math.ceil(Math.random()*3);

    const svg= 
    `<svg class="shapeSVG" width=${diameter} height=${diameter}
    onanimationend='((e)=>{
        console.log("remove");
        e.target.remove();
    })(event)'
        style="top:${xx}%; left:${yy}%; animation-duration: ${glow}s; animation-delay: ${delay}s;
        transform:${styleTransform[type]};">`+

        typeChange(type, colorsArray[color][rand], diameter)+

    '</svg>';

    // document.querySelector(".svgContainer").insertAdjacentHTML("afterbegin", svg);
    document.querySelector("body").insertAdjacentHTML("afterbegin", svg);
    // document.querySelector(".shapeSVG").onanimationend=(e)=>e.target.remove();
};

const bgChange=(number)=>{
    document.querySelector("body").style.background=`linear-gradient(${colorsArray[number][1]},${colorsArray[number][2]},${colorsArray[number][3]})`
};


colorButtons.forEach((val,key)=>{
    val.onclick=(e)=>{
        color=key;

        colorButtons.forEach((val2,key)=>{
            val2.style.outline='none';
            val2.style.boxShadow='none';
            val2.style.pointerEvents= 'auto';
        })

        e.target.closest("div").style.outline=outlineStyle;
        e.target.closest("div").style.boxShadow= boxShadowStyle;
        e.target.closest("div").style.pointerEvents= 'none';

        shapeButtons[0].querySelector("circle").setAttribute("fill",colorsArray[key]["bg"]);
        shapeButtons[1].querySelector("rect").setAttribute("fill",colorsArray[key]["bg"]);
        shapeButtons[2].querySelector("path").setAttribute("stroke",colorsArray[key]["bg"]);

        bgChange(color);
        
        document.querySelectorAll(".shapeSVG").forEach(svg=>{
            const rand=Math.ceil(Math.random()*3)
            
            svg.firstChild.tagName=="path"?
            svg.firstChild.setAttribute("stroke",colorsArray[key][rand]):
            svg.firstChild.setAttribute("fill",colorsArray[key][rand])

        });
    };
});


shapeButtons.forEach((val,key)=>{

    val.onclick=(e)=>{
        type=key;
        
        shapeButtons.forEach((val2,key)=>{
            val2.style.outline='none';
            val2.style.boxShadow='none';
            val2.style.pointerEvents= 'auto';
        });

        e.target.closest("div").style.outline=outlineStyle;
        e.target.closest("div").style.boxShadow= boxShadowStyle;
        e.target.closest("div").style.pointerEvents= 'none';
        
        document.querySelectorAll(".shapeSVG").forEach(svg=>{
            
            svg.style.transform=styleTransform[key];
            let fill=svg.firstChild.getAttribute("fill")!=="none"?
                svg.firstChild.getAttribute("fill"):
                svg.firstChild.getAttribute("stroke");
            svg.firstChild.remove();
            svg.insertAdjacentHTML("beforeend",typeChange(type, fill, Math.round(svg.getAttribute("width"))));
            
        });
    };
});


window.onload=()=>{

    colorButtons[0].style.pointerEvents="none";
    colorButtons[0].style.outline=outlineStyle;
    colorButtons[0].style.boxShadow= boxShadowStyle;

    shapeButtons[0].style.pointerEvents="none";
    shapeButtons[0].style.outline=outlineStyle;
    shapeButtons[0].style.boxShadow= boxShadowStyle;

    shapeButtons[0].querySelector("circle").setAttribute("fill",colorsArray[0]["bg"]);
    shapeButtons[1].querySelector("rect").setAttribute("fill",colorsArray[0]["bg"]);
    shapeButtons[2].querySelector("path").setAttribute("stroke",colorsArray[0]["bg"]);

    colorButtons.forEach((val,key)=>{
        val.querySelector("circle").setAttribute("fill",colorsArray[key]["bg"]);
    });

    bgChange(color);
    
    for(let i=0; i<=20; i++){
        makeCircle();
    };

    document.querySelectorAll(".shapeSVG").forEach(val=>{
        val.style.animationIterationCount=4;
    });

    setInterval(()=>{
        makeCircle();
        console.log("length",document.querySelectorAll(".shapeSVG").length)
    },2000);
};