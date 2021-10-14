import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;

  & div.mainSearch {
    margin-bottom: 2rem;
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: flex-start;
  max-width: 500px;
  margin-bottom: 0.9rem;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 600px;

    &:last-child {
      max-width: unset;
      justify-content: flex-start;
      width: 100%;

      & div:last-child {
        align-self: center;
        max-width: 400px;
        /* margin-left: 9rem; */
      }
    }
  }
`;

const Span = styled.span`
  /* margin-right: 0.8rem;
  font-weight: 500;
  min-width: 150px;
  color: grey;
  & + * {
    flex: 1;
  } */
  margin-right: 0.2rem;
  color: red;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border: 3px solid grey;
  text-align: center;
  color: grey;
  font-weight: 500;
  border-radius: 3px;
  /* align-self: flex-end; */
`;

const LineBox = styled.div`
  display: flex;
  justify-content: flex-start;
  /* align-self: flex-start; */
  align-items: center;
  flex-direction: column;
  width: 100%;

  & button {
    margin-bottom: 0.5rem;
    align-self: flex-start;

    @media (min-width: 700px) {
      align-self: center;
      justify-content: flex-start;
    }
  }

  /* @media (min-width: 530px) {
    justify-content: flex-start;
  } */
  @media (min-width: 700px) {
    flex-direction: row;
    & ${Label} + * {
      margin-left: 0.8rem;
    }

    & ${Label} + ${Label} {
      & p {
        margin-left: 0.5rem;
      }
      & div {
        margin-left: 1rem;
      }
    }
    /* justify-content: flex-start;  */
  }
`;

const InnerBox = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  /* margin-bottom: 2rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  transition: padding 0.2s;
  @media (min-width: 500px) {
    padding: 1rem 2rem;
  }
`;

const VoucherBox = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0.5rem;
  box-shadow: 1px 2px 5px grey;
  transition: padding 0.2s;
  @media (min-width: 500px) {
    padding: 4rem 2rem;
  }
  @media (min-width: 768px) {
    /* max-width: 00px; */

    & ${Label} p + div,
    & ${Label} p + div > div {
      width: 100%;
      align-items: flex-start;
      margin-left: unset;
    }
  }
`;

const Text = styled.p`
  margin-right: 0.8rem;
  font-weight: 500;
  min-width: 150px;
  color: grey;
  & + * {
    flex: 1;
  }

  & + div.radioGroup {
    display: flex;
    justify-content: center;
    align-items: center;
    width: unset;
    flex-direction: row;
    & ${Label} {
      width: 100%;
    }
  }
`;

const InnerVoucherBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  > * {
    align-self: center;
  }

  & button {
    margin-top: 2rem;
    align-self: center;
  }
  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 900px;
  }
`;

export {
  InnerVoucherBox,
  Text,
  Form,
  Label,
  Span,
  Box,
  LineBox,
  InnerBox,
  VoucherBox,
};
