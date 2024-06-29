
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
  menu.ClassList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
  menu.ClassList.remove('abrir-menu')
})

ooverlay.addEventListener('click', ()=>{
  menu.ClassList.remove('abrir-menu')
})
