  // Product array of objects
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];


// Get the <select> element by ID
const productSelect = document.getElementById('productName');

// Loop through the products array to create the option elements
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;  // Use the product id as the value
    option.textContent = product.name;  // Use the product name as the visible text
    productSelect.appendChild(option);  // Append the option to the select element
});


let text = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modification:" + text;
document.getElementById("currentyear").innerHTML = "&copy2024 OJ Alex Otieno Juma, Kenya"


// Initialize review count in localStorage if it doesn't exist
if (localStorage.getItem('reviewCount') === null) {
    localStorage.setItem('reviewCount', 0);
}

// Increment the review count when the form is submitted
const form = document.getElementById('reviewForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to review.html immediately

    // Increment the review count
    let reviewCount = parseInt(localStorage.getItem('reviewCount'));
    reviewCount += 1;
    localStorage.setItem('reviewCount', reviewCount);

    // Now submit the form (redirect to review.html)
    form.submit();
});

