import { useState } from "react";
const App = () => {
  const [Value, setValue] = useState(0);
  function CountClick() {
    setValue(Value + 1);
  }
  return (
    <div>
      <button onClick={CountClick}>Count Clicks</button>
      <p>Click number : {Value}</p>
    </div>
  );
};
export default App;
