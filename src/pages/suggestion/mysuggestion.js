import styled from "styled-components";
import CommentIconSVG from "../../assets/comment-smile-svgrepo-com 1.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import { useState, useEffect } from "react";
import { apiService } from "../../services/api";

function MySuggestion() {
  const location = useLocation();
  const navigate = useNavigate();

  const suggestionState = location.state?.suggestion;

  const [suggestion] = useState(() => {
    if (suggestionState?.id) {
      const suggestions = JSON.parse(localStorage.getItem("suggestions") || "[]");
      const found = suggestions.find((s) => s.id === suggestionState.id);
      if (found) return found;
    }
    return suggestionState ?? {
      id: 1,
      title: "교실 책상 이상함",
      content: `두번째 줄의 3번인 옆분들 책상에서 삐그덕 소리가 계속 납니다.
                수업시간에 집중도 안되고 매우 신경쓰입니다.
                내리던가 고쳐줬으면 좋겠습니다.`,
      answer: "곧 고쳐 예정입니다.",
    };
  });

  useEffect(() => {
    const user = apiService.auth.getCurrentUser();
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const answerText = suggestion.answer || suggestion.comment || "아직 답변이 등록되지 않았습니다.";

  return (
    <PageContainer>
      {/* 고정 헤더 */}
      <Link to="/home" style={{ textDecoration: "none" }}>
        <LogoHeader>
          <LogoIcon />
        </LogoHeader>
      </Link>

      {/* 스크롤 콘텐츠 영역 */}
      <ScrollArea>
        <DetailCard>
          <Badge>건의사항 상세</Badge>
          <Title>{suggestion.title}</Title>
          <DateText>{suggestion.date || "2026.05.29"}</DateText>
          <Content>{suggestion.content}</Content>
        </DetailCard>

        <CommentSection>
          <CommentLabel>댓글 및 답변</CommentLabel>
          <CommentRow>
            <CommentIcon src={CommentIconSVG} alt="댓글 아이콘" />
            <CommentBox>
              <CommentText>{answerText}</CommentText>
            </CommentBox>
          </CommentRow>
        </CommentSection>

        <Link to="/home" style={{ textDecoration: "none", width: "100%", display: "flex", justifyContent: "center" }}>
          <BackButton>뒤로 가기</BackButton>
        </Link>
      </ScrollArea>

      {/* 고정 푸터 */}
      <Menubar />
    </PageContainer>
  );
}

export default MySuggestion;

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

const DetailCard = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1.5px solid #dcdde1;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  margin-bottom: 20px;
  text-align: left;
`;

const Badge = styled.div`
  display: inline-block;
  font-size: 10px;
  font-weight: 800;
  color: #7f6448;
  background-color: #f5f0eb;
  padding: 4px 8px;
  border-radius: 6px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 800;
  color: #2d3436;
  margin: 0 0 6px 0;
  line-height: 1.3;
`;

const DateText = styled.div`
  font-size: 12px;
  color: #999;
  margin-bottom: 16px;
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 1.55;
  color: #444;
  white-space: pre-line;
  margin: 0;
  border-top: 1.5px solid #f1f2f6;
  padding-top: 16px;
`;

const CommentSection = styled.div`
  width: 100%;
  margin-bottom: 30px;
  text-align: left;
`;

const CommentLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #498349;
  padding-left: 4px;
`;

const CommentRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  width: 100%;
`;

const CommentIcon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 12px;
`;

const CommentBox = styled.div`
  flex: 1;
  border: 1.5px solid #dcdde1;
  border-radius: 16px;
  padding: 14px 18px;
  background: #ffffff;
  min-height: 60px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  border-left: 4px solid #498349;
`;

const CommentText = styled.div`
  font-size: 13.5px;
  line-height: 1.5;
  color: #2f3640;
  font-weight: 500;
`;

const BackButton = styled.button`
  background: #498349;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 12px 0;
  width: 220px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(73, 131, 73, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background: #386338;
    box-shadow: 0 6px 12px rgba(73, 131, 73, 0.3);
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;