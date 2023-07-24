import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styled from "styled-components";
//pages/minwoo
import MyPage from "./pages/minwoo/myPage";
import WritePage from "./pages/minwoo/findEquip/write";
import FindPage from "./pages/minwoo/findEquip/find";
//pages/semin
import Agreement from "./pages/semin/agreement";
import Join from "./pages/semin/join";
import Login from "./pages/semin/login";
import Start from "./pages/semin/start";
import AfterLogin from "./pages/semin/afterlogin";

const App = () => {
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
        <Styled />
        <Routes>
          {/*민우쓰가 적은 경로*/}
          {/*<Route path="/" element={<WritePage />} />
          <Route path="/find" element={<FindPage />} />
          <Route path="/myPage" element={<MyPage />} />
      <Route path="/home" element={<Start />} />*/}

          {/*세민쓰가 적은 경로*/}
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Start />} />
          <Route path="/afterlogin" element={<AfterLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
