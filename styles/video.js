document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

var mediaPlayer;

function initialiseMediaPlayer() {
    mediaPlayer = document.getElementById('media-video');
    mediaPlayer.controls = false;
}

function togglePlayPause() {
    var btn = document.getElementById('play-pause-button');
    var btn2 = document.getElementById('centered-play-pause-button');
    if (mediaPlayer.paused || mediaPlayer.ended) {
        btn.title = 'pause';
        btn.innerHTML = '<img src="./images/icones/pause.svg" alt="Mettre la vidéo en pause">';
        btn.className = 'pause';
        mediaPlayer.play();
        btn2.style.display = "none";
    }
    else {
        btn.title = 'play';
        btn.innerHTML = '<img src="./images/icones/play.svg" alt="Jouer la vidéo">';
        btn.className = 'play';
        mediaPlayer.pause();
    }
}

function changeButtonType(btn, value) {
    btn.title = value;
    btn.innerHTML = value;
    btn.className = value;
}

function stopPlayer() {
    mediaPlayer.pause();
    mediaPlayer.currentTime = 0;
}

function changeVolume(direction) {
    if (direction === '+') mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
    else mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.1);
    mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
}

function toggleMute() {
    var btn = document.getElementById('mute-button');
    if (mediaPlayer.muted) {
        changeButtonType(btn, 'mute');
        mediaPlayer.muted = false;
    }
    else {
        changeButtonType(btn, 'unmute');
        mediaPlayer.muted = true;
    }
}

function replayMedia() {
    resetPlayer();
    mediaPlayer.play();
}

document.getElementById('media-video').addEventListener('timeupdate', updateProgressBar, false);

function updateProgressBar() {
    var progressBar = document.getElementById('progress-bar');
    var percentage = Math.floor((100 / mediaPlayer.duration) *
        mediaPlayer.currentTime);
    progressBar.value = percentage;
}

function resetPlayer() {
    mediaPlayer.currentTime = 0;
    changeButtonType(playPauseBtn, 'play');
    progressBar.value = 0;
    mediaPlayer.currentTime = 0;
    changeButtonType(playPauseBtn, 'play');
}

/*document.getElementById('media-video').addEventListener('play', function() {
    var btn = document.getElementById('play-pause-button');
    changeButtonType(btn, 'pause');
}, false);
document.getElementById('media-video').addEventListener('pause', function() {
    var btn = document.getElementById('play-pause-button');
    changeButtonType(btn, 'play');
}, false);

document.getElementById('media-video').addEventListener('volumechange', function(e) {
    var btn = document.getElementById('mute-button');
    if (mediaPlayer.muted) changeButtonType(btn, 'unmute');
    else changeButtonType(btn, 'mute');
}, false);*/