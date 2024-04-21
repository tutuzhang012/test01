// script.js
let index = 0; // 当前图片索引

function showSlide(n) {
  const slides = document.querySelectorAll('.carousel-images img');
  if (n >= slides.length) { index = 0; }    // 如果n的值超过图片数量，回到第一张
  if (n < 0) { index = slides.length - 1; } // 如果n的值小于0，跳到最后一张
  
  // 先隐藏所有图片
  slides.forEach((slide) => {
    slide.style.display = "none"; 
  });
  
  // 显示当前索引的图片
  slides[index].style.display = "block"; 
}

function moveSlide(n) {
  showSlide(index += n);
}

// 初始化轮播到第一张图片
showSlide(index);
