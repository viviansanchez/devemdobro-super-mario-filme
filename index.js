const openTrailerBtn = document.querySelector(".trailer-btn");
const modal = document.querySelector(".modal");
const closeTrailerBtn = document.querySelector(".close-modal");
const video = document.getElementById("video")
const videoLink = video.src

function toggleModal() {
  modal.classList.toggle("open");
}
 
openTrailerBtn.addEventListener("click", () => {
  // modal.classList.add("open")
  toggleModal();
  video.setAttribute("src", videoLink);
})

closeTrailerBtn.addEventListener("click", () => {
  // modal.classList.remove("open");
  toggleModal()
  video.setAttribute("src", "");
})