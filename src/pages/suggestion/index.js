import styled from 'styled-components';
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import SuggestionButton from '../../components/buttons/suggestionButton';
import SuggestionCheckButton from '../../components/buttons/suggestionCheck';


function SuggestionPage() {
  return (
    <>
      <Link to={"/"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>
      <Wrapper>
        <Link to="/suggestion_write">
          <ButtonBox>
            <SuggestionButton />
          </ButtonBox>
        </Link>
        <Link to="/suggestion_check">
          <ButtonBox>
            <SuggestionCheckButton />
          </ButtonBox>
        </Link>
      </Wrapper>
      <Menubar/>
    </>
  );
}
export default SuggestionPage;

const Wrapper = styled.div`
  width: 80%;
  display: block;
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
