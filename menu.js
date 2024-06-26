
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
  menu.ClassList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
  menu.ClassList.remove('abrir-menu')
})
