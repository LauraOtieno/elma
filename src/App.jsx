import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ElmaHealthcare from "./Components";
import ElmaLogin from "./Authentication";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ElmaHealthcare />} />
        <Route path="/auth" element={<ElmaLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
