import styled from 'styled-components';
import {Label, Text, Span} from "../../../Pages/RPAScreen/DepositPageComps/styled";

const LabelBox = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
& p{
    min-width: unset;
    + div div{
        align-self:unset;
        max-width: unset;
        width: 100%;
        & input {
        flex:1;
        width: 100%;
        text-align:center;
        display:flex;
        justify-content:center;
        align-items:center;
        padding-bottom:.2rem !important;

        &::placeholder{
            position:relative;
            top: -2px;
        }
        
     }
    } 
}

`;

export {LabelBox,Label, Text, Span}