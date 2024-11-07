// Function to handle the rating selection and redirect to thanks.html
let selectedRating = null;

// Store the rating when a user clicks a rating button
function selectNumber(number) {
  selectedRating = number;
  localStorage.setItem('rating', selectedRating);  // Save the rating in localStorage

  // Optionally, you can highlight the selected button
  const buttons = document.querySelectorAll('.rating-button');
  buttons.forEach(button => button.classList.remove('selected')); // Remove previous selection
  document.querySelector(`button:nth-child(${number})`).classList.add('selected'); // Highlight selected button
}

// Handle submit button click
function submitRating() {
  if (selectedRating === null) {
    alert("Please select a rating before submitting!"); // Alert if no rating is selected
    return;
  }
  window.location.href = 'thanks.html';  // Redirect to thanks.html after rating
}

window.onload = function() {
  const rating = localStorage.getItem('rating');  // Retrieve the selected rating from localStorage

  if (rating) {
    // Update the message with the selected rating
    document.getElementById('displayMessage').innerText = `You selected ${rating} out of 5`;
  } else {
    // If no rating is found, redirect back to index.html (optional)
    window.location.href = 'index.html';
  }
};
