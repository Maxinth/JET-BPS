import { Label, InputBox, GreyBox, Span } from "./styled";

const InputLabel = ({ type, textVal, labelName }) => {
  return (
    <Label>
      <Span>{labelName}</Span>
      {type === "search" && <InputBox />}
      {type === "detail" && <GreyBox>{textVal}</GreyBox>}
    </Label>
  );
};

export default InputLabel;
