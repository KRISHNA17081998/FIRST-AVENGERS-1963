const thumbs = document.querySelectorAll('.thumb li');
const heroImage = document.getElementById('hero-image');
const heroName = document.getElementById('hero-name');
const heroBio = document.getElementById('hero-bio');
const carousel = document.getElementById('carousel');
const audio = document.getElementById('hero-audio');
const playBtn = document.getElementById('play-audio-btn');

// Map hero names to their respective audio files
const audioMap = {
  "Ant Man": "audio/antman.mp3",
  "Hulk": "audio/hulk.mp3",
  "Iron Man": "audio/iron Man.mp3",
  "Thor": "audio/thor.mp3",
  "Wasp": "audio/wasp.mp3"
};

// Initialize the first item (to avoid errors on first load)
const firstItem = document.querySelector('.thumb li');
const initialName = firstItem.getAttribute('data-name');
const initialImg = firstItem.getAttribute('data-img');
const initialBg = firstItem.getAttribute('data-bg');
const initialAudio = audioMap[initialName];

heroImage.src = initialImg;
heroName.textContent = initialName;
carousel.style.backgroundColor = initialBg;
if (initialAudio) {
  audio.src = initialAudio;
  audio.play();
  playBtn.style.display = 'block';
}

// Event listener for play button
playBtn.addEventListener('click', () => {
  audio.currentTime = 0; // Rewind to the start
  audio.play(); // Play the audio
});

// Event listener for the thumbnails
thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    // Remove 'selected' class from all thumbnails
    thumbs.forEach(t => t.classList.remove('selected'));
    thumb.classList.add('selected');

    // Get the new hero's data
    const newImg = thumb.getAttribute('data-img');
    const newName = thumb.getAttribute('data-name');
    const newBio = thumb.getAttribute('data-bio');
    const newBg = thumb.getAttribute('data-bg');

    // Fade out current image
    heroImage.classList.remove('show');

    // Update the hero's name, bio, and background color
    heroName.textContent = newName;
    heroBio.textContent = newBio;
    carousel.style.backgroundColor = newBg;

    // Update the hero image and fade it in
    setTimeout(() => {
      heroImage.src = newImg;
      heroImage.alt = newName;
      heroImage.classList.add('show'); // Show the new image
    }, 100);

    // Set and play audio for the selected hero
    const newAudio = audioMap[newName];
    if (newAudio) {
      audio.src = newAudio;
      audio.play();
      playBtn.style.display = 'block'; // Show the play button
    } else {
      audio.pause(); // Stop audio if no audio file
      playBtn.style.display = 'none'; // Hide the play button
    }
  });
});
