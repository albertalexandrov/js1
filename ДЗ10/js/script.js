window.addEventListener('DOMContentLoaded', function() {
    
    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    hideTabContent(1);

    info.addEventListener('click', function(e) {
        let target = e.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer
    let deadline = '2019-05-05';

    function getRemainingTime(endtime) {
        let total = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((total / 1000) % 60),
            minutes = Math.floor((total / 1000 / 60) % 60),
            hours = Math.floor(total / (1000 * 60 * 60));
        
        return {
            total,
            hours,
            minutes,
            seconds
        };
    }

    function setClock(id, endtime) {
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
    }

    setClock('timer', deadline);

});