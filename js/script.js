const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const projetos = [
  {
  titulo: "projeto CEP",
  descricao: "Buscador de CEP com informações completas de endereçosutilizando API ViaCEP, desenvolvido com JavaScript moderno.",
  imagem: "https://localizarcep.com/assets/images/blog/sobre-cep.jpg",
  link: "link-aqui"
},
{
  titulo: "projeto cruzeiro",
  descricao: "Maior de Minas",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJI942TcyF6MvU6FACh0ohLZid5GttWI1o0Q&s",
  link: "link-aqui"
},
{
  titulo: "projeto busca Github",
  descricao: "Buscando perfil GitHub",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJI942TcyF6MvU6FACh0ohLZid5GttWI1o0Q&s",
  link: "projetos/busca_github/index.html"
}

];

const galeriaProjetos = document.getElementById("galeriaProjetos");

projetos.forEach(projeto => {
  galeriaProjetos.innerHTML += `
  <article class="project-card">
    <div
        class="project-image"
          style="
          background-image: url('${projeto.imagem}');
        "
    ></div>
    <div class="project-info">
        <h3>${projeto.titulo}</h3>
        <p>
            ${projeto.descricao}
        </p>
        <a href="${projeto.link}" class="project-link">Ver Detalhes</a>
    </div>
  </article>`
})

