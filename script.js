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
        const panel = document.querySelectorAll('.panel-collapse'),
            panelGroup = document.querySelectorAll('.panel-group'),
            nextBtn = document.querySelectorAll('.construct-btn'),
            panelBody = document.querySelectorAll('.panel-body'),
            panelHeading = document.querySelectorAll('.panel-heading');
        
      
        const accordionShow = (index) => {
            for(let i = 0; i < panelHeading.length; i++){
                if(index === i){
                    panel[i].classList.add('in');
                } else {
                    panel[i].classList.remove('in');
                }
            }
        };

        panelGroup.forEach((elem) => {
            elem.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.panel-heading');

            if(target){
                
                panelHeading.forEach((item, i) => {
                    // console.log(item === target);
                    // console.log('target',  target);
                    // console.log('item', item);
                    
                    if(item === target){ 
                accordionShow(i);
            }       
        });
        } 
        });
    });

        nextBtn.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                    let target = event.target;
                        target = target.closest('.collapsed');
                    
                    console.log(target);
                    if(target){
                        nextBtn.forEach((item, i) => {
                            console.log(item);
                            if(item === target){
                                accordionShow(i);
                            }
                        })
                    }
                    
            });
        });

    };
    accordion();


    //кнопка больше
    const addBtn = () => {
        const btn = document.querySelector('.add-sentence-btn'),
              blocks = document.querySelectorAll('.shadow-block');

        console.log(blocks);

        btn.addEventListener('click', () => {
            for(let i = 3; i < blocks.length; i++){
                console.log(blocks[i]);
                blocks[i].style.display = 'block';
            }
        })




    };
    addBtn();

});