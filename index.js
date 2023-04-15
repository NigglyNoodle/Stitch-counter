// let countEl = document.getElementById("count-el")
// let myCount = 0

// let saveEl = document.getElementById("save-el")

// console.log(saveEl)

// function increment() {
//     myCount += 1
//     countEl.textContent = myCount
// }

// function save() {
//     let mySavedCount = myCount + " - " 
//     saveEl.textContent += mySavedCount
//     myCount = 0
//     countEl.textContent = myCount
// }

let countStitch = document.getElementById("count-stitch")
let stitches = 0

function incrementStitch() {
    stitches += 1
    countStitch.textContent = stitches
}

function resetStitch() {
    stitches = 0
    countStitch.textContent = stitches
}

let countRow = document.getElementById("count-row")
let rows = 0

function incrementRow() {
    rows += 1
    countRow.textContent = rows
}

function resetRow() {
    rows = 0
    countRow.textContent = rows
}