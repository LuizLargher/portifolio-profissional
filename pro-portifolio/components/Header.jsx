import "../src/styles/Header.css";
function Header() {
  return (
    <>
      <header>
        <nav className="container">
          <a href="./Hero.jsx">Início</a>
          <a href="./About.jsx">Sobre</a>
          <a href="#">Projetos</a>
          <a href="#">Habilidades</a>
          <a href="./Exp.jsx">Experiências</a>
          <a href="#">Contato</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
