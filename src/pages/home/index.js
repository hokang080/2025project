import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import NoticeCard from "../../components/homepage/noticeCard";
import { useEffect, useState } from "react";
import { apiService } from "../../services/api";

function HomePage() {
  const [notices, setNotices] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = apiService.auth.getCurrentUser();
    if (!user) {
      navigate("/login");
      return;
    }
    setCurrentUser(user);

    const loadData = async () => {
      const storedNotices = await apiService.notices.getAll();
      setNotices(storedNotices);

      const storedSuggestions = await apiService.suggestions.getAll();
      if (user.isLeader) {
        setSuggestions(storedSuggestions);
      } else {
        setSuggestions(storedSuggestions.filter(s => s.authorId === user.studentId || !s.authorId));
      }
    };
    loadData();
  }, [navigate]);

  const handleLogout = async () => {
    await apiService.auth.logout();
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  const handleNoticeDelete = async (id, e) => {
    e.stopPropagation();
    if (!currentUser?.isLeader) {
      alert("삭제 권한이 없습니다. (학급 임원만 가능)");
      return;
    }
    if (window.confirm("공지사항을 삭제하시겠습니까?")) {
      await apiService.notices.delete(id);
      const updated = await apiService.notices.getAll();
      setNotices(updated);
    }
  };

  const handleSuggestionDelete = async (id, e) => {
    e.stopPropagation();
    if (!currentUser?.isLeader) {
      alert("삭제 권한이 없습니다. (학급 임원만 가능)");
      return;
    }
    if (window.confirm("건의사항을 삭제하시겠습니까?")) {
      await apiService.suggestions.delete(id);
      const all = await apiService.suggestions.getAll();
      if (currentUser.isLeader) {
        setSuggestions(all);
      } else {
        setSuggestions(all.filter(s => s.authorId === currentUser.studentId || !s.authorId));
      }
    }
  };

  return (
    <PageContainer>
      {/* 고정 헤더 */}
      <LogoHeader>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </LogoHeader>

      {/* 스크롤 콘텐츠 영역 */}
      <ScrollArea>
        {currentUser && (
          <UserCard>
            <UserAvatar>{currentUser.isLeader ? "👑" : "🎒"}</UserAvatar>
            <UserTextDetails>
              <WelcomeText>안녕하세요!</WelcomeText>
              <UserRole>{currentUser.studentId}님 ({currentUser.isLeader ? "학급 임원" : "일반 학생"})</UserRole>
            </UserTextDetails>
            <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
          </UserCard>
        )}

        <Section>
          <Label>우리반 공지사항</Label>
          {notices.length === 0 ? (
            <EmptyMsg>등록된 공지사항이 없습니다.</EmptyMsg>
          ) : (
            notices.slice(0, 3).map((item) => (
              <NoticeCard
                key={item.id}
                isNotice={true}
                content={item.title}
                d_day={item.d_day || "5"}
                onClick={() => navigate("/notice_detail", { state: { notice: item } })}
                onDelete={(e) => handleNoticeDelete(item.id, e)}
                showDelete={currentUser?.isLeader}
              />
            ))
          )}
        </Section>

        <Section>
          <Label>나의 건의함</Label>
          {suggestions.length === 0 ? (
            <EmptyMsg>등록된 건의사항이 없습니다.</EmptyMsg>
          ) : (
            suggestions.slice(0, 3).map((item) => (
              <NoticeCard
                key={item.id}
                isNotice={false}
                content={item.title}
                d_day={0}
                onClick={() => navigate("/mysuggestion", { state: { suggestion: item } })}
                onDelete={(e) => handleSuggestionDelete(item.id, e)}
                showDelete={currentUser?.isLeader}
              />
            ))
          )}
        </Section>
      </ScrollArea>

      {/* 고정 푸터 */}
      <Menubar />
    </PageContainer>
  );
}
export default HomePage;

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
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  flex-shrink: 0;
  background-color: #f5f7fa;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const UserCard = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 20px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const UserAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-color: #f1f2f6;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
  flex-shrink: 0;
`;

const UserTextDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
`;

const WelcomeText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #95a5a6;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const UserRole = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: #2d3436;
`;

const LogoutBtn = styled.button`
  border: none;
  background: rgba(231, 76, 60, 0.08);
  color: #e74c3c;
  cursor: pointer;
  font-weight: bold;
  font-size: 11px;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(231, 76, 60, 0.15);
    transform: scale(1.02);
  }
`;

const Section = styled.div`
  margin-top: 15px;
  width: 100%;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #2d3436;
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 4px solid #498349;
  padding-left: 8px;
`;

const EmptyMsg = styled.div`
  text-align: center;
  font-size: 13px;
  color: #a0a0a0;
  padding: 30px 0;
  border: 2px dashed #e2e8f0;
  border-radius: 16px;
  background-color: #ffffff;
  box-sizing: border-box;
`;
