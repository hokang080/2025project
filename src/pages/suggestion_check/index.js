import styled from 'styled-components';
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import SugBlockList from '../../components/common/sugblock';

function SuggestionCheck() {

  return (
    <>
      <Link to={"/"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>
      <Wrapper>
        <SugBlockList />
      </Wrapper>
      <Menubar/>
    </>
  );
}
export default SuggestionCheck;

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