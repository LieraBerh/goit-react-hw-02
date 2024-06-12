import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const defaultState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [state, setState] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("saved-feedback")) || defaultState
    );
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(state));
  }, [state]);

  const updateFeedback = (feedbackType) => {
    setState((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = Object.values(state).reduce(
    (acc, feedback) => acc + feedback,
    0
  );

  const positiveFeedback = Math.round((state.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        options={Object.keys(state)}
        onClick={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback
          state={state}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback <= 0 && <Notification />}
    </>
  );
}

export default App;
