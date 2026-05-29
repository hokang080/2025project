import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import SugInput from '../../components/common/sugInput';
import DetInput from '../../components/common/detInput';
import SuggestionComplete from '../../components/buttons/suggestioncomplete';
import { useState, useEffect } from "react";
import { apiService } from "../../services/api";

function SuggestionWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = apiService.auth.getCurrentUser();
    if (!user) {
      navigate("/login");
      return;
    }
    setCurrentUser(user);
  }, [navigate]);

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 세부사항을 모두 입력해 주세요.");
      return;
    }

    await apiService.suggestions.create(
      { title, content },
      currentUser?.studentId
    );

    alert("건의사항이 등록되었습니다!");
    navigate("/suggestion");
  };

  return (
    <PageContainer>
      {/* 고정 헤더 */}
      <Link to="/suggestion" style={{ textDecoration: "none" }}>
        <LogoHeader>
          <LogoIcon />
        </LogoHeader>
      </Link>
      
      {/* 스크롤 콘텐츠 영역 */}
      <ScrollArea>
        <PageTitle>건의사항 작성</PageTitle>
        <SugInput
          label={"제목"}
          placeholder={"제목을 입력해 주세요"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <DetInput
          label={"세부사항"}
          placeholder={"우리 반 발전을 위한 상세한 의견을 입력해 주세요"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ButtonBox onClick={handleSave}>
          <SuggestionComplete />
        </ButtonBox>
      </ScrollArea>

      {/* 고정 푸터 */}
      <Menubar/>
    </PageContainer>
  );
}
export default SuggestionWrite;

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
  margin: 10px 0 24px 0;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;
  
  &:hover {
    transform: translateY(-2px);
  }
`;