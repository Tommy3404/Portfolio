import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Tommy McClure</h1>
        <div style={{display: "flex", gap: "20px", paddingRight: "20px"}}>
          <Link className={styles.links} href="../Projects">Projects</Link>
          <Link className={styles.links} href="../Hobbies">Hobbies</Link>
          
      </div>
      </div>
      <div className={styles.title}>
        <h1>About Me</h1>
      </div>
      
      <div className={styles.align}>
  
  <div className={styles.textSection}>
    <div className={styles.description}>
      <p>Hello, my name is Tommy McClure. I am 20 years old and attending college at Fort Hays Tech Northwest. Here are some interesting facts about me:</p>
      <ul>
        <li>I wrestled for 9 years.</li>
        <li>I like to play video games</li>
        <li>I want to become a game developer</li>
        <li>I am currently certified in Swift</li>
      </ul>




      {/* <p>
        My name is Tommy McClure. I am 19 years old. I have 3 sisters, a mom, a dad, a niece, and a 
        nephew. I am in my freshman year of college. I used to wrestle at FHNW. I am studying app and 
        web development. I am a full stack developer in MERN (MongoDB, Express, React, Node.js) and iOS development. 
        I have an Associate Certification in App Development with Swift. I have expertise in web development, 
        iOS app development, and being proficient in using git and github. I am currently a student at Fort 
        Hays Tech Northwest in the App Development and Emerging Technologies program.
      </p> */}
    </div>

    <div className={styles.Techstack}>
      <div className={styles.tech}>
        <h2>Tech Stack</h2>
      </div>
      <div className={styles.list}>
        <ul>
          <li>Xcode</li>
          <li>Swift</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div className={styles.TM}>
    <img src="./TM.png" alt="TM" />
  </div>
</div>

<div className={styles.contact}>
  <h2>Contact Information</h2>
  <p>Email: luckyluigi34@gmail.com</p>
  <p>GitHub: Tommy3404</p>
  <p>
  LinkedIn: {' '}
  <a 
    href="https://www.linkedin.com/in/tommy-mcclure-55879b353/" 
    target="_blank" 
    rel="noopener noreferrer"
    className={styles.link}
  >
    Tommy McClure
  </a>
  {' '}
</p>

 
</div>

      
      
    </div>
  );
}
