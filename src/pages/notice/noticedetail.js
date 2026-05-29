import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";

function NoticeDetail() {
  const location = useLocation();

  const notice = location.state?.notice ?? {
    id: 1,
    title: "수학 수행평가 제목",
    date: "2026.05.29",
    content: `수행평가 내용 어쩌구 저쩌구 화요일까지 해올것\n모르면 교무실로`,
    imageUrl:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=60",
  };

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
          <Badge>공지사항 상세</Badge>
          <Title>{notice.title}</Title>
          <DateText>{notice.date}</DateText>

          {notice.imageUrl && (
            <ImageBox>
              <Image src={notice.imageUrl} alt="공지 사진" />
            </ImageBox>
          )}

          <Content>{notice.content}</Content>
        </DetailCard>

        <Link to="/home" style={{ textDecoration: "none", width: "100%", display: "flex", justifyContent: "center" }}>
          <BackButton>뒤로 가기</BackButton>
        </Link>
      </ScrollArea>

      {/* 고정 푸터 */}
      <Menubar />
    </PageContainer>
  );
}

export default NoticeDetail;

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
  color: #498349;
  background-color: rgba(73, 131, 73, 0.08);
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

const ImageBox = styled.div`
  width: 100%;
  margin-bottom: 16px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #f1f2f6;
`;

const Image = styled.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  display: block;
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
