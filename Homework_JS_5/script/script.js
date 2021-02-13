console.log("---1---");

function task_one(base, minus, divide){
  console.log((base - minus) / divide);
}
task_one(4,3,5);


console.log("---2---");

function task_two(a){
  return [a ** 3, a ** 2]
}
console.log(task_two(4));


console.log("---3---");

let a=0;
function min(a, b){
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
function max(a, b){
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(2,5));
console.log(max(3,7));

console.log("---4---");

let startNumber = prompt('Введите число начала диапазона для передачи в массив'),
    endNumber = prompt('Введите число завершения диапазона для передачи в массив');

while (!startNumber.trim() || !Number.isInteger(Number(startNumber))){
  startNumber = prompt("Ошибка ввода. Введите число начала диапазона для передачи в массив");      
}
while (!endNumber.trim() || !Number.isInteger(Number(endNumber))){
  endNumber = prompt("Ошибка ввода. Введите число завершения диапазона для передачи в массив");      
}
function array4(nstart, nend){
  let arrNumb = [];
  for (let i = nstart; i <= nend; i++){
    arrNumb.push(i);
  }
  return arrNumb;
}

function disparr(arra) {
  for(let item of arra) {
    document.write(item + " ");

  } 
}
let cuarr = array4(startNumber, endNumber);
document.write(`Массив: ${cuarr}<br />`);
document.write("Массив: ");
disparr(cuarr);

console.log("---5---");

function isEven(a){
  if(a % 1 != 0 || (a =="" && a != 0 )) alert`${a} - не целое число`;
  return (a % 2 === 0);
}
console.log(isEven(prompt("Введите число для проверки на четность ")));

console.log("---6---");

let arr6 = [3, 23, 45, -9, 0, 88, 45, 43, 1, 4, 76];

function onlyEv(ar){
  let myArr = [];
  for (let item of ar){
  if (isEven(item)) myArr.push(item);
  }
  return myArr;
}
console.log(`Массив только с четными числами: ${onlyEv(arr6)}`)


console.log("---7---");

function hefren(n, s){
  if (+n == NaN) return;
  for(let i = 1; i < n; i++){
    let m = '';
    for(let j = 0; j < i; j++){
      m+= s == undefined || s.trim() == '' ? i : s;
    };
    console.log(m+'\n')
  }
};
hefren(prompt('число строк'), prompt('символ'))

console.log("---8---");
function writeTriangle(rows, isReverse) {
  const indexes = new Array(rows).fill(0).map((_, i) => i);
  if (isReverse) indexes.reverse();
  for (let i of indexes) {
      const spaces = ' '.repeat(rows - 1 - i);
      console.log(spaces + '*'.repeat(1 + i*2) + spaces);
  }
}

const n = +prompt('Введите число строк:');
writeTriangle(n);
if (confirm('Вывести перевёрнутый?')) writeTriangle(n, true);

console.log("---9---");

function fibRow(endNum) {
  let arrr = [0 , 1];
  if ( endNum <= 0){
    return arrr = [0];
  }
  while(true) {
    if ((arrr[arrr.length -1] + arrr[arrr.length -2]) <= endNum) {
      arrr.push(arrr[arrr.length -1] + arrr[arrr.length -2]);
    } else break;
  }
  return arrr;
}
console.log(`Ряд Фибоначи ${fibRow(1000)}`);

console.log("---10---");


function sumDig(ni){
  let val = 0;
  if (ni > 9) {
    ni = String(ni);
    for( let i=0; i < ni.length; i++)
    val += Number(ni[i])
    ni = sumDig(val)
  }
  return ni;
}
 
console.log(sumDig(prompt('Введите число')));

console.log("---11---");

function task11(art) {
  console.log(art.shift());
  if (art.length > 0)
     task11(art)
}
task11 ([1 , 13, 15 ,78 , 90, 87 , 34])

console.log("---12---");




function getInfo() {
  let mlab = [];
    mlab[0] = mlab[4] = "";
    mlab[1] = "* Домашняя работа: «Функции»";
    mlab[2] = "* Выполнил: студент гр. ";
    mlab[3] = "* ";
    let surname = prompt("Ваша Фамилия?");
    let name = prompt("Ваша Имя?");
    let midname = prompt("Ваша Отчество?");
    let group = prompt("Ваша Группа?");
    
    mlab[2] += group;
    mlab[3] += (surname + " " + name + " " + midname);

    let mlength = 0;
    for (let string of mlab)
    if (string.length && string.length  > mlength)
    mlength = string.length
    mlength += 2;

    mlab[0] = mlab[4] = new Array(mlength + 1).join("*");
    for (let i = 1; i <= 3; i++)
    mlab[i] += (new Array(mlength - mlab[i].length - 2 + 1).join(" ") + "*")
    return mlab;
}
    function pa (arr12) {
      for (let string of arr12)
      console.log(string)
    } 

pa(getInfo());

console.log("---13---");


function checkEmail(string) {
  
  let latinChars = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      specialChars = ['@','-','_','.'],
      numerals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  
  
  for (let char of string) {
      if (!(latinChars.includes(char) || specialChars.includes(char) || numerals.includes(char))) {
          alert('символ запрещен');
          return false;
      } 
  }

  if (!(string.includes('@') && (string.indexOf('@') == string.lastIndexOf('@')))) {
      alert('не должно быть больше одной собачки');
      return false;
  } 

  if (specialChars.includes(string[0]) || specialChars.includes[string.length - 1]) {
      alert('Спец. символы не должны быть первыми и последними');
      return false;
  } 

  for (let i = 1; i < string.length; i++) {
      if (specialChars.includes(string[i - 1]) && specialChars.includes(string[i])) {
          alert('специальные символы не должны идти подряд');
          return false;
      } 
  }


  if (string.indexOf('@') < 2) {
      alert('имя почты до знака @ должно быть таким коротким');
      return false;
  } 

  if (numerals.includes(string[0])) {
      alert('Не должно начинаться с цифры');
      return false;
  } 

  alert('Отправлено успешно');
  return true;


}
console.log(checkEmail("v.egorov@yahoo.com"));
  