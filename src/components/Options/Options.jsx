/* eslint-disable react/prop-types */
const Options = ({ options, onClick }) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};
export default Options;
