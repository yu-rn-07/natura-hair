// メニューボタン
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuButton.addEventListener("click", function () {
  nav.classList.toggle("open");
  menuButton.classList.toggle("open");
});
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuButton.classList.remove("open");
  });
});

// 各セクションのフェードイン
const fadeTargets = document.querySelectorAll(".fade-in-target");

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
});

fadeTargets.forEach(function (target) {
  observer.observe(target);
});

// ギャラリー
const galleryImages = document.querySelectorAll(".gallery-image");
const gallery = document.querySelector(".gallery-list");

const galleryObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      galleryImages.forEach(function (image, index) {
        setTimeout(function () {
          image.classList.add("is-visible");
        }, index * 150);
      });
      galleryObserver.unobserve(entry.target);
    }
  });
});

galleryObserver.observe(gallery);
