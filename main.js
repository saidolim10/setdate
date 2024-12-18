let body = document.querySelector('body')
let cards = document.querySelector('cards')
let card = document.querySelector('card')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let p = document.querySelector('p')



setInterval(function () {
    h1.innerHTML = new Date().getHours()


}, 1000);

setInterval(function () {
    h2.innerHTML = new Date().getMinutes()


}, 1000);

setInterval(function () {
    h3.innerHTML = new Date().getSeconds()


}, 1000);
