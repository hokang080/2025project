import styled from "styled-components";

function JoinButton() {
  return (
    <>
      <Container>
        <p>회원가입 하러 가기</p>
      </Container>
    </>
  );
}
export default JoinButton;

const Container = styled.div`
  width: 220px;
  height: 48px;
  background: #F3CD3F;
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
