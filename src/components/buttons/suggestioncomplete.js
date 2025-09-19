import styled from "styled-components";

function SuggestionComplete() {
  return (
    <>
      <Container>
        <p>작성 완료</p>
      </Container>
    </>
  );
}
export default SuggestionComplete;

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