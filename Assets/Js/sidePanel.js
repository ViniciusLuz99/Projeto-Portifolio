// /* Set the width of the sidebar to 300px (show it) */
// function openNav() {
//   document.getElementById("mySidepanel").style.width = "300px";
// }
// /* Set the width of the sidebar to 0 (hide it) */
// function closeNav() {
//   document.getElementById("mySidepanel").style.width = "0";
// }
/*Codigo antigo acima, novo abaixo*/
/**
 * Abre o painel lateral (menu).
 * Se o painel já estiver aberto, fecha-o.
 * Se estiver fechado, abre-o definindo a largura como 300px.
 */
function openNav() {
  var sidepanel = document.getElementById("mySidepanel");
  if (sidepanel.style.width === "50%") {
    closeNav(); // Chama a função closeNav() se o painel já estiver aberto.
  } else {
    sidepanel.style.width = "50%"; // Abre o painel definindo a largura como 50%.
  }
}

/**
 * Fecha o painel lateral (menu) definindo a largura como 0.
 */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
