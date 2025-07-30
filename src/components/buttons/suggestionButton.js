import styled from "styled-components";

function SuggestionButton() {
  return (
    <>
      <Container>
        <p>건의함 작성하러 가기</p>
      </Container>
    </>
  );
}
export default SuggestionButton;

const Container = styled.div`
  width: 100%;
  height: 40px;
  background: #7f6448;
  color: #ffffff;
  text-align: center;
  border-radius: 10px;

  p {
    font-size: 12px;
    font-weight: bold;
  }
`;