import "../styles/Hero.css";

function Hero() {
  return (
    <>
      <section id="hero" className="container">
        <div className="perfil">
          <img src="../public/img/perfil.png" alt="perfil" />
        </div>
        <div className="hero-conjunto container">
          <div className="info">
            <h2>Olá! Me chamo Luiz Guilherme.</h2>
            <p>
              <b>Desenvolvedor Full Stack</b> em constante evolução, apaixonado
              por tecnologias e soluções criativas.
            </p>
          </div>
          <div className="links">
            <a href="../public/cv-lg-1912.pdf" download={true} title="Download CV">
              <img src="../public/icons/download.svg" alt="download" />
            </a>
            <a href="https://github.com/LuizLargher" target="_blank" title="GitHub">
              <img src="../public/icons/github.svg" alt="github isotipo"/>
            </a>
            <a href="https://www.linkedin.com/in/lg-larghergomes/" target="_blank" title="LinkedIn" >
              <img src="../public/icons/linkedin.svg" alt="linkedin isotipo" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
