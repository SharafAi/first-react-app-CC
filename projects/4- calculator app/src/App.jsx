import styles from "./App.module.css";
import Display from "./components/Display.jsx"
import ButtonContainer from "./components/ButtonsContainer.jsx"

function App() {
  return (
    <div className={styles.Calculator}>
      <Display />
      <ButtonContainer />
      
    </div>
  );
}

export default App;
