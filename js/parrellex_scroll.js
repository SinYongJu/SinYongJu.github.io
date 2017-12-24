(function(){
    "use strict"

    const header = document.querySelector('#header');
    const banner = document.querySelector('.nav_cont')
    const speed = 0.5;
    var dy;
    var pos;

    window.addEventListener('scroll', function(e){

        dy = -(this.scrollY/speed);

        if(dy< -480){
            header.style.height = '480px'

        }else{
            header.style.height = '650px'

        }


        pos = '50%'+ dy+'px'




        header.style.backgroundPosition =  pos;

    });
})()