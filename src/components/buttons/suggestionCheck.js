import styled from "styled-components";

function SuggestionCheckButton() {
  return (
    <>
      <Container>
        <p>우리반 건의함 확인하기</p>
      </Container>
    </>
  );
}
export default SuggestionCheckButton;

const Container = styled.div`
  width: 100%;
  height: 48px;
  background: #f3cd3f;
  color: #2d3436;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(243, 205, 63, 0.2);
  transition: all 0.2s ease;

  p {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    letter-spacing: 0.5px;
  }
`;