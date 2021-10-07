import { Label, InputBox, GreyBox, Span } from "./styled";

const InputLabel = ({
  type,
  textVal,
  labelName,
  bold = false,
  required = false,
}) => {
  return (
    <Label isBold={bold}>
      {required && <Span className="req">*</Span>}
      <Span>{labelName}</Span>
      {type === "input" && <InputBox placeholder={textVal} />}
      {type === "detail" && <GreyBox>{textVal}</GreyBox>}
    </Label>
  );
};

export default InputLabel;
