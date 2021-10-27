const positive = document.getElementById('item1')
const negative = document.getElementById('item2')
const natural = document.getElementById('item3')
const btn = document.getElementById('button')
const textEl = document.getElementById('text')
const input = document.getElementById('input')

const form = document.getElementById('form')

positive.addEventListener('click', () => {
    positive.classList.add("active")
    natural.classList.remove("active")
    negative.classList.remove("active")
    textEl.innerHTML = "Positive content"
})
negative.addEventListener('click', () => {
    negative.classList.add("active")
    natural.classList.remove("active")
    positive.classList.remove("active")
    textEl.innerHTML = "Negative content"
})
natural.addEventListener('click', () => {
    natural.classList.add("active")
    positive.classList.remove("active")
    negative.classList.remove("active")
    textEl.innerHTML = "Natural  content"
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputVal = input.value;
    if (inputVal == 1) {
        positive.classList.add("active")
        negative.classList.remove("active")
        natural.classList.remove("active")
        textEl.innerHTML = "Positive content"

    }
    if (inputVal == 2) {
        negative.classList.add("active")
        natural.classList.remove("active")
        positive.classList.remove("active")
        textEl.innerHTML = "Negative content"
    }
    if (inputVal == 3) {
        natural.classList.add("active")
        positive.classList.remove("active")
        negative.classList.remove("active")
        textEl.innerHTML = "natural  content"
    }
    if (inputVal > 3) {
        alert(`${inputVal} Index is invalide`)
    }
})


