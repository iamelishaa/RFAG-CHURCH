// Simple JavaScript for form handling and progress bar
document.getElementById("donation-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("donor-name").value;
    const amount = document.getElementById("donation-amount").value;

    if (name && amount && !isNaN(amount) && parseFloat(amount) > 0) {
        alert(`Thank you, ${name}, for your generous donation of $${amount}!`);
        
        // Update progress bar (this can be dynamically updated based on actual donation)
        let progress = document.getElementById("progress");
        let currentProgress = parseInt(progress.style.width) || 0;  // Prevent NaN if width is not set yet
        let donationAmount = parseFloat(amount);
        let newProgress = currentProgress + (donationAmount / 100);
        progress.style.width = newProgress + "%";

        // Clear the form after submission
        document.getElementById("donation-form").reset();
        
        // Optionally reset progress bar after a set time (e.g., 3 seconds)
        setTimeout(function() {
            progress.style.width = '0%'; // Reset progress bar if you want
        }, 3000);  // Adjust the time based on your preference

    } else {
        alert("Please fill in both fields with a valid donation amount.");
    }
});

// JavaScript functionality for dynamic interactions can go here
// Example: Adding a small animation or dynamic loading of content if needed

document.addEventListener('DOMContentLoaded', function() {
    console.log("Giving page loaded successfully!");
});

function showDetails(method) {
    // Hide all methods
    const methods = document.querySelectorAll('.method');
    methods.forEach(methodDiv => methodDiv.style.display = 'none');

    // Show the details section and the specific method details
    document.getElementById('details-section').style.display = 'block';
    const detailsContent = document.getElementById('details-content');
    detailsContent.classList.add('details-content'); // Add the class for styling

    if (method === 'method1') {
        detailsContent.innerHTML = `
            <h3>GIVE NOW</h3>
            <p>Donate securely through our online platform using various payment options.</p>
            <p>For secure transactions, use any payment method that suits you. You can also set up recurring donations.</p>
        `;
    } else if (method === 'method2') {
        detailsContent.innerHTML = `
            <h3>UPI TRANSFER</h3>
            <p>Use UPI apps like PhonePe, Google Pay, or Paytm to transfer donations directly to our bank account.</p>
            <p>UPI ID: catherinelawrence498@okicici</p>
        `;
    } else if (method === 'method3') {
        detailsContent.innerHTML = `
            <h3>BANK TRANSFER</h3>
            <p>Directly send contributions to our church's bank account for safe and secure transactions.</p>
            <p>Bank Account: 1234567890</p>
            <p>IFSC Code: ABCD0123456</p>
        `;
    } else if (method === 'method4') {
        detailsContent.innerHTML = `
            <h3>IN-PERSON</h3>
            <p>Join us at the church during our services to make a contribution in person.</p>
            <p>We welcome all donations at the church during service times.</p>
        `;
    }
}
function goBack() {
    // Hide the details section
    document.getElementById('details-section').style.display = 'none';
    
    // Display all methods again
    const methods = document.querySelectorAll('.method');
    methods.forEach(methodDiv => methodDiv.style.display = 'block');
}

