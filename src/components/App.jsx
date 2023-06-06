import { useState } from "react";
import Feedback from "./Feedback/index.jsx";
import SectionTitle from "./SectionTitle/sectionTitle.jsx";

export const App = () => {
  const [feedback, setFeedback] = useState({ Good: 0, Bad: 0, Neutral: 0 });

  function countTotalFeedback() {
    return feedback.Good + feedback.Bad + feedback.Neutral;
  }

  function countPositiveFeedbackPercentage() {
    const total = feedback.Good + feedback.Neutral + feedback.Bad;
    const positive = feedback.Good;
    return total === 0 ? 0 : Math.round((positive / total) * 100);
  }

  function handleChange(event) {
    setFeedback((previous) => {
      return {
        ...previous,
        [event.target.textContent]: previous[event.target.textContent] + 1,
      };
    });
  }

  return (
    <div>
      <SectionTitle title={"Please Leave Feedback"} subtitle={"Statistics"} />
      <Feedback
        good={feedback.Good}
        neutral={feedback.Neutral}
        bad={feedback.Bad}
        onClick={handleChange}
        calcPositive={countPositiveFeedbackPercentage}
        countTotal={countTotalFeedback}
      />
    </div>
  );
};

