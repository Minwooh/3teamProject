import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 414px;
  height: 736px;

  border: 1px solid #000;
  background: #fff;
  margin: 0px auto;
`;

const Logo = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 259px;
  height: 80px;
  flex-shrink: 0;

  margin-top: 2px;
  margin-bottom: 20px;
`;

const Images = styled.div`
  position: relative;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`;

const Dots = styled.div`
  position: relative;
  display: flex;

  width: 8px;
  height: 8px;
  flex-shrink: 0;

  border-radius: 50%;
  background-color: rgba(34, 90, 0, 0.5);
  margin-right: 8px;
`;

const Content = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 110.578px;
  height: 110.578px;
  flex-shrink: 0;

  border-radius: 33.174px;
  background: #fff;
  box-shadow: 0px 0px 4.423137187957764px 0px rgba(0, 0, 0, 0.25);

  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin: 20px;

  &:hover {
    box-shadow: 0px 0px 4.423137187957764px 0px #000;
  }
`;

const Down = styled.div`
  position: relative;
`;

const Start = () => {
  return (
    <Container>
      <Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="logo"
          width="250px"
        />
      </Logo>
      <Images>
        <img
          src={`${process.env.PUBLIC_URL}/images/image1.png`}
          alt="logo"
          width="414px"
        />
      </Images>
      <DotsContainer>
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
      </DotsContainer>
      <Content>
        <span
          style={{
            color: "#225A00",
            fontFamily: "Pretendard",
            fontSize: "15.562px",
            fontStyle: "normal",
            fontWeight: "549",
            lineHeight: "normal",
          }}
        >
          이제껏 경험하지 못했던 쉽고 편리한 거래 서비스
          <br /> 농촌의{" "}
        </span>
        <span
          style={{
            color: "#225A00",
            fontFamily: "Pretendard",
            fontSize: "15.562px",
            fontStyle: "normal",
            fontWeight: "800",
            lineHeight: "normal",
          }}
        >
          모든 거래
        </span>
        <span
          style={{
            color: "#225A00",
            fontFamily: "Pretendard",
            fontSize: "15.562px",
            fontStyle: "normal",
            fontWeight: "549",
            lineHeight: "normal",
          }}
        >
          가 쉬워질 거예요.
        </span>
      </Content>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Menu>
          농기구
          <br />
          검색
        </Menu>
        <Menu>
          토지
          <br />
          검색
        </Menu>
        <Menu>품앗이</Menu>
        <Menu>
          거래
          <br />
          채팅
        </Menu>
      </div>
      <Down>
        <img
          src={`${process.env.PUBLIC_URL}/images/down.png`}
          alt="logo"
          width="26px"
        />
      </Down>
    </Container>
  );
};

export default Start;
