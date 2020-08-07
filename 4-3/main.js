const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00",
];
//最初に見つかるコロン":"からスペース＋ハイフン" -"の位置を見つける
for (let i = 0; i < errorLogs.length; i++) {
  const str = String(errorLogs[i]);
  //  console.log(str.indexOf(":"));
  //  console.log(str.indexOf(" -"));
  //見つけた位置から文字列を切り出す
  const position = str.indexOf(":");
  const position2 = str.indexOf(" -");
  console.log(str.substring(position + 1, position2));
}
//const str = String(errorLogs);
