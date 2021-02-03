console.log('---1---');

for(let i=1; i<=50; i++){
    console.log(i);
}
for(let f=35; f>=8; f--){
    console.log(f);
}

console.log('---2---');
let t = 89;
while (t >= 11) {
 document.write('<br/>'+ t);
 console.log(t);
  t--;
} 

console.log('---3---');
    let su = 0;
for (var i = 1; i <= 100; i++) {
    su += i;
    console.log(su);
}

console.log('---4---');

let n = 5;
    s = 0;
for(let g=1; g <= n; g++){
    s = 0;
    for(let q=1; q <= g; q++){
    s += q;
    }
    console.log(s);
}
console.log('---5---');



for(let n=8; n<=56; n++){
    if (n%2==0) continue;
    console.log(n);
}
console.log('---6---');

for (v=2; v<10; v++)
for (d=1; d<10; d++)
document.write("<p>"+v+"*"+d+" = "+(v*d)+"</p>");

console.log('---7---');

for(var m = 1000, num = 0; m > 50; m/=2, num++);
console.log(m);
console.log(num);

console.log('---8---');

    let  im = 0,
         w = 0,
         ch;

while ((ch = prompt("Введите число", 0)) !== "0" && ch != null) {
    ++im;
    w += +ch;} 
  

alert("Чисел введено: " + im + "\nСумма чисел: " + w
    + "\nСреднее арифметическое: " + (w / im));
    


console.log('---9---');
 
let val = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
     numb='', min, max;
 for (let y = 0; y < val.length; y++) {
    numb += val[y];
   if (+val[y] && !+val[y+1]) {
     if (typeof min !== 'Число' || numb < +min) min = +numb;
     if (typeof max !== 'число' || numb > +max) max = +numb;
     numb = '';
   }
 }
 console.log('Маленькое:', min, 'Большое:', max)



console.log('---10---');


let value = prompt('Введите произвольное целое число',),
    rev =  value.split("").reverse().join(""),
    summa = 0;

document.write("цифр в числе: " + value.length + "; обратный порядок : " + rev);

     
  

