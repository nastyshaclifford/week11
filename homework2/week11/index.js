const prices = document.querySelectorAll('.price');
function calculateTotal() {
    let total = 0;
    prices.forEach(price => {
        total += +price.innerHTML.replace(' рублей', '').trim();
    });
    return total;
}
function updateTotalPrice() {
const totalPrice = document.getElementById('total-price');
totalPrice.innerHTML = `Общая стоимость: ${calculateTotal()} рублей`;
}


function applyDiscount() {
    prices.forEach(price => {
        const originalPrice = +price.getAttribute('data-original-price'); 
        const discountedPrice = originalPrice * 0.8;  
        price.innerHTML = `${discountedPrice.toFixed(2)} рублей`;
    });
    updateTotalPrice();  
} 

updateTotalPrice();

const discountButton = document.getElementById('apply-discount');
discountButton.addEventListener('click', () => {
    applyDiscount();
});
