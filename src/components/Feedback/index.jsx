import { useState } from "react";
import styles from "./style.module.css";

export default function Feedback() {
 const [feedback, setFeedback] = useState({ Good: 0, Bad: 0, Neutral: 0 });

  function countTotalFeedback() {}

  function countPositiveFeedbackPercentage() {}

  function handleChange(event) {};
  

  return (
    <div>
      <h1 className={styles.title}>Statistics</h1>
      <button className={styles.buttons} onClick={handleChange}>
        Good
      </button>
      <button className={styles.buttons} onClick={handleChange}>
        Neutral
      </button>
      <button className={styles.buttons} onClick={handleChange}>
        Bad
      </button>
    </div>
  );
}
