//const randomNumber = Math.floor(Math.random()*6)
//console.log(randomNumber)
// const arrayOfNumbers=[];
// arrayOfNumbers.push(randomNumber);
// for(let i in arrayOfNumbers){
//     console.log(arrayOfNumbers[i])
// }
function diceNumbers(){
    const randomNumber = Math.floor(Math.random()*6);
    document.querySelector(".number").innerText = randomNumber;
    const diceEl = document.querySelector(".dice");
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
      diceEl.classList.remove("roll-animation");
      rollDice();
    }, 1000);
    var numberBox = document.createElement('div')
    numberBox.className ="numberContainer"
    numberBox.innerHTML = randomNumber;
    //numberBox.appendChild("h1").innerText = "Roll"
    document.body.appendChild(numberBox)
    const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
}

function getDiceFace(rollResult) {
    switch (rollResult) {
      case 1:
        return "&#9856;";
      case 2:
        return "&#9857;";
      case 3:
        return "&#9858;";
      case 4:
        return "&#9859;";
      case 5:
        return "&#9860;";
      case 6:
        return "&#9861;";
      default:
        return "";
    }
  }
  