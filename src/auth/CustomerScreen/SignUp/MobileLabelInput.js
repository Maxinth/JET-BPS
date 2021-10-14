import {Label, Text, Span} from './styled'
import TextField from "@mui/material/TextField";
import CountryDropDown from './CountryDropDown'

 const MobileLabelInput = ({labelName,req, size, value, placeholder, inputType, }) => {
    return (
        <Label>
          <Text>
        {req && <Span>*</Span>}
        {labelName}
         </Text>
     <CountryDropDown />
        <TextField
          variant="outlined"
          size={size}
          value={value}
          placeholder={placeholder}
          type={inputType}
        //   onChange={(e) => handleChange(e.target.value)}
        />
      
    </Label>
        
    )
}

export default MobileLabelInput
