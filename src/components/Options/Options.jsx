/* eslint-disable react/prop-types */
const Options = ({ options, onClick, onReset, totalFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onClick(option)}>
          {option}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};
export default Options;
