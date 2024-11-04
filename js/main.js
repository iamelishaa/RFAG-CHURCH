// Show/hide dropdown menu on dots button click
document.getElementById('dots-button').addEventListener('click', function() {
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.classList.toggle('show'); // Toggle the class instead of changing display
});

// Hide dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdownMenu = document.getElementById('dropdown-menu');
  const dotsButton = document.getElementById('dots-button');
  
  if (!dotsButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show'); // Hide dropdown if clicking outside
  }
});

// Show/hide main menu on hamburger button click
document.getElementById('hamburger-button').addEventListener('click', function() {
  const mainMenu = document.querySelector('.main-menu');
  mainMenu.style.display = mainMenu.style.display === 'flex' ? 'none' : 'flex';
});
document.addEventListener('DOMContentLoaded', function () {
  const dotsButton = document.querySelector('.dots-button');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dotsButton.addEventListener('click', function () {
      dropdownMenu.classList.toggle('active');
  });
});
const typewriterText = "“For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.” - Jeremiah 29:11";
const typewriterElement = document.getElementById("typewriter");

let index = 0;

function type() {
  if (index < typewriterText.length) {
      typewriterElement.innerHTML += typewriterText.charAt(index);
      index++;
      setTimeout(type, 250); // Adjust typing speed here
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type(); // Start typing effect after content is loaded
});
function scrollToFindYourPlace() {
document.getElementById("find-your-place").scrollIntoView({ behavior: "smooth" });
}
const serviceItems = document.querySelectorAll('.service-item');

function animateOnScroll() {
  serviceItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
          item.classList.add('show');
      }
  });
}

function handleScroll() {
  const servicesSection = document.querySelector('.services-section');
  const serviceVideos = document.querySelectorAll('.service-video');

  // Reveal the section
  if (isInViewport(servicesSection)) {
      servicesSection.style.opacity = '1'; // Fade in the section

      // Delay the slide-in effect for videos
      setTimeout(() => {
          serviceVideos.forEach((video, index) => {
              setTimeout(() => {
                  video.style.opacity = '1'; // Fade in each video
                  video.style.transform = 'translateY(0)'; // Slide in each video
              }, index * 200); // Delay each video for staggered effect
          });
      }, 1000); // Delay the entire animation by 1 second

      // Remove the event listener once done
      window.removeEventListener('scroll', handleScroll);
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Toggle form visibility
function togglePrayerForm() {
  const formContainer = document.getElementById("prayer-form-container");
  formContainer.style.display = formContainer.style.display === "none" || formContainer.style.display === "" ? "block" : "none";
}

// Handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevents page reload

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const prayerRequest = document.getElementById("prayerRequest").value;

  const email = 'catherinelawrence498@gmail.com';
  const subject = `Prayer Request from ${firstName} ${lastName}`;
  const body = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone: ${phone}\nPrayer Request:\n${prayerRequest}`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  document.getElementById("confirmation-message").style.display = "block";
  setTimeout(() => {
    togglePrayerForm();
    document.getElementById("confirmation-message").style.display = "none";
  }, 3000); // Hides the confirmation message after 3 seconds
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listeners
window.addEventListener('scroll', () => {
  animateOnScroll();
  handleScroll(); // Add this to ensure scrolling animations work together
});
window.addEventListener('load', () => {
  animateOnScroll(); // Trigger on page load
});
