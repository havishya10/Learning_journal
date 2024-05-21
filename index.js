const heroSecEl = document.getElementById("hero-blog-title");
const heroBlogEl = document.getElementById("heroBlog");
const recentPostsEl = document.getElementById("recentPosts");
const mainEl = document.getElementById("main");
const aboutMeEl = document.getElementById("about-me");
const aboutEL = document.getElementById("about");
heroSecEl.addEventListener("click", function () {
  mainEl.classList.add("d-none");
  heroBlogEl.classList.remove("d-none");
  recentPostsEl.classList.remove("d-none");
  aboutMeEl.classList.add("d-none");
});
aboutEL.addEventListener("click", function () {
  mainEl.classList.add("d-none");
  heroBlogEl.classList.add("d-none");
  aboutMeEl.classList.remove("d-none");
  recentPostsEl.classList.remove("d-none");
});
