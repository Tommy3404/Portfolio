import Link from "next/link";
import styles from "./page.module.css";

export default function Reading() {
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

      {/* Main content */}
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Books I Have Read</h1>
        </div>

        <div className={styles.books}>
          <div className={styles.book}>
            <div className={styles.thoughts}>
              <p>Reading <em>The Hobbit</em> was a delightful and inspiring experience because it masterfully blends adventure, humor, and rich world-building in a way that feels timeless. I was captivated by Bilbo’s transformation from a cautious, home-loving hobbit into a clever and brave hero, showing that courage can come from the most unexpected places. The journey through forests, mountains, and encounters with trolls, goblins, and dragons kept me on the edge of my seat, while Tolkien’s vivid descriptions and subtle humor made the world feel alive. Beyond the adventure, the story made me reflect on the importance of friendship, loyalty, and stepping out of one’s comfort zone, leaving me with a sense of wonder and inspiration long after finishing the book.
</p>
            </div>
            <div className={styles.hover}>
              <img src="./Hobbit.jpeg" alt="Hobbit" />
              <p className={styles.gist}>
                "The Hobbit" by J.R.R. Tolkien, follows Bilbo Baggins as he joins a group of dwarves on an epic quest to reclaim treasure from Smaug the dragon, encountering trolls, goblins, and the mysterious Gollum along the way.
              </p>
            </div>
          </div>

          <div className={styles.book}>
            <div className={styles.thoughts}>
              <p>I really enjoyed reading this book. As someone who has played the game "The Legend of Zelda Ocarina of Time", I feel like this book matches and even improves on the story. The writer game Link a voice and even gave some details about the other characters and some of the bosses! I would highly recommend this book if you are a fan of the game, or even if you just want to know the story of Ocarina of Time without playing the game.</p>
            </div>
            <div className={styles.hover}>
              <img src="./LoZ OOT.jpeg" alt="OOT" />
              <p className={styles.gist}>
                In Hyrule, Link embarks on a quest to recover the Spiritual Stones and stop Ganondorf. Guided by Navi and Princess Zelda, he faces dangerous challenges, awakens as the Hero of Time, and restores peace.
              </p>
            </div>
          </div>

          <div className={styles.book}>
            <div className={styles.thoughts}>
              <p>Reading <em>Ready Player One</em> was an exhilarating experience for me because it combined a thrilling adventure with a deep dive into ’80s pop culture, which felt nostalgic and clever even for someone who didn’t grow up in that era. I was drawn to Wade’s journey—not just the high-stakes quest for the Easter egg, but his growth as a character learning to connect with others in both the virtual and real worlds. The book made me think about how technology can be both an escape and a trap, and it reminded me of the value of real human relationships amidst digital distractions. Overall, I found it fun, thought-provoking, and surprisingly heartfelt, balancing action and emotion in a way that kept me engaged from start to finish.
</p>
            </div>
            <div className={styles.hover}>
              <img src="./ReadyPlayerOne.png" alt="ReadyPlayerOne" />
              <p className={styles.gist}>
                "Ready Player One" by Ernest Cline, follows Wade Watts in a virtual reality world called the OASIS as he hunts an Easter egg hidden by its creator, facing puzzles and rivals while learning about friendship and courage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className={styles.contact}>
        <h2>Contact Information</h2>
        <p>Email: <a href="https://mail.google.com/mail/?view=cm&to=luckyluigi34@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link}>luckyluigi34@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Tommy3404/Tommy3404" target="_blank" rel="noopener noreferrer" className={styles.link}>Tommy3404</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/tommy-mcclure-55879b353/" target="_blank" rel="noopener noreferrer" className={styles.link}>Tommy McClure</a></p>
      </div>
    </div>
  );
}
