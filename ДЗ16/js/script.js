window.addEventListener('DOMContentLoaded', function() {
    
    // Tabs

    let infoHeader = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    hideTabContent(1);

    infoHeader.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i in tab) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = '2019-05-06';

    let getRemainingTime = (endtime) => {
        let total = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((total / 1000) % 60),
            minutes = Math.floor((total / 1000 / 60) % 60),
            hours = Math.floor(total / (1000 * 60 * 60));
        
        return {total, hours, minutes, seconds};
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getRemainingTime(endtime),
                h, m, s;
            
            if (t.total >= 0) {
                h = t.hours >= 10 ? t.hours : '0' + t.hours;
                m = t.minutes >= 10 ? t.minutes : '0' + t.minutes;
                s = t.seconds >= 10 ? t.seconds : '0' + t.seconds;
            } else {
                clearInterval(timeInterval);
                h = m = s = '00';
            }

            hours.textContent = h;
            minutes.textContent = m;
            seconds.textContent = s;
        }
    };

    setClock('timer', deadline);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    
    function showModal() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    let hideModal = () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    };

    more.addEventListener('click', showModal);
    close.addEventListener('click', hideModal);

    let info = document.querySelector('.info');

    info.addEventListener('click', function(e) {
        let target = e.target;

        if (target && target.matches('div.description-btn')) {
            showModal.apply(this);
        }
    });

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };

    let form1 = document.querySelector('.main-form'),
        form2 = document.getElementById('form'),
        statusMessage = document.createElement('div'),
        submitCallback = (e) => {
            e.preventDefault();

            let form = e.target;
            form.appendChild(statusMessage);

            new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest(),
                    formData = new FormData(form),
                    obj = {};

                formData.forEach(function(value, key) {
                    obj[key] = value;
                });

                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                request.send(JSON.stringify(obj));
                request.addEventListener('readystatechange', function() {
                    if (request.readyState < 4) {
                        resolve(message.loading);
                    } else if (request.readyState == 4 && request.status == 200) {
                        resolve(message.success);
                    } else {
                        resolve(message.failure);
                    }
                });
            })
            .then((msg) => {
                statusMessage.innerHTML = msg;
            });

            let inputs = form.getElementsByTagName('input');
            for (let item of inputs) {
                item.value = '';
            }
        };

    statusMessage.classList.add('status');

    form1.addEventListener('submit', submitCallback);
    form2.addEventListener('submit', submitCallback);

    // Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('dot-active');
    }

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlide(-1);
    });

    next.addEventListener('click', function() {
        plusSlide(1);
    });

    dotsWrap.addEventListener('click', function(e) {
        for (let i=0; i < dots.length+1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    // Калькулятор

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '' || personsSum == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '' || daysSum == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

});