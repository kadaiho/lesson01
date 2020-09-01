const jsonPlayData = require(`./playdata.json`);
const jsonSongs = require(`./songs.json`);
const data = jsonPlayData.data;
const songs = jsonSongs.songs;

data.sort(function (a, b) {
  return b.count - a.count;
});
for (let i = 0; i < data.length; i++) {
  const found = songs.find((song) => {
    return Number(song.id) === Number(data[i].id);
  });
  console.log(`${i + 1}位:${found.title}\t${data[i].count}`);
}

//**playdataのcountが大きい順にソートして、曲のtitleとplaydataのcountを[順位:${title}\t${count}]のフォーマットで表示してください**
