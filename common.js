document.addEventListener("DOMContentLoaded", () => {
  fetch("text.json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("title").textContent = data.title;
      document.getElementById("subtitle").textContent = data.subtitle;
      document.getElementById("footnote").textContent = data.footnote;
    })
    .catch((error) => {
      console.error("Failed to load text file:", error);
    });
});

document.querySelectorAll('.image-link').forEach(link => {
  const box = link.closest('.box');
  link.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'blue';
  });
  link.addEventListener('mouseout', () => {
    box.style.backgroundColor = '#fff'; // Revert to original white background
  });
});