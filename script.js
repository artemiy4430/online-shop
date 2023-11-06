const messageBlock = document.querySelector('.message_block');
const okButton = document.querySelector(".message_button");

function showMessageBlock() {
  messageBlock.style.transform = "translateX(0)";
}


function hideMessageBlock() {
  messageBlock.style.transform = "translateX(592px)";
}


setTimeout(showMessageBlock, 2000);


okButton.addEventListener("click", () => {
  hideMessageBlock();
});

document.addEventListener("DOMContentLoaded", function () { 
  const slider = document.querySelector(".slider"); 
  const prevBtn = document.querySelector(".button-l"); 
  const nextBtn = document.querySelector(".button-r"); 
  const slides = document.querySelectorAll(".slide"); 

  let currentIndex = 0; 

  function showSlide(index) { 
      slider.style.transform = `translateX(-${index * 100}%)`; 
  } 

  function goToSlide(index) { 
      currentIndex = index; 
      showSlide(currentIndex); 

  } 

  function goToNextSlide() { 
      currentIndex = (currentIndex + 1) % slides.length; 
      showSlide(currentIndex); 
    
  } 

  function goToPrevSlide() { 
      currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
      showSlide(currentIndex); 
      
  } 



  prevBtn.addEventListener("click", goToPrevSlide); 
  nextBtn.addEventListener("click", goToNextSlide); 


  showSlide(currentIndex); 

});

let background = document.querySelector('.background');

function changeBackgroundColor() {
    if (window.scrollY > 3000) {
        background.classList.remove("scroll-color-change");
    }
    else if (window.scrollY > 1000) {
        background.classList.add("scroll-color-change");
    }
    else {
        background.classList.remove("scroll-color-change");
    }
}

window.addEventListener("scroll", changeBackgroundColor);




// function moveLeft(part) {
//   part.style.transform = 'translateX(-3000px)';
// }
let photo1 = document.querySelector('.photo1'); 
let photo2 = document.querySelector('.photo2'); 
let photo3 = document.querySelector('.photo3')


function moveRight(part) {
  part.style.transform = 'translateX(3000px)';
}

function resetPosition(part) {
  setTimeout(() => {
    part.style.transform = 'translateX(0)';
  },1000);
}
function handlePhoto3Click(part){
photo1.photo2.resetPosition
}


