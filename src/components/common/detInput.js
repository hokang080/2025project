import styled from "styled-components";

function DetInput({ label, placeholder }) {
  return (
    <>
      <Container>
        <h3>{label}</h3>
        <Input placeholder={placeholder} />
      </Container>
    </>
  );
}
export default DetInput;

const Container = styled.div`
  width: 100%;
  .h3 {
    font-size: 12px;
    font-weight: bold;
  }
`;

const Input = styled.input`
  border: solid 1px #498349;
  border-radius: 10px;
  height: 100px;
  width: 90%;
  padding: 10px;
`;