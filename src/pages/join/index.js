import styled from "styled-components";
import AuthInput from "../../components/common/authInput";
import { Link, useNavigate } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import EndButton from "../../components/buttons/endButton";
import { useState } from "react";
import { apiService } from "../../services/api";

function JoinPage() {
  const [studentId, setStudentId] = useState("");
  const [isPresident, setIsPresident] = useState(false);
  const [isVicePresident, setIsVicePresident] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!studentId.trim()) {
      alert("학번을 입력해 주세요.");
      return;
    }
    if (!password.trim()) {
      alert("비밀번호를 입력해 주세요.");
      return;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await apiService.auth.register({
        studentId,
        password,
        isPresident,
        isVicePresident,
      });
      alert("회원가입이 완료되었습니다! 로그인해 주세요.");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <PageContainer>
      <ScrollArea>
        <LogoBox>
          <LogoIcon />
        </LogoBox>

        <Title>회원가입</Title>
        <FormArea>
          <AuthInput
            label={"학번"}
            placeholder={"학번을 입력해 주세요"}
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <RoleContainer>
            <RoleLabel>반장여부</RoleLabel>
            <CheckboxRow>
              <CheckboxItem onClick={() => { setIsPresident(!isPresident); if (!isPresident) setIsVicePresident(false); }}>
                <Checkbox $checked={isPresident} />
                <span>예</span>
              </CheckboxItem>
              <CheckboxItem onClick={() => { setIsPresident(false); }}>
                <Checkbox $checked={!isPresident} />
                <span>아니요</span>
              </CheckboxItem>
            </CheckboxRow>
          </RoleContainer>

          <RoleContainer>
            <RoleLabel>부반장여부</RoleLabel>
            <CheckboxRow>
              <CheckboxItem onClick={() => { setIsVicePresident(!isVicePresident); if (!isVicePresident) setIsPresident(false); }}>
                <Checkbox $checked={isVicePresident} />
                <span>예</span>
              </CheckboxItem>
              <CheckboxItem onClick={() => { setIsVicePresident(false); }}>
                <Checkbox $checked={!isVicePresident} />
                <span>아니요</span>
              </CheckboxItem>
            </CheckboxRow>
          </RoleContainer>

          <AuthInput
            label={"비밀번호"}
            placeholder={"비밀번호를 입력해 주세요"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AuthInput
            label={"비밀번호 확인"}
            placeholder={"비밀번호를 다시 입력해 주세요"}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <ButtonBox onClick={handleRegister}>
            <EndButton />
          </ButtonBox>

          <FooterLinkBox>
            이미 회원이신가요? <Link to="/login">로그인하기</Link>
          </FooterLinkBox>
        </FormArea>
      </ScrollArea>
    </PageContainer>
  );
}
export default JoinPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const LogoBox = styled.div`
  margin-bottom: 16px;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 50px;
    height: 50px;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 800;
  color: #2d3436;
  margin: 0 0 20px 0;
  width: 100%;
  text-align: center;
  letter-spacing: -0.5px;
`;

const FormArea = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RoleContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const RoleLabel = styled.h3`
  font-size: 14px;
  font-weight: 800;
  color: #2d3436;
  margin: 0 0 8px 0;
  text-align: left;
`;

const CheckboxRow = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #2d3436;

  span {
    user-select: none;
  }
`;

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${props => props.$checked ? "#498349" : "#dcdde1"};
  border-radius: 4px;
  background-color: ${props => props.$checked ? "#498349" : "#ffffff"};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &::after {
    content: "${props => props.$checked ? "✓" : ""}";
    color: white;
    font-size: 14px;
    font-weight: bold;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 16px;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const FooterLinkBox = styled.p`
  font-size: 12px;
  color: #7f8c8d;
  margin: 20px 0 0 0;
  font-weight: 600;

  a {
    color: #498349;
    text-decoration: underline;
    margin-left: 5px;
  }
`;
