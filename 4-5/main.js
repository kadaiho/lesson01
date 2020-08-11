const arg1 = Number();
const array = [];
const num = [];
for (let i = 2; i < process.argv.length; i++) {
  const arg1 = process.argv[i];
  //console.log(arg1);
  array.push(arg1);
}
var num2 = Number(Math.min(...array));
//console.log(num2);
//console.log(array);
for (let a = num2; a < 9999; a++) {
  for (let j = 0; j < array.length; j++) {
    if (a === Number(array[j])) {
      num.push(a);
    }
  }
}
console.log(num);
//node main.js 2 13 42 5 25 59 1 4 13 12 11 10 2
