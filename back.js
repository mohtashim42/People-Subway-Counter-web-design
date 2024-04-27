

let count = 0
let countEl
let saveEl 
function increment(){
    countEl = document.getElementById("count-el")
    countEl.innerHTML = count
    count = count + 1
}
function save(){
    saveEl = document.getElementById("save-el")
    let floatval = count +" - "
    saveEl.textContent = saveEl.textContent + floatval
    console.log(count)
    // console.log(saveEl)
    countEl.textContent = 0
    count = 0
}
// save()







// let nam = "Mohtashim Afzal"
// let greeting = "My name is"
// let mygreeting = nam + greeting
// console.log(mygreeting)


