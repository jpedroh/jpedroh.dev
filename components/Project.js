import styles from "../styles/Project.module.css";

const Project = ({ title, link, subtitle, description }) => {
  return (
    <div className={styles.container} role="listitem" aria-label={title}>
      <h3>
        <a href={link} target="_blank" rel="noopener">
          {title}
        </a>
      </h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Project;
