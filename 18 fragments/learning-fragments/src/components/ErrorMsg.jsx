import styles from './ErrorMsg.module.css';


const ErrorMsg = ({ items }) => {

  return <>{items.length === 0 && <h3 className={styles.ErrMsg}>im still hungry</h3>}</>;
};

export default ErrorMsg;
