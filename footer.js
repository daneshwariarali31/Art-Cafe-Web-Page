// Function to load the footer content into the page
function loadFooter() {
    // Fetch the footer.html file
    fetch('footer.html')  // This will load the footer.html from the same directory
        .then(response => response.text())  // Convert the response to text
        .then(data => {
            // Insert the footer content into an element with the ID "footer-container"
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);  // Handle errors
        });
}

// Call the loadFooter function when the page loads
window.onload = loadFooter;
