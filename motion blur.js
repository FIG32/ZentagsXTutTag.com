document.addEventListener('mousemove', (event) => {
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    const blurAmount = calculateBlur(mouseX, mouseY);
    const raindrops = document.querySelectorAll('.rain');

    raindrops.forEach(raindrop => {
        raindrop.style.filter = `blur(${blurAmount}px)`;
    });
});

function calculateBlur(mouseX, mouseY) {
    // Adjust blur amount based on mouse position
    const maxBlur = 10; // Maximum blur amount in pixels
    const distanceThreshold = 200; // Threshold distance for maximum blur effect

    // Calculate distance from center of screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);

    // Calculate blur amount based on distance from center
    let blurAmount = (distance / distanceThreshold) * maxBlur;
    blurAmount = Math.min(blurAmount, maxBlur); // Cap blur amount to maxBlur

    return blurAmount;
}
