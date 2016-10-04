// Simple parallax and suddle disappear.
window.onscroll = (function(){
  var titleImg = document.getElementById('big-img');
  if(window.pageYOffset > 0 && window.pageYOffset < screen.height){
   titleImg.style.opacity = Math.abs((window.pageYOffset/screen.height) -1 );
   titleImg.style.backgroundPosition = "0px -"+window.pageYOffset+"px"
   }
});
