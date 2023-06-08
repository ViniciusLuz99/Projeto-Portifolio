
// Inicializar o carrossel
$(document).ready(function () {
  $(".projectList").owlCarousel({
    navSpeed: 150,
    center: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    items: 1, // Número de itens visíveis por vez
    loop: true, // Repetir o carrossel continuamente
    autoplay: true, // Ativar reprodução automática
    autoplayTimeout: 5500, // Tempo de espera entre os slides (em milissegundos)
    lazyLoad: true,
    autoplayHoverPause: true,
    dots: true, // Ocultar os pontos indicadores
    nav: true, // Exibir botões de navegação
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
  });
});