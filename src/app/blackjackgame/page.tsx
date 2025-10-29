"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

type Card = {
  code: string;
  value: string;
  suit: string;
  score: number;
  image: string;
};

const suits = ["S", "D", "C", "H"];
const values = [
  { value: "A", score: 11 },
  { value: "2", score: 2 },
  { value: "3", score: 3 },
  { value: "4", score: 4 },
  { value: "5", score: 5 },
  { value: "6", score: 6 },
  { value: "7", score: 7 },
  { value: "8", score: 8 },
  { value: "9", score: 9 },
  { value: "0", score: 10 },
  { value: "J", score: 10 },
  { value: "Q", score: 10 },
  { value: "K", score: 10 },
];

function generateDeck(): Card[] {
  const deck: Card[] = [];
  suits.forEach((suit) => {
    values.forEach(({ value, score }) => {
      const code = value + suit;
      const image = `https://deckofcardsapi.com/static/img/${code}.png`;
      deck.push({ code, value, suit, score, image });
    });
  });
  return deck.sort(() => Math.random() - 0.5);
}

export default function BlackjackPage() {
  const router = useRouter();

  const [deck, setDeck] = useState<Card[]>(generateDeck());
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [message, setMessage] = useState("");
  const [playerTotal, setPlayerTotal] = useState(0);
  const [dealerTotal, setDealerTotal] = useState(0);
  const [isDealerTurn, setIsDealerTurn] = useState(false);
  const [roundOver, setRoundOver] = useState(false);
  const [flipDealerCard, setFlipDealerCard] = useState(false);

  const calculateHandTotal = (hand: Card[]) => {
    let total = 0;
    let aceCount = 0;
    hand.forEach((card) => {
      total += card.score;
      if (card.value === "A") aceCount += 1;
    });
    while (total > 21 && aceCount > 0) {
      total -= 10;
      aceCount -= 1;
    }
    return total;
  };

  const startNewRound = () => {
    const newDeck = generateDeck();
    const playerStart = [newDeck.pop()!, newDeck.pop()!];
    const dealerStart = [newDeck.pop()!, newDeck.pop()!];

    setDeck(newDeck);
    setPlayerHand(playerStart);
    setDealerHand(dealerStart);
    setMessage("");
    setIsDealerTurn(false);
    setRoundOver(false);
    setFlipDealerCard(false);
  };

  useEffect(() => {
    setPlayerTotal(calculateHandTotal(playerHand));
  }, [playerHand]);

  useEffect(() => {
    setDealerTotal(calculateHandTotal(dealerHand));
  }, [dealerHand]);

  useEffect(() => {
    if (playerTotal > 21 && playerHand.length > 0 && !isDealerTurn) {
      handleDealerTurn();
    }
  }, [playerTotal]);

  const playerHit = () => {
    if (playerTotal >= 21) return;
    const newDeck = [...deck];
    const card = newDeck.pop()!;
    setDeck(newDeck);
    setPlayerHand((prev) => [...prev, card]);
  };

  const handleDealerTurn = async () => {
    setIsDealerTurn(true);
    setFlipDealerCard(true);
    let newDeck = [...deck];
    let newDealerHand = [...dealerHand];

    await new Promise((res) => setTimeout(res, 600));

    while (true) {
      const dealerNow = calculateHandTotal(newDealerHand);

      if (
        dealerNow >= 17 &&
        !(dealerNow < playerTotal && dealerNow <= 21 && playerTotal <= 21)
      ) {
        break;
      }

      const card = newDeck.pop()!;
      newDealerHand.push(card);

      setDealerHand([...newDealerHand]);
      setDealerTotal(calculateHandTotal(newDealerHand));
      setDeck([...newDeck]);

      await new Promise((res) => setTimeout(res, 900));
    }

    await new Promise((res) => setTimeout(res, 600));

    evaluateRound(newDealerHand);
    setIsDealerTurn(false);
  };

  const playerHold = () => {
    handleDealerTurn();
  };

  const evaluateRound = (finalDealerHand: Card[]) => {
    const finalPlayerTotal = calculateHandTotal(playerHand);
    const finalDealerTotal = calculateHandTotal(finalDealerHand);

    const playerBJ = finalPlayerTotal === 21;
    const dealerBJ = finalDealerTotal === 21;

    let resultMsg = "";

    if (playerBJ && !dealerBJ) {
      setPlayerScore((prev) => prev + 2);
      resultMsg = "You got 21! You win +2 points!";
    } else if (dealerBJ && !playerBJ) {
      setPlayerScore((prev) => prev - 2);
      resultMsg = "Dealer got 21! You lose -2 points!";
    } else if (finalPlayerTotal > 21 && finalDealerTotal > 21) {
      resultMsg = "Both busted! No points change.";
    } else if (finalPlayerTotal > 21) {
      setPlayerScore((prev) => prev - 1);
      resultMsg = "You busted! Dealer wins -1 point.";
    } else if (finalDealerTotal > 21) {
      setPlayerScore((prev) => prev + 1);
      resultMsg = "Dealer busted! You win +1 point!";
    } else if (finalPlayerTotal > finalDealerTotal) {
      setPlayerScore((prev) => prev + 1);
      resultMsg = "You win +1 point!";
    } else if (finalPlayerTotal < finalDealerTotal) {
      setPlayerScore((prev) => prev - 1);
      resultMsg = "Dealer wins -1 point.";
    } else {
      resultMsg = "Tie! No points change.";
    }

    setMessage(resultMsg);
    setRoundOver(true);
  };

  const visibleDealerTotal = () => {
    if (dealerHand.length === 0) return 0;
    if (!isDealerTurn && !roundOver && dealerHand.length > 0) {
      const firstCard = dealerHand[0];
      return calculateHandTotal([firstCard]);
    }
    return dealerTotal;
  };

  return (
    <div className={styles.page}>
      {/* Back Arrow */}
      <button className={styles.backBtn}
        onClick={() => router.push("/")}
      >
        ← Back
      </button>

      <h1 className={styles.title}>Blackjack</h1>
      <div className={styles.score}>Score: {playerScore}</div>

      <div className={styles.table}>
        {/* Dealer Section */}
        <div className={styles.dealer}>
          <div>Dealer ({dealerHand.length > 0 ? visibleDealerTotal() : 0})</div>
          <div className={styles.cards}>
            {dealerHand.map((card, idx) => {
              const isFaceDown = !roundOver && !isDealerTurn && idx === 1;
              const flipClass = flipDealerCard && idx === 1 ? styles.flip : "";
              return (
                <div key={idx} className={`${styles.card} ${flipClass}`}>
                  <img
                    src={isFaceDown ? "https://deckofcardsapi.com/static/img/back.png" : card.image}
                    alt={isFaceDown ? "Hidden card" : card.code}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Player Section */}
        <div className={styles.player}>
          <div>Player ({playerTotal})</div>
          <div className={styles.cards}>
            {playerHand.map((card, idx) => (
              <div key={idx} className={styles.card}>
                <img src={card.image} alt={card.code} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={playerHit} disabled={playerTotal >= 21 || isDealerTurn}>
          Hit
        </button>
        <button onClick={playerHold} disabled={isDealerTurn}>
          Hold
        </button>
        <button onClick={startNewRound}>New Round</button>
      </div>

      <div className={styles.message}>{message}</div>
    </div>
  );
}
