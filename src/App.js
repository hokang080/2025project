import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import TestPage from "./pages/test";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SuggestionPage from "./pages/suggestion";
import SuggestionWrite from "./pages/suggestion/wirte";
import SuggestionCheck from "./pages/suggestion/check";
import NoticeDetails from "./pages/notice/noticedetail";
import MySuggestion from "./pages/suggestion/mysuggestion";
import NoticePage from "./pages/notice";
import NoticeDetail from "./pages/notice/noticedetail";
import JoinPage from "./pages/join";

const defaultUsers = [
  { studentId: "1234", password: "1234", isLeader: false, isPresident: false, isVicePresident: false },
  { studentId: "1111", password: "1111", isLeader: true, isPresident: true, isVicePresident: false }
];

const defaultNotices = [
  { id: 1, title: "수학 수행평가 5/30까지", content: "수학 수행평가 5월 30일까지 제출해 주세요. 늦지 않게 해주세요! 모르면 교무실로 오세요.", date: "2026.05.29", d_day: "5", imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=60" },
  { id: 2, title: "수학 수행평가 5/30까지", content: "수학 수행평가 5월 30일 18:00까지 제출입니다. 늦으면 감점 처리됩니다.", date: "2026.05.29", d_day: "5", imageUrl: "https://images.unsplash.com/photo-1453733190148-c44698c26588?w=600&auto=format&fit=crop&q=60" },
  { id: 3, title: "수학 수행평가 5/30까지", content: "수학 수행평가 5월 30일까지입니다. 최종 확인 바랍니다.", date: "2026.05.29", d_day: "5", imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=60" }
];

const defaultSuggestions = [
  { id: 1, title: "교실 책상 이상함", content: "두번째 줄의 3번인 옆분들 책상에서 삐그덕 소리가 계속 납니다.\n수업시간에 집중도 안되고 매우 신경쓰입니다.\n내리던가 고쳐줬으면 좋겠습니다.", answer: "곧 고쳐 예정입니다.", date: "2026.05.29", authorId: "1234" },
  { id: 2, title: "교실 의자 삐걱거림", content: "교실 뒤편 의자가 삐걱거려서 수업 중에 소음이 심하게 납니다. 교체나 나사를 조여 주셨으면 합니다.", answer: "", date: "2026.05.28", authorId: "1234" }
];

function App() {
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
    if (!localStorage.getItem("notices")) {
      localStorage.setItem("notices", JSON.stringify(defaultNotices));
    }
    if (!localStorage.getItem("suggestions")) {
      localStorage.setItem("suggestions", JSON.stringify(defaultSuggestions));
    }
  }, []);

  return (
    <Wrapper>
      <PhoneSimulator>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/suggestion" element={<SuggestionPage />} />
          <Route path="/suggestion_write" element={<SuggestionWrite />} />
          <Route path="/suggestion_check" element={<SuggestionCheck />} />
          <Route path="/noticedetail" element={<NoticeDetails />} />
          <Route path="/mysuggestion" element={<MySuggestion />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/notice_detail" element={<NoticeDetail />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </PhoneSimulator>
    </Wrapper>
  );
}
export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eef2f3;
  box-sizing: border-box;
`;

const PhoneSimulator = styled.div`
  width: 100%;
  max-width: 430px;
  height: 932px;
  max-height: 100vh;
  background-color: #ffffff;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  border: 12px solid #2d3436;
  position: relative;
  overflow: hidden; /* Prevent body scrolling! */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 450px) {
    border: none;
    border-radius: 0;
    max-height: 100vh;
    height: 100vh;
  }
`;

