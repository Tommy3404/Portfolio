import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Sports() {

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Tommy McClure</h1>
        <div style={{ display: "flex", gap: "20px", paddingRight: "20px" }}>
          <Link className={styles.links} href="/">Home</Link>
          <Link className={styles.links} href="../Projects">Projects</Link>
          <Link className={styles.links} href="../Hobbies">Hobbies</Link>
        </div>
      </div>

      {/* Title */}
      <div className={styles.title}>
        <h1>Wrestling</h1>
      </div>

      <div className={styles.wrestling}>
        <p>Wrestling was one of the two main sports I participated in when I was in high school. In wrestling, your goal is to either score more points than your opponent or to pin them. I had been in wrestling for nine years. I had started wrestling when I was in fifth grade. I stopped wrestling after my first year of college wrestling. Throughout my nine years of wrestling, I went to state six times. Out of those six times, I had only placed once. I placed third my junior year.</p>
        <img src="./wrestling.jpeg" alt="wrestling" />
      </div>

      <div className={styles.title}>
        <h1>Football</h1>
      </div>

      <div className={styles.football}>
        <p>Wrestling was the other sport I participated in. I had started playing football in the third grade where the team I was on went undefeated. In football, I mainly played defence. I was a d-linemen, a defensive end, and a middle linebacker. I was also on special teams. I was on the kickoff team, kick return team, the punt team, and punt return team. My senior year, I was awarded mvp for my performance against Hays, KS.</p>
        <img src="./Football.png" alt="Football" />
      </div>

      <div className={styles.contact}>
        <h2>Contact Information</h2>
        <p>
          Email:{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&to=luckyluigi34@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            luckyluigi34@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Tommy3404/Tommy3404"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Tommy3404
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/tommy-mcclure-55879b353/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Tommy McClure
          </a>
        </p>
      </div>
    </div>
  );
}