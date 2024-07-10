document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with class 'rain'
    var raindrops = document.querySelectorAll('.rain');

    // Iterate through each raindrop and set random positions
    raindrops.forEach(function(raindrop) {
        // Generate random values for top and left positions
        var randomTop = Math.random() * 95; // Random top position between 0 and 100%
        var randomLeft = Math.random() * 100; // Random left position between 0 and 100%

        // Set the top and left positions
        raindrop.style.top = randomTop + 'vh';
        raindrop.style.left = randomLeft + 'vw';
    });
});
