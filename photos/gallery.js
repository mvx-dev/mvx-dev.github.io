const modal = document.getElementById("modal");
const gallery = document.getElementById("gallery");

gallery.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    document.getElementById("largeImg").src = e.target.src;
    document.getElementById("title").innerText = e.target.dataset.title;
    document.getElementById("info").innerText = e.target.dataset.info;
    modal.style.display = "flex";
  }
});

function closeModal() {
  modal.style.display = "none";
}
