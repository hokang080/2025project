import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SugBlockList() {
  const navigate = useNavigate();

  const suggestiondata = [
    { id: 1, title: "건의 제목1", content: "건의 내용1", answer: "선생님이 확인했고 다음 주에 반영할게요." },
    { id: 2, title: "건의 제목2", content: "건의 내용2", answer: "" },
    { id: 3, title: "건의 제목3", content: "건의 내용3", answer: "좋은 의견이라서 학급회의 때 같이 얘기해볼게요." },
  ];

  return (
    <ListContainer>
      {suggestiondata.map((item) => (
        <SugBlock
          key={item.id}
          title={item.title}
          content={item.content}
          answer={item.answer}
          onClick={() => navigate(`/suggestion/${item.id}`)}
        />
      ))}
    </ListContainer>
  );
}

function SugBlock({ title, content, answer, onClick }) {
  const hasAnswer = Boolean(answer && answer.trim().length > 0);

  return (
    <Container onClick={onClick} role="button" tabIndex={0}>
      <Title>{title}</Title>
      <Content>{content}</Content>

      {hasAnswer && (
        <AnswerBox>
          <AnswerLabel>답변</AnswerLabel>
          <AnswerText>{answer}</AnswerText>
        </AnswerBox>
      )}

      {!hasAnswer && <NoAnswer>아직 답변이 없어요</NoAnswer>}
    </Container>
  );
}

export default SugBlockList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Container = styled.div`
  border: 1px solid #498349;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  cursor: pointer;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 8px 0;
`;

const Content = styled.p`
  margin: 0 0 14px 0;
  font-size: 13px;
`;

const AnswerBox = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #e2e2e2;
`;

const AnswerLabel = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 6px;
`;

const AnswerText = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
`;

const NoAnswer = styled.p`
  margin: 10px 0 0 0;
  font-size: 12px;
  color: #666;
`;
