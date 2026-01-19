import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";

function NoticeDetail() {
  const navigate = useNavigate();

  // ✅ 임시 데이터 (나중에 홈에서 state로 넘기거나, 백엔드에서 받아오면 됨)
  const notice = {
    id: 1,
    title: "수학 수행평가 제목",
    date: "2026-01-19", // 또는 "2026.01.19"
    content: `수행평가 내용 어쩌구 저쩌구 화요일까지 해올것
모르면 교무실로`,
    imageUrl:
      "https://via.placeholder.com/700x420.png?text=%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD+%EC%82%AC%EC%A7%84",
  };

  return (
    <Page>
      <Link to={"/home"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>

      <HeaderSpace />

      {/* 제목 + 날짜 */}
      <HeaderRow>
        <Title>{notice.title}</Title>
        <DateText>{notice.date}</DateText>
      </HeaderRow>

      <Divider />

      {/* 사진 */}
      {notice.imageUrl && (
        <ImageBox>
          <Image src={notice.imageUrl} alt="공지 사진" />
        </ImageBox>
      )}

      {/* 내용 */}
      <Content>{notice.content}</Content>

      {/* 뒤로가기(원하면 유지) */}
      <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>

      {/* 메뉴바 공간 확보 */}
      <FooterSpace />
      <Menubar />
    </Page>
  );
}

export default NoticeDetail;

/* styled-components */
const Page = styled.div`
  width: 85%;
  max-width: 414px;
  margin: 0 auto;
  min-height: 100vh;
  background: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
`;

const HeaderSpace = styled.div`
  height: 10px;
`;

const HeaderRow = styled.div`
  margin: 0 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  flex: 1;
`;

const DateText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #666;
  flex-shrink: 0;
`;

const Divider = styled.div`
  height: 1px;
  background: #a7bfa7;
  margin: 0 16px 16px;
`;

const ImageBox = styled.div`
  margin: 0 16px 14px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 14px;
  display: block;
  object-fit: cover;
`;

const Content = styled.p`
  margin: 0 16px 28px;
  font-size: 12px;
  line-height: 1.4;
  color: #222;
  white-space: pre-line;
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
