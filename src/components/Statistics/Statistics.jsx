import { StatisticsItem } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <StatisticsItem>
          <p>GOOD: {good}</p>
        </StatisticsItem>
        <StatisticsItem>
          <p>NATURAL: {neutral}</p>
        </StatisticsItem>
        <StatisticsItem>
          <p>BAD: {bad}</p>
        </StatisticsItem>
        <StatisticsItem>
          <p>TOTAL: {total}</p> {/* Використовуйте total з малими літерами */}
        </StatisticsItem>
        <StatisticsItem>
          <p>Positive percentage: {positivePercentage}</p> {/* Використовуйте positivePercentage з малими літерами */}
        </StatisticsItem>
      </ul>
    </>
  );
};

export default Statistics;