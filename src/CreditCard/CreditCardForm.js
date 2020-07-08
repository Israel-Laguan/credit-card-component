import React from "react";

const CreditCardForm = ({ card, onChange }) => {
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
  return (
    <form onSubmit={(e) => console.log(e.target)} className="creditCardForm">
      <fieldset>
        <label>Cardholder's Name</label>
        <input
          type="text"
          autoCapitalize="true"
          autoComplete="name"
          minLength="5"
          maxLength="56"
        />
      </fieldset>
      <fieldset>
        <label>Card Number</label>
        <input
          type="text"
          minLength="13"
          maxLength="20"
          name="card"
          pattern="\d*"
          onKeyDown={onKeyDown}
          value={card}
          onChange={onChange}
        />
      </fieldset>
      <div>
        <fieldset>
          <label>MM/YY</label>
          <input type="text" />
        </fieldset>
        <fieldset>
          <label>CCV</label>
          <input type="text" minLength="2" maxLength="3" />
        </fieldset>
      </div>
      <fieldset>
        <label>Save for later</label>
        <input type="checkbox" defaultChecked="true" />
      </fieldset>
    </form>
  );
};
export default CreditCardForm;
