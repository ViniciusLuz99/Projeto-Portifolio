// Função para criar um projeto
function createProject(
  title,
  description,
  technologies,
  image,
  link,
  repository
) {
  // Gera uma lista de ícones das tecnologias usando o array de tecnologias fornecido (Parte fornecida por ChatGPT)
  const techIcons = technologies
    .map((tech) => `<li><i class="${tech}"></i></li>`)
    .join("");

  // Retorna uma string formatada com as informações do projeto
  return `
    <section class="project">
      <div class="projectImg">
        <img src="${image}" alt="${title} Image">
      </div>
      <div class="projectDescription">
       <h3>${title}</h3>
       <p>${description}</p>
        <ul class="techList">${techIcons}</ul>
      </div>
      <div class="projectLinks">
        <a href="${link}" target="_blank">Ver projeto</a>
        <a href="${repository}" target="_blank">Repositório</a>
      </div>
    </section>
  `;
}

// Função para criar o bloco de cartões de projetos
function createCard(projects) {
  // Retorna uma string formatada com os projetos inseridos
  return `
    <section class="projectsCard">
      <div class="projectList">
        ${projects}
      </div>
    </section>
  `;
}

// Array de objetos contendo os projetos
const projects = [
  {
    title: "XYZ Company Website",
    description: "Landpage desenvolvido para fins de aprendizado em HTML, CSS e JavaScript",
    technologies: [
      "devicon-html5-plain",
      "devicon-css3-plain",
      "devicon-javascript-plain",
    ],
    image:
      "https://github.com/ViniciusLuz99/Projeto-XYZ-company-website-P/raw/main/.github/desktop.gif",
    link: "https://xyz-company.vercel.app/",
    repository:
      "https://github.com/ViniciusLuz99/Projeto-XYZ-company-website-P",
  },
  /*--------------------*/
  {
    title: "Projeto 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut vero sequi consectetur?",
    technologies: [
      "devicon-react-plain",
      "devicon-nodejs-plain",
      "devicon-express-original",
    ],
    image: "https://via.placeholder.com/300",
    link: "https://linkdoprojeto2.com",
    repository: "https://linkdoprojeto2.com",
  },
  // Adicione mais projetos conforme necessário
];

let projectCards = "";

// Itera sobre o array de projetos e cria os cartões de projeto
projects.forEach((project) => {
  const projectCard = createProject(
    project.title,
    project.description,
    project.technologies,
    project.image,
    project.link,
    project.repository
  );

  // Adiciona cada cartão de projeto à string `projectCards`
  projectCards += projectCard;
});

// Seleciona o elemento com o ID "projects"
const cardsContainer = document.querySelector("#projects");

// Cria o HTML dos cartões de projeto e o insere no elemento selecionado
const cardMarkup = createCard(projectCards);
cardsContainer.innerHTML = cardMarkup;
