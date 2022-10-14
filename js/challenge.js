const addButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const counter = document.getElementById("counter");
let counterValue = 0/*Number(counter.textContent()) ++;*/
function increaseCounter() {
    counterValue ++;
    counter.textContent = counterValue;
}



document.addEventListener('DOMContentLoaded', function() {
    
    counter.innerHTML = counterValue;
    
    
    setInterval(increaseCounter, 1000)
    
    minusButton.addEventListener("click", function() {
        // console.log(counterValue)
        
        counter.innerHTML = -- counterValue;

});

addButton.addEventListener("click", function() {
    // console.log(counterValue)
    
    counter.innerHTML = ++ counterValue;
 
 });})