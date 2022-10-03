// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener('keydown', processKeyDown);

// Event Function
function processKeyDown(e) {
  console.log(e.code);

  if (e.code === 'KeyA') {
    // Play A-Clap
    let audio = document.getElementById('clap');
    audio.currentTime = 0;
    audio.play();
    document.getElementById('A').classList.add('playing');
  } else if (e.code === 'KeyS') {
    // Play S-hihat
    let audio = document.getElementById('hihat');
    audio.currentTime = 0;
    audio.play();
    document.getElementById('S').classList.add('playing');
  } else if (e.code === 'KeyD') {
    // Play D-kick
    let audio = document.getElementById('kick');
    audio.currentTime = 0;
    audio.play();
    document.getElementById('D').classList.add('playing');
  } else if (e.code === 'KeyF') {
    // Play F-Openhat
    let audio = document.getElementById('openhat');
    audio.currentTime = 0;
    audio.play();
    document.getElementById('F').classList.add('playing');
  } else if (e.code === 'KeyG') {
    // Play G-Boom
    let audio = document.getElementById('boom');
    audio.currentTime = 0;
    audio.play();
    document.getElementById('G').classList.add('playing');
  } else if (e.code === 'KeyH') {
    // Play H-Ride
    let audio = document.getElementById('ride');
    audio.currentTime = 0;
    audio.play();
    document.getElementById('H').classList.add('playing');
  } else if (e.code === 'KeyJ') {
    // Play J-Snare
    let audio = document.getElementById('snare');
    audio.currentTime = 0;
    audio.play();
    document.getElementById('J').classList.add('playing');
  } else if (e.code === 'KeyK') {
    // Play K-Tom
    let audio = document.getElementById('tom');
    audio.currentTime = 0;
    audio.play();
    document.getElementById('K').classList.add('playing');
  } else if (e.code === 'KeyL') {
    // Play L-Tink
    let audio = document.getElementById('tink');
    audio.currentTime = 0;
    audio.play();
    document.getElementById('L').classList.add('playing');
  }
}

// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End Function
function removePlaying(event) {
  event.target.classList.remove('playing');
}
