let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }

    time = prompt('Введите дату в формате YYYY-MM-DD');
}

start();

appData = {
    bugdet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 1 + 1; i++) {
            let expenditure = prompt('Введите обязательную статью расходов в этом месяце', ''),
                value = +prompt('Во сколько обойдется?', 0);
        
            if (typeof (expenditure) != null && typeof (value) != null && expenditure != '' && value != 0 && expenditure.length < 50) {
                console.log('Done');
                appData.expenses[expenditure] = value;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = Math.round(appData.bugdet / 30);
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (100 <= appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay >= 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Неизвестная ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', 0),
                percent = +prompt('Под какой процент?', 0);
            
            appData.monthIncome = save / 12 * percent / 100;
            alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        let i = 1;

        while (i < 4) {
            let optional_expenditure = prompt('Статья необязательных расходов?', '');

            if (optional_expenditure != null || optional_expenditure != '') {
                appData.optionalExpenses[i] = optional_expenditure;
                i++;
            }
        }
    },
    chooseIncome: function() {
        let items = ''; 

        while (typeof items != 'string' || items == null || items == '') {
            items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
        }

        appData.income = items.split(',');
        appData.income.sort();

        appData.income.forEach((element, index) => {
            alert('Способы доп. заработка: ' + (index + 1) + '. ' + element);
        });
    }
};

for (let key in appData) {
    alert('Наша программа включает в себя данные: ' + key);
}

// appData.chooseExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();
// appData.chooseOptExpenses();