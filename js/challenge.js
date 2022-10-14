const minusButton = document.getElementById("minus");
const counter = document.getElementById("counter");

minusButton.addEventListener("click", function() {
    const counterValue = Number(counter.textContent()) ++;
    console.log(counterValue)
})
