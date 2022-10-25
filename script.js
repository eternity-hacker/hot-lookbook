//
const searchLink = document.querySelector(".search-link");
const searchContainer = document.querySelector("#search-container");
const exitLink = document.querySelector(".exit-container");

searchLink.addEventListener("click", function () {
  searchContainer.style.display = "flex";
});

exitLink.addEventListener("click", function () {
  searchContainer.style.display = "none";
});
