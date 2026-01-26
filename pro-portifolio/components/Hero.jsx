import "../src/styles/Hero.css";

function Hero() {
  return (
    <>
      <section id="about">
        <div className="perfil">
          <img src="../public/img/perfil.png" alt="perfil" />
        </div>
        <div className="about-conjunto">
          <div className="info">
            <h2>Olá! Me chamo Luiz Guilherme.</h2>
            <p>
              <b>Desenvolvedor Full Stack</b> em constante evolução, apaixonado
              por tecnologias e soluções criativas.
            </p>
          </div>
          <div className="links">
            <a href="../public/cv-lg-1912.pdf" download={true}>
              <img src="../public/icons/download.svg" alt="download" title="Download CV" />
            </a>
            <a href="https://github.com/LuizLargher">
              <img src="../public/icons/github.svg" alt="github isotipo" title="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/lg-larghergomes/">
              <img src="../public/icons/linkedin.svg" alt="linkedin isotipo" title="LinkedIn" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
