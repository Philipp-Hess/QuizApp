const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("active");
});
