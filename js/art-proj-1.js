
const tax_rate = +prompt('Enter tax rate (0.10)');
const shipping_threshold = +prompt('Enter shipping threshold (1000)');

console.log(shipping_threshold)

let subTotal = 0;


for (let i = 0; i < cart.length; i++) {

   const itemTotal = calculateTotal(cart[i].quantity, cart[i].product.price);
   subTotal += itemTotal;
   outputCartRow(cart[i], itemTotal);
   outputSubtotal(subTotal);
   outputTax(subTotal);
   outputShipping(subTotal);
   outputGrandTotals(subTotal);

}