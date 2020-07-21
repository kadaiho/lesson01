const arg1 = process.argv[2];
const hyaku = Math.floor(arg1 / 100);
const juu = Math.floor((arg1 % 100) / 10);
const ichi = Math.floor((arg1 % 100) % 10);
console.log(`100円玉${hyaku}枚, 10円玉${juu}枚, 1円玉${ichi}枚`);
//console.log("百円玉" + hyaku + "枚");
