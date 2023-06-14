const navBar = document.querySelector(".navbar");
var isParagraphShown = false;

window.addEventListener("scroll",()=>{
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active",windowPosition);
});

function showParagraph(){
    var paragraph = document.getElementById("hidden-paragraph");
    if(isParagraphShown){
        paragraph.style.display = "none";
        isParagraphShown = false;
    } else{
        paragraph.style.display = "block";
        isParagraphShown = true;
    }
}
var accordions = document.querySelectorAll('.accordion');
accordions.forEach(function(accordion) {
  new bootstrap.Collapse(accordion);
});
