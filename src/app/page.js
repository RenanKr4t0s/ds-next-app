import Image from "next/image";
import styles from "./page.module.css";
import DrawerAppBar from "./pages/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.textoLindo}>Hello World of Next</h1>
      <h2 className={styles.better}>Eu sou um texto mais normal</h2> 
      <DrawerAppBar />

    </main>
  );
}
