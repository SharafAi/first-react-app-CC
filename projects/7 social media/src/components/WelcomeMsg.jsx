import styles from "./WelcomeMsg.module.css";

const WelcomeMsg = () => {
  return (
    <>
      <h1 className={styles.WelcomeMsg}>
        oops! looks like there are no posts here yet.
      </h1>
    </>
  );
};

export default WelcomeMsg;
