import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Hobbies() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Tommy McClure</h1>
        <div style={{ display: "flex", gap: "20px", paddingRight: "20px" }}>
          <Link className={styles.links} href="/">Home</Link>
          <Link className={styles.links} href="../Projects">Projects</Link>
        </div>
      </div>

      <div className={styles.title}>
        <h1>Hobbies</h1>
      </div>

      <div className={styles.hobbies}>
        <Link href="../Sports" className={styles.hover}>
          <img src="./Tommy.png" alt="Sports" />
          <span className={styles.overlay}>Sports</span>
        </Link>

        <Link href="../VideoGames" className={styles.hover}>
          <img src="./DK.jpeg" alt="Video Games" />
          <span className={styles.overlay}>Video Games</span>
        </Link>

        <Link href="../Reading" className={styles.hover}>
          <img src="./LoZ OOT.jpeg" alt="Reading" />
          <span className={styles.overlay}>Reading</span>
        </Link>
      </div>

      {/* Contact Section */}
      <div className={styles.contact}>
        <h2>Contact Information</h2>
        <div className={styles.contactinfo}>
          <p>
  <a 
    href="https://mail.google.com/mail/?view=cm&to=luckyluigi34@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className={styles.link}
  >
    <img src="./gmaillogo.png" alt="gmail" />
  </a>
</p>
        <p> 
          <a 
          href="https://github.com/Tommy3404/Tommy3404"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}>
           
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          
          </a>
        </p>
        <p>
          <a 
            href="https://www.linkedin.com/in/tommy-mcclure-55879b353/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
          
          </a>
        </p>
        </div>
      </div>
    </div>
  );
}
