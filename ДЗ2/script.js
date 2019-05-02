let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    appData = {
        bugdet: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

for (let i = 0; i < 1 + 1; i++) {
    let expenditure = prompt('Введите обязательную статью расходов в этом месяце', ''),
        value = +prompt('Во сколько обойдется?', 0);

    if (typeof (expenditure) != null && typeof (value) != null && expenditure != '' && value != 0 && expenditure.length < 50) {
        console.log('Done');
        appData.expenses[expenditure] = value;
    }
}

// let i = 0;
// while (i < 2) {
//     let expenditure = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         value = +prompt('Во сколько обойдется?', 0);
    
//     if (typeof (expenditure) != null && typeof (value) != null && expenditure != '' && value != 0 && expenditure.length < 50) {
//         console.log('Done');
//         appData.expenses[expenditure] = value;
//         i++;
//     }
// }

// let i = 0;
// do {
//     let expenditure = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         value = +prompt('Во сколько обойдется?', 0);

//     if (typeof (expenditure) != null && typeof (value) != null && expenditure != '' && value != 0 && expenditure.length < 50) {
//         console.log('Done');
//         appData.expenses[expenditure] = value;
//         i++;
//     }
// }
// while (i < 2);

appData.moneyPerDay = +(appData.bugdet / 30).toFixed();

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (100 <= appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay >= 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Неизвестная ошибка');
}