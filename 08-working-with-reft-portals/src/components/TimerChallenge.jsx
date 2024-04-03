import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  

  function onClickHandler() {
   
    timer.current = setInterval(timerHandle, targetTime *10);
    setTimeStarted(true);
  }
  function timerHandle() {
    setTimeRemaining(prevTimeRemaining => prevTimeRemaining -10);
    console.log(dialog.current)
    dialog.current.open();
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime}  result='lost'></ResultModal>
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost</p>}
      <p className="challenge-time">
        {targetTime}
        {targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : onClickHandler}>
          {timerStarted ? "Stop" : "Start"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Timer us running" : "Timer inactive"}
      </p>
    </section>
    </>
  );
}
