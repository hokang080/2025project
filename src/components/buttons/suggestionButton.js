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
  height: 48px;
  background: #7f6448;
  color: #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(127, 100, 72, 0.2);
  transition: all 0.2s ease;

  p {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    letter-spacing: 0.5px;
  }
`;