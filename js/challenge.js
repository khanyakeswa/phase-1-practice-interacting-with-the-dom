const addButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const counter = document.getElementById('counter')
let counterValue = 0 /*Number(counter.textContent()) ++;*/
function increaseCounter() {
  b = parseInt(counter.innerText)
  counter.innerText = b + 1
}

document.addEventListener('DOMContentLoaded', function () {
  counter.textContent = counterValue

  // setInterval(increaseCounter, 1000)

  minusButton.addEventListener('click', function () {
    b = parseInt(counter.innerText)
    counter.innerText = b - 1
  })
})

addButton.addEventListener('click', function () {
  b = parseInt(counter.innerText)
  counter.innerText = b + 1
})
