import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import SuggestionButton from '../../components/buttons/suggestionButton';
import SuggestionCheckButton from '../../components/buttons/suggestionCheck';
import { useEffect } from "react";

function SuggestionPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      navigate("/login");
      return;
    }
  }, [navigate]);

  return (
    <PageContainer>
      {/* 고정 헤더 */}
      <LogoHeader>
        <LogoIcon />
      </LogoHeader>
      
      {/* 스크롤 콘텐츠 영역 */}
      <ScrollArea>
        <PageTitle>익명 건의함</PageTitle>
        <Desc>우리 반 발전을 위한 건의사항을 자유롭게 남겨주세요. 작성된 의견은 반장/부반장만 확인할 수 있으며 익명성이 전적으로 보장됩니다.</Desc>
        
        <StyledLink to="/suggestion_write">
          <ButtonBox>
            <SuggestionButton />
          </ButtonBox>
        </StyledLink>
        
        <StyledLink to="/suggestion_check">
          <ButtonBox>
            <SuggestionCheckButton />
          </ButtonBox>
        </StyledLink>
      </ScrollArea>
      
      {/* 고정 푸터 */}
      <Menubar/>
    </PageContainer>
  );
}
export default SuggestionPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f5f7fa;
  overflow: hidden;
`;

const LogoHeader = styled.div`
  width: 100%;
  padding: 24px 24px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-shrink: 0;
  background-color: #f5f7fa;

  svg {
    width: 50px;
    height: 50px;
  }
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px 24px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const PageTitle = styled.h2`
  font-size: 20px;
  font-weight: 800;
  color: #2d3436;
  text-align: center;
  margin: 10px 0 12px 0;
`;

const Desc = styled.p`
  font-size: 13px;
  color: #7f8c8d;
  line-height: 1.55;
  text-align: center;
  margin: 0 0 35px 0;
  padding: 0 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;
