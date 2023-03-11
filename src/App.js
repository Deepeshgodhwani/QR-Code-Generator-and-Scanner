import "./App.css";
import QrGenerator from "./components/QrGenerator";
import QrScanner from "./components/QrScanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";

function App() {
  return (
    <div className={``}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/QR-Code-Generator-and-Scanner" element={<Home />} />
          <Route exact path="/QR-Code-Generator-and-Scanner/getStarted" element={<GetStarted />} />
          <Route exact path="/QR-Code-Generator-and-Scanner/gerator" element={<QrGenerator />} />
          <Route exact path="/QR-Code-Generator-and-Scanner/scanner" element={<QrScanner />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
