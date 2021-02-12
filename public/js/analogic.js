window.addEventListener('load', function(){

    //pdfs
    let monoib = document.querySelector('.monoib');
    let ia = document.querySelector('.ia');
    let monopunk = document.querySelector('.monopunk');
    let tok = document.querySelector('.tok');

    //tags
    let vmonoib = document.querySelector('.v-monoib');
    let via = document.querySelector('.v-ia');
    let vmonopunk = document.querySelector('.v-monopunk');
    let vtok = document.querySelector('.v-tok');

    //other
    let btn = document.querySelector('.close-btn');
    



    vmonoib.addEventListener('click', function(){
        monoib.classList.toggle('no-disp');
        btn.classList.toggle('no-disp')
        window.scrollTo(0,1675);
        btn.addEventListener('click', function(){
            monoib.classList.add('no-disp');
            btn.classList.add('no-disp')
        })
    })

    via.addEventListener('click', function(){
        ia.classList.toggle('no-disp');
        btn.classList.toggle('no-disp');
        window.scrollTo(0,1675);
        btn.addEventListener('click', function(){
            ia.classList.add('no-disp');
            btn.classList.add('no-disp')
        })
    })

    vmonopunk.addEventListener('click', function(){
        monopunk.classList.toggle('no-disp');
        btn.classList.toggle('no-disp');
        window.scrollTo(0,1675);
        btn.addEventListener('click', function(){
            monopunk.classList.add('no-disp');
            btn.classList.add('no-disp')
        })
    })

    vtok.addEventListener('click', function(){
        tok.classList.toggle('no-disp');
        btn.classList.toggle('no-disp');
        window.scrollTo(0,1675);
        btn.addEventListener('click', function(){
            tok.classList.add('no-disp');
            btn.classList.add('no-disp')
        })
    })
})