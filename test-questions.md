TECHNICAL INTERVIEW

Create a console app using C# to implement following somewhat artificial scenario. Unit tests are not required, but should be considered.

For an invoice / cashier system, you need to calculate discounted prices. Multiple discounts can be applied to the same purchase. All discounts are cumulative in the order listed below. Assume that the final price will be displayed on a cash register or similar.

1.	Clearance items are discounted 10%
2.	Club members get a 5% discount on non-clearance items
3.	For orders over $500, discount 5%
4.	Purchases made in January are given a 2% discount

Additionally, buyers can apply a gift card of any value up to $100. If the gift card value exceeds the purchase price, the display should be $0. Don’t worry about calculating the gift card balance.

Examples:
•	Club member purchases $550 worth of non-clearance items. Displayed price should be $496.38 ($496.375).
•	Buyer purchases $200 worth of non-clearance items on January 15 and has a $20 gift card. Displayed price should be $176.


BONUS SECTION

Additional requirements are specified:

1.	Credit card purchase requires a 1% fee against the original sale price.
2.	Club members get an additional 2% discount in July on any purchase item.

How would you implement these changes, ideally without violating the Open / Closed Principle? What changes would you anticipate to your tests?

