let countEl = document.getElementById("count-el")
let myCount = 0



let saveEl = document.getElementById("save-el")

console.log(saveEl)

function increment() {
    myCount += 1
    countEl.textContent = myCount
}

function save() {
    let mySavedCount = myCount + " - "
    saveEl.textContent += mySavedCount
    myCount = 0
    countEl.textContent = myCount
}

