const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
let currentSongIndex = 0;
const audioPlayer = document.getElementById('audio-player');

function playSong(song) {
  const songIndex = songs.indexOf(song);
  if (songIndex !== -1) {
    currentSongIndex = songIndex;
    audioPlayer.src = song;
    audioPlayer.play();
  }
}

function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();
}
