import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Agreement from "./pages/semin/agreement";
import Join from "./pages/semin/join";
import Login from "./pages/semin/login";
import Start from "./pages/semin/start";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0px auto",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <styled />
        <Routes>
          <Route path="/" element={<Agreement />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/start" element={<Start />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
