import { useState } from "react";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../../../../shared/utility";
import valid from 'card-validator'

interface State {
  cvc: string,
  expiry: string | number,
  focus: any | undefined,
  name: string,
  number: string | number,
  issuer: any
}
const useForm = () => {
  const [state, setState] = useState<State>({
    cvc: '',
    expiry: '',
    focus: undefined,
    name: '',
    number: '',
    issuer: ''
  })

  const [error, setError] = useState({
    show: false,
    variant: '',
    message: '',
    name: false,
    number: false,
    exp: false,
    cvv: false
  })





  const handleCallback = ({ issuer }: any, isValid: any) => {
    if (isValid) {
      setState({ ...state, issuer: issuer });
    }
  };


  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {

    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);

    }



    if (target.name === "expiry") {

      target.value = formatExpirationDate(target.value);

    }
    if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }
    setState({ ...state, [target.name]: target.value });
  }


  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    let { value } = e.target



    let creditCard = valid.number(value.number)
    let expirationDate = valid.expirationDate(value.expiry)
    let cardholderName = valid.cardholderName(value.name)
    let cvv = valid.cvv(value.cvc)

    if (value.cvc === null || !value.cvc.trim()) {
      setError({
        ...error, message: 'Credit card CVC is not complete'
      })


    } else if (!cvv.isValid) {
      setError({ ...error, cvv: true })

    } else {
      setError({
        ...error, message: 'Credit Card CVC is Invalid'
      })

    }

    if (value.expiry === null || !value.expiry.trim()) {
      setError({
        ...error, message: 'Credit card is Expiration Date is not complete'
      })
    } else if (!expirationDate.isValid) {
      setError({ ...error, exp: true })

    } else {
      setError({
        ...error, message: 'Credit Card Expiration Date is Invalid'
      })



      if (value.number === null || !value.number.trim()) {

        setError({ ...error, message: 'Credit card Number is not complete' })


      } else if (!creditCard.isValid) {
        setError({ ...error, number: true })

      } else {
        setError({ ...error, message: 'Credit Card Number is Invalid' })

      }

      if (value.name === null || !value.name.trim()) {
        setError({ ...error, message: 'Credit Card  Name is not complete' })


      } else if (!cardholderName.isValid) {
        setError({ ...error, name: true })
      } else {
        setError({ ...error, message: 'Credit Card Name is Invalid' })
      }

      if (error.name && error.cvv && error.exp && error.number) {
        setError({ ...error, variant: 'success' })

        setError({ ...error, message: 'Credit Card is Valid' })
      } else {
        setError({ ...error, variant: 'danger' })

        setError({ ...error, message: 'an unkown error occured, please try again later' })



      }
    };
  }
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setState({ ...state, focus: e.target.name });
  }

  return { handleInputChange, handleInputFocus, handleCallback, handleSubmit, state, error }
}
export default useForm