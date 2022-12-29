import React from "react";
import CreditCardForm from "./CreditCardForm";
import check from "./checkIIN";
import Style from '../CreditCard/styles/CreditCard.module.css'
import Loading from "./Loading/Loading";

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
    <div className={Style.flexCreditCard}>
      <div className={Style.flipCard}>
        <div className={Style.flipCardInner}>
          <div data={`${networktoClass(network)}`} className={Style.flipCardFront}>
            {network}
            <p>{Cardnumber}</p>
            <div className={Style.flexDateUser}>
              <p>{name}</p>
              <p>{DateCard}</p>
            </div>
          </div>
          <div className={Style.flipCardBack} data={`${networktoClass(network)}`} >
              <span className={Style.CodeBarra}></span>
              <p className={Style.codeCard}>{CodeCard}</p>
          </div>
        </div>
        <Loading/>
        <span>Mouse over the card to see the ccv</span>
      </div>
      <div>
        <CreditCardForm card={card} onchange={onChange} handleChangeName={handleChangeName} handleChangeCode={handleChangeCode} handleChangeDate={handleChangeDate}/>
      </div>
    </div>
  );
};

export default CreditCard;
