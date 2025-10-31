<<<<<<< Updated upstream
=======
import styled from "styled-components";
import AuthInput from "../../components/common/authInput";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import EndButton from "../../components/buttons/endButton";

function NoticePage() {
  return (
    <>
      <Link to={"/"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>
      <Wrapper>
        <h1>로그인</h1>
        <AuthInput label={"제목"} placeholder={"제목을 입력해 주세요"} />
        <Label>사진선택</Label>
        <AuthInput label={"세부사항"} placeholder={"자세한 공지내용을 입력해주세요"} />
        <ButtonBox>
          <EndButton/>
        </ButtonBox>

      </Wrapper>
      <Menubar />
    </>
  );
}
export default NoticePage;

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

const Label = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
`;

>>>>>>> Stashed changes
