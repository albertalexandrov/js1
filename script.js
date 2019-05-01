let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    appData = {
        money: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    },
    expenditure_question = 'Введите обязательную статью расходов в этом месяце',
    value_question = 'Во сколько обойдется?',
    expenditure, // наименование расхода, напр., питание
    value;  // сумма расхода

expenditure = prompt(expenditure_question);
value = +prompt(value_question);
appData.expenses[expenditure] = value;

expenditure = prompt(expenditure_question);
value = +prompt(value_question);
appData.expenses[expenditure] = value;

alert('Бюджет на 1 день составляет: ' + (money / 30).toFixed() + ' д.е.');