const imageContainer = document.querySelector('.relative');
const image = document.querySelector('img');

// Define a function to handle the animation
function handleAnimation(e) {
  const { offsetX, offsetY, target } = e;
  const { clientWidth, clientHeight } = target;

  const xPos = (offsetX / clientWidth - 0.5) * 20;
  const yPos = (offsetY / clientHeight - 0.5) * 20;

  image.style.transform = `rotateX(${yPos}deg) rotateY(${xPos}deg) scale(1.1)`;
}

// Add a smooth transition effect
image.style.transition = 'transform 0.3s ease-out';

// Attach the animation to the container
imageContainer.addEventListener('mousemove', handleAnimation);

// Reset the image's transform when the mouse leaves the container
imageContainer.addEventListener('mouseleave', () => {
  image.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});


document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    // Show/hide the button based on scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
})