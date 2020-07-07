import React from "react";
import CreditCardForm from "./CreditCardForm";
import check from "./checkIIN";

const { checkNetwork, networktoClass } = check;

const CreditCard = () => {
  const [card, setCard] = React.useState("");
  const [network, setNetwork] = React.useState("Your Bank");

  const onChange = (e) => {
    e.preventDefault();
    if (e.target.name === "card") {
      const network = checkNetwork(e.target.value);
      console.log(network);
      if (network) {
        setNetwork(network);
      }
      setCard(e.target.value);
    }
  };
  return (
    <div className="creditCard">
      <div data={`${networktoClass(network)}`}>{network}</div>
      <CreditCardForm card={card} onChange={onChange} />
    </div>
  );
};

export default CreditCard;
