let first = prompt("enter first number")
let second = prompt("enter second number")
let operation = prompt("enter operation")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


let random = Math.random();

if (random > 0.1) {
    alert(`The result is ${eval(`${first} ${operation} ${second}`)}`)
} else {
    operation = obj[operation];
    alert(`The result is ${eval(`${first} ${operation} ${second}`)}`)
}