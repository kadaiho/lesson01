const arg1 = process.argv[2].toLowerCase();
const arg2 = process.argv[3];
const array = arg1.split(`,`);
const arr = [];
//console.log(array);

for (let i = 0; i < array.length; i++) {
  //  console.log(array[i].indexOf(arg2));
  if (array[i].indexOf(arg2) != -1) {
    arr.push(array[i]);
  }
}
arr.sort();
//console.log(arr);
console.log(arr.join(` `));
//node main.js "Suzuki,Yamada,Sato,Ito,Tanaka,Takahashi,Ando" a
