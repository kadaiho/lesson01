const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);
const yoko = "*-";
const tate = "-*";

for (let i = 0; i < arg1; i++) {
  if (i % 2 === 0) {
    if (arg2 % 2 === 0) {
      console.log(`${yoko.repeat(arg2 / 2)}`);
    } else {
      console.log(`${yoko.repeat(arg2 / 2)}*`);
    }
  } else {
    if (arg2 % 2 === 0) {
      console.log(`${tate.repeat(arg2 / 2)}`);
    } else {
      console.log(`${tate.repeat(arg2 / 2)}-`);
    }
  }
}

/* 2 2
見る用
*-*-*-*
-*-*-*-
*-*-*-*
-*-*-*-
*/
