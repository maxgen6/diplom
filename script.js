window.addEventListener('DOMContentLoaded', function() {
'use strict';

//header&footer
    const headerFooter = () => {
        const callBtn = document.querySelector('.call-btn'),
            popUp = document.querySelector('popup-call');
            console.log('popUp: ', popUp);

        console.log(callBtn);

        const showPopUp = () => {
            popUp.classList.toggle('active-menu');
        };
        
        callBtn.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.popup-call');
            if(!target){
                showPopUp();
            }    
        });


    };
    headerFooter();




});