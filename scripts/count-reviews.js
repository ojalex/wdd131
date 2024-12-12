
// Retrieve the review count from localStorage and update the page
function updateReviewCount() {
    const reviewCount = localStorage.getItem('reviewCount');
    document.getElementById('reviewCount').textContent = reviewCount;}

// Update review count on page load
updateReviewCount();

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modification:" + text;
document.getElementById("currentyear").innerHTML = "&copy2024 OJ Alex Otieno Juma, Kenya"
