import Routing from "./routing";
import "./App.css";
import { UseGlobalState } from "./hooks/useGlobalState";

function App() {
  return (
    <UseGlobalState>
      <Routing />
    </UseGlobalState>
  );
}

export default App;
