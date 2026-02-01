import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <section id="contacts">
        <h2 className="shine">contate-me</h2>
        <div className="container contact-links">
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
      </section>
    </>
  );
}

export default Contact;
