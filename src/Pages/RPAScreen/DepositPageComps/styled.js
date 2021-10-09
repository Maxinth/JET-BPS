import styled, { css } from "styled-components";

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

const GreyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  border: 3px solid grey;
  padding: 0.5rem;
  font-size: 1.1rem;
  border-radius: 5px;
  width: 80%;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin-bottom: 0.5rem;
  ${({ isBold }) =>
    isBold &&
    css`
      & ${GreyBox} {
        font-weight: bolder;
        text-transform: uppercase;
        /* color: #333; */
        font-size: 1.4rem;
      }
    `}
`;

const Span = styled.span`
  margin-right: 0.3rem;
  font-weight: bold;
  & + ${InputBox} {
    width: 60%;
    /* flex: 1; */
  }

  &.req {
    color: red;
    /* position:relative; */
    margin-right: 0.1rem;
  }
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.section`
  padding: 1rem 2rem;
  width: 100%;
  & > ${InputBox} {
    width: 100%;
    margin-bottom: 1rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & ${InnerBox} ${InnerBox} {
    margin-top: 4rem;
  }
`;

export { InnerBox, Container, InputBox, Label, GreyBox, Span };
