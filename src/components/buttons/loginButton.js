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
  width: 70%;
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
