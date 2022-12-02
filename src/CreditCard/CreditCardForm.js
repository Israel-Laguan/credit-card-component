import React from "react";

const CreditCardForm = ({ card, onchange, handleChangeCode, handleChangeDate, handleChangeName}) => {
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

  const ValidationForm = (e) =>{
    e.preventDefault()

    const CardNumber = document.querySelector('#CardNumber').value
    
    if(CardNumber.length < 13 || CardNumber.length > 20){
      const error = document.querySelector('.error')
      error.style.display = 'block'
      setTimeout(() => {
        error.style.display = 'none'
      }, 5000);
    }

  }

  return (
    <form onSubmit={(e) => console.log(e.target)} className="creditCardForm">
      <fieldset className="info_user">
        <label>Cardholder's Name</label>
        <input
          type="text"
          autoCapitalize="true"
          autoComplete="name"
          minLength="5"
          maxLength="56"
          id="CardName"
          onChange={handleChangeName}
        />
      </fieldset>
      <fieldset className="info_user">
        <label>Card Number</label>
        <input
          type="text"
          minLength="13"
          maxLength="20"
          name="card"
          pattern="\d*"
          id='CardNumber'
          onKeyDown={onKeyDown}
          value={card}
          onChange={onchange}
        />
      </fieldset>
      <div>
        <fieldset className="info_user">
          <label>MM/YY</label>
          <input 
            type="text"
            id="CardDate"
            onChange={handleChangeDate} 
          />
        </fieldset>
        <fieldset className="info_user">
          <label>CCV</label>
          <input 
            type="text" 
            minLength="2" 
            maxLength="3"
            id='CodeCard'
            onChange={handleChangeCode} 
          />
        </fieldset>
      </div>
      <fieldset>
        <label>Save for later</label>
        <input className="checkbox" type="checkbox" defaultChecked="true" />
      </fieldset>
      <div>
        <button onClick={ValidationForm}>Send</button>
      </div>
    </form>
  );
};
export default CreditCardForm;
