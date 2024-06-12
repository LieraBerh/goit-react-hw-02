/* eslint-disable react/prop-types */
const Feedback = ({ state, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul>
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
