// 获取li和smabox元素
var li = document.querySelectorAll('li');
// console.log(li);
var smabox = document.querySelector('.smabox');
var FindX2Pro_pic = document.querySelector('.FindX2Pro_pic');
var FindX2_pic = document.querySelector('.FindX2_pic');
var FindX_pic = document.querySelector('.FindX_pic');
// console.log('.bigbox');
li.forEach(function (item, index) {
  item.onmouseover = function () {
    // console.log(1);
    smabox.style.height = '300px';
    setTimeout(function () {
      FindX2Pro_pic.style.height = '150px';
      FindX2Pro_pic.style.left = '850px';
    }, 500);
    setTimeout(function () {
      FindX2_pic.style.height = '150px';
      FindX2_pic.style.left = '850px';
    }, 600);
    setTimeout(function () {
      FindX_pic.style.height = '150px';
      FindX_pic.style.left = '850px';
    }, 700);
  }
  item.onmouseout = function () {
    smabox.style.height = '0px';
    FindX2Pro_pic.style.height = '0px';
    FindX2_pic.style.height = '0px';
    FindX_pic.style.height = '0px';
  }
});


// var mySwiper = new Swiper('.swiper-containaer',{
//   loop: true, // 循环模式选项
//   pagination:{
//     el: '.swiper-pagination',
//     clickable: true,
//     clickableClass : 'my-pagination-clickable',
//   },
// })

var mySwiper = new Swiper('.swiper-container', {
  // direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: true,
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})