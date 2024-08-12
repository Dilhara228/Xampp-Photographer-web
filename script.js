// // script.js

const images = ["Images/butterfly.jpg", "Images/2150648509.jpg","Images/wedding.jpg" , "Images/frog.jpg" ,"Images/party.jpg"]; // Array of image paths
const intervalTime = 10000; // Interval time in milliseconds (10 seconds)
let currentImageIndex = 0; // Index of the current image

function changeBackgroundImage() {
  // Get the hero image element
  const heroImage = document.getElementById("heroImage");

  // Change the src attribute to the current image in the array
  heroImage.src = images[currentImageIndex];
}

function nextBackgroundImage() {
  // Increment currentImageIndex to switch to the next image
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Change the background image immediately
  changeBackgroundImage();
}

function previousBackgroundImage() {
  // Decrement currentImageIndex to switch to the previous image
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;

  // Change the background image immediately
  changeBackgroundImage();
}

// Call changeBackgroundImage initially
changeBackgroundImage();

// Set an interval to call changeBackgroundImage every intervalTime
setInterval(changeBackgroundImage, intervalTime);


