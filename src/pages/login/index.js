import styled from "styled-components";
import AuthInput from "../../components/common/authInput";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import LoginButton from "../../components/buttons/loginButton";
import JoinButton from "../../components/buttons/joinButton";

function LoginPage() {
  return (
    <>
      <Link to={"/"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>
      <Wrapper>
        <h1>로그인</h1>
        <AuthInput label={"학번"} placeholder={"학번을 입력해 주세요"} />
        <AuthInput label={"비번"} placeholder={"비번을 입력해 주세요"} />
        <ButtonBox>
          <LoginButton />
        </ButtonBox>
        <p>회원이신가요?</p>
        {/*  회원가입 버튼 만들어보기 */}
      </Wrapper>
    </>
  );
}
export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 중앙 정렬 */

  margin: 0 auto; /* 가운데 정렬 */
`;
const LogoBox = styled.div`
  margin: auto;
  padding-top: 70px;
`;

const ButtonBox = styled.div`
  padding: 50px 0;

  width: 100%;
  display: flex;
  justify-content: center;
`;
