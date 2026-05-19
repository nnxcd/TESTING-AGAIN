// Hover Sound Effect Script
document.addEventListener('DOMContentLoaded', function() {
    // Create audio element for the hover sound
    const hoverSound = new Audio('/Images-Ass2/sounds/discordmessage.mp3');
    hoverSound.volume = 0.5; // Adjust volume (0 to 1)
 
    // Select all elements that should have hover sound
    const hoverElements = document.querySelectorAll(
        'h1, .hunt-gather, .playing-arduino, .headphones-experiment, .hng-item, .picture-item'
    );
 
    // Add hover sound to each element
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            // Reset audio to start from beginning each time
            hoverSound.currentTime = 0;
            hoverSound.play().catch(error => {
                console.log('Audio play failed:', error);
            });
        });
    });
});