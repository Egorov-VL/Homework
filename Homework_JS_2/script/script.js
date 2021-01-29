console.log('---1---');

let name = prompt('Ваше имя?',); 
    age = prompt('Ваш возраст?',);  
    city = prompt('Ваш город проживания?',);  
    phone = prompt('Ваш номер телефона?',);  
    email = prompt('Ваш мэйл?',); 
    company =prompt('Ваша компания?',); 

alert('Меня зовут' + ' ' + name +'.'+' '+'Мне ' + age + 'лет.' + ' ' + 'Я проживаю в городе' + ' ' + city  + ' ' + 'и работаю в компании' + ' ' + company + ', мои контактные данные:' + ' '+ phone + ',' + ' ' + email);
    

console.log('---2---');

    let yearOfBirth = 2021 - age;

    alert(name +' родился в '+' '+ yearOfBirth + ' г.' );



 console.log('---3---'); 
 
    let value = '111111',
    firstSum = +value[0] + +value[1] + +value[2],
    secondSum = +value[3] + +value[4] + +value[5];
    if (firstSum == secondSum){alert('да');}
    else {alert('нет');}


console.log('---4---');
    let a = prompt(' a =',); 

    if (a > 0) alert('Верно');
    if (a <= 0) alert('Неверно');


console.log('---5---');

    let b=2,
        sum = a+b,
        diff = a-b,
        segm = a / b,
        deg = sum * sum;

    alert(sum);
    alert(diff);
    alert(segm);
    if (sum > 1) {alert(deg);}

console.log('---6---');
    
    if (a > 2 && a < 11){alert('Верно');}
    else {alert('Неверно');}
    if (b >= 6 && a < 14){alert('Верно');}
    else {alert('Неверно');}


console.log('---7---');
    let n = prompt('Введите число от 0 до 59',); 

    if (n >= 0 && n <= 14.74){alert('Первая четверть');}
    if (n >= 14.75 && n <= 29.49){alert('Вторая четверть');}
    if (n >= 29.50 && n <= 44.24){alert('Третья четверть');}
    if (n >= 44.25 && n <= 59){alert('Четвертая четверть');}
    if (n >= 60){alert('Введите число от 0 до 59');}

console.log('---8---');

    let day = prompt('Введите число от 1 до 31',);

    if (day >= 1 && day <= 10.32){alert('Первая декада');}
    if (day >= 10.33 && day <= 20.66){alert('Вторая декада');}
    if (day >= 20.67 && day <= 31){alert('Третья декада');}

    if (day >= 32){alert('Введите число от 0 до 31');}
    if (day < 1){alert('Введите число от 0 до 31');}


console.log('---9---');


    let days = prompt('Введите количество дней',),
        years = days / 365,
        mon = days / 31,
        weeks = days / 7,
        hours = days * 24,
        min = hours * 60,
        sec = min * 60;

    alert ('Вы ввели ' + days + ' это эквивалентно: ' + years + ' лет ' + mon +  ' мес. ' + weeks + ' недель ' + hours + ' ч. ' + min + ' мин. ' + sec + ' сек.'  );

    if (years < 1 ){alert('Меньше года');}
    if (mon < 1 ){alert('Меньше месяца');}
    if (weeks < 1 ){alert('Меньше недели');}


console.log('---10---');

    let date = prompt('Введите число от 1 до 365',),
        month = Math.floor(date / 31);
        
    switch (month){
    case  1: alert( month + ' месяц - Зима');
    break;
    case  2: alert( month + ' месяц - Зима');
    break;
    case  3: alert( month + ' месяц - Весна');
    break;
    case  4: alert( month + ' месяц - Весна');
    break;
    case  5: alert( month + ' месяц - Весна');
    break;
    case  6: alert( month + ' месяц - Лето');
    break;
    case  7: alert( month + ' месяц - Лето');
    break;
    case  8: alert( month + ' месяц - Лето');
    break;
    case  9: alert( month + ' месяц - Осень');
    break;
    case  10: alert( month + ' месяц - Осень');
    break;
    case  11: alert( month + ' месяц - Осень');
    break;
    case  12: alert( month + ' месяц - Зима');
    break;
    }

    




