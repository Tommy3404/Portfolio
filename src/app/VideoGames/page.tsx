"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function VideoGames() {
  return (
    <div className={styles.page}>
      {/* Header */}
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
        <h1>Video Games</h1>
      </div>

      {/* Intro Paragraph */}
      <div className={styles.intro}>
        <p>
          Video games have always been a major hobby of mine because they combine
          creativity, storytelling, and problem-solving in a way that no other
          medium can. Playing games inspired me to become a game developer, as I
          wanted to create experiences that could entertain, challenge, and
          connect people just as my favorite games did for me.
        </p>
      </div>

      {/* Games Section */}
      <div className={styles.gamesSection}>
        {/* Game 1 */}
        <div className={styles.game}>
          <p className={styles.thoughts}>
            Link’s Awakening has always been one of my favorite Zelda games. I love how it balances charm and mystery, blending a beautiful art style with heartfelt storytelling. The puzzles are clever, and the dungeons are challenging, but what really stood out to me was the emotional ending. It’s a game that left a lasting impression on me as both a player and an aspiring developer.
          </p>
          <div className={styles.hover}>
            <img src="./Link's Awakening.jpeg" alt="Link's Awakening" />
            <p className={styles.gist}>
              Link’s Awakening follows Link as he awakens on Koholint Island after being shipwrecked. To leave the island, he must awaken the mysterious Wind Fish by collecting eight instruments hidden in dungeons across the land. Along the way, he encounters quirky characters, monsters, and a world that may not be as real as it seems.
            </p>
          </div>
        </div>

        {/* Game 2 */}
        <div className={styles.game}>
          <p className={styles.thoughts}>
            Donkey Kong Bananza is one of the most fun and challenging platformers I’ve ever played. The level design, music, and smooth gameplay make it endlessly replayable. Every time I play, I’m reminded how much I enjoy precision-based games that reward patience and skill. It’s a great balance between frustration and satisfaction.
          </p>
          <div className={styles.hover}>
            <img src="./DK.jpeg" alt="Donkey Kong Bananza" />
            <p className={styles.gist}>
              Donkey Kong Bananza is a 3D platformer where Donkey Kong teams up with Pauline to go on a subterranean adventure to find his bananas after a storm sends him deep underground. Along the way, he must collect "Banandium Gems" and can use various animal-themed power-ups to destroy parts of the environment, solve puzzles, and defeat enemies in an underground world with different biomes
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
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
