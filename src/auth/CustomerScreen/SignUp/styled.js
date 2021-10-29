import styled from "styled-components";
import { Field } from "formik";

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: flex-start;
  max-width: 500px;
  margin-bottom: 0.9rem;
  width: 100%;

  & input {
    border: 1px solid transparent;
    /* padding: 1rem; */
    width: 100%;
    height: 100%;
    /* background-color: red; */
    outline: none;
    font-size: 1rem;
    width: 100%;
    border-radius: 5px;
    padding: 0.5rem;
    background-color: ghostwhite;
    transition: all 0.3s;

    &:focus {
      border: 1px solid blue;
      background-color: #fff;
      border: 1px solid blue;
    }
    &::placeholder {
      text-align: center;
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
  }
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
const LabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: red;
  /* border: 1px solid red; */
  padding: 0.5rem;
`;

const Text = styled.p`
  margin-right: 0.8rem;
  font-weight: 500;
  min-width: 150px;
  text-align: center;
  color: #9c27b0;

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

  @media (min-width: 500px) {
    text-align: unset;
  }
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
const Input = styled(Field)`
  border: 1px solid transparent;
  /* padding: 1rem; */
  width: 100%;
  height: 100%;
  /* background-color: red; */
  outline: none;
  font-size: 1rem;
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: ghostwhite;
  transition: all 0.3s;

  &:focus {
    border: 1px solid blue;
    background-color: #fff;
    border: 1px solid blue;
  }
`;
const SelectBox = styled.select`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding: 0.5rem;
  /* border: 1px solid #dee2e6; */
  /* padding: 0.5rem 1.5rem 1rem 1rem; */
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
`;
const Option = styled.option`
  padding: 1rem;
  cursor: pointer;
`;

const Form = styled.form``;
const ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.1rem;
`;
export {
  Form,
  LabelBox,
  Label,
  Text,
  Span,
  SelectBox,
  Option,
  Input,
  Box,
  ErrorBox,
};
