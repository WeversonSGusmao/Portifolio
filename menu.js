
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
  menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})


document.getElementById('contatoForm').addEventListener('submit', function () {
  var nome = this.querySelector('input[name=nome]'), nome = nome.value;
  var email = this.querySelector('input[name=email]'), email = email.value;
  var texto = 'Olá destinatário, \nMeu nome é '+ nome +' e meu email é '+ email;
  this.querySelector('input[name=Body]').setAttribute('value', texto);
});

