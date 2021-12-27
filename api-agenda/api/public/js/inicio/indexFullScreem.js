isFullScreen = false;
var elem = document.querySelector(".fundo");
var painel = document.querySelector(".turmas");
function AtivarDesativarFS() {
    //Estado atual "FullScreen".
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      isFullScreen = true;
      painel.style.height = '100vh';
      painel.style.background = '#ffffff';
      setInterval(function(){
        painel.scrollBy(1, 0);
      }, 40);
      
   } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
       isFullScreen = true;
   } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
     elem.webkitRequestFullscreen();
      isFullScreen = true;
   } else if (elem.msRequestFullscreen) { /* IE/Edge */
     elem.msRequestFullscreen();
      isFullScreen = true;
   }

   //Se o estado atual for "FullScreen", desativá-lo.

      if (document.fullscreenElement) {
      document.exitFullscreen();
      isFullScreen = false;
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
      isFullScreen = false;
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
      document.webkitExitFullscreen();
      isFullScreen = false;
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
      isFullScreen = false;
    }
}