import styled from "styled-components";

function AuthInput({ label, placeholder, value, onChange, type = "text" }) {
  return (
    <>
      <Container>
        <h3>{label}</h3>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Container>
    </>
  );
}
export default AuthInput;

const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;
  
  h3 {
    font-size: 14px;
    font-weight: 800;
    color: #2d3436;
    margin: 0 0 8px 0;
    text-align: left;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1.5px solid #F3CD3F;
  border-radius: 12px;
  padding: 0 16px;
  font-size: 14px;
  color: #2d3436;
  background-color: #ffffff;
  box-sizing: border-box;
  transition: all 0.25s ease;
  font-family: inherit;

  &::placeholder {
    color: #a0a0a0;
    font-size: 13px;
  }

  &:focus {
    outline: none;
    border-color: #e5b612;
    box-shadow: 0 0 0 3px rgba(243, 205, 63, 0.2);
  }
`;
