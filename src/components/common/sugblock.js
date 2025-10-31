import styled from "styled-components";
import SuggestionComplete from "../buttons/suggestioncomplete";

function SugBlockList() {

  const suggestiondata = [
    {
      id: 1,
      title: "건의 제목",
      content: "건의 내용",
    },
        {
      id: 2,
      title: "건의 제목",
      content: "건의 내용",
    },
        {
      id: 3,
      title: "건의 제목",
      content: "건의 내용",
    },
  ];
  return (
    <ListContainer>
      {suggestiondata.map((item) => (
        <sugblock
        Key={item.id}
        title={item.title}
        content={item.content}
        answer={item.answer}
        />
      ))}
    </ListContainer>
  );
}

function sugblock({title, content, answer}) {

  return (
    <>
      <Container>
        <h3>{title}</h3>
        <h4>{content}</h4>
        <h4>답변</h4>
        <Input value={answer} readOnly />
        <ButtonBox>
          <SuggestionComplete />
        </ButtonBox>
      </Container>
    </>
  );
}
export default SugBlockList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Container = styled.div`
  border: solid 1px #498349;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  .h3 {
    font-size: 12px;
    font-weight: bold;
  }
`;

const Input = styled.input`
  border: solid 1px #498349;
  border-radius: 10px;
  height: 30px;
  width: 90%;
  padding: 10px;
`;

const ButtonBox = styled.div`
  padding: 50px 0;

  width: 100%;
  display: flex;
  justify-content: center;
`;