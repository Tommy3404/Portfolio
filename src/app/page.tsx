"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import BlackjackGame from "../app/blackjackgame/page";

export default function Home() {
  const [showBlackjack, setShowBlackjack] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Tommy McClure</h1>
        <div style={{ display: "flex", gap: "20px", paddingRight: "20px" }}>
          <Link className={styles.links} href="../Projects">Projects</Link>
          <Link className={styles.links} href="../Hobbies">Hobbies</Link>
          <Link className={styles.links} href="../blackjackgame">Black Jack</Link>
        </div>
      </div>

      <div className={styles.title}>
        <h1>About Me</h1>
      </div>

      <div className={styles.align}>
        <div className={styles.textSection}>
          <div className={styles.description}>
            <p>Hello, my name is Tommy McClure. I am 21 years old and attending college at Fort Hays Tech Northwest. Here are some interesting facts about me:</p>
            <ul>
              <li>I wrestled for 9 years.</li>
              <li>I like to play video games</li>
              <li>I want to become a game developer</li>
              <li>I am currently certified in Swift</li>
            </ul>
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
        <p>GitHub: 
          <a 
          href="https://github.com/Tommy3404/Tommy3404"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}>
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
