// Кнопка "Наверх"
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Аккордеон
const accordions = document.querySelectorAll(".accordion-item");
accordions.forEach(item => {
  const title = item.querySelector(".accordion-title");
  title.addEventListener("click", () => {
    accordions.forEach(i => i.classList.remove("active"));
    item.classList.toggle("active");
  });
});

// Фильтры галереи
const filterButtons = document.querySelectorAll(".filters button");
const images = document.querySelectorAll(".gallery img");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    images.forEach(img => {
      img.style.display =
        category === "all" || img.dataset.category === category
          ? "block"
          : "none";
    });
  });
});

// Модальное окно
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});
closeBtn.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
