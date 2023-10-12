import React, { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import { Container } from "./index.styled";
import Notification from "./Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState({
    like: 0,
    neutral: 0,
    dislike: 0
  });

  const countTotalFeedback = () => {
    const { like, neutral, dislike } = feedback;
    const feedbackValues = Object.values(feedback);
    return feedbackValues.reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { like } = feedback;
    const total = countTotalFeedback();
    const percentage = total === 0 ? 0 : (like / total) * 100;
    return Math.round(percentage) + "%";
  };

  const handleFeedback = (buttonName) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [buttonName]: prevFeedback[buttonName] + 1
    }));
  };

  const { like, neutral, dislike } = feedback;
  const total = countTotalFeedback();

  return (
    <Container>
      <Section title="SHARE YOUR EXPERIENCES">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="STATISTIC">
        {total > 0 ? (
          <Statistics
            good={like}
            neutral={neutral}
            bad={dislike}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="THERE IS NO FEEDBACK" />
        )}
      </Section>
    </Container>
  );
};

export default App;