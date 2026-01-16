import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Card/>
      </main>
      <Footer />
    </>
  );
}

export default App;
