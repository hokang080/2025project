import React from "react";
import styled from "styled-components";
import CommentIconSVG from "../../assets/comment-smile-svgrepo-com 1.svg";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";

function MySuggestion() {
  // 임시 공지 데이터
  const notice = {
    id: 1,
    title: "교실 책상 이상함",
    content: `몇번째 분단 앞쪽 책상에서 삐그덕 소리가 계속 납니다.
              수업시간에 집중도 안되고 자꾸 신경쓰입니다.
              버티던가 교체되었으면 좋겠습니다.`,
    comment: "곧 교체 예정입니다.",
  };

  return (
    <Page>
      <Link to={"/"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>
      <HeaderSpace />

      {/* 공지 제목 표시하기 */}
      <Title>{notice.title}</Title>

      <Divider />

      {/* 공지 내용 표시하기 */}
      <Content>{notice.content}</Content>

      <Divider />

      <CommentSection>
        <CommentLabel>댓글</CommentLabel>

        <CommentRow>
          {/* 댓글 아이콘 */}
          <CommentIcon src={CommentIconSVG} alt="댓글 아이콘" />

          {/* 댓글 내용 박스 */}
          <CommentBox>
            <CommentText>{notice.comment}</CommentText>
          </CommentBox>
        </CommentRow>
      </CommentSection>

      <BackButton>뒤로 가기</BackButton>
      <FooterSpace />
      <Menubar />
    </Page>
  );
}

export default MySuggestion;

// styled-components
const Page = styled.div`
  width: 100%;
  max-width: 414px;
  margin: 0 auto;
  min-height: 100vh;
  background: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
`;

const HeaderSpace = styled.div`
  height: 10px;
`;


const Title = styled.h1`
  font-size: 14px;
  font-weight: 600;
  margin: 0 16px 8px;
`;

const Divider = styled.div`
  height: 1px;
  background: #a7bfa7;
  margin: 0 16px 16px;
`;

const Content = styled.p`
  margin: 0 16px 40px;
  font-size: 12px;
  line-height: 1.4;
  color: #222;
  white-space: pre-line;
`;

const CommentSection = styled.div`
  margin: 0 16px 24px;
`;

const CommentLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
`;

/* 아이콘 + 박스 나란히 */
const CommentRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

const CommentIcon = styled.img`
  width: 19px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 14px; /* 박스 안의 텍스트와 수직 정렬 맞추려고 */
`;

const CommentBox = styled.div`
  flex: 1;
  border: 1.5px solid #a7bfa7;
  border-radius: 12px;
  padding: 14px 14px 16px;
  background: #fff;
  min-height: 60px;
`;

const CommentText = styled.div`
  font-size: 12px;
  line-height: 1.5;
  color: #2a2a2a;
`;

const BackButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  background: #9ab999;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 12px 46px;
  font-size: 13px;
  cursor: pointer;
`;

const FooterSpace = styled.div`
  height: 110px;
`;

const LogoBox = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;