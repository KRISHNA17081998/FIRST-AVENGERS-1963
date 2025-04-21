const thumbs = document.querySelectorAll('.thumb li');
const heroImage = document.getElementById('hero-image');
const heroName = document.getElementById('hero-name');
const heroBio = document.getElementById('hero-bio');
const heroDetails = document.getElementById('hero-details');
const carousel = document.getElementById('carousel');
const audio = document.getElementById('hero-audio');
const playBtn = document.getElementById('play-audio-btn');


const audioMap = {
  "Ant Man": "audio/antman.mp3",
  "Hulk": "audio/hulk.mp3",
  "Iron Man": "audio/iron Man.mp3",
  "Thor": "audio/thor.mp3",
  "Wasp": "audio/wasp.mp3"
};


const heroDetailsMap = {
  "Ant Man": {
    realName: "Dr. Hank Pym",
    height: "Variable (down to ant size)",
    powers: "Size manipulation, genius intellect, communicates with ants"
  },
  "Hulk": {
    realName: "Dr. Bruce Banner",
    height: "7 ft+ as Hulk",
    powers: "Super strength, regeneration, rage-fueled transformation"
  },
  "Iron Man": {
    realName: "Tony Stark",
    height: "6'1\"",
    powers: "Powered armor suit, flight, missiles, repulsor blasts"
  },
  "Thor": {
    realName: "Thor Odinson",
    height: "6'6\"",
    powers: "God of Thunder, controls lightning, super strength, Mjölnir"
  },
  "Wasp": {
    realName: "Janet van Dyne",
    height: "Variable (tiny to human)",
    powers: "Flight, energy stingers, size manipulation"
  }
};


const firstItem = document.querySelector('.thumb li');
const initialName = firstItem.getAttribute('data-name');
const initialImg = firstItem.getAttribute('data-img');
const initialBg = firstItem.getAttribute('data-bg');
const initialAudio = audioMap[initialName];
const initialDetails = heroDetailsMap[initialName];

heroImage.src = initialImg;
heroImage.alt = initialName;
heroName.textContent = initialName;
carousel.style.backgroundColor = initialBg;

if (initialAudio) {
  audio.src = initialAudio;
  audio.play();
  playBtn.style.display = 'block';
}

if (initialDetails) {
  heroDetails.innerHTML = `
    <strong>Real Name:</strong> ${initialDetails.realName}<br>
    <strong>Height:</strong> ${initialDetails.height}<br>
    <strong>Powers:</strong> ${initialDetails.powers}
  `;
}


playBtn.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play();
});


thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach(t => t.classList.remove('selected'));
    thumb.classList.add('selected');

  
    const newImg = thumb.getAttribute('data-img');
    const newName = thumb.getAttribute('data-name');
    const newBio = thumb.getAttribute('data-bio');
    const newBg = thumb.getAttribute('data-bg');
    const newAudio = audioMap[newName];
    const newDetails = heroDetailsMap[newName];

  
    heroImage.classList.remove('show');

  
    heroName.textContent = newName;
    heroBio.textContent = newBio;
    carousel.style.backgroundColor = newBg;

    if (newDetails) {
      heroDetails.innerHTML = `
        <strong>Real Name:</strong> ${newDetails.realName}<br>
        <strong>Height:</strong> ${newDetails.height}<br>
        <strong>Powers:</strong> ${newDetails.powers}
      `;
    } else {
      heroDetails.textContent = "";
    }

  
    setTimeout(() => {
      heroImage.src = newImg;
      heroImage.alt = newName;
      heroImage.classList.add('show');
    }, 100);

    
    if (newAudio) {
      audio.src = newAudio;
      audio.play();
      playBtn.style.display = 'block';
    } else {
      audio.pause();
      playBtn.style.display = 'none';
    }
  });
});
