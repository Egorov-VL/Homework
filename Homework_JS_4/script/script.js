console.log("---1---");

let a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
  document.write(a[i] + "<br>");
}

console.log("---2---");

let b = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

document.write("Ответ:");
for (let k = 1; k < b.length; k++) {
  if (b[k] > -10 && b[k] < -3) document.write(" " + b[k]);
}

console.log("---3---");

let cw = [];
cf = [];
cs = 0;
cst = 23;
while (cst <= 57) {
  cw.push(cst);
  cst += 1;
}

for (let l = 23; l <= 57; l++) cf[cf.length] = l;
for (let l = 0; l < cf.length; l++) cs += cf[l];

document.write(`While: ${cw}.<br />`);
document.write(`For ${cf}.<br />`);
document.write(`Sum ${cs}.<br />`);

console.log("---4---");

let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i <= arr.length - 1; i++) {
  let num = String(arr[i]);
  let firstNum = num[0];

  if (firstNum == 1 || firstNum == 2 || firstNum == 5) {
    console.log(arr[i]);
  }
}

console.log("---5---");

let array = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
for (let key in array) {
  if (array[key] == "сб" || array[key] == "вс") {
    document.write("<strong>" + array[key] + "</strong>" + "<br>");
  } else {
    document.write(array[key] + "<br>");
  }
}

console.log("---6---");
let mas = [1,2,3,4,5,6];

mas[mas.length]=7;
document.write( mas[mas.length-1]+ '<br />')

console.log("---7---");

let j = [];
while (true) {
  let nNumber = prompt("Введите число для сортировки");
  {
    if (nNumber == "") break;
    nNumber = nNumber.trim();
    if (isNaN(Number(nNumber)) || nNumber == "") {
      alert("Повторите ввод");
    } else {
      j.push(Number(nNumber));
    }
  }

  document.write("Массив =" + j + "<br />");
  j.sort(function (a, b) {
    return a - b;
  });
  document.write("Массив сортирован:" + j + ".");

  console.log("---8---");

  let h = [12, false, "Текст", 4, 2, -5, 0],
    hi = 1;

  while (h.length - hi >= 0) {
    document.write(" " + h[h.length - hi] + ",");
    hi += 1;
  }
  document.write(h.reverse());

  console.log("---9---");

  let k = [5, 9, 21, , , 9, 78, , , , 6],
    kn = 0;

  for (let i = 0; i < k.length; i++) {
    if (k[i] == undefined) kn += 1;
  }
  document.write("Пустых значений: " + kn);

  console.log("---10---");

  let m = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2],
    mst,
    mend,
    ms = 0;

  mst = m.indexOf(0);
  mend = m.lastIndexOf(0);

  if (mst == mend) {
    document.write("0. <br />");
  } else {
    for (let i = ms + 1; i < mend; i++) ms += m[i];
  }
  document.write(ms + "<br />");

  console.log("---10---");

  let height, baseline;

  while (true) {
    height = prompt("Задайте высоту треугольника > 0 ", 15);
    height = height.trim();
    if (height == "") continue;
    height = Number(height);
    if (height > 0 && Number.isInteger(height)) break;
  }
  baseline = 2 * height - 1;
  for (let layer = 1; layer <= height; layer += 1) {
    let nc = 2 * layer - 1,
      ns = (baseline - nc) / 2,
      sa = new Array(ns),
      ca = new Array(nc),
      la;

    for (let i = 0; i < ns; i++) sa[i] = '<span class = "transparent">^</span>';
    for (let i = 0; i < nc; i++) ca[i] = "^";

    la = sa.concat(ca, sa);
    document.write(la.join("") + "<br />");
    console.log(la.join("") + "<br />");
  }
}
