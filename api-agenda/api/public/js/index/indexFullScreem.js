isFullScreen = false;
var elem = document.querySelector(".fundo");
var painel = document.querySelector(".turmas");
var botao = document.querySelector('#full');
var maxScrollLeft = painel.scrollWidth - painel.clientWidth;

function AtivarDesativarFS() {

    //Estado atual ativado "FullScreen".
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      isFullScreen = true;
      painel.style.height = '100vh';
      painel.style.background = '#ffffff';
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
      painel.style.height = '73vh';    
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

    var play = setInterval(autoplay, 40);

    // pausar a função carousel
  painel.addEventListener("click", () => {
    clearInterval(play);
  });

  // continuar a função carousel
  painel.addEventListener("dblclick", () => {
    return play = setInterval(autoplay, 40);
  });

}

// Função carousel
function autoplay() {
  if(painel.scrollLeft > (maxScrollLeft -1)) {
    painel.scrollLeft -= maxScrollLeft;
  } else {
    painel.scrollLeft += 1;
  }
}


