// Add interactivity if needed
console.log("Welcome to Sandesh Art Gallery");

// JavaScript for automatic image carousel
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage() {
  // Hide all images
  images.forEach((img, index) => {
    img.classList.remove('active');
  });

  // Show the next image
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
  images[currentIndex].classList.add('active');
}

// Set interval to swipe images every 3 seconds
setInterval(showNextImage, 3000);

// Initialize the first image as active
images[currentIndex].classList.add('active');


  
