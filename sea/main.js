let Interval_Light;

const makeLight=(iteration)=>{

    const width=Math.random()*100+100;
    const height=Math.random()*700+400;
    const duration=(Math.random()*5+10)*1000;

    const deg=Math.random()*160-80;
    let direction;

    deg>=60? direction=0:
    deg<=-60? direction=1:
    direction=Math.round(Math.random());

    direction==0 && (direction=-1)

    let light=`
    <svg
        class="light"
        width="${width}"
        height="${height}"
    >
        <defs>
        <linearGradient id="grad_anime" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0" style="stop-color:white;stop-opacity:.5"/>
            <stop offset="1" style="stop-color:white;stop-opacity:0"/>
        </linearGradient>
        </defs>
        <path d="M${width/2},0 l-${width/2},${height} l${width},0 Z" fill="url(#grad_anime)" filter="blur(0px)"/>
    </svg>`;

    document.querySelector("body").insertAdjacentHTML("afterbegin",light);

    const newChild=document.querySelector(".light")

    newChild.animate(
        {
            transform: [`translateX(-50%) rotate(${deg}deg)`, `translateX(-50%) rotate(${deg+20*direction}deg)`],
            opacity:[0,1,0]
        },
        {
            duration:duration,
            iterations: iteration,
            fill: "both",
        }
    )

    Promise.all(
        newChild.getAnimations({ subtree: true })
        .map(animation => animation.finished)
    ).then(() => newChild.remove());
    
};

document.querySelector('input[name="light"]').oninput=(e)=>{
    clearInterval(Interval_Light);
    Interval_Light=setInterval(()=>{makeLight(3);},6000-e.target.value*1000)
};

setTimeout(()=>{ //If nou do this, it can break the layout.
    for(let i=0;i<=4;i++){
        makeLight(1)
        makeLight(2)
    }
    Interval_Light=setInterval(()=>{makeLight(3)},3000)
},10)