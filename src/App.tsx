import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/main-layout";
import CallTradeDetails from "./pages/call-trade-details";
import HelpSupport from "./pages/help-support";
import RmDetails from "./pages/rm-details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/call-trade-details" element={<CallTradeDetails />} />

        <Route path="/help-support" element={<HelpSupport />} />

        <Route path="/rm-details" element={<RmDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
