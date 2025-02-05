const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// song titles
const songs=['Dil Tu Hi Bataa','Khamoshiyian'];

// keep track of song
let songIndex = 0;

// Load Song into DOM
loadSong(songs[songIndex]);


// play song
function playSong(){
musicContainer.classList.add('play');
playBtn.querySelector('i.fas').classList.remove('fa-play');
playBtn.querySelector('i.fas').classList.add('fa-pause');
audio.play();
}

// pause song
function pauseSong(){
    musicContainer.classList.remove('play'); 
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

// previous button
function prevSong(){
songIndex--;
if(songIndex < 0){
    songIndex = songs.length - 1;
}
loadSong(songs[songIndex]);
playSong();
}

// next button
function nextSong(){
songIndex++;
if(songIndex > songs.length-1){
songIndex=0;
}
loadSong(songs[songIndex]);
playSong();
}

// Update Progress Bar
function updateProgress(e){
const {duration,currentTime} = e.srcElement;
const progressPercent = (currentTime/duration) * 100;
progress.style.width = `${progressPercent}%`;
}
  
// change progress 
function changeDuration(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}


// Controll The Volume

const volumeSlider = document.getElementById('volumeSlider');

//  volume slider
volumeSlider.value = audio.volume;

// Update audio volume when slider changes
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});
// Update slider value when audio volume changes (optional)
audio.addEventListener('volumechange', () => {
    volumeSlider.value = audio.volume;
});



// update song Details
function loadSong(song){
    title.textContent = song;
    audio.src = `./song/${song}.mp3`;
    cover.src = `./img/${song}.jpg`;
}

// Event Listeners
playBtn.addEventListener('click',()=>{
    const isPlaying = musicContainer.classList.contains('play');
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
})

//Change song Event
prevBtn.addEventListener('click',prevSong);

nextBtn.addEventListener('click',nextSong);

audio.addEventListener('timeupdate',updateProgress);

progressContainer.addEventListener('click',changeDuration);

audio.addEventListener('ended',nextSong);
