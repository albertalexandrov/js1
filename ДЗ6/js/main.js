let // Получить кнопку "Начать расчет" через id
    startButton = document.getElementById('start'),

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
    dayValue = document.querySelector('.day-value');