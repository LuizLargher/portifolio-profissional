import "../styles/Exp.css";

function Exp() {
  return (
    <>
      <section id="exp">
        <div className="container">
          <h2 className="shine">experiências</h2>
          <div className="line container">
            <div className="circle">
                <img src="../public/icons/university.svg" alt="universidade" />
            </div>
            <div className="circle">
                <img src="../public/icons/project.svg" alt="projects" />
            </div>
            <div className="circle">
                <img src="../public/icons/java.svg" alt="java" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Exp;
