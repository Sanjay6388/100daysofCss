const movingDiv = document.getElementById('movingDiv');

// Function to move the div to the clicked position
function moveDiv(event) {
  const newX = event.clientX - movingDiv.offsetWidth / 2; // Adjust for div width
  const newY = event.clientY - movingDiv.offsetHeight / 2; // Adjust for div height
  movingDiv.style.transform = `translate(${newX}px, ${newY}px)`;
}

// Listen for mouse clicks on the document
document.addEventListener('click', moveDiv);




