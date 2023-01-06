import React from "react";
import Style from "../CreditCard/styles/CreditCardForm.module.css"
import MaskedInput from "react-input-mask";
import { useNavigate } from "react-router-dom"

const CreditCardForm = ({ card, onchange, handleChangeCode, handleChangeDate, handleChangeName, disabled}) => {
  const onKeyDown = (e) => {
    // https://stackoverflow.com/a/43710277
    let key = e.keyCode || e.which; // get key cross-browser
    if (
      key === 8 ||
      key === 9 ||
      key === 46 ||
      key === 17 ||
      key === 91 ||
      key === 18 ||
      key === 89 ||
      key === 67 ||
      key === 88 ||
      key === 35 ||
      key === 36 ||
      key === 116
    )
      //back, delete tab, ctrl, win, alt, f5, paste, copy, cut, home, end
      return true;

    if (key >= 37 && key <= 40)
      //arrows
      return true;

    if (key >= 48 && key <= 57)
      // top key
      return true;

    if (key >= 96 && key <= 105)
      //num key
      return true;

    if (e.preventDefault) e.preventDefault(); //normal browsers
    e.returnValue = false; //IE
  };

  const ToGo = useNavigate()

  const ValidationErrorForm = () => {

    const CardNumber = document.querySelector('#CardNumber').value
    const CardName = document.querySelector('#CardName').value
    const CardCode = document.querySelector('#CodeCard').value
    const CardDate = document.querySelector('#CardDate').value

    if(CardName.length < 5 || CardName.length > 56){
      const error = document.querySelector('.ErrorName')
      error.style.display = 'block'
      setTimeout(() => {
        error.style.display = 'none'
      }, 5000);
    }

    if(CardNumber.length < 13 || CardNumber.length > 20){
      const error = document.querySelector('.ErrorNumber')
      error.style.display = 'block'
      setTimeout(() => {
        error.style.display = 'none'
      }, 5000);
    }

    if(CardCode.length < 3 || CardCode.length > 4){
      const error = document.querySelector('.ErrorCode')
      error.style.display = 'block'
      setTimeout(() => {
        error.style.display = 'none'
      }, 5000);
    }

    if(CardDate.length < 4 || CardDate.length > 5){
      const error = document.querySelector('.ErrorDate')
      error.style.display = 'block'
      setTimeout(() => {
        error.style.display = 'none'
      }, 5000);
    }
  };

  const ValidationForm = (e) => {
    e.preventDefault()
    const randomnum = Math.floor(Math.random() * 2)
    const spinner = document.querySelector('.lds-ring')

    spinner.style.display = 'block'

    setTimeout(()=>{
      spinner.style.display = 'none'
    }, 5000)

    if(randomnum === 0){
      const MessageIncompleted = document.querySelector('.incompleted')
      setTimeout(()=>{
        MessageIncompleted.style.display = 'block'
      },5000)
    }
    
    if(randomnum === 1){
      const MessageCompleted = document.querySelector('.completed')
      setTimeout(()=>{
        MessageCompleted.style.display = 'block'
      },5000)
      
      setTimeout(()=>{
        ToGo('/completed')
      }, 6500)
    }

    ValidationErrorForm()
  };

  return (
    <form onSubmit={(e) => console.log(e.target)} className={Style.creditCardForm}>
      <fieldset className={Style.info_user}>
        <label>Cardholder's Name</label>
        <input
          type="text"
          autoCapitalize="true"
          autoComplete="name"
          minLength="5"
          maxLength="56"
          id="CardName"
          className="inputForm"
          onChange={handleChangeName}
        />
      </fieldset>
      <fieldset className={Style.info_user}>
        <label>Card Number</label>
        <input
          type="text"
          minLength="13"
          maxLength="20"
          name="card"
          pattern="\d*"
          id='CardNumber'
          className="inputForm"
          onKeyDown={onKeyDown}
          value={card}
          onChange={onchange}
        />
      </fieldset>
      <div>
        <fieldset className={Style.info_user}>
          <label>MM/YY</label>
          <MaskedInput
            type='tel'
            mask='99/99'
            id="CardDate"
            className="inputForm"
            onChange={handleChangeDate}
          />
        </fieldset>
        <fieldset className={Style.info_user}>
          <label>CCV</label>
          <input 
            type="text" 
            minLength="2" 
            maxLength="3"
            id='CodeCard'
            className="inputForm"
            onChange={handleChangeCode} 
          />
        </fieldset>
      </div>
      <fieldset>
        <label>Save for later</label>
        <input className="checkbox" type="checkbox" defaultChecked="true" />
      </fieldset>
      <div>
        <button type="submit" disabled={disabled} onClick={ValidationForm}>Pay</button>
      </div>
    </form>
  );
};
export default CreditCardForm;
