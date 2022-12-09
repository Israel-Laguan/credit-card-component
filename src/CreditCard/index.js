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
    <div className="flex-creditCard">
      <div className="flip-card">
        <div className="flip-card-inner creditCard">
          <div data={`${networktoClass(network)}`} className='flip-card-front'>
            {network}
            <p>{Cardnumber}</p>
            <div className="flex-date-user">
              <p>{name}</p>
              <p>{DateCard}</p>
            </div>
          </div>
          <div className="flip-card-back" data={`${networktoClass(network)}`} >
              <span className="CodeBarra"></span>
              <p className="codeCard">{CodeCard}</p>
          </div>
        </div>
        <span>Coloca tu mouse encima de la tarjeta</span>
      </div>
      <div>
        <CreditCardForm card={card} onchange={onChange} handleChangeName={handleChangeName} handleChangeCode={handleChangeCode} handleChangeDate={handleChangeDate}/>
      </div>
    </div>
  );
};

export default CreditCard;
