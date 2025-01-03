
// Set the event date (yyyy-mm-dd format)
const eventDate = new Date("2023-12-25T00:00:00Z").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;

    // Wenn der Countdown abgelaufen ist, stoppen Sie das Intervall
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Event gestartet!";
    }
}, 1000);