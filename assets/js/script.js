function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu'); // seleciona a class no html 
    if (menuMobile.classList.contains('open')){ // caso o menu ja estaja com a class (open), esja aberto ela vai ser removida
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "/assets/img/menu_white_36dp.svg" // quando o menu estiver fecho essa sera o icone que vai aparecer
    }else{
        menuMobile.classList.add('open') // caso o menu ainda não possui a class (open) ela sera adicionda e o menu ficara visivel 
        document.querySelector('.icon').src = "/assets/img/close_white_36dp.svg" // quando o menu estiver aberto ele ficara com esse icone 
    }
}