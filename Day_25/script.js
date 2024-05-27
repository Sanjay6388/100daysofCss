function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBubbles() {
  const bubbleContainer = document.getElementById('bubbleContainer');

  for (let i = 0; i < 100; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.backgroundColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`; 
    bubble.style.left = `${getRandomInt(0, window.innerWidth)}px`;
    bubble.style.animationDuration = `${getRandomInt(5000, 10000)}ms`; 
    bubbleContainer.appendChild(bubble);
  }
}

window.onload = createBubbles;

