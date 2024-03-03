function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorDiv = document.getElementById('passwordMatchError');

    if (password !== confirmPassword) {
        errorDiv.innerHTML = "Passwords do not match. Please try again.";
    } else {
        errorDiv.innerHTML = "";
    }
}

function updateRatingValue() {
    const ratingValue = document.getElementById('ratingValue');
    const rating = document.getElementById('rating').value;
    ratingValue.innerText = rating;
}

function validateForm() {
    checkPasswordMatch(); // Check password match before submission
    // Additional validation logic can be added here
    return !document.getElementById('passwordMatchError').innerText; // Submit the form if no error message is present
}
