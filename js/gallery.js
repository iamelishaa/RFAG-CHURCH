// Select modal elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

// Add click event to each image in the collage
document.querySelectorAll('.collage-scroll img').forEach((img) => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex'; // Show modal
    modalImage.src = img.src; // Set clicked image as modal source
    modal.classList.add('open'); // Add fade-in effect
  });
});

// Function to close the modal
function closeModal() {
  modal.classList.remove('open'); // Remove fade-in effect
  setTimeout(() => (modal.style.display = 'none'), 300); // Ensure fade-out before hiding
}
