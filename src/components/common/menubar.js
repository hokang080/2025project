import styled from "styled-components";
import { Link } from "react-router-dom";
import { SuggestionBox, Homeiconbox, Noticeiconbox } from "../icons/mebubarIcons";
import { useLocation } from "react-router-dom";

// 화면 하단 네비게이션바
function Menubar() {
  const location = useLocation();

  return (
    <Wrapper>
      <IconLink to="/suggestion">
        <SuggestionBox
          fillColor={location.pathname.startsWith("/suggestion") ? "#F3CD3F" : "white"}
        />
        <p>익명 건의함</p>
      </IconLink>

      <IconLink to="/home">
        <Homeiconbox
          fillColor={location.pathname === "/home" ? "#F3CD3F" : "white"}
        />
        <p>홈</p>
      </IconLink>

      <IconLink to="/notice">
        <Noticeiconbox
          fillColor={location.pathname.startsWith("/notice") ? "#F3CD3F" : "white"}
        />
        <p>공지사항</p>
      </IconLink>
    </Wrapper>
  );
}
export default Menubar;

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #498349;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-sizing: border-box;
  padding: 10px 20px 20px;
  flex-shrink: 0;
`;

const IconLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    font-size: 11px;
    font-weight: 700;
    margin: 6px 0 0 0;
  }

  &:hover {
    opacity: 0.8;
  }
`;
