const array = [];
for (let i = 2; i < process.argv.length; i++) {
  array.push(process.argv[i]);
}

var func = function (a, b) {
  return a - b;
};

let arr = array.sort(func);

const median = Math.floor(arr.length / 2);

if (arr.length % 2 === 1) {
  console.log(Number(arr[median]));
} else {
  console.log((Number(arr[median]) + Number(arr[median - 1])) / 2);
}

//node main.js 24 19 3 25 40
