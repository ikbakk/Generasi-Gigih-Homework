// mongosh
// use homework

let songs = [];
for (let i = 0; i <= 10; i++) {
  songs.push({
    title: `Artist Name ${i}`,
    artist: `Artist Name ${i}`,
    album: `Album Name ${i}`
  });
}

// db.Songs.insertMany(songs)

function generateRandomDOB() {
  const year = Math.floor(Math.random() * (2000 - 1980 + 1)) + 1980;
  const month = String(Math.floor(Math.random() * 12 + 1)).padStart(2, '0');
  const day = String(Math.floor(Math.random() * 31 + 1)).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function generateRandomGenre() {
  const genres = ['Rock', 'Pop', 'Country', 'Jazz', 'Hip Hop'];
  const randomIndex = Math.floor(Math.random() * genres.length);
  return genres[randomIndex];
}

let artists = [];
for (let i = 1; i <= 10; i++) {
  artists.push({
    name: `Artist Name ${i}`,
    dateOfBirth: generateRandomDOB(),
    genre: generateRandomGenre()
  });
}

// db.Artists.insertMany(artists)

let popularSongs = [];
for (let i = 1; i <= 10; i++) {
  popularSongs.push({
    title: `Song Name ${i}`,
    playCount: Math.random() * i,
    periodOfTime: 2023
  });
}

// db.PopularSongs.insertMany(popularSongs)
