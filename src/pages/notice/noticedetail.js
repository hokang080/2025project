import React from "react";
import styled from "styled-components";
import Img1 from "./asset/img1.jpg";

function NoticeDetail() {
  // 1. 공지사항 임시 데이터 (mock data)
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
  ];

  // 2. 현재 보고 싶은 공지 ID
  const noticeId = 1;

  // 3. 배열에서 해당 ID의 공지를 찾기
  const notice = mockNotices.find((n) => n.id === noticeId);

  return (
    <Page>
      <TopSpace />

      {/* 4. 공지가 있으면 화면에 표시하고, 없으면 "없습니다" */}
      {notice ? (
        <>
          <TitleRow>
            {/* notice 안의 제목(title) 보여주기 */}
            <TitleText>{/* 여기를 채워보자! : notice.??? */}</TitleText>

            {/* D-day 표시 (숫자일 때만) */}
            {typeof notice.dday === "number" && (
              <Dday>{/* 여기를 채워보자: D-{notice.???} */}</Dday>
            )}
          </TitleRow>

          <Card>
            <ImageBox>
              {/* 이미지 경로 채워보기 */}
              <MainImage
                src={notice.image || Img1}
                alt="공지 이미지"
              />
            </ImageBox>

            {/* 본문 내용(content) 채워보기 */}
            <BodyText>{/* notice.??? */}</BodyText>
          </Card>
        </>
      ) : (
        <Empty>해당 공지를 찾을 수 없습니다.</Empty>
      )}

      <BottomSpace />
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

const TopSpace = styled.div`
  height: 90px;
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
