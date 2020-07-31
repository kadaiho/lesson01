const arg1 = Number(process.argv[2]);
const space = " ";
const asterisk = "*";
const array = [];

for (let i = arg1; i > 0; i--) {
  //要素を記述、pushだから要素が増えていく
  array.push(i);
  const length = array.length;
  const item = 2 * length - 1;
  console.log(`${space.repeat(i - 1)}${asterisk.repeat(item)}`);
  //要素数確認用 console.log(array);
}

/*
２列目以降にを２つたすピラミッドで表示する
 * spaceが１
***
   * が１　spaceが３
  ***
 *****
*******

//for (let i = arg1; i > 0; i--) {
  //要素を記述、pushだから要素が増えていく
  array.push(i);
  const length = array.length;
  const element = 2 * array - 1;
  console.log(`${asterisk.repeat(i - 1)}${asterisk.repeat(element)}`);
  //要素数確認用
  console.log(array);
  //10のlengthをarrayにした結果↓
  daiho0323@daihonoAir 3-3 % node main.js 3
*******
[ 3 ]
*
[ 3, 2 ]

[ 3, 2, 1 ]
daiho0323@daihonoAir 3-3 % 
　//不可、要素が複数だとelementが動いてないっぽい？
*/
