const Competences = () => {
  return (
    <>
      <section className="frontend">
        <img className="logoJs" src="../assets/logo/js.png" alt="logo JS" />
        <img className="logoReact" src="../assets/logo/react.png" alt="logo React"/>
        <img className="logoCss" src="../assets/logo/css.png" alt="logo CSS" />
        <button>Front-end</button>
      </section>

      <section className="backend">
        <img className="logoNode" src="../assets/logo/node.png" alt="logo Node" />
        <img className="logoExpress" src="../assets/logo/express.png" alt="logo express" />
        <img className="logoMongo" src="../assets/logo/mongo.png" alt="logo mongoDB" />
<button>Back-end</button>
      </section>

      <section className="bannière">
  {/* faire une background grisé autour  */}
        <p>J'ai pu travailler avec : </p>
        <img className="logoTailwind" src="../assets/logo/tailwind.png" alt="logo Tailwind" />
        <img className="logofigma" src="../assets/logo/figma.png" alt="logo Figma" />
        <img className="logoCanva" src="../assets/logo/canva.png" alt="logo Canva" />
        <img className="logoHtml" src="../assets/logo/html.png" alt="logo Html" />
        <img className="logoSql" src="../assets/logo/sql.png" alt="logo SQL" />
        <img className="logoSass" src="../assets/logo/sass.png" alt="logo SASS" />
        <img className="logoGit" src="../assets/logo/git.png" alt="logo Git" />
        <img className="logoBash" src="../assets/logo/bash.png" alt="logo Bash" />

      </section>
    </>
  );
};

export default Competences;
