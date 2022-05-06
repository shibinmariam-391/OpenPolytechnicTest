#Open Polytechnic Technical Test - Senior Level

For this test you will be tasked with creating an application that acts as a pseudo shopping cart. It will consist of an Angular front-end and a C#/.NET back-end. The client is to take input and pass it to the API, and display the resulting total cost of the purchase. How you design the application outside of this is up to you.

There are some business rules that must be adhered to when creating your calculation logic.

-----------------------------------------

Multiple discounts can be applied to the same purchase. All discounts are cumulative in the order listed below.

1.	Clearance items are discounted 10%
2.	Club members get a 5% discount on non-clearance items
3.	For orders over $500, discount 5%
4.	Purchases made in January are given a 2% discount

Additionally, buyers can apply a gift card of any value up to $100. If the gift card value exceeds the purchase price, the display should be $0. Don’t worry about calculating the gift card balance.

Examples:
- Club member purchases $550 worth of non-clearance items. Displayed price should be $496.38 ($496.375).
- Buyer purchases $200 worth of non-clearance items on January 15 and has a $20 gift card. Displayed price should be $176.

Additional requirements to implement if time allows:

1.	Credit card purchase requires a 1% fee against the original sale price.
2.	Club members get an additional 2% discount in July on any purchase item.

-----------------------------------------

You will not need to implement unit tests, but you should design your system in a way that it would be testable in this way. You will be asked to speak to testing strategies as part of the interview.