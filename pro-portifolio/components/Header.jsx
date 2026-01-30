import "../styles/Header.css";
function Header() {
  return (
    <>
      <header>
        <nav className="container">
          <a href="#hero">Início</a>
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#skills">Habilidades</a>
          <a href="#exp">Experiências</a>
          <a href="#">Contato</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
