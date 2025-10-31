import styled from "styled-components";
import SuggestionComplete from "../buttons/suggestioncomplete";

function SugBlock({ answer }) {
  return (
    <>
      <Container>
        <h3>건의 제목</h3>
        <h4>건의 내용</h4>
        <h4>답변</h4>
        <Input answer={answer}/>
        <ButtonBox>
          <SuggestionComplete />
        </ButtonBox>
      </Container>
    </>
  );
}
export default SugBlock;

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