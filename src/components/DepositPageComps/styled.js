import styled, { css } from "styled-components";

const Container = styled.section`
  padding: 1rem 2rem;
  width: 100%;
`;
const InputBox = styled.input`
  padding: 0.5rem;
  font-size: 1.1rem;
  border-radius: 5px;
  border: 1px solid #333;
  transition: all 0.2s;

  &:focus {
    background-color: #f2f2f2;
    border: 1px solid green;
  }

  ${({ fill }) =>
    fill &&
    css`
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
    `}

  &:disabled {
    background-color: grey;
    color: #fff;
  }
`;

const Label = styled.label``;
export { Container, InputBox, Label };
