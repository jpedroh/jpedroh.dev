import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <img
        src="https://github.com/jpedroh.png?size=320"
        alt="A picture of me"
      />
      <h1>Hi there, I'm João Pedro 👋</h1>
      <p>
        Currently, a Computer Science student{" "}
        <a href="https://www.cin.ufpe.br/" target="_blank">
          @UFPE
        </a>
      </p>
    </header>
  );
};

export default Header;
