import styled from "styled-components";
import AuthInput from "../../components/common/authInput";
import { Link, useNavigate } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import LoginButton from "../../components/buttons/loginButton";
import JoinButton from "../../components/buttons/joinButton";
import { useState } from "react";
import { apiService } from "../../services/api";

function LoginPage() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!studentId.trim() || !password.trim()) {
      alert("학번과 비밀번호를 모두 입력해 주세요.");
      return;
    }

    try {
      const user = await apiService.auth.login(studentId, password);
      alert(`${user.studentId}님, 환영합니다!`);
      navigate("/home");
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

        <Title>로그인</Title>
        <FormArea>
          <AuthInput
            label={"학번"}
            placeholder={"학번을 입력해 주세요"}
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
          <AuthInput
            label={"비밀번호"}
            placeholder={"비밀번호를 입력해 주세요"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <ButtonBox onClick={handleLogin}>
            <LoginButton />
          </ButtonBox>

          <DividerText>회원이 아니신가요?</DividerText>

          <ButtonBox>
            <Link to="/join" style={{ textDecoration: "none", width: "100%", display: "flex", justifyContent: "center" }}>
              <JoinButton />
            </Link>
          </ButtonBox>
        </FormArea>
      </ScrollArea>
    </PageContainer>
  );
}
export default LoginPage;

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
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const LogoBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 60px;
    height: 60px;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 800;
  color: #2d3436;
  margin: 0 0 24px 0;
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

const DividerText = styled.p`
  font-size: 13px;
  color: #7f8c8d;
  margin: 25px 0 10px 0;
  font-weight: 600;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 8px;
  
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0px);
  }
`;
