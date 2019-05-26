'use strict'

console.log('Here\'s a hidden message')

let now = new Date();
let today = now.toDateString()
let el = document.getElementById('date')
el.innerHTML = today