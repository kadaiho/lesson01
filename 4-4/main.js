var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const number = [];
for (let i = 0; i < 100; i++) {
  var num = random[Math.floor(Math.random() * random.length)];

  if (!number.includes(num)) {
    number.push(num);
  }
}
console.log(number.join(` `));
