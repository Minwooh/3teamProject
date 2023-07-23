import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

const InputTitle = styled.div`
  width: 360px;
  height: 50px;
  margin-top: 28px;
  margin-left: 25px;

  padding-left: 8px;
  border: none;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;
const Input = styled.input`
  width: 285px;
  height: 25px;

  margin-top: 10px;
  margin-left: 10px;

  border: none;
`;

const ContentBox = styled.div`
  position: absolute;

  height: 442px;
  width: 370px;

  margin-left: 23px;
  margin-top: 17px;

  border-radius: 10px;
  background-color: #ffff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;
const ConditionBox = styled.div`
  height: 30px;

  padding-left: 127px;
  margin-top: 13px;
`;
const ConditionDo = styled.div`
  postion: relative;

  margin-top: -22px;
  margin-left: 40px;

  width: 85px;
  height: 24px;
  flex-shrink: 0;

  background: #efefef;
`;
const ConditionDong = styled.div`
  postion: relative;

  margin-top: -24px;
  margin-left: 135px;
  width: 85px;
  height: 24px;
  flex-shrink: 0;

  background: #efefef;
`;

const TextBox = styled.div`
  height: 330px;
  width: 330px;

  margin-top: 15px;
  margin-left: 16px;
  padding-top: 3px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;

const InputImg = styled.div`
  width: 200px;
  height: 160px;

  margin-top: 10px;
  margin-left: 70px;

  background-color: cadetblue;
`;
const InputContent = styled.textarea`
  width: 300px;
  height: 115px;

  margin-top: 10px;
  margin-left: 13px;

  border: none;

  resize: none;
`;
const AddBox = styled.div`
  width: 30px;
  height: 30px;

  margin-left: 300px;
  margin-top: -45px;

  padding-left: 8px;
  padding-top: 10px;

  background-color: rgba(53, 135, 0, 0.31);
  border-radius: 40px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
`;
const DropdownMenu = styled.ul`
  height: 23px;
  position: absolute;
  bottom: 100%;
  left: 0;

  padding: 0px;
`;

const DropdownItem = styled.li`
  width: 30px;
  height: 30px;

  list-style-type: none;
  cursor: pointer;
  padding: 4px;

  border-radius: 40px;
  background-color: rgba(53, 135, 0, 0.31);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.4);
`;

const PriceBox = styled.div`
  margin-top: 16px;
  padding-left: 210px;
`;
const AddPrice = styled.input`
  width: 93px;
  height: 24px;

  border: none;
  margin-left: 5px;

  background: #efefef;
`;
const Button2 = styled.button`
  width: 77px;
  height: 29px;

  margin-top: 470px;
  margin-left: 316px;

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

const Write = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const GoFind = () => {
    navigate("/find");
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

  const handleSave = (e) => {
    // 저장 버튼이 클릭되었을 때 실행되는 로직
    // 서버에 데이터를 전송하여 저장하는 코드를 여기에 작성합니다.
    console.log("제목:", title);
    console.log("내용:", content);
    console.log("가격:", price);

    //const { onSave } = props;
    //setItems([...items, newItem]);

    const newItem = { title, content, price };
    console.log(newItem);

    if (typeof onSave === "function") {
      onSave(newItem);
    }
    //onSave가 넘어가지 않음
    // const { onSave } = newItem;
    // console.log(onSave);
    //onSave();

    setTitle("");
    setContent("");
    setPrice("");
    //setImage('');
    //GoFind();
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Container>
      <Top />
      <TitleBox>
        <img src="/images2/title.png" alt="있농" />
        <Line></Line>
      </TitleBox>

      <InputTitle>
        제목{" "}
        <Input value={title} onChange={(e) => setTitle(e.target.value)}></Input>
      </InputTitle>

      <ContentBox>
        <ConditionBox>
          지역
          <ConditionDo></ConditionDo>
          <ConditionDong></ConditionDong>
        </ConditionBox>
        <TextBox>
          <InputImg></InputImg>
          <InputContent
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></InputContent>
        </TextBox>
        <AddBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src="/images2/img.png" alt="사진첨부" />
          {isDropdownOpen && (
            <DropdownMenu>
              <DropdownItem>
                <img src="/images2/link.png" alt="링크첨부" />
              </DropdownItem>
              {/* <DropdownItem></DropdownItem> */}
            </DropdownMenu>
          )}
        </AddBox>
        <PriceBox>
          가격
          <AddPrice
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></AddPrice>
        </PriceBox>
      </ContentBox>

      <Button2 onClick={handleSave}>등록하기</Button2>
    </Container>
  );
};

export default Write;
