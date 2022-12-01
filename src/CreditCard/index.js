import React from "react";
import CreditCardForm from "./CreditCardForm";
import check from "./checkIIN";

const { checkNetwork, networktoClass } = check;

const CreditCard = () => {
  const [card, setCard] = React.useState("");
  const [network, setNetwork] = React.useState("Your Bank");
  const [name, setName] = React.useState("")
  const [Cardnumber, setCardNumber] = React.useState("")
  const [DateCard, setDateCard] = React.useState("")
  const [CodeCard, setCodeCard] = React.useState("")

  const onChange = (e) => {
    e.preventDefault();
    if (e.target.name === "card") {
      const network = checkNetwork(e.target.value);
      console.log(network);
      if (network) {
        setNetwork(network);
      }
      setCard(e.target.value);
      setCardNumber(e.target.value)
    }
  };

  const handleChangeName = (e) =>{
    setName(e.target.value)
  }

  const handleChangeDate = (e) =>{
    setDateCard(e.target.value)
  }

  const handleChangeCode = (e) =>{
    setCodeCard(e.target.value)
  }

  return (
    <div className="creditCard">
      <div data={`${networktoClass(network)}`}>
        {network}
        <p>{Cardnumber}</p>
        <p>{name}</p>
        <span>
          <p>{DateCard}</p>
          <p>{CodeCard}</p>
        </span>
      </div>
      <CreditCardForm card={card} onchange={onChange} props={{handleChangeName, handleChangeCode, handleChangeDate}}/>
    </div>
  );
};

export default CreditCard;
