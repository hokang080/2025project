import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";

export default function SugBlockList() {
  const [suggestions, setSuggestions] = useState([
    { id: 1, title: "건의 제목", content: "건의 내용", answer: "" },
    { id: 2, title: "건의 제목", content: "건의 내용", answer: "" },
    { id: 3, title: "건의 제목", content: "건의 내용", answer: "" },
  ]);

  const onChangeAnswer = (id, value) => {
    setSuggestions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, answer: value } : s))
    );
  };

  const onSave = (id) => {
    const target = suggestions.find((s) => s.id === id);
    const text = (target?.answer ?? "").trim();

    setSuggestions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, answer: text } : s))
    );

    alert("저장 완료!");
  };

  return (
    <>
      <Link to={"/home"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>
      <ListContainer>
        {suggestions.map((item) => (
          <Card key={item.id}>
            <Title>{item.title}</Title>
            <Content>{item.content}</Content>

            <Label>답변 작성</Label>
            <AnswerArea
              value={item.answer}
              onChange={(e) => onChangeAnswer(item.id, e.target.value)}
              placeholder="답변을 작성해주세요"
            />

            <BtnRow>
              <SaveButton onClick={() => onSave(item.id)}>저장</SaveButton>
            </BtnRow>
          </Card>
        ))}
      </ListContainer>
      <Menubar/>
    </>
  );
}

const ListContainer = styled.div`
  width: 90%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px 90px; /* 아래는 Menubar 공간 */
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;


const Card = styled.div`
  border: 1px solid #498349;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;


const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: bold;
`;

const Content = styled.p`
  margin: 0 0 14px 0;
  font-size: 13px;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const AnswerArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  min-height: 110px;
  border: 1px solid #498349;
  border-radius: 10px;
  padding: 12px;
  font-size: 13px;
  resize: vertical;
`;


const BtnRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const SaveButton = styled.button`
  border: 1px solid #498349;
  background: white;
  border-radius: 10px;
  padding: 8px 14px;
  cursor: pointer;
`;

const LogoBox = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;