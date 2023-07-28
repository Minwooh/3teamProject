import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
  height: 340px;

  margin-left: 13px;
  margin-top: 5px;
  padding: 10px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.5);
`;

const WhiteTitle = styled.span`
  color: #3c3c3c;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const WhiteContent = styled.div`
  background: #ff0022;
  height: 145px;

  margin-top: 10px;
  padding: 10px;

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
  width: 360px;
  height: 60px;

  padding-top: 25px;
  padding-left: 57px;
`;
const BottomBtn = styled.button`
  width: 150px;
  height: 38px;

  margin-left: 10px;
  padding-left: 20px;

  border: none;
  border-radius: 10px;
  background: #225a00;

  color: #fff;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

const Find2 = () => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("/images2/whiteHeart.png");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // URL 파라미터로부터 title, content, price 값을 가져옴
  const id = queryParams.get("id");
  console.log(id);
  const title = queryParams.get("title");
  const content = queryParams.get("content");
  const price = queryParams.get("price");
  const count = queryParams.get("count");

  useEffect(() => {
    // 이미지 상태가 바뀔 때마다 로컬 스토리지의 like 값을 업데이트
    const newLikeValue = imageSrc === "/images2/fillHeart.png";

    updateLocalStorage(newLikeValue);
  }, [imageSrc]);

  const updateLocalStorage = (newLikeValue) => {
    const items = JSON.parse(localStorage.getItem("ITEMS"));

    if (items) {
      const updatedItems = items.map(
        (item) => (item.id === id ? { ...item, like: newLikeValue } : item)
        // parseInt(item.id) === parseInt(id) ? console.log("true") : item
      );
      localStorage.setItem("ITEMS", JSON.stringify(updatedItems));
    }
  };

  const handleClick = () => {
    setImageSrc((prevSrc) =>
      prevSrc === "/images2/whiteHeart.png"
        ? "/images2/fillHeart.png" // 두 번째 이미지의 경로로 바꿔주세요.
        : "/images2/whiteHeart.png"
    );
  };

  const GoHome = () => {
    navigate("/afterLogin");
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

  return (
    <Container>
      <Top />
      <TitleBox>
        <img src="/images2/title.png" alt="있농" onClick={GoHome} />
        <Line></Line>
      </TitleBox>

      <MiddleBox>
        <MiddleTop />
        <MiddleDate></MiddleDate>
        <MiddleWhite>
          <div>
            <WhiteTitle>{title}</WhiteTitle>
            <img
              src="/images2/seed.png"
              style={{ marginLeft: "190px", marginRight: "5px" }}
            />
            {count}
          </div>
          <img src="" />
          <WhiteContent>{content}</WhiteContent>
          <WhitePrice>{price}</WhitePrice>
          <div style={{ marginTop: "-23px", marginLeft: "263px" }}>원</div>
        </MiddleWhite>
      </MiddleBox>

      <BottomBox>
        <BottomBtn>
          <img
            src="/images2/message.png"
            style={{
              position: "absolute",
              marginTop: "8px",
              marginLeft: "-23px",
            }}
          />
          연락하기
        </BottomBtn>
        <BottomBtn onClick={handleClick}>
          <img
            src={imageSrc}
            style={{
              position: "absolute",
              marginTop: "8px",
              marginLeft: "-20px",
            }}
          />
          관심목록지정
        </BottomBtn>
      </BottomBox>
    </Container>
  );
};

export default Find2;
