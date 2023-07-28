import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";

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
  const navigate = useNavigate();

  const Logout = () => {
    navigate("/home");
  };

  return (
    <TopBox>
      <Button onClick={Logout}>로그아웃</Button>
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
  margin-top: 5px;
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
  margin-top: -18px;
  margin-left: 20px;
`;
const ListTitle = styled.div`
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
  width: 330px;
  height: 60px;

  margin-left: 3px;
  margin-top: 5px;

  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  color: #0c0c0c;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const LandArea = styled.div`
  width: 330px;
  height: 60px;

  margin-left: 3px;

  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  color: #0c0c0c;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Page = ({ items, setItems }) => {
  const navigate = useNavigate();

  const GoHome = () => {
    navigate("/afterLogin");
  };

  useEffect(() => {
    const savedItems = localStorage.getItem("ITEMS");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, [setItems]);

  const DisplayItems = ({ item }) => {
    return (
      <div
        style={{
          marginTop: "2px",
          marginLeft: "0px",
          width: "260px",
          height: "18px",
        }}
      >
        {item.id++}.<Title>{item.title}</Title>
      </div>
    );
  };

  const ListContent = ({ item }) => {
    return (
      <WhiteBox>
        <HeartImg>
          <img src="./images2/heart.png" style={{ height: "10px" }} />
        </HeartImg>
        <LookImg src="./images2/basic.png"></LookImg>
        <ListTitle>{item.title}</ListTitle>
        <Preview>{item.content}</Preview>
        <SeedImg>
          <img src="./images2/seed.png" />
        </SeedImg>
        <ClickCount>4300</ClickCount>
      </WhiteBox>
    );
  };

  return (
    <Container>
      <Top />
      <TitleBox>
        <img src="/images2/title.png" onClick={GoHome} />
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
          <img src="/images2/pen.png" alt="펜" style={{ width: "15px" }} />
          작성한 글
        </MiddleTitle>
        <MiddleContent>
          {/* 농기구랑 토지 페이지에서 받은 데이터 구분 필요!! 배열 이름 다르게 하기 */}
          농기구
          <NongArea>
            {items.map((item) => (
              <DisplayItems key={item.id} item={item} />
            ))}
          </NongArea>
          토지
          <LandArea></LandArea>
        </MiddleContent>
      </MiddleBox>

      <LikeBox>
        <ListText>
          <img src="/images2/heart.png" alt="하트" style={{ width: "18px" }} />
          관심목록
        </ListText>
        <ListBox>
          {items.map((item) => (
            <ListContent key={item.id} item={item} />
          ))}
        </ListBox>
      </LikeBox>
    </Container>
  );
};

export default Page;
