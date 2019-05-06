let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        request.addEventListener('load', function() {
            if (request.readyState == 4 && request.status == 200) {
                resolve(request.response);
            } else {
                reject('Что-то пошло не так');
            }
        });
    })
    .then((response) => {
        let rates = JSON.parse(response);
        inputUsd.value = +(inputRub.value / rates.usd).toFixed(2);        
    })
    .catch((msg) => {
        inputUsd.value = msg;
    });
});
