import styled from "styled-components";
import { DeleteIcon } from "../icons/homePageIcon";

function NoticeCard({ content, isNotice, d_day }) {
  return (
    <>
      <Wrapper>
        <ContentsBox>
          <p>{content}</p>
          {isNotice ? <D_Day>D-{d_day}</D_Day> : <></>}
        </ContentsBox>
        <IconBox>
          <DeleteIcon />
        </IconBox>
      </Wrapper>
    </>
  );
}
export default NoticeCard;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ContentsBox = styled.div`
  width: 80%;
  height: 36px;
  text-align: center;
  font-size: 12px;
  border-radius: 10px;
  border: 1px solid #97b897;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  p {
    white-space: nowrap; /* 줄바꿈 안 함 */
    overflow: hidden; /* 넘친 텍스트 숨김 */
    text-overflow: ellipsis; /* 넘친 부분 ... 표시 */
  }
`;

const D_Day = styled.div`
  font-weight: bold;
  font-size: 12px;
  margin: auto 0;
`;

const IconBox = styled.div`
  margin: auto;
  padding-left: 20px;
`;
