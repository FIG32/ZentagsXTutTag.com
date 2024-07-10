// Function to create a raindrop
function createRaindrop() {
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    drop.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(drop);
    
    // Animation to make the raindrop fall
    anime({
        targets: drop,
        translateY: window.innerHeight + 50,
        duration: Math.random() * 3000 + 2000, // Random duration for each drop
        easing: 'line
