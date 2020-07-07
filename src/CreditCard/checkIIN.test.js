import check from "./checkIIN";
const { checkIIN } = check;

describe("detect_network", () => {
  const tests = [
    ["341234567890123", "American Express"],
    ["371234567890123", "American Express"],
    ["38123456789012", "Diners Club"],
    ["5112345678901245", "MasterCard"],
    ["5212345678901245", "MasterCard"],
    ["5312345678901245", "MasterCard"],
    ["5412345678901245", "MasterCard"],
    ["5512345678901245", "MasterCard"],
    ["4512345678901", "Visa"],
    ["4512345678901345", "Visa"],
    ["4512345678901345345", "Visa"],
  ];

  it("correctly identifies card networks", () => {
    for (let test of tests) {
      expect(checkIIN(test[0])).toBe(test[1]);
    }
  });
});
