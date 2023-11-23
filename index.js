const inputEl = document.getElementById("name");
const inputE2 = document.getElementById("price");
const inputBtn = document.getElementById("btn")
function showvalues() {
  const inputValue = parseFloat(inputEl.value);
  const inputValue2 = parseFloat(inputE2.value);

if(inputValue.length === 0 || inputValue2.length === 0){
   alert("all fields are required");
    return
}
    // Log the value to the console
    
        var tipAmount = (inputValue* inputValue2)/100;
        var total = inputValue + tipAmount;
        console.log(total)
        document.getElementById("total").innerText=total.toFixed(2);
inputEl.value=""
inputE2.value=""
}
