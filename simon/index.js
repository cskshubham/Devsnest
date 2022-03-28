let game_array=[]
let player_array=[]
let gameStart=false
let audios = new Map([
    [1, "audio1"],
    [2, "audio2"],
    [3, "audio3"],
    [4, "audio4"]
  ]);
                    
function afterhalfsecond(el){
    return new Promise(resolve =>{
        setTimeout(() =>{el.classList.remove('active')
        resolve("resolved")
    },500)
        
    })
}

function aftersecond(el){
    return new Promise(resolve =>{
        setTimeout(() =>{el.classList.add('active')
        resolve("resolved")
    },500)
        
    })
}

function start(){

let random = Math.floor(Math.random()*4)+1
console.log(random)
game_array.push(random)
console.log("len "+game_array.length)
document.getElementById('audio5').play() 
mainborder()
sequenceGenerator()
}

let change
let el
function removeCircle(el){
    return new Promise(resolve =>{
        setTimeout(() =>{el.classList.remove('center-circle2')
        resolve("resolved")
    },1000)
        
    })
}
function addCircle(el){
    return new Promise(resolve =>{
        setTimeout(() =>{el.classList.add('center-circle2')
        resolve("resolved")
    },300)
        
    })
}

async function mainborder() {
        el = document.getElementById("clickBtn")
        await addCircle(el)
        await removeCircle(el)
 } 

async function sequenceGenerator(){
    
    for(const i of game_array){
        
        document.querySelector('#clickBtn').textContent = game_array.length;
        let el= document.getElementById(i)
        await aftersecond(el)
        console.log(el)
        await afterhalfsecond(el)
        console.log(el)
        document.getElementById(audios.get(i)).play()
    }
    var x = document.querySelectorAll('.blocks')
            for(const i of x){
            console.log(i)
            i.disabled=false
            }
}

function questionMark(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            document.querySelector('#clickBtn').textContent = "?"
            var x = document.querySelectorAll('.blocks')
            for(const i of x){
            console.log(i)
            i.disabled=true
            }
        resolve("resolved")
    },200)
        
    })
}

function content(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            document.querySelector('#clickBtn').textContent = game_array.length
            
        resolve("resolved")
    },1500)
        
    })
}

async function checkSequence(){
    let index=0
    for(const i of player_array){
        
        if(game_array[index]!=i){
            await questionMark()
            await content()
            player_array=[]
            sequenceGenerator()
        }
        index+=1
    }
    if(player_array.length==game_array.length){
        start()
        player_array=[]
    }
}

function btnfunc(id){
    
    player_array.push(id)
    checkSequence()
}

let timeout
let ell
    
function clickblocks(id) {
        ell = document.getElementById(id)
        ell.classList.add('clickActive')
        timeout = setTimeout(changeColor, 200);
        }
function changeColor() {
        ell.classList.remove('clickActive')
        }
    
function go(){
    console.log(document.getElementById(1))
   

    if(gameStart){
        game_array=[]
        player_array=[]
        start()
    }
    else{
        document.getElementById(1).addEventListener('click',() => {document.getElementById('audio1').play()
        btnfunc(1)})
        document.getElementById(2).addEventListener('click',() => {document.getElementById('audio2').play()
        btnfunc(2)})
        document.getElementById(3).addEventListener('click',() => {document.getElementById('audio3').play()
        btnfunc(3)})
        document.getElementById(4).addEventListener('click',() => {document.getElementById('audio4').play()
        btnfunc(4)})
        gameStart=true
        start()
    }
  }