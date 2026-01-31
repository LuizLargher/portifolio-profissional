import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div>
          <div className="title">
            <h2>Luiz Guilherme Largher Gomes</h2>
            <h3>Desenvolvedor Full Stack</h3>
          </div>
          <div className="social-links">
            <a href="https://github.com/LuizLargher/" target="_blank">
              <img src="../public/icons/github.svg" alt="" />
              <span>github</span>
            </a>
            <a href="https://www.linkedin.com/in/lg-larghergomes/" target="_blank">
              <img src="../public/icons/linkedin.svg" alt="" />
              <span>linkedin</span>
            </a>
            <a href="https://www.instagram.com/larghergomes.lg/" target="_blank">
              <img src="../public/icons/instagram.svg" alt="" />
              <span>instagram</span>
            </a>
            <a href="https://wa.me/5551996600116" target="_blank">
              <img src="../public/icons/whatsapp.svg" alt="" />
              <span>whatsapp</span>
            </a>
            <a href="mailto:lg.larghergomes@gmail.com" target="_blank">
              <img src="../public/icons/email.svg" alt="" />
              <span>email</span>
            </a>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <span>Feito por DevLG</span>
          <span>
            &copy; 2026 Luiz Guilherme Largher Gomes. Todos os direitos
            reservados.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
