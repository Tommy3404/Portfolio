import Link from "next/link";
import styles from "./page.module.css";

export default function Projects() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Tommy McClure</h1>
        <div style={{ display: "flex", gap: "20px", paddingRight: "20px" }}>
          <Link className={styles.links} href="/">Home</Link>
          <Link className={styles.links} href="../Hobbies">Hobbies</Link>
        </div>
      </div>

      {/* Title */}
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>

      {/* Projects */}
      <div className={styles.projects}>
        {/* Portfolio with clickable link */}
        <div className={styles.project}>
          <div className={styles.hover}>
            <img src="./Portfolio.png" alt="Portfolio1.0" />
            <a
              href="https://tommy3404.github.io/My-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Portfolio 1.0
            </a>
            <p className={styles.description}>
              This is my first portfolio page. I designed it my first year at Fort Hays Tech Northwest.
            </p>
          </div>
        </div>

        {/* Scary Story project */}
        <div className={styles.project}>
          <div className={styles.hover}>
            <img src="./ScaryStory.png" alt="Scary Story" />
            <a
              href="https://northwest-tech.github.io/PumpkinWebsite/TheLastCommit/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              The Last Commit
            </a>
            <p className={styles.description}>
              This is a scary story page that I made when the entire class was tasked to design a website that had scary stories for Halloween.
            </p>
          </div>
        </div>

        {/* National Park project */}
        <div className={styles.project}>
          <div className={styles.hover}>
            <img src="./NationalPark.png" alt="National Park Project" />
            <a
              href="https://northwest-tech.github.io/NationalParkExplorer/parks/rockymountain.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              National Park Website
            </a>
            <p className={styles.description}>
              This was the first project that the entire class had to do together. We each made a website about a national park and then combined them into one website.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
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
