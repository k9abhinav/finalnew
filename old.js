'use strict'
const courseBox = document.querySelector(".course-box");
const slideBox = document.querySelectorAll(".course-box-box");
const leftbtn = document.getElementById("leftbtn")
const rightbtn = document.getElementById("rightbtn")
// console.log(slideBox);
let count = 0;
slideBox.forEach((slide, i) => {
  let val = `(slide.style.left = ${i * 101}%)`;
  console.log(val);
});
const goPrev = () => {
  count--;
  console.log("yes");
  slideShow();
  console.log(count)
  if(count == 6){
    rightbtn.style.opacity = 0.5;
    
  }
  else{
    rightbtn.style.opacity = 1;
  }
  if(count == 0){
    leftbtn.style.display = "none"
  }
  if(count==5){
    rightbtn.style.display = "block"
  }
};
const goNext = () => {
  count++;
  console.log("yes");
  slideShow();
console.log(count)
if(count == 6){
  rightbtn.style.display = "none"
  leftbtn.style.opacity =1;
}
else{
  rightbtn.style.opacity = 1;
  
}
if(count==1){
  leftbtn.style.display = "block"
}
};
const slideShow = () => {
  // console.log("yay");
  slideBox.forEach((slide) => {
    count = count === slideBox.length ? 0 : count < 0 ? slideBox.length - 1 : count;
    slide.style.transform = `translateX(-${count * 101}%)`;
  });
};


//slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  // autoplay:{
  //   delay:1500
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//zindex

// const about = document.querySelector(".about");


// 


// COUNTERRRRRRRRRRRRRRRR

const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
(entries, observer) => {
  const [entry] = entries;
  // console.log(entry);

  // if (entry.isIntersecting == false)
  if (!entry.isIntersecting) return;

  // animate number counter

  const counterNum = document.querySelectorAll(".counter-numbers");

  const speed = 200;

  counterNum.forEach(curElem => {
    const updateNumber = () => {
      const targetNumber = parseInt(curElem.dataset.number);
      // console.log(targetNumber);
      const initialNum = parseInt(curElem.innerText);
      // console.log(initialNum);

      const incrementNumber = Math.trunc(targetNumber / speed);
      // console.log(incrementNumber);

      if (initialNum < targetNumber) {
        curElem.innerText = `${initialNum + incrementNumber}+`;
        setTimeout(updateNumber, 10);
      }
    };

    updateNumber();
  });

  observer.unobserve(workSection);
},
{
  root: null,
  threshold: 0 });



workObserver.observe(workSection);

// COUNTER ANIMATTTTIONNNNNNNNNNNNNNNN ENDDDDDDDD


