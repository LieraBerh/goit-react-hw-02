import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(state).reduce(
    (acc, feedback) => acc + feedback,
    0
  );

  return (
    <>
      <Description />
      <Options options={Object.keys(state)} onClick={updateFeedback} />
      {totalFeedback > 0 && <Feedback state={state} total={totalFeedback} />}
      {totalFeedback <= 0 && <Notification />}
    </>
  );
}

export default App;
