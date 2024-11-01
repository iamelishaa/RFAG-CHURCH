// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');
      if (!groupHeader) return;

      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');

      // Toggle icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');

      // Toggle visibility of body
      groupBody.classList.toggle('open');

      // Close other open FAQ bodies
      faqContainer.querySelectorAll('.faq-group').forEach((otherGroup) => {
          if (otherGroup !== group) {
              const otherGroupBody = otherGroup.querySelector('.faq-group-body');
              const otherIcon = otherGroup.querySelector('.faq-group-header i');

              otherGroupBody.classList.remove('open');
              otherIcon.classList.remove('fa-minus');
              otherIcon.classList.add('fa-plus');
          }
      });
  });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
  });
});

// Load the IFrame Player API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Initialize YouTube players and Swiper
function onYouTubeIframeAPIReady() {
  var swiper = document.getElementById('video-swiper');
  var slides = swiper.getElementsByClassName('swiper-slide');
  var topVideoPlayer = document.getElementById('topVideoPlayer');

  var players = [];

  // Create YouTube players for each slide video
  for (var i = 0; i < slides.length; i++) {
    var element = slides[i].getElementsByClassName('yt-player')[0];
    var videoId = element.getAttribute('data-id');

    var player = new YT.Player(element, {
      videoId: videoId,
      playerVars: {
        autoplay: false,
        modestbranding: 1,
        rel: 0,
      },
    });

    players.push(player);

    // Add click event to update the top iframe with the selected video
    slides[i].addEventListener('click', function() {
      var id = this.querySelector('.yt-player').getAttribute('data-id');
      topVideoPlayer.src = "https://www.youtube.com/embed/" + id + "?autoplay=1";
    });
  }

  // Initialize Swiper
  var mySwiper = new Swiper('.swiper-container', {
    effect: 'slide',
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange: function () {
        players[mySwiper.previousIndex].pauseVideo();
      }
    }
  });
}

const video = document.querySelector("video");

function startPreview() {
  video.muted = true;
  video.currentTime = 1;
  video.playbackRate = 0.5;
  video.play();
}

function stopPreview() {
  video.currentTime = 0;
  video.playbackRate = 1;
  video.pause();
}

let previewTimeout = null;

video.addEventListener("mouseenter", () => {
  startPreview();
  previewTimeout = setTimeout(stopPreview, 4000);
});

video.addEventListener("mouseleave", () => {
  clearTimeout(previewTimeout);
  previewTimeout = null;
  stopPreview();
});

let currentIndex = 0;

function slide(direction) {
    const slider = document.getElementById('sermonSlider');
    const items = document.querySelectorAll('.sermon-item');
    const totalItems = items.length;

    currentIndex += direction;

    // Wrap around logic
    if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Loop back to last item
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Loop back to first item
    }

    // Move the slider
    const offset = -currentIndex * 320; // Width of item + margin
    slider.style.transform = `translateX(${offset}px)`;
}