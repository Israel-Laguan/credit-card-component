# Challenge

Pass this tode from Ruby to React.

```ruby
# Tech Challenge

#| Network          | IIN (Prefix)                                       | Length     |
#| American Express | 34, 37                                             | 15         |
#| Diners Club      | 38, 39                                             | 14         |
#| Visa             | 4                                                  | 13, 16, 19 |
#| MasterCard       | 51, 52, 53, 54, 55                                 | 16         |

require "rspec/autorun"
def detect_network(card_number)
end

describe "detect_network" do
  TEST_CASES = [
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
  ]
  
  it "correctly identifies card networks" do
    TEST_CASES.each do | (card_number, expected_network) |
      expect(detect_network(card_number)).to eq expected_network
    end
  end
end
```

## Aditional info

Write a test and create a component in React that receives the input from the user, pass that input to the function, and returns the Network covering the cases presented in the test.

Add unitary tests. There should be some visual feedback.
