# GlobiSun fixed-price wholesale rollout

## Locked business rules

- Minimum order: **$500**
- U.S. shipping: **free**
- Listed prices: **fixed**
- Applicable U.S. sales tax: **included in listed prices** after Shopify tax-inclusive pricing is enabled
- Inventory: **real and purchasable**
- Customers can adjust quantities, variants, product notes, and general order notes before checkout

## Product price adjustment rule

- Large/heavy products with relatively low unit prices: **increase 8%**
- Lightweight products with relatively high unit prices: **increase 5%**
- Middle-weight/middle-price products: **increase 6%–7% after review**
- Products with unusually weak margins or unusually high fulfillment cost: review individually instead of applying a mechanical percentage

## Do not publish the theme until these Shopify Admin tasks are complete

1. Enable the intended tax-inclusive pricing configuration.
2. Confirm California and any other required U.S. tax registrations are configured correctly.
3. Apply the 5%–8% product price adjustment.
4. Verify every active product is taxable where appropriate.
5. Confirm the free U.S. shipping rate and service area.
6. Test a taxable checkout using a California address.
7. Test a customer-editable prepared order link.
8. Confirm all active products use the new product template.
9. Remove outdated recurring-purchase settings, old $800 minimum language, and conflicting free-shipping/tax copy.
10. Update the store title, meta description, company name, About page, and primary `globisun.art` domain.

## Theme changes in this branch

- Fixed-price B2B homepage positioning
- Live catalog messaging
- Configurable product page with variants, quantity, deadline, color/variant mix, logo, packaging, substitution, and customer notes
- Customer-editable Order Builder cart
- $500 minimum progress and checkout gate
- Product-level note editing inside the cart
- General order notes
- Shareable prepared-order cart links
- Compact configuration-review form

## Required testing before merge

- Add a single-variant product
- Add a multi-variant product
- Add the same variant with different properties and confirm line separation
- Edit quantities and update cart
- Save a product-level customer note
- Save a general cart note
- Generate and open a prepared-order link in an incognito browser
- Confirm the link opens the storefront cart, not checkout
- Confirm checkout remains disabled below $500 and enabled at or above $500
- Test desktop and mobile layouts
