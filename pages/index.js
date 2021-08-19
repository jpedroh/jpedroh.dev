import Header from "../components/Header";
import Project from "../components/Project";
import styles from "../styles/Home.module.css";

const Home = ({ projects }) => {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <h2 className="font-bold">Projects</h2>
        <div role="list">
          {projects.map((project, key) => (
            <Project key={key} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      projects: (await import("../data/projects.json")).default,
    },
  };
}

export default Home;
