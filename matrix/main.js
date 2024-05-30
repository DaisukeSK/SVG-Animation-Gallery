const body=document.querySelector('body')
const amount=document.querySelector('input[name="amount"]');

const iterateNum = window.innerHeight/20+2

let interval;

fetch('./letters.json')
.then((data)=>{
    return data.json()
})
.then((data)=>{

    const letters=[...data.data]

    const animationStart=(sec)=>{

        interval=setInterval(()=>{
        
            let spans=''
            
            for(let i=0; i<=iterateNum; i++){
                const rand = Math.ceil(100*Math.random())
                const rand2 = Math.random()
    
                const mainText = rand2<0.2? 1:rand2<0.4? 0:letters[rand]? letters[rand]:''
    
                const alterText = letters[rand-25]? letters[rand-25]:'t'
    
                spans +=
                `<span
                    style='animation-delay:${i/10}s'
                    ${rand%3==0 &&
                        `onanimationstart='((e)=>{setTimeout(()=>{e.target.innerText="`+alterText+`"},${rand2*1000})})(event)`
                    }
                '>
                    ${mainText}
                </span>`
            }
            
            const rand = Math.random()
            
            body.insertAdjacentHTML(
                "beforeend",
                `<div class="lettersDiv" style="left:${window.innerWidth*rand}px">
                    ${spans}
                </div>`
            )
    
            body.children.length>=70 && body.children[2].remove()
            console.log(body.children.length)
        },sec)
    }

    amount.onchange=(e)=>{
        clearInterval(interval)
        animationStart(1000-900*e.target.value)
    }

    animationStart(550)
})
