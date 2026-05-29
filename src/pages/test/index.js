import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";

function TestPage() {
  return (
    <PageContainer>
      {/* 스크롤 콘텐츠 영역 */}
      <ScrollArea>
        <ContentBox>
          <LogoWrapper>
            <LogoIcon />
          </LogoWrapper>
          <Title>2025 우리반 알림이 스터디</Title>
          
          <Link to="/login" style={{ textDecoration: "none" }}>
            <StartButton>시작하기</StartButton>
          </Link>
        </ContentBox>
      </ScrollArea>

      {/* 고정 푸터 */}
      <Menubar />
    </PageContainer>
  );
}
export default TestPage;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

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
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 320px;
`;

const LogoWrapper = styled.div`
  margin-bottom: 30px;
  animation: ${float} 4s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    width: 90px;
    height: 90px;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 800;
  color: #2d3436;
  margin: 0 0 40px 0;
  letter-spacing: -0.5px;
`;

const StartButton = styled.button`
  background-color: #F6ADB2;
  color: #ffffff;
  width: 200px;
  height: 48px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(246, 173, 178, 0.35);
    background-color: #f09ca2;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 6px 12px rgba(246, 173, 178, 0.2);
  }
`;
