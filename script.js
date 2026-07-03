document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("image-overlay");

    overlay.innerHTML = `
      <div class="overlay-content">
        <img src="${img.src}" alt="${img.alt}">
        <span class="close-btn">&times;</span>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  });
});

const style = document.createElement("style");
style.innerHTML = `
.image-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.overlay-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.overlay-content img {
  width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 15px;
}

.close-btn {
  position: absolute;
  top: -35px;
  right: 0;
  color: white;
  font-size: 35px;
  cursor: pointer;
}
`;
document.head.appendChild(style);
