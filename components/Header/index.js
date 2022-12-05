import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <img
        src="https://github.com/jpedroh.png?size=320"
        alt="A picture of me"
      />
      <h1>Hi there, I'm João Pedro 👋</h1>
      <p>
        Currently, a Software Engineering Intern{" "}
        <a href="https://www.cesar.org.br/en" rel="noopener" target="_blank">
          @CESAR
        </a>{" "}and a Computer Science student{" "}
        <a href="https://www.cin.ufpe.br/" rel="noopener" target="_blank">
          @UFPE
        </a>.
      </p>
    </header>
  );
};

export default Header;
