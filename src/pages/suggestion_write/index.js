import styled from 'styled-components';
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import SugInput from '../../components/common/sugInput';
import DetInput from '../../components/common/detInput';
import SuggestionComplete from '../../components/buttons/suggestioncomplete';

function SuggestionWrite() {
  return (
    <>
      <Link to={"/"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>
      <Wrapper>
        <h1>건의작성</h1>
        <SugInput label={"제목"} placeholder={"제목을 입력해 주세요"} />
        <DetInput label={"세부사항"} placeholder={"자세한 공지사항을 입력해 주세요"} />
        <ButtonBox>
          <SuggestionComplete />
        </ButtonBox>
      </Wrapper>
      <Menubar/>
    </>
  );
}
export default SuggestionWrite;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;  
  justify-content: center; /* 중앙 정렬 */
  margin: 0 auto; /* 가운데 정렬 */
`;

const LogoBox = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.div`
  padding: 50px 0;

  width: 100%;
  display: flex;
  justify-content: center;
`;