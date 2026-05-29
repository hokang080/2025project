import styled from "styled-components";

function LoginButton() {
  return (
    <>
      <Container>
        <p>로그인</p>
      </Container>
    </>
  );
}
export default LoginButton;

const Container = styled.div`
  width: 220px;
  height: 48px;
  background: rgba(107, 72, 2, 1);
  color: #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(107, 72, 2, 0.2);
  transition: all 0.2s ease;

  p {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    letter-spacing: 0.5px;
  }
`;
