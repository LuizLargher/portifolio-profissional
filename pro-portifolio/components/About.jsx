import "../styles/About.css";

function About() {
  return (
    <>
      <section id="about">
        <div className="text container">
          <h2 className="shine">sobre mim</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            similique neque perferendis reiciendis eveniet, iusto molestias at
            quo eaque ea hic placeat. Magni, facere? Mollitia, nulla quod?
            Ducimus, laudantium voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laborum
            mollitia totam itaque placeat culpa magni autem, illum distinctio
            accusamus quas? Atque voluptate sunt, saepe fugit id aliquid qui
            incidunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium a esse et maiores inventore rem recusandae? Doloremque
            quo impedit, a esse quis officia, possimus, in delectus fuga cum
            voluptate qui.
          </p>
        </div>
        <div className="cards container">
          <div>
            <img src="../public/icons/code.svg" alt="code" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui odit, numquam illo ipsam iure architecto laboriosam quia laborum quasi quaerat quas inventore eligendi voluptate maxime pariatur voluptatibus cum necessitatibus eius.</p>
          </div>
          <div>
            <img src="../public/icons/database.svg" alt="database" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt aspernatur magni cumque, earum praesentium exercitationem fugit nihil blanditiis nisi aut in velit eos assumenda tempora eligendi odio officiis magnam?</p>
          </div>
          <div>
            <img src="../public/icons/object-connection.svg" alt="oop" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima reiciendis ipsam officiis amet quaerat asperiores autem aut tempore fuga id! Fuga, minima amet tenetur explicabo et natus magnam alias autem?</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
