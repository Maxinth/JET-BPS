import Payment from "payment";
import valid from 'card-validator'


export function validate(values){
let error={}
let creditCard=valid.number(values.number)
creditCard.expirationDate=valid.expirationDate(values.expiry)
creditCard.cardholderName=valid.cardholderName(values.name)
creditCard.cvv=valid.cvv(values.cvc)

 error.show=true
 error.variant='danger'
 error.message='an unkown error occured, please try again later'
 error.name=false
 error.number=false
 error.exp=false
 error.cvv=false
console.log(values)
 console.log(creditCard)
// if(values.cvc === null || !values.cvc.trim()){
//     error.message='Credit card CVC is not complete'

// }else if(!creditCard.cvv.isValid){
//     error.cvc=true
// }else{
//     error.message='Credit Card CVC is Invalid'
// }

// if(values.expiry === null || !values.expiry.trim()){

//     error.message='Credit card is Expiration Date is not complete'

// }else if(!creditCard.expirationDate.isValid){
//     error.exp=true
// }else{
//     error.message='Credit Card Expiration Date is Invalid'
// }

// if(values.number === null || !values.number.trim()){

//     error.message='Credit card Number is not complete'

// }else if(!creditCard.isValid){
//     error.number=true
// }else{
//     error.message='Credit Card Number is Invalid'
// }

// if(values.name === null || !values.name.trim()){

//     error.message='Credit Card  Name is not complete'

// }else if(!creditCard.cardholderName.isValid){
//     error.name=true
// }else{
//     error.message='Credit Card Name is Invalid
// }

if(error.cname && error.cvc && error.cexp && error.cnumber){
    error.variant='success'
    error.message='Credit Card is Valid'
}

return error

}


function clearNumber(value) {
  return value.replace(/\D+/g, "");
}

export function formatCreditCardNumber(value) {

  if (!value) {
    return value;
  }

  const issuer = Payment.fns.cardType(value);
  const clearValue = clearNumber(value);
  let nextValue;

  switch (issuer) {
    case "amex":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`;
      break;
    case "dinersclub":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`;
      break;
  }

  return nextValue.trim();
}

export function formatCVC(value, prevValue, allValues = {}) {
  const clearValue = clearNumber(value);
  let maxLength = 3

  if (allValues.number) {
    const issuer = Payment.fns.cardType(allValues.number);
    maxLength = issuer === "amex" ? 4 : 3;
  }

  return clearValue.slice(0, maxLength);
}

export function formatExpirationDate(value) {
  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }

  return clearValue;
}




export const generateNumber=(serialLength)=>{
    var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        randomSerial = "",
        i,
        randomNumber;
    
    for (i = 0; i < serialLength; i = i + 1) {
        randomNumber = Math.floor(Math.random() * chars.length);
        randomSerial += chars.substring(randomNumber, randomNumber + 1)
    }
return randomSerial
}