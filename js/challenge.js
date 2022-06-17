//document.addEventListener("DOMContentLoaded", () => {
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const form = document.getElementById('comment-form')
const submit = document.getElementById('submit')
let count = document.getElementById('counter')
let interval = setInterval(incrementCounter,1000)


plus.addEventListener('click', incrementCounter)

function incrementCounter() {
  count.textContent = parseInt(count.textContent,10) + 1 
}

// we NEED to use parseInt as our value in the HTML is considered
// a STRING.. as such, we need to convert it to a int then add

minus.addEventListener('click',decrementCounter)

function decrementCounter() {
  count.textContent = parseInt(count.textContent,10) - 1 
}

// we NEED to use parseInt as our value in the HTML is considered
// a STRING.. as such, we need to convert it to a int then add

const likeObj = { }

heart.addEventListener('click', () => {
  const likesUl = document.querySelector("ul.likes")
  const li = document.createElement('li')
  let countNumber = count.innerText 
  const updatedLi = document.getElementById(`${countNumber}`) 

  if(likeObj[countNumber]){
    likeObj[countNumber] = likeObj[countNumber] + 1
    updatedLi.innerHTML = `${countNumber} has been liked <span> ${likeObj[countNumber]} </span> times`
  } else {
    likeObj[countNumber] =  1
    li.innerHTML = `${countNumber} has been liked <span> ${likeObj[countNumber]} </span> times`
    li.id = countNumber 
    likesUl.appendChild(li)
  }
})

// the if statement first evaluates if the value already exists in the object
// if it does NOT, then the value is added in the object in the else statement
// and the li is updated and appended to the dom (we MUST add an ID so that we can
// later grab that LI and update it)... then IF THE VALUE ALREADY EXISTS in the object
// then we GRAB the LI and then UPDATE its innerHTML 


pause.addEventListener('click', () => {
  if(pause.innerText === 'resume') {
    interval = setInterval(incrementCounter,1000) // when the clearInterval is called
    // the initial interval is cancelled and so we need to restart the interval 
    pause.innerText = 'pause' 
   } else {
    clearInterval(interval)
    pause.innerText = 'resume ' 
  }
    minus.disabled = !minus.disabled // this looks at he property and flip flops 
    plus.disabled = !plus.disabled
    heart.disabled = !heart.disabled
    submit.disabled = !submit.disabled 
})


form.addEventListener('submit', event => {
  event.preventDefault() // dont forget to target event prevent default
  const p = document.createElement('p')
  const commentDiv = document.querySelector('#list')
  const input = document.querySelector('input') // need to pull input value 
  p.textContent = input.value
  commentDiv.appendChild(p)
  form.reset()
})