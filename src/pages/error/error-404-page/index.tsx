import styles from "./error-404-page.module.css";

const Error404Page = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["error-404-text-container"]}>
        <h1 className={styles["title"]}>404</h1>
        <p className={styles["description"]}>Page not found</p>
      </div>
    </div>
  );
};

export default Error404Page;
