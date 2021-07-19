function changeEl(klas){
    return document.querySelector(klas)
}

let menu = changeEl('.menu')
let closeBtn = changeEl('.close')
let headrModal = changeEl('.headr-modal')


menu.addEventListener('click',function(){
      headrModal.classList.add("show-modal")
})
closeBtn.addEventListener('click',()=>{
  headrModal.classList.remove("show-modal")

})


const myBtn = document.querySelectorAll('.js-btn-modal');
const myModalService = document.querySelector(".modal__service");
const myModalBtn = document.querySelector(".btn--modal__x");
const myArrow = document.querySelector(".js-arrow");

myBtn.forEach((btn) => {
  btn.addEventListener("click", (evnt) => {
    if (evnt.currentTarget === btn) {
      myModalService.classList.add("modal__service-active");
    }
  });
});

myModalService.addEventListener("click", (evt) => {
  if (evt.target === myModalService || evt.target === myModalBtn) {
    myModalService.classList.remove("modal__service-active");
  }
});

window.addEventListener("scroll", () => {
  myArrow.classList.toggle("arrow-img-active", window.scrollY > 700);
});

myArrow.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});