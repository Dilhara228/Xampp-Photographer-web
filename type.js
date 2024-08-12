// script.js

// Function for typewriter effect with adjustable delay
function typeWriter(textElement, text, initialDelay = 1000, typingDelay = 100, loopDelay = 3000) {
    const characters = text.split('');
    let i = 0;
    textElement.textContent = '';

    function type() {
        if (i < characters.length) {
            textElement.textContent += characters[i];
            i++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(function () {
                i = 0;
                textElement.textContent = '';
                setTimeout(type, initialDelay);
            }, loopDelay);
        }
    }

    setTimeout(type, initialDelay);
}

// Initiate typewriter effect on page load
document.addEventListener('DOMContentLoaded', function () {
    const capturingMomentsElement = document.getElementById('capturingMoments');
    const textToType = capturingMomentsElement.textContent.trim(); // Get the text content

    // Start typing effect with initial delay of 1 second, typing delay of 100ms, and loop delay of 3 seconds
    typeWriter(capturingMomentsElement, textToType, 1000, 100, 3000);
});

// Function to navigate to a different page
function navigateTo(url) {
    window.location.href = url;
}
