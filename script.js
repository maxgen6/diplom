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
                        target = target.closest('.construct-btn');
                    
                    if(target){
                        nextBtn.forEach((item, i) => {
                            if(item === target){
                                accordionShow(i + 1);
                            }
                        });
                    }
                    
            });
        });

    };
    accordion();


    //кнопка больше
    const addBtn = () => {
        const btn = document.querySelector('.add-sentence-btn'),
              blocks = document.querySelectorAll('.col-md-4');


        btn.addEventListener('click', () => {
            for(let i = 0; i < blocks.length; i++){
                blocks[i].classList.remove('hidden');
            }
           btn.style.display = 'none'; 
        });
    };
    addBtn();

    //popup-discount заказать со скидкой
    const sendSale = () => {
        const btnDiscount = document.querySelectorAll('.sentence-btn'),
            popupDiscount = document.querySelector('.popup-discount');

        let opacity = 0;
        popupDiscount.style.opacity = opacity;
        btnDiscount.forEach((elem) => {
                elem.addEventListener('click', function animation(){
                    popupDiscount.style.display = 'block';
                    opacity += 0.1;
                    popupDiscount.style.opacity = opacity;
                    if(opacity < 1){
                        setTimeout(animation, 20);
                    }
                
            });
        });
        popupDiscount.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popupDiscount.style.display = 'none';
                return (opacity = 0);
            } else {
                target = target.closest('.popup-content');
                if(!target){
                    popupDiscount.style.display = 'none';
                }
            }
        });

    };  
    sendSale();

    //check-btn
    const getCheckList = () => {
        const checkBtn = document.querySelector('.check-btn'),
            popupCheck = document.querySelector('.popup-check');
    
        let opacity = 0;
        popupCheck.style.opacity = opacity;
        checkBtn.addEventListener('click', () => {
            popupCheck.style.display = 'block';
            opacity = 1;
            popupCheck.style.opacity = opacity; 
        });
        popupCheck.addEventListener('click', () => {
            let target = event.target;
                
            if(target.classList.contains('popup-close')){
                popupCheck.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if(!target){
                    popupCheck.style.display = 'none';
                }
            }
        });


        };
        getCheckList();


    //popup-consultation
    const consultation = () => {
        const consultationBtn = document.querySelector('.consultation-btn'),
            popupConsultation = document.querySelector('.popup-consultation');
            
            
            let opacity = 0;
            popupConsultation.style.opacity = opacity;
        consultationBtn.addEventListener('click', () => {
            opacity = 1;
            popupConsultation.style.display = 'block';
            popupConsultation.style.opacity = opacity;
        });

        popupConsultation.addEventListener('click', () => {
            let target = event.target;
            if(target.classList.contains('popup-close')){
                popupConsultation.style.display = 'none';
            } else if(target !== target.closest('.popup-content')){
                popupConsultation.style.display = 'none';
            }
        });

    };
    consultation();    


    //калькулятор
    const calculator = () => {
        const firstDiam = document.querySelector('.form-control1'),
            firstHow = document.querySelector('.form-control2'),
            secondDiam = document.querySelector('.form-control3'),
            secondHow = document.querySelector('.form-control4'),
            panelBody = document.querySelector('.panel-body'),
            accord = document.querySelector('#accordion'),
            calcResult = document.getElementById('calc-result');
        
            const countSum = (price) => {
                accord.addEventListener('change', () => {
                    price = 10000;
                    if (count % 2 !== 0){
                        price = price + 1000;
                    }
                    if(firstDiam.value === '1.4 метра'){  
                        if(firstHow.value === '1 штука'){
                        price = price; 
                        calcResult.value = price;
                    } else  if(firstHow.value === '2 штуки'){
                        price += 0.3 * price;
                        calcResult.value = price;
                    }else  if(firstHow.value === '3 штуки'){
                        price += 0.5 * price;
                        calcResult.value = price;
                    }
                } else if(firstDiam.value === '2 метра'){
                        price += 0.2 * price;
                    if(firstHow.value === '1 штука'){
                        price = price;
                        calcResult.value = price;
                    } else  if(firstHow.value === '2 штуки'){
                        price += 0.3 * price;
                        calcResult.value = price;
                    }else  if(firstHow.value === '3 штуки'){
                        price += 0.5 * price;
                        calcResult.value = price;
                    }
                } 
                if(counter % 2 !== 0){
                    price = 15000;
                    if (count % 2 !== 0){
                        price = price + 2000;
                    }
                    if(secondDiam.value === '1.4 метра'){  
                        if(secondHow.value === '1 штука'){
                        price = price; 
                        calcResult.value = price;
                    } else  if(secondHow.value === '2 штуки'){
                        price += 0.3 * price;
                        calcResult.value = price;
                    }else  if(secondHow.value === '3 штуки'){
                        price += 0.5 * price;
                        calcResult.value = price;
                    }
                } else if(secondDiam.value === '2 метра'){
                        price += 0.2 * price;
                    if(secondHow.value === '1 штука'){
                        price = price;
                        calcResult.value = price;
                    } else  if(secondHow.value === '2 штуки'){
                        price += 0.3 * price;
                        calcResult.value = price;
                    }else  if(secondHow.value === '3 штуки'){
                        price += 0.5 * price;
                        calcResult.value = price;
                    }
                }

            }
            }); 
            };
                


        const label = document.querySelectorAll('.onoffswitch-label'),            
            checkBox = document.querySelector('.onoffswitch-checkbox'),
            selectBox = document.querySelectorAll('.select-box'),
            titleText = document.querySelectorAll('.title-text');
        
        titleText[1].style.display = 'none';
        for(let i = 2; i < selectBox.length; i++){
            selectBox[i].style.display = 'none';
        }
        countSum(10000);
        let counter = 0; 
        label[0].addEventListener('click', () => {   
        counter++;
        if(counter % 2 === 0){
            titleText[1].style.display = 'none';
        for(let i = 2; i < selectBox.length; i++){
            selectBox[i].style.display = 'none';
        } 
        countSum(10000);
        } else {
        titleText[1].style.display = 'block';
        for(let i = 2; i < selectBox.length; i++){
            selectBox[i].style.display = 'inline-block';
        }
        countSum(15000);
        }
    });
    
    let count = 0;
    label[1].addEventListener('click', () => count ++);

};
    calculator();

    
    
    
    //send-form
    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так ...',
            loadMessage = 'Загрузка...',
            succesMessage = 'Спасибо! Мы с Вами свяжемся!';

        const forms = document.querySelectorAll('form'),
            statusMessage = document.createElement('div');

        statusMessage.style.css = 'font-size: 2rem;';

        const validate = () => {
            let formName = document.getElementsByName('user_name'),
                userQuest = document.querySelectorAll('.user_quest'),
                formPhone = document.querySelectorAll('.phone-user');

            for(let i = 0; i < formName.length; i++){
                formName[i].addEventListener('input', () => {
                    formName[i].value = formName[i].value.replace(/\w/gi, '');
                });
            }
            for(let i = 0; i < formPhone.length; i++){
                formPhone[i].addEventListener('input', () => {
                    formPhone[i].value = formPhone[i].value.replace(/\D/g, '');
                });
            }
            for(let i = 0; i < userQuest.length; i++){
            userQuest[i].addEventListener('input', () => {
                userQuest[i].value = userQuest[i].value.replace(/\w/gi, '');
            });
        }

        };
        validate();


        forms.forEach(form => {
            validate(form);
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                form.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;

                const formData = new FormData(form);

                let body = {};

                formData.forEach((val, key) => {
                    body[key] = val;
                });
                
                postData(body)
                    .then((response) => {
                        if(response.status !== 200){
                            throw new Error('status network now 200');
                        }
                        statusMessage.textContent = succesMessage;
                    })
                    .catch((error) => {
                        statusMessage.textContent = errorMessage;
                        console.err(error);
                    });
            
            });
        });

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-type':'application/json'
                },
                body: JSON.stringify(body),
                credentials: 'include'
            });
        };


    };
    sendForm();




});