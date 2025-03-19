
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("booking-form");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page refresh

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const destination = document.getElementById("destination").value;

        const bookingData = {
            name,
            phone,
            destination
        };

        
        fetch("https://practice.com/challenge", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        })
        .then(response => response.json())
        .then(data => {
            confirmation.innerHTML = `Thank you, ${name}! Your trip to ${destination} has been booked.`;
            confirmation.style.color = "green";
        })
        .catch(error => {
            confirmation.innerHTML = "Error booking trip. Please try again.";
            confirmation.style.color = "red";
        });
        form.reset();
    });
});


// Smooth scrolling for Contact home and booking section
document.getElementById('contact-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('home-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('booking-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
});
