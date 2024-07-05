const body=document.querySelector("body");
const svgContainer=document.querySelector(".svgContainer");
const animate=document.querySelector("animate");
const centralize=document.querySelector('input[name="centralize"]');
const amount=document.querySelector('input[name="amount"]');
const colorButtons=document.querySelectorAll('.buttonHolder button');

const lightningsSVGs=[];
let lightningIntv;

const innerColors=['#a9d9ff','#FF0000','#FFFFDA']
const outerColors=['#1d98ff','#FF2222','#FFFF28']

fetch("./lightning.json")
.then((data)=>{
    return data.json()
})
.then((data)=>{
    Object.values(data.LightningSVGs).forEach(svg=>lightningsSVGs.push(svg));
});

const makeLightning=(sec, center)=>{
   
    lightningIntv=setInterval(()=>{
        const randNum=Math.ceil(Math.random()*6);
        const rand=Math.random();
    
        const LL=
        randNum==1?lightningsSVGs[0]:
        randNum==2?lightningsSVGs[1]:
        randNum==3?lightningsSVGs[2]:
        randNum==4?lightningsSVGs[3]:
        randNum==5?lightningsSVGs[4]:
        lightningsSVGs[5];
        
        svgContainer.insertAdjacentHTML("afterbegin",LL);
        svgContainer.firstChild.onanimationend=(e)=>e.target.remove();
        svgContainer.firstChild.style.left=`${+center/2 + (100-center)*1*rand}%`;
        svgContainer.firstChild.style.top=`${(-1500+innerHeight+50)*rand}px`;
        svgContainer.firstChild.style.animationDelay=`${rand*3}s`;
    
    },sec);
};

centralize.oninput=(e)=>{
    clearInterval(lightningIntv);
    makeLightning(100+900*(1-amount.value), e.target.value);
};

amount.oninput=(e)=>{
    clearInterval(lightningIntv);
    makeLightning(100+900*(1-e.target.value), +centralize.value);
};

colorButtons.forEach((btn,i)=>{
    btn.onclick=(e)=>{

        colorButtons.forEach(b=>{
            b.style.boxShadow='none'
            b.style.opacity='.3'
            b.style.pointerEvents='auto'
        })
        
        e.target.style.boxShadow='0 0 7px #ffffff'
        e.target.style.opacity='0.7'
        e.target.style.pointerEvents='none'

        lightningsSVGs.forEach((elm,index)=>{
            lightningsSVGs[index]=elm
            .split(/#a9d9ff|#FF0000|#FFFFDA/).join(innerColors[i])
            .split(/#1d98ff|#FF2222|#FFFF28/).join(outerColors[i])
        })
    }
})

const bgIntv=setInterval(()=>{
    const rand=Math.random()*70;
    const rand2=Math.random();
    if(rand2>=0.5){
        animate.setAttribute('values',`rgb(${rand},${rand},${rand});black`);
        animate.beginElement();
    }
},2000);

makeLightning(100+900*(1-amount.value), +centralize.value);