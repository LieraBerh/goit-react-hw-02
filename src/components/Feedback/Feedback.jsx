/* eslint-disable react/prop-types */
import s from "./Feedback.module.css";

const Feedback = ({ state, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.feedbackList}>
        {Object.entries(state).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};
export default Feedback;
