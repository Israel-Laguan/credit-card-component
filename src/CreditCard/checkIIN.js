const cardNetworks = {
  "American Express": /^(?:3[47][0-9]{13})$/,
  "Diners Club": /^(?:3(?:[89][0-9])[0-9]{11})$/,
  MasterCard: /^(?:5[1-5][0-9]{14})$/,
  Visa: /^(?:4[0-9]{12}|4[0-9]{15}|4[0-9]{18})$/,
};

const checkIIN = (cardNumber = "") =>
  (Object.entries(cardNetworks).filter((option) =>
    cardNumber.match(option[1])
  )[0] || ["Your Bank"])[0];

const preCheckIIN = (cardNumber = "") => {
  const digits = +cardNumber.slice(0, 2);
  if (digits > 39 && digits < 50) return "Visa";
  if (digits > 50 && digits < 56) return "MasterCard";
  if (digits === 34 || digits === 37) return "American Express";
  if (digits === 38 || digits === 39) return "Diners Club";
  return "Your Bank";
};


const networktoClass = (network) => network.toLowerCase().split(" ", 1)[0];

const checkNetwork = (cardNumber) =>
  cardNumber.length > 1 && cardNumber.length < 10
    ? preCheckIIN(cardNumber)
    : checkIIN(cardNumber);

export default { checkIIN, checkNetwork, networktoClass };
