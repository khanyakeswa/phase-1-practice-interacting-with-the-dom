const addButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const counter = document.getElementById('counter')
const heart = document.getElementById('heart')
const pauseButton = document.getElementById('pause')
const submitButton = document.getElementById('submit')
const buttonElements = [ minusButton, addButton, heart, submitButton ]

let counterValue = 0 /*Number(counter.textContent()) ++;*/
let pauseStatus = false
let intervalID = setInterval( increaseCounter, 1000 )

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

heart.addEventListener('click', function () {
  b = parseInt(counter.innerText)
  const likes = document.querySelector('.likes')
  const currentNumber = counter.innerText
  console.log()

  const found = document.getElementById(`likes-${currentNumber}`)
  let currentLikeCount = 1
  if (!found) {
    let likeCount = document.createElement('span')
    likeCount.innerHTML = currentLikeCount
    const li = document.createElement('li')
    li.id = `likes-${currentNumber}`
    const str = `${currentNumber} has been liked ${likeCount.innerHTML} time`
    li.innerHTML = str
    likes.appendChild(li)
  } else {
    let likeCount = document.createElement('span')
    likeCount.innerHTML = currentLikeCount
    let newlikeCount = Number(likeCount.innerHTML)
    const li = document.createElement('li')
    li.id = `likes-${currentNumber}`
    const str = `${currentNumber} has been liked ${newlikeCount + 1} times`
    currentLikeCount += 1
    console.log(currentLikeCount)
    found.innerHTML = str
  }
})

pauseButton.addEventListener('click', (e) => {
  pauseStatus = !pauseStatus
  if (pauseStatus) {
    clearInterval(intervalID)
    e.target.textContent = 'resume'
    buttonElements.forEach((button) => (button.disabled = true))
  } else {
    intervalID = setInterval(increaseCounter, 1000)
    e.target.textContent = 'pause'
    buttonElements.forEach((button) => (button.disabled = false))
  }
})
