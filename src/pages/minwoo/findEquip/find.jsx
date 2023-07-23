import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Write from "./write";

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
  padding-left: 35px;
  padding-top: 25px;
  height: 225px;
`;
const White = styled.div`
  width: 335px;
  height: 190px;
  flex-shrink: 0;

  padding-top: 10px;
  padding-left: 15px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;
const MiddleTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const MiddleCondition = styled.div`
  background-color: #006666;
  margin-top: 8px;
  margin-bottom: 6px;
`;
const MiddleSetLine = styled.div`
  margin-top: 8px;
`;
const SetMin = styled.input`
  width: 125px;
  height: 24px;

  margin-right: 10px;
  border: none;
  background: #efefef;
`;
const SetMax = styled.input`
  width: 125px;
  height: 24px;

  margin-left: 10px;
  border: none;
  background: #efefef;
`;
const BtnLooking = styled.button`
  width: 88px;
  height: 31px;
  flex-shrink: 0;

  margin-top: 20px;
  margin-left: 115px;

  border: none;
  border-radius: 13px;
  background: #225a00;

  color: #fff;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ConditionBox = styled.div`
  height: 45px;
  padding-left: 190px;
`;

const ListBox = styled.div`
  height: 240px;

  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  padding-left: 30px;
  padding-top: 5px;
`;

const WhiteBox = styled.div`
  width: 360px;
  height: 65px;

  margin-bottom: 10px;

  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
`;
const LookImg = styled.img`
  width: 50px;
  height: 50px;

  margin-left: 10px;
  margin-top: 8px;
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

// const ListContent = ({ item }) => {
//   return (
//     <WhiteBox>
//       <LookImg src="./img/basic.png"></LookImg>
//       <Title>제목</Title>
//       <Preview>글 미리보기</Preview>
//       <SeedImg>
//         <img src="./img/seed.png" />
//       </SeedImg>
//       <ClickCount>4300</ClickCount>
//     </WhiteBox>
//   );
// };

const ButtonWrite = styled.button`
  width: 77px;
  height: 29px;

  margin-top: 10px;
  margin-left: 316px;

  border: none;
  border-radius: 13px;
  background: #000;

  color: #fff;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FindPage = () => {
  const [items, setItems] = useState([]);

  const handleSaveItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const navigate = useNavigate();

  const GoWrite = () => {
    navigate("/");
  };

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

  const ListContent = ({ item }) => {
    const { title, content, price } = item;

    return (
      <WhiteBox>
        <LookImg src="./images2/basic.png"></LookImg>
        <Title>{title}</Title>
        <Preview>{content}</Preview>
        <SeedImg>
          <img src="./images2/seed.png" alt="시드" />
        </SeedImg>
        <ClickCount>{price}</ClickCount>
      </WhiteBox>
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
        <White>
          <MiddleTitle>농기구검색</MiddleTitle>
          <MiddleCondition>지역</MiddleCondition>
          가격설정
          <MiddleSetLine>
            <SetMin placeholder="최소금액"></SetMin>~
            <SetMax placeholder="최대금액"></SetMax>
          </MiddleSetLine>
          <BtnLooking>매물 조회</BtnLooking>
        </White>
      </MiddleBox>
      <ConditionBox>
        <div
          style={{
            position: "relative",
            marginTop: "4px",
            width: "125px",
            height: "24px",

            color: "#000",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          정렬 조건
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "-26px",
            marginLeft: "70px",
            width: "125px",
            height: "24px",
            background: "rgba(34, 90, 0, 0.18)",
          }}
        ></div>
      </ConditionBox>
      <ListBox>
        <Write onSave={handleSaveItem} />
        {items.map((item, index) => (
          <ListContent key={index} item={item} />
        ))}
      </ListBox>

      <ButtonWrite onClick={GoWrite}>글쓰기</ButtonWrite>
    </Container>
  );
};

export default FindPage;
