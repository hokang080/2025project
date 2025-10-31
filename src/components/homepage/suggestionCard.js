import styled from "styled-components";

function SuggestionCard({ content, isNotice, d_day }) {
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
export default SuggestionCard;
