import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/main-layout";
import CallTradeDetails from "./pages/call-trade-details";
import HelpSupport from "./pages/help-support";
import RmDetails from "./pages/rm-details";
import RaiseTicket from "./pages/help-support/raise-ticket";
import OpenTicket from "./pages/help-support/open-ticket";
import CloseTicket from "./pages/help-support/close-ticket";

function App() {
  return (
    <BrowserRouter basename="/LKPWebLink">
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/call-trade-details" element={<CallTradeDetails />} />

        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/help-support/raise-ticket" element={<RaiseTicket />} />
        <Route path="/help-support/open-ticket" element={<OpenTicket />} />
        <Route path="/help-support/close-ticket" element={<CloseTicket />} />

        <Route path="/rm-details" element={<RmDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
