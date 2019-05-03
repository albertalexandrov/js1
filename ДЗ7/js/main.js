let // Получить кнопку "Начать расчет" через id
    startBtn = document.getElementById('start'),

    // Получить все блоки в правой части программы через классы (которые имеют класс название-value, 
    // начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),

    // Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
    expensesItem = document.querySelectorAll('input.expenses-item'),

    // Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    // Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    optionalExpensesItem = document.querySelectorAll('input.optionalexpenses-item'),

    // Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
    income = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    money,
    time,
    buttonsWithoutStartButton = [expensesItemBtn, optionalExpensesBtn, countBudgetBtn];

for (let item of buttonsWithoutStartButton) {
    item.disabled = true;
}

startBtn.addEventListener('click', function(e) {
    time = prompt('Введите дату в формате YYYY-MM-DD');
    money = +prompt('Ваш бюджет на месяц?');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }

    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();

    let date = new Date(Date.parse(time));
    yearValue.value = date.getFullYear();
    monthValue.value = date.getMonth() + 1;
    dayValue.value = date.getDate(); 

    for (let item of buttonsWithoutStartButton) {
        item.disabled = false;
    }
});

expensesItemBtn.addEventListener('click', function(e) {
    let sum = 0,
        expenditure,
        value;

    for (let i = 0; i < expensesItem.length; i++) {
        expenditure = expensesItem[i].value;
        value = +expensesItem[++i].value;
    
        if (typeof (expenditure) != null && typeof (value) != null && expenditure != '' && value != 0 && expenditure.length < 50) {
            appData.expenses[expenditure] = value;
            sum += value;
            appData.moneyPerDay = Math.round((appData.budget - sum) / 30);
            dayBudgetValue.textContent = appData.moneyPerDay;
        } else {
            i--;
        }
    }

    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(e) {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        appData.optionalExpenses[i] = optionalExpensesItem[i].value;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function(e) {
    if (appData.budget == undefined) {
        dayBudgetValue.textContent = 'Неизвестная ошибка';
        return ;
    }

    appData.moneyPerDay = Math.round(appData.budget / 30);
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = 'Минимальный уровень достатка';
    } else if (100 <= appData.moneyPerDay < 2000) {
        levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay >= 2000) {
        levelValue.textContent = 'Высокий уровень достатка';
    } else {
        levelValue.textContent = 'Неизвестная ошибка';
    }
});

income.addEventListener('input', function(e) {
    let items = income.value;
    appData.income = items.split(',');

    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function(e) {
    appData.savings = !appData.savings;
});

sum.addEventListener('input', function(e) {
    if (appData.savings) {
        let sm = sum.value,
            prcnt = percent.value;
        
        appData.monthIncome = Math.round(sm / 12 * prcnt / 100);
        appData.yearIncome = Math.round(sm * prcnt / 100);
        
        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});

percent.addEventListener('input', function(e) {
    if (appData.savings) {
        let sm = sum.value,
            prcnt = percent.value;
        
        appData.monthIncome = Math.round(sm / 12 * prcnt / 100);
        appData.yearIncome = Math.round(sm * prcnt / 100);
        
        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});

appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
