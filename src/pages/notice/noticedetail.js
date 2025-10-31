import React from "react";
import styled from "styled-components";
import Img1 from "../../asset/img1.jpg";
import Img2 from "../../asset/img2.jpg";
import  { LogoIcon } from "../../components/icons/logoIcon";
import { Link } from "react-router-dom";
import Menubar from "../../components/common/menubar";

 
function NoticeDetail() {
  // mock 데이터
  const mockNotices = [
    {
      id: 1,
      title: "수학 수행평가 안내",
      dday: 5,
      content: `수행평가 내용 어쩌구 저쩌구 화요일까지 해올 것 모르면 교육실로 문의하기`,
      image: Img1, 
    },
    {
      id: 2,
      title: "과학 프로젝트 공지",
      dday: 10,
      content: `조별 과학 실험 준비물 챙기기 안전 수칙 필독`,
      image: Img1,
    },
    {
      id: 3,
      title: "체육 수행평가 안내",
      dday: 4,
      content: '배드민턴 하이 클리어 (준비물 : 운동화, 배드민턴 라켓)',
      image: Img2,
    }
  ];

  // 현재 보여줄 공지 (1번으로 예시)
  const noticeId = 3;
  const notice = mockNotices.find((n) => n.id === noticeId);

  return (
    <Page>
      <Link to={"/"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>

      {notice ? (
        <>
          <TitleRow>
            <TitleText>{notice.title}</TitleText>
            {typeof notice.dday === "number" && (
              <Dday>D-{notice.dday}</Dday>
            )}
          </TitleRow>

          <Card>
            <ImageBox>
              <MainImage
                src={notice.image || Img1}
                alt={`${notice.title} 이미지`}
              />
            </ImageBox>
            <BodyText>{notice.content}</BodyText>
          </Card>
        </>
      ) : (
        <Empty>해당 공지를 찾을 수 없습니다.</Empty>
      )}

      <Menubar />
    </Page>
  );
}

export default NoticeDetail;


// styled-components

const Page = styled.div`
  width: 100%;
  max-width: 414px;
  margin: 0 auto;
  min-height: 100vh;
  background: #ffffff;
`;


const BottomSpace = styled.div`
  height: 90px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px 6px;
`;

const TitleText = styled.h1`
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;

const Dday = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const Card = styled.div`
  margin: 0 16px;
`;

const ImageBox = styled.div`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: #ddd;
`;

const MainImage = styled.img`
  width: 100%;
  display: block;
`;

const BodyText = styled.p`
  margin-top: 8px;
  font-size: 12px;
  line-height: 1.4;
  color: #222;
  white-space: pre-line;
`;

const Empty = styled.div`
  text-align: center;
  color: #888;
  margin-top: 100px;
`;

const LogoBox = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;