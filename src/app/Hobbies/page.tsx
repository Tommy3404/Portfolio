import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Hobbies() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Tommy McClure</h1>
        <div style={{display: "flex", gap: "20px", paddingRight: "20px"}}>
        <Link className={styles.links} href="/">Home</Link>
        <Link className={styles.links} href="../Projects">Projects</Link>
      </div>
      </div>
      <div className={styles.title}>
        <h1>Hobbies</h1>
      </div>
      

      
      
    </div>
  );
}