import React, { useState, useEffect } from "react";
import { calculateCountdownFromNow, Container } from "./utils";

const countdownDate = "2022-11-02 12:00";

function Countdown() {
  const [
    {
      expired,
      values: { days, hours, minutes, seconds },
    },
    setResult,
  ] = useState(() => calculateCountdownFromNow(countdownDate));

  useEffect(() => {
    if (expired) return undefined;
    const intervalId = setInterval(
      () => setResult(calculateCountdownFromNow(countdownDate)),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [expired]);
  return (
    <Container>
      {expired ? "It's the time" : `${days}d ${hours}h ${minutes}m ${seconds}s`}
    </Container>
  );
}

export default Countdown;
