import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import NoticeCard from "../../components/homepage/noticeCard";

function HomePage() {
  const noticeData = [
    { isNotice: true, content: "1번째 공지사항 어쩌두", d_day: "10" },
    { isNotice: true, content: "2번째 공지사항 어쩌두", d_day: "20" },
    { isNotice: true, content: "3번째 공지사항 어쩌두", d_day: "30" },
    { isNotice: true, content: "4번째 공지사항 어쩌두", d_day: "40" },
  ];

  const suggestionData = [
    { isNotice: false, content: "1번째 suggestionData 어쩌두" },
    { isNotice: false, content: "2번째 suggestionData 어쩌두" },
    { isNotice: false, content: "3번째 suggestionData 어쩌두" },
    { isNotice: false, content: "4번째 suggestionData 어쩌두" },
  ];

  return (
    <>
      <Link to={"/"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>

      <Wrapper>
        <ContentsBox>
          <Label>우리반 공지사항</Label>

          {noticeData.map((item) => {
            return (
              <NoticeCard
                isNotice={item.isNotice}
                content={item.content}
                d_day={item.d_day}
              />
            );
          })}
        </ContentsBox>
        <ContentsBox>
          <Label>나의 건의함</Label>
          {suggestionData.map((item) => {
            return (
              <NoticeCard
                isNotice={item.isNotice}
                content={item.content}
                d_day={0}
              />
            );
          })}
        </ContentsBox>
      </Wrapper>
      <Menubar />
    </>
  );
}
export default HomePage;

const Wrapper = styled.div`
  width: 80%;
  display: block;
`;

const ContentsBox = styled.div``;

const Label = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
`;

const LogoBox = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
