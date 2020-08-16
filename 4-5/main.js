const array = [];
const sortedArray = [];
for (let i = 2; i < process.argv.length; i++) {
  const arg1 = Number(process.argv[i]);
  //console.log(arg1);
  array.push(arg1);
}
var fewestArray = Math.min(...array);
//console.log(num2);
//console.log(array);
for (let a = fewestArray; a < 9999; a++) {
  for (let j = 0; j < array.length; j++) {
    if (a === array[j]) {
      sortedArray.push(a);
    }
  }
}
console.log(sortedArray);
//node main.js 2 13 42 5 25 59 1 4 13 12 11 10 2
