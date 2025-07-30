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
  height: 40px;
  background:rgb(191, 180, 56);
  color: #ffffff;
  text-align: center;
  border-radius: 10px;

  p {
    font-size: 12px;
    font-weight: bold;
  }
`;