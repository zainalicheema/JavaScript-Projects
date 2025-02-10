document.querySelector('#start').addEventListener('click',startChaningColor)
document.querySelector('#stop').addEventListener('click',stopChaningColor)
let ClearBackground;

const randomColor = function(){
    const hex = "0123456789ABCDF"
    let color = "#"
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

const startChaningColor = function(){
   if(!ClearBackground){
    ClearBackground=setInterval(changeBGColor,1000)
   }

    function changeBGColor(){
        document.body.style.backgroundColor = randomColor()
    }
   
}
const stopChaningColor = function(){
    clearInterval(ClearBackground)
    ClearBackground = null
}
