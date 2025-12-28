document.addEventListener("DOMContentLoaded", function () {
  // Load common.html first
  fetch("common.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("common-header").innerHTML = data;

      // Load text.json after common.html is inserted
      fetch("text.json")
        .then(response => response.json())
        .then(data => {
          document.getElementById("title").textContent = data.title;
          document.getElementById("subtitle").textContent = data.subtitle;
          document.getElementById("footnote").textContent = data.footnote;
        })
        .catch(error => {
          console.error("Failed to load text file:", error);
        });

      // After both common.html and text.json are loaded, apply highlighting
      const pages = {
        "/index.html": "home-box",
        "/education.html": "education-box",
        "/experience.html": "experience-box",
        "/publications.html": "publications-box",
        "/projects.html": "projects-box"
      };

      const currentUrl = window.location.pathname;
      console.log("Current URL:", currentUrl);
      const highlightedBox = pages[currentUrl];

      if (highlightedBox) {
        const container = document.querySelector(`.${highlightedBox}`);
        if (container) {
          container.querySelectorAll('.box').forEach(box => {
            box.classList.add('highlight');
          });
        }
      }

      // Attach image-link event listeners after all content is loaded
      document.querySelectorAll('.image-link').forEach(link => {
        const box = link.closest('.box');
        if (box) {
          link.addEventListener('mouseover', () => {
            box.style.backgroundColor = '#0ecca3ff';
          });
          link.addEventListener('mouseout', () => {
            box.style.backgroundColor = '#fff';
          });
        }
      });
    })
    .catch(error => {
      console.error("Failed to load common.html:", error);
    });

    const scrollBtn = document.getElementById('scrollToTop');
        
    // Show button when scrolled down 300px
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top when clicked
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});