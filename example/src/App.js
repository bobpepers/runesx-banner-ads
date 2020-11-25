import React, { useState, useEffect } from "react";

import RunesAd from "runesx-banner-ads";

const App = () => {
  const [triggerOne, setTrigger1] = useState(0);
  const [triggerTwo, setTriggerTwo] = useState(0);

  useEffect(() => {
    setInterval(() => setTrigger1(triggerOne + 1), 10000);
  }, [triggerOne, triggerTwo]);

  return (
    <div className="App">
      <RunesAd
        adZoneId={1}
        trigger={[
          triggerOne,
          triggerTwo,
        ]}
      />
    </div>
  );
};

export default App;