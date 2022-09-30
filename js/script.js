const burger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav__slide-out')
const items = document.querySelectorAll('.item')

const slide = () => {
    nav.classList.toggle('slide')
    document.body.classList.toggle('sticky')
}


burger.addEventListener('click', slide)
items.forEach(item => item.addEventListener('click', slide))