const arg1 = process.argv[2];
const minute = Number(arg1.split(`:`)[1]) + 45;
const hour = Number(arg1.split(`:`)[0]) + Math.floor(minute / 60);
console.log(hour % 24);
console.log(minute % 60);
//splitと%を使わず自力でやった記念↓
/*const arg1 = process.argv[2];
const str = String(arg1);
//console.log(str);
const position2 = str.indexOf(":");
const hour = Number(str.substring(0, position2));
const minute = Number(str.substring(position2 + 1, 5));
if (minute >= 15) {
  if (hour === 23) {
    console.log(0);
  } else {
    console.log(hour + 1);
  }
  console.log(minute + 45 - 60);
} else if (minute < 15) {
  console.log(hour);
  console.log(minute + 45);
}*/
