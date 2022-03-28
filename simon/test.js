let game_array=["red","red","red"]
function afterhalfsecond(el){
    return new Promise(resolve =>{
        setTimeout(() =>{resolve(el.classList.remove('active'))},500)
    })
}
async function start(){

//let random = Math.floor(Math.random()*4)+1
//console.log(random)
//game_array.push(random)
console.log("len "+game_array.length)
let el
for(let i=0; i<2;i++){
    
    el= document.getElementById(game_array[i])
    el.classList.add('active')
    console.log(el)
    const result = await afterhalfsecond(el)
    
    console.log(el)
       document.querySelector('#clickBtn').textContent = game_array.length;
            }
    
}
