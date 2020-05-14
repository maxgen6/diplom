window.addEventListener('DOMContentLoaded', function() {
'use strict';

//header&footer
    const headerFooter = () => {
        const callBtn = document.querySelectorAll('.call-btn'),
            popUp = document.querySelector('.popup-call');

        let opacity = 0;
        popUp.style.opacity = opacity;
        callBtn.forEach((elem) => {
            elem.addEventListener('click', function animation(){
                popUp.style.display = 'block';
                opacity += 0.1;
                popUp.style.opacity = opacity;
                if(opacity < 1){
                    setTimeout(animation, 20);
                }
            });
        });
        popUp.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popUp.style.display = 'none';
                return (opacity = 0);
            } else {
                target = target.closest('.popup-content');
                if(!target){
                    popUp.style.display = 'none';
                }
            }
        });


    };
    headerFooter();

    //аккордеон
    const accordion = () => {
        const panel = document.querySelectorAll('.panel-default');
        console.log(panel);
    };
    accordion();




});