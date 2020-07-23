for (let i = 1; i < 10; i++) {
  const table = [];
  for (let a = 1; a < 10; a++) table.push(i * a);
  {
    console.log(table.join(` `));
  }
}
