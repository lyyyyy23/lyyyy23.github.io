var typed  = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Web Developer","Graphic Artist","Photographer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
})
const header = document.querySelector("header");
const main = document.querySelector("main");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
    main.style.marginTop = `${header.offsetHeight}px`;
  } else {
    header.classList.remove("sticky");
    main.style.marginTop = 0;
  }
}); 


