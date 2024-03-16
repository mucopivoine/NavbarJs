const navEl = document.querySelector('header .navigation ul');
const menuBtn =document.querySelector('.menu-btn');
menuBtn.addEventListener('click',() =>{
navEl.classList.toggle("show-menu");

})