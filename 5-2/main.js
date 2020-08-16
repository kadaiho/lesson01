const json = require("./users.json");
const users = json.users;
//console.log(json.users[1].name);
for (let i = 0; i < users.length; i++) {
  if (`A` == users[i].rank) {
    if (5 > users[i].years) {
      const ArankSarary = 3000 * users[i].years + 100000;
      users[i].sarary = ArankSarary;
    } else if (5 <= users[i].years) {
      const ArankSarary2 = 3000 * users[i].years + 120000;
      users[i].sarary = ArankSarary2;
    }
  } else if (`B` == users[i].rank) {
    const BrankSarary = 4000 * users[i].years + 140000;
    users[i].sarary = BrankSarary;
  } else if (`C` == users[i].rank) {
    const CrankSarary = 5000 * users[i].years + 160000;
    users[i].sarary = CrankSarary;
  }
}
users.sort(function (a, b) {
  return b.sarary - a.sarary;
});
for (let a = 0; a < users.length; a++) {
  console.log(`${users[a].name}:${users[a].sarary}`);
}

/*
| ランク(rank)|勤続年数|給与|
|----|----|----|
| A|5年未満|3000x勤続年数+100,000 |
| A|5年以上|3000x勤続年数+120,000 |
| B|-|4000x勤続年数+140,000 |
| C|-|5000x勤続年数+160,000 |

Takahashi:210000
Ito:168000
Tanaka:165000
Sato:156000
Yamada:135000
Suzuki:109000
*/
