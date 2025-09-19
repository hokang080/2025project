import styled from "styled-components";

function EndButton() {
  return (
    <>
      <Container>
        <p>작성완료</p>
      </Container>
    </>
  );
}
export default EndButton;

const Container = styled.div`
  width: 220px;
  height: 40px;
  background:rgba(107, 72, 2, 1);
  color: #ffffff;
  text-align: center;
  border-radius: 10px;
  display: flex;               /* flexbox 활성화 */
  justify-content: center;     /* 가로 가운데 */
  align-items: center;         /* 세로 가운데 */

  
  p {
    font-size: 12px;
    font-weight: bold;
    margin: 0;

  }
  `;