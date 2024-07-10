document.addEventListener('DOMContentLoaded', function() {
    // Select the rain container
    var rainContainer = document.querySelector('.rain-container');

    // Create ripples when raindrops reach bottom
    rainContainer.addEventListener('animationiteration', function(e) {
        if (e.target.classList.contains('rain')) {
            // Get raindrop's current position
            var raindrop = e.target;
            var raindropRect = raindrop.getBoundingClientRect();
            var raindropBottom = raindropRect.bottom;

            // Get the window height
            var windowHeight = window.innerHeight;

            // Check if raindrop has reached bottom of the window
            if (raindropBottom >= windowHeight) {
                // Create a ripple at the raindrop's position
                createRipple(raindropRect.left, raindropBottom);
            }
        }
    });

    // Function to create a ripple
    function createRipple(x, y) {
        var ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        rainContainer.appendChild(ripple);

        // Remove ripple after animation ends
        ripple.addEventListener('animationend', function() {
            ripple.remove();
        });
    }
});
