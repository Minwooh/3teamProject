import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

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

const Top = () => {
  return (
    <TopBox>
      <Button>로그아웃</Button>
      <Button>마이페이지</Button>
    </TopBox>
  );
};

const TitleBox = styled.div`
  margin-top: 15px;
  padding-left: 80px;
`;

const SmallTitle = styled.div`
  height: 70px;
  margin-top: 35px;

  padding-left: 150px;

  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Line = styled.div`
  width: 161px;
  height: 3px;

  margin-top: 8px;
  margin-left: -25px;

  background: #358700;
`;
const AboutLevel = styled.span`
  margin-left: -20px;
  margin-right: 20px;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const AboutName = styled.span`
  margin-left: -20px;
  margin-right: 20px;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const AboutNim = styled.span`
  margin-left: -20px;
  margin-right: 20px;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MiddleBox = styled.div`
  height: 220px;

  margin-top: 20px;
  padding-left: 15px;
`;
const MiddleTitle = styled.div`
  padding-left: 10px;
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const MiddleContent = styled.div`
  width: 345px;
  height: 162px;

  margin-top: 20px;
  margin-left: 12px;
  padding: 8px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(23, 58, 0, 0.6);

  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const LikeBox = styled.div`
  height: 230px;
`;

const ListText = styled.div`
  margin-top: 24px;
  padding-left: 20px;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const ListBox = styled.div`
  height: 190px;
  width: 390px;

  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  padding-left: 20px;
  padding-top: 10px;

  margin-left: 2px;
  margin-top: 10px;
`;

const WhiteBox = styled.div`
  width: 360px;
  height: 65px;

  margin-bottom: 10px;

  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
`;
const HeartImg = styled.div`
  width: 12px;

  margin-left: 340px;
`;
const LookImg = styled.img`
  width: 50px;
  height: 50px;

  margin-left: 10px;
  margin-top: -15px;
`;
const Title = styled.div`
  display: inlin-box;
  margin-top: -50px;
  margin-left: 80px;
`;
const Preview = styled.div`
  position: relative;
  height: 20px;
  width: 200px;
  margin-left: 80px;
`;
const SeedImg = styled.div`
  margin-left: 285px;
  margin-top: -15px;
`;
const ClickCount = styled.div`
  margin-left: 305px;
  margin-top: -24px;
`;

const NongArea = styled.div`
  background-color: #00ff22;
  width: 330px;
  height: 60px;

  margin-left: 3px;

  color: #0c0c0c;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const LandArea = styled.div`
  background-color: #00ff22;
  width: 330px;
  height: 60px;

  margin-left: 3px;

  color: #0c0c0c;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ListContent = () => {
  return (
    <WhiteBox>
      <HeartImg>
        <img src="./img/heart.png" style={{ height: "10px" }} />
      </HeartImg>
      <LookImg src="./img/basic.png"></LookImg>
      <Title>제목</Title>
      <Preview>글 미리보기</Preview>
      <SeedImg>
        <img src="./img/seed.png" />
      </SeedImg>
      <ClickCount>4300</ClickCount>
    </WhiteBox>
  );
};

const DisplayItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // localStorage에서 ITEMS 배열 가져오기
    const savedItems = localStorage.getItem("ITEMS");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p
            style={{
              display: "inline-block",
              marginRight: "5px",
              color: "#0C0C0C",
              fontFamily: "Inter",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            {item.id++}.
          </p>
          <h2
            style={{
              display: "inline-block",
              color: "#0C0C0C",
              fontFamily: "Inter",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            {item.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

const Page = () => {
  return (
    <Container>
      <Top />
      <TitleBox>
        <img src="/img/title.png" />
      </TitleBox>

      <SmallTitle>
        마이페이지
        <Line></Line>
        <AboutLevel>행복한 농부, </AboutLevel>
        <AboutName>정민지</AboutName>
        <AboutNim>님</AboutNim>
      </SmallTitle>

      <MiddleBox>
        <MiddleTitle>
          <img src="/img/pen.png" alt="펜" style={{ width: "15px" }} />
          작성한 글
        </MiddleTitle>
        <MiddleContent>
          {/* 농기구랑 토지 페이지에서 받은 데이터 구분 필요!! 배열 이름 다르게 하기 */}
          농기구
          <NongArea>
            <DisplayItems />
          </NongArea>
          토지
          <LandArea></LandArea>
        </MiddleContent>
      </MiddleBox>

      <LikeBox>
        <ListText>
          <img src="/img/heart.png" alt="하트" style={{ width: "18px" }} />
          관심목록
        </ListText>
        <ListBox>
          <ListContent />
          <ListContent />
          <ListContent />
        </ListBox>
      </LikeBox>
    </Container>
  );
};

export default Page;
