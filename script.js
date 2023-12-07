const hamburguer = document.querySelector('.hamburguer');
const opcaoMenu = document.querySelector('.toggle');
const casa = document.getElementById('casa');
// const body = document.querySelector('body');

hamburguer.addEventListener('click', ()=>{


    if (opcaoMenu.classList.contains("toggle")) {
        // menu aparece
        opcaoMenu.classList.remove("toggle");

        hamburguer.src = 'https://w7.pngwing.com/pngs/211/405/png-transparent-computer-icons-close-button-trademark-logo-sign-thumbnail.png'

    } else {
        // menu some
        opcaoMenu.classList.add("toggle");

        hamburguer.src = 'img/hamburguer.png';
    }

    

    window.addEventListener('scroll', ()=>{
        if (window.pageYOffset > 0  ) {
            opcaoMenu.classList.add('toggle')
            hamburguer.src = 'img/hamburguer.png';
        }
    })
   
})

casa.addEventListener('click', ()=>{

    opcaoMenu.classList.add('toggle')
    hamburguer.src = 'img/hamburguer.png';
})







// const navbar = document.querySelector('.navbar');
// const mobileNavbar = document.querySelector('.navbar__mobile');
// const button = document.querySelector('.burguer');

// button.addEventListener('click', ()=>{
//     mobileNavbar.classList.toggle('active');
// });

// window.addEventListener('scroll', ()=>{
//    if (this.window.pageYOffset > 0) {
//     navbar.classList.remove('active');
   
//    } 
// })