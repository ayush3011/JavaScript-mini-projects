console.log("script.js initializing")

let boxes = document.querySelector(".container").children;

function getRandomColor() {
    let r = Math.floor((Math.random()*256)+1);
    let g = Math.floor((Math.random() * 256) + 1);
    let b = Math.floor((Math.random() * 256) + 1);
    return (`rgb(${r}, ${g}, ${b})`);
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})