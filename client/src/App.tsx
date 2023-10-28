import { Route, Routes } from "react-router-dom";
import { Step1 } from "./pages/Step1";
import { Step2 } from "./pages/Step2";
import { Step3 } from "./pages/Step3";
import { Step4 } from "./pages/Step4";
import Result from "./pages/Result";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Step1 />} />
      <Route path="/2" element={<Step2 />} />
      <Route path="/3" element={<Step3 />} />
      <Route path="/4" element={<Step4 />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
