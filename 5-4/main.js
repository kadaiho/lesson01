const json = require(`./kobe.json`);
function kobe(obj) {
  for (key in obj) {
    const value = obj[key];

    if (key === "kobe") {
      console.log(value);
    } else if (typeof value === "object") {
      kobe(value);
    }
  }
}

kobe(json);
//console.log(json);
