const modal = document.getElementById("myModal");
const img= document.querySelector(".gallery");
let modalImg = document.querySelector("#imgs");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];
addEventListener("click",(e) => {
    if(e.target.className === 'gallery') {
    console.log('working');
    let element = e.target;
    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;}
});
span.onclick = function() {
    modal.style.display = "none";
  }