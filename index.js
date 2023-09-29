const menuE1 = document.querySelector(".menu");
const menuTextE1 = document.querySelector('.menu p');
const socialListsE1 = document.querySelector('.social-lists');
const liE1s = document.querySelectorAll('.social-lists li');

menuE1.addEventListener('click', () =>{
  socialListsE1.classList.toggle('hide');
  menuE1.classList.toggle('rotate');

})

console.log("menuE1");