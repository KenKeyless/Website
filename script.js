// Typing effect content
const typingTitle = "Welcome to my blog";

// Function to display the typing effect
function startTyping() {
    const titleElement = document.getElementById("typing-title");
    let charIndex = 0;

    function type() {
        if (charIndex < typingTitle.length) {
            titleElement.textContent += typingTitle.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed (milliseconds)
        } else {
            setTimeout(resetTyping, 2000); // Reset after a delay (2 seconds)
        }
    }

    function resetTyping() {
        titleElement.textContent = "";
        charIndex = 0;
        // Add an invisible non-breaking space to reserve space
        titleElement.innerHTML = "<span style='visibility: hidden;'>&nbsp;</span>";
        setTimeout(type, 1000); // Start typing again after a delay (1 second)
    }

    type();
}

// Start the typing effect when the page loads
window.addEventListener("load", startTyping);


// Function to fetch and display IP details
function showIpDetails() {
    // Display a loading message initially
    const ipDetails = document.getElementById('ip-details');
    ipDetails.innerHTML = '<p>Loading...</p>';

    // Fetch IP details after a brief delay
    setTimeout(() => {
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                ipDetails.innerHTML = `
                    <p>${data.version}: ${data.ip}</p>
                    <p>Country: ${data.country_name}</p>
                    <p>Region: ${data.region}</p>
                    <p>City: ${data.city}</p>
                    <p>ZIP Code: ${data.postal}</p>
                    <p>Cord: ${data.latitude}, ${data.longitude}</p> <!-- Display latitude and longitude together -->

                    <p>Timezone: ${data.timezone}</p>
                    <p>ISP: ${data.org}</p>
                    <p>Browser: ${navigator.userAgent}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching IP details:', error);
                ipDetails.textContent = 'Failed to retrieve IP details';
            });
    }, 1000); // Delay of 1 second (1000 milliseconds)
}

// Call the function when the page loads
window.addEventListener('load', showIpDetails);




