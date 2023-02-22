import "./App.css";
import Sence from "./components/Sence";
import preval from "preval.macro";

function App() {
  return (
    <>
      <Sence />
      <p>
        Build Date: {preval`module.exports = new Date().toLocaleString();`}.
      </p>
    </>
  );
}

export default App;
