arg1 = Number(process.argv[2]);
arg2 = Number(process.argv[3]);
arg3 = Number(process.argv[4]);
arg4 = Number(process.argv[5]);
arg5 = Number(process.argv[6]);

var array = [arg1, arg2, arg3, arg4, arg5];
var func = function (a, b) {
  return a - b;
};
let arr = array.sort(func);
let removed = arr.splice(0, 2);
let removed2 = arr.splice(1, 2);
console.log(Number(arr));

//node main.js 24 19 3 25 40
