
function TYMessage(){
    alert('Thank You for your purchase!');
}

function showNewPopup(reviewId, formId) {
    const review = document.getElementById(reviewId).value;
    if (!review) {
        alert('Please fill out all fields.');
    return;
    }
    const confirmation = confirm(`Please confirm your submission:\n\nReview: ${review}`);
    if (confirmation) {
        alert('Form submitted successfully!');
        document.getElementById(formId).reset();
    } else {
        alert('Submission cancelled.');
    }
}
