let readMore = document.querySelectorAll(".more");
for (let i = 0; i < readMore.length; i++) {
  readMore[i].addEventListener("click", function () {
    readMore[i].parentNode.classList.toggle("active");
  });
  console.log(readMore);
}
