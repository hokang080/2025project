import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import TestPage from "./pages/test";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SuggestionPage from "./pages/suggestion";
import NoticePage from "./pages/notice";

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/suggestion" element={<SuggestionPage />} />
          <Route path="/notice" element={<NoticePage />}/>
        </Routes>
      </Wrapper>
    </>
  );
}
export default App;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column; // flex 방향을 column으로 설정
  align-items: center; // align-items: 세로 방향 정렬 (위, 가운데, 아래 등)
`;
