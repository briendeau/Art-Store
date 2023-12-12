function calculateTotal(quantity, price) {
    let total = quantity * price;
    // console.log(total);
    return total;
};

function calculateTax(total) {
    let tax = total * 0.10;
    return tax;
}

function calculateShipping(subTotal) {
    if (subTotal < shipping_threshold) {
      shipping = 40;
    } else {
      shipping = 0;
    }
    return shipping;
  }
  


function outputGrandTotals(subTotal) {
  const taxAmount = subTotal * tax_rate;
  const grandTotal = subTotal + taxAmount;

  document.write(`<tr><td>Grand Total</td><td>$${grandTotal.toFixed(2)}</td></tr>`);
}


 
function outputCartRow(item, total) {
  document.write(`<tr>
    <td><img src="images/${item.product.filename}"></td>
    <td>${item.product.title}</td>
    <td>${item.quantity}</td>
    <td>$${item.product.price.toFixed(2)}</td>
    <td>$${total.toFixed(2)}</td>
  </tr>`);
};

function outputSubtotal(subTotal) {
    document.write(`<tr><td>Subtotal</td><td>${subTotal}</td></tr>`)
};


function outputTax(subTotal) {
    document.write(`<tr><td>Tax</td><td>${calculateTax(subTotal)}</td></tr>`)
};


function outputShipping(subTotal) {
    document.write(`<tr><td>Shipping</td><td>${calculateShipping(subTotal)}</td></tr>`)
};




        
