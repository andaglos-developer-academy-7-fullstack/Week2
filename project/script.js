var body = document.getElementsByTagName('body')[0]

var bulet1 = document.getElementsByClassName('bulet1')[0]
bulet1.addEventListener('click', function () {
    body.style.backgroundColor = 'crimson'
    bulet1.style.border = '1px solid crimson'
})
// bulet1.style.backgroundColor = 'lightgreen'
var bulet2 = document.getElementsByClassName('bulet2')[0]
bulet2.addEventListener('click', function () {
    body.style.backgroundColor = 'gold'
    bulet2.style.border = 'gold'
})

var bulet3 = document.getElementsByClassName('bulet3')[0]
bulet3.addEventListener('click', function () {
    body.style.backgroundColor = 'pink'
    bulet3.style.border = '1px solid pink'
})

var bulet4 = document.querySelector('.bulet4')
bulet4.addEventListener('click', function () {
    body.style.backgroundColor = 'lime'
    bulet4.style.border = '1px solid lime'
})

var bulet5 = document.getElementsByTagName('div')[4]
bulet5.addEventListener('click', function () {
    body.style.backgroundColor = 'violet'
    bulet5.style.border = '1px solid violet'
})

var bulet6 = document.querySelectorAll('div')[5]
bulet6.addEventListener('click', function () {
    body.style.backgroundColor = 'silver'
    bulet6.style.border = '1px solid silver'
})

var bulet7 = document.querySelectorAll('.bulet7')[0]
bulet7.addEventListener('click', function () {
    body.style.backgroundColor = 'steelblue'
    bulet7.style.border = '1px solid steelblue'
})
bulet7.addEventListener('mouseenter', function () {
    bulet7.style.backgroundColor = 'steelblue'
})
bulet7.addEventListener('mouseleave', function () {
    bulet7.style.backgroundColor = 'steelblue'
})
