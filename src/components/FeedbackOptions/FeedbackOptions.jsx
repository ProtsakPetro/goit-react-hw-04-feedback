import { FeedbackList, FeedbackBtn } from "./FeedbackOptions.styled"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map((option, idx) => (
        <li key={idx}>
          <FeedbackBtn onClick={() => onLeaveFeedback(option)}>{option}</FeedbackBtn>
        </li>
      ))}
    </FeedbackList>
  );
}

export default FeedbackOptions;