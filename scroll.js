// 헤더 메뉴 클릭시 지정된 위치로 스크롤 이동
jQuery(document).ready(function($) { 
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top-80}, 300);  
  });
});   

// 스크롤시 헤더 색상 변경
const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;


window.addEventListener("scroll", () => {
      if (window.scrollY > headerHeight) {
      header.setAttribute("style", "background: white; border-bottom: 1px solid #eee; transition: all ease 0.7s;");
      } else {
      header.setAttribute("style", "background: transparent; transition: all ease 0.7s;");
      }     
});