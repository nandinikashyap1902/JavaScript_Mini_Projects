let interval;
let timeLeft = 60;
function startTime(){
interval = setInterval(()=>{
timeLeft--;
updateTime();
if(timeLeft===0){
alert("time's up")
timeLeft=10;
}
},1000)
}
let time = document.querySelector('.timer');
function updateTime(){
let minutes = Math.floor(timeLeft/60);
let seconds = timeLeft%60;
let formatedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
time.innerHTML= formatedTime
}
function resetTime(){
    clearInterval(interval);
    timeLeft = 60;
    updateTime();
}
function stopTime(){
clearInterval(interval)
}
document.getElementById("start").addEventListener("click",startTime)

document.getElementById("stop").addEventListener("click",stopTime)
document.getElementById("reset").addEventListener("click",resetTime)