/* eslint-disable react/prop-types */
import s from "./Options.module.css";

const Options = ({ options, onClick, onReset, totalFeedback }) => {
  return (
    <div className={s.wrapper}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onClick(option)}
          className={s.optionBtn}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={onReset} className={s.resetBtn}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
