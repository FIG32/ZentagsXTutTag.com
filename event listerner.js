document.addEventListener('mousemove', function(e) {
    // Get the width and height of the window
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Calculate the percentage positions of the mouse within the window
    var mouseX = e.pageX / windowWidth;
    var mouseY = e.pageY / windowHeight;

    // Calculate how much to translate the content based on mouse position
    var translateX = (mouseX - 0.5) * 50; // Adjust the multiplier to control intensity
    var translateY = (mouseY - 0.5) * 50;

    // Select the element(s) you want to move
    var content = document.querySelector('.content');

    // Apply the translation using CSS transform property
    content.style.transform = `translate(${translateX}px, ${translateY}px)`;
});
