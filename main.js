const bluea = document.querySelector(".bluea")
const reda = document.querySelector(".reda")

const playerOne = document.querySelector(".player-one")
const playerTwo = document.querySelector(".player-two")
const reset = document.querySelector(".reset")


let num1 = 0
playerOne.addEventListener("click", () =>{
    console.log("hello")
    num1=num1+1
    console.log(num1)
    bluea.textContent=num1
})

let num2 = 0
playerTwo.addEventListener("click", () =>{
    console.log("hello")
    num2=num2+1
    console.log(num2)
    reda.textContent=num2
})

reset.addEventListener("click", () =>{
    num1 = 0
    num2 = 0
    reda.textContent=0
    bluea.textContent=0

})