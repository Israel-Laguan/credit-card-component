import React from "react";

const CreditCardForm = ({ card, onChange }) => {
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
