import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 414px;
  height: 736px;

  margin: 0px auto;

  border: 1px solid #000;
  background: #fff;
`;

const TopBox = styled.div`
  margin-top: 10px;
  padding-left: 290px;
`;
const Button = styled.button`
  border: none;
  background-color: #ffffff00;

  color: #000;
  font-family: Inter;
  font-size: 9.389px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-decoration-line: underline;
`;

const TitleBox = styled.div`
  margin-top: 15px;
  padding-left: 80px;
`;
const Line = styled.div`
  width: 350px;
  height: 2px;
  margin-top: 10px;
  margin-left: -45px;
  background-color: #358700;
`;

const MiddleBox = styled.div`
  width: 350px;
  height: 485px;

  margin-left: 36px;
  margin-top: 20px;

  border-radius: 5px;
  background: #eef3eb;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
`;

const TopName = styled.div`
  position: relative;
  margin-top: -45px;
  margin-left: 53px;

  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const TopLevel = styled.div`
  margin-left: 53px;
  color: #225a00;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const MiddleTop = () => {
  return (
    <div
      style={{
        height: "55px",
        paddingLeft: "30px",
        paddingTop: "30px",
      }}
    >
      <img src="./images2/basic.png" />
      <TopName>민지</TopName>
      <TopLevel>행복한 농부</TopLevel>
    </div>
  );
};
const MiddleDate = styled.div`
  background: #fff;
  height: 15px;
`;
const MiddleWhite = styled.div`
  width: 301px;
  height: 360px;

  margin-left: 23px;
  margin-top: 5px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.5);
`;
const WhiteContent = styled.div`
  background: #ff0022;
  height: 180px;

  margin-top: 10px;

  color: #030303;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const WhitePrice = styled.div`
  width: 109px;
  height: 27px;

  margin-top: 10px;
  margin-left: 150px;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;

const BottomBox = styled.div`
  background-color: #00ff22;
  width: 360px;
  height: 80px;
`;
const BottomBtn = styled.div`
  width: 136px;
  height: 38px;
  flex-shrink: 0;

  border-radius: 10px;
  background: #225a00;

  color: #fff;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Find2 = ({ items, setItems }) => {
  const navigate = useNavigate();

  const GoMy = () => {
    navigate("/myPage");
  };

  const Logout = () => {
    navigate("/home");
  };

  const Top = () => {
    return (
      <TopBox>
        <Button onClick={Logout}>로그아웃</Button>
        <Button onClick={GoMy}>마이페이지</Button>
      </TopBox>
    );
  };

  return (
    <Container>
      <Top />
      <TitleBox>
        <img src="/images2/title.png" alt="있농" />
        <Line></Line>
      </TitleBox>

      <MiddleBox>
        <MiddleTop />
        <MiddleDate></MiddleDate>
        <MiddleWhite>
          <div></div>
          <img src="" />
          <WhiteContent></WhiteContent>
          <WhitePrice></WhitePrice>
          <div style={{ marginTop: "-23px", marginLeft: "263px" }}>원</div>
        </MiddleWhite>
      </MiddleBox>

      <BottomBox>
        <BottomBtn>연락하기</BottomBtn>
        <BottomBtn>관심목록지정</BottomBtn>
      </BottomBox>
    </Container>
  );
};

export default Find2;
