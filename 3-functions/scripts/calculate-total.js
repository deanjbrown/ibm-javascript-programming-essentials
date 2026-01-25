let groceryItemValue1;
let groceryItemValue2;
let groceryItemValue3;

function calculateTotal() {
  groceryItemValue1 = parseFloat(
    document.getElementById("grocery-item-1").value,
  );
  groceryItemValue2 = parseFloat(
    document.getElementById("grocery-item-2").value,
  );
  groceryItemValue3 = parseFloat(
    document.getElementById("grocery-item-3").value,
  );

  let totalValue = groceryItemValue1 + groceryItemValue2 + groceryItemValue3;
  document.getElementById("total").innerText = `The total is: $${totalValue}`;
}
