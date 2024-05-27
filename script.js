// Function to parse and return the float value from element's innerText
function getFloatValue(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return parseFloat(text) || 0; // Ensure it returns 0 if parsing fails
}

// Function to update the total price
function updateTotalPrice() {
    const baseAmount = getFloatValue("baseAmount");
    const memoryCost = getFloatValue("memoryCost");
    const storageCost = getFloatValue("storageCost");
    const deliveryCost = getFloatValue("deliveryCost");

    const totalPrice = baseAmount + memoryCost + storageCost + deliveryCost;
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(0); 

    const grandTotal = totalPrice;
    document.getElementById("grand-total").innerText = grandTotal.toFixed(0); 
}

// Add event listeners for memory cost buttons
document.getElementById("addMemory").addEventListener('click', function () {
    document.getElementById("memoryCost").innerText = 180;
    updateTotalPrice();
});

document.getElementById("removeMemory").addEventListener('click', function () {
    document.getElementById("memoryCost").innerText = 100;
    updateTotalPrice();
});

// Add event listeners for storage cost buttons
document.getElementById("addStorageFirst").addEventListener('click', function () {
    document.getElementById("storageCost").innerText = 50;
    updateTotalPrice();
});

document.getElementById("addStorageSecond").addEventListener('click', function () {
    document.getElementById("storageCost").innerText = 100;
    updateTotalPrice();
});

document.getElementById("addStorageThird").addEventListener('click', function () {
    document.getElementById("storageCost").innerText = 150;
    updateTotalPrice();
});

// Add event listeners for delivery charge buttons
document.getElementById("freeDelivery").addEventListener('click', function () {
    document.getElementById("deliveryCost").innerText = 0;
    updateTotalPrice();
});

document.getElementById("expressDelivery").addEventListener('click', function () {
    document.getElementById("deliveryCost").innerText = 20;
    updateTotalPrice();
});

// Initial total price calculation
updateTotalPrice();

// add discount coupon function
let isCouponApplied = false;

function applyDiscount() {
  if (!isCouponApplied) {
    const couponCode = document.getElementById('couponCode').value;
    const validCouponCode = 'PHERO10'
    const originalGrandTotal = parseFloat(document.getElementById('grand-total').innerText);

    if (couponCode === validCouponCode) {
      const discount = originalGrandTotal * 0.1; // 10% discount
      const discountedGrandTotal = originalGrandTotal - discount;
      document.getElementById('grand-total').innerText = discountedGrandTotal.toFixed(0);
      window.alert("Coupon Code Accepted! Your discount has been applied.");
      isCouponApplied = true;
      document.getElementById('couponCode').value = '';
    } else {
      window.alert("Invalid Coupon Code. Please try again.");
      document.getElementById('couponCode').value = '';
    }
  } else {
    window.alert("Coupon code has already been applied.");
    document.getElementById('couponCode').value = '';
  }
}