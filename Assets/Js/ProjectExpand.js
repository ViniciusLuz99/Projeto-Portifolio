/*expand()
A função expand() é responsável por expandir a seção de projetos secundários.
Ela realiza as seguintes ações:

Define a altura máxima da seção "expand" como "1000px", permitindo que todo o conteúdo seja exibido.
Oculta o botão "seeMoreButton" para evitar que seja clicado novamente.
Exibe o botão "seeLessButton" para permitir que o usuário recolha a seção.*/
const expand = () => {
  document.getElementById("expand").style.maxHeight = "5000px";
  document.getElementById("seeMoreButton").style.display = "none";
  document.getElementById("seeLessButton").style.display = "block";
}

const collapse = () => {
  document.getElementById("expand").style.maxHeight = "100px";
  document.getElementById("seeMoreButton").style.display = "block";
  document.getElementById("seeLessButton").style.display = "none";
}
/*collapse()
A função collapse() é responsável por recolher a seção de projetos secundários.
Ela realiza as seguintes ações:

Define a altura máxima da seção "expand" como "100px", fazendo com que apenas uma parte do conteúdo seja visível.
Exibe o botão "seeMoreButton" para permitir que o usuário expanda a seção novamente.
Oculta o botão "seeLessButton" para evitar que seja clicado novamente.*/
