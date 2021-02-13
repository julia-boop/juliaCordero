window.addEventListener('load', function(){

    let btn = document.querySelector('.btnMenu');
    let menuNav = document.querySelector('.sidebar');

    let homeNav = document.querySelector('.homenav');
    let digital = document.querySelector('.digitalnav');
    let analogic = document.querySelector('.analogicnav');
    let contact = document.querySelector('.contactnav');
    
    btn.addEventListener('click', function(){
        btn.classList.toggle('click');
        menuNav.classList.toggle('show');

    })

    console.log(homeNav)

    homeNav.addEventListener('touch', function(){
        window.location.href = '/'
    })

    digital.addEventListener('touch', function(){
        window.location.href = '/digital'
    })

    analogic.addEventListener('touch', function(){
        window.location.href = '/analogic'
    })

    contact.addEventListener('touch', function(){
        window.location.href = '/contact'
    })
})







  