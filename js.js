function menuOpen(){
    let mobileMenu = document.querySelector('.mobile-menu');
    // console.log(mobileMenu)
    if(mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open');
        
    }
    else{
        mobileMenu.classList.add('open');
        document.querySelector('.icon-menu').innerHTML = '<ion-icon name="close-outline"></ion-icon>';
    }
}