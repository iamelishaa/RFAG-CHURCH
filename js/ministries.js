// JavaScript to handle scroll-based animation for cards and background image
// and to trigger the visibility of the memory verses when the cards disappear
window.addEventListener('scroll', function() {
    const cards = document.querySelector('.card-container');
    if (window.scrollY > 100) {
        cards.style.opacity = '0';
        cards.style.pointerEvents = 'none';
    }
});

document.addEventListener("scroll", function() {
    const cards = document.querySelectorAll(".card");  // Select all cards
    const backgroundImage = document.querySelector(".background-image");
    const memoryVerses = document.getElementById("memoryVerses");  // Get memory verses element

    let scrollPosition = window.scrollY; // Get the current scroll position

    // When the scroll position exceeds 100px, start fading out the cards and show the background image
    if (scrollPosition > 100) {
        cards.forEach(card => {
            card.classList.add("hide"); // Add hide class to cards (fade and move up)
        });
        backgroundImage.style.opacity = 1; // Show background image with opacity 1

        // Show the memory verses with fade-in effect
        memoryVerses.style.opacity = 1;
    }
});

// JavaScript for handling image rotation in a general section
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = [
        document.getElementById('fellowshipImage1'),
        document.getElementById('fellowshipImage2'),
        document.getElementById('fellowshipImage3')
    ];
    const nextButton = document.getElementById('nextImageButton');

    nextButton.addEventListener('click', function () {
        // Hide the current image
        images[currentIndex].style.display = 'none';

        // Move to the next image index, loop back if at the end
        currentIndex = (currentIndex + 1) % images.length;

        // Show the next image
        images[currentIndex].style.display = 'block';
    });

    // Ensure only the first image is visible on page load
    images.forEach((img, index) => {
        if (index !== 0) {
            img.style.display = 'none';
        }
    });
});

// JavaScript for handling image rotation in the women's fellowship section
document.addEventListener("DOMContentLoaded", function() {
    let currentImageIndex = 0;
    const images = [
        document.getElementById("womenFellowshipImage1"),
        document.getElementById("womenFellowshipImage2"),
        document.getElementById("womenFellowshipImage3")
    ];
    const nextButton = document.getElementById("womenNextImageButton");

    nextButton.addEventListener("click", function() {
        images[currentImageIndex].style.display = "none"; // Hide current image
        currentImageIndex = (currentImageIndex + 1) % images.length; // Increment index
        images[currentImageIndex].style.display = "block"; // Show next image
    });

    // Ensure only the first image is visible on page load
    images.forEach((img, index) => {
        img.style.display = index === 0 ? "block" : "none";
    });
});
