# Automatic price adjustment logic

Use this rule when product data automation is connected to Shopify Admin:

- Heavy or bulky product with relatively low unit price: new price = old price × 1.08
- Lightweight product with relatively high unit price: new price = old price × 1.05
- Middle product: new price = old price × 1.06–1.07 after margin review

Price automation must create a reviewable draft or report before publishing changes. It must never overwrite prices without showing the old price, adjustment class, percentage, calculated price, rounded price, estimated gross margin, and product identifier.
