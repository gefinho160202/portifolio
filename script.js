const btnMenu = document.getElementById('btn-menu')
const mobileMenu = document.getElementById('menu-mobile')
const overlay = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', ()=>{
    mobileMenu.classList.add('abrir-menu')
})


mobileMenu.addEventListener('click', ()=>{
    mobileMenu.classList.remove('abrir-menu')
})


overlay.addEventListener('click', ()=>{
    mobileMenu.classList.remove('abrir-menu')
})