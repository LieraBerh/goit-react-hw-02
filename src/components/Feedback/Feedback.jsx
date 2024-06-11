/* eslint-disable react/prop-types */
const Feedback = ({ state, total }) => {
  return (
    <div>
      <ul>
        {Object.entries(state).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <p>Total:{total}</p>
    </div>
  );
};
export default Feedback;
