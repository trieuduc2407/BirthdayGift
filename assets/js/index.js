const btnWidth = document.getElementById("no").offsetWidth;
const btnHeight = document.getElementById("no").offsetHeight;

const maxWidth = window.innerWidth - btnWidth;
const maxHeight = window.innerHeight - btnHeight;

console.log(btnWidth);
console.log(btnHeight);

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("no");
    button.addEventListener('mouseover', () => {
        button.style.right = Math.floor(Math.random() * (maxWidth + 1)) + "px";
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
    })

    button.addEventListener('click', () => {
        button.style.right = Math.floor(Math.random() * (maxWidth + 1)) + "px";
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
    })
})