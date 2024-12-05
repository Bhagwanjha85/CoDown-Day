// Festival dates for 2025
const festivalDates = {
    Muharram: "2025-07-30",
    "Id-ul-Zuha (Bakri-id)": "2025-06-28",
    "Shab-I-Barat": "2025-03-24",
    "Id-ul-Fitr (Ramzan Id)": "2025-04-20",
    "Milad-Un-Nabi": "2025-09-25",
    "Barawafat": "2025-10-03",
    "Giaravahin Sharif": "2025-08-18",
    "Hazarat Ali's Birthday": "2025-02-20",
    "Shabbe Mirag": "2025-02-10",
    "Barabanki Mela": "2025-03-15",
    Holi: "2025-03-13",
    "Makar Sankranti": "2025-01-14",
    Lohri: "2025-01-13",
    Pongal: "2025-01-15",
    "Maha Shivratri": "2025-03-01",
    "Vasant Panchami": "2025-02-06",
    "Ram Navami": "2025-04-12",
    "Guru Purnima": "2025-07-21",
    "Rath Yatra": "2025-06-24",
    "Ganesh Chaturthi": "2025-09-05",
    Christmas: "2025-12-25",
    Easter: "2025-04-20",
    "Good Friday": "2025-04-18",
    "Mahavir Jayanti": "2025-04-06",
    Paryushana: "2025-09-08",
    "Mahamastak Abhishek": "2025-02-22",
    "Deep Diwali": "2025-11-04",
    "Guru Purab": "2025-11-24",

};

// Generate festival buttons dynamically
const festivalListContainer = document.getElementById("festival-list");
Object.keys(festivalDates).forEach((festival) => {
    const button = document.createElement("button");
    button.textContent = festival;
    button.onclick = () => startCountdown(festival);
    festivalListContainer.appendChild(button);
});

// Start countdown for the selected festival
const startCountdown = (festivalName) => {
    const eventDate = new Date(festivalDates[festivalName]).getTime();
    if (!eventDate) {
        alert("Invalid festival selected!");
        return;
    }

    // Check if timer already exists
    if (document.getElementById(`timer-${festivalName}`)) {
        alert("Countdown for this festival is already running!");
        return;
    }

    // Create a new timer element
    const countdownTimersContainer = document.getElementById("countdown-timers");
    const timerElement = document.createElement("div");
    timerElement.classList.add("timer");
    timerElement.id = `timer-${festivalName}`;
    countdownTimersContainer.appendChild(timerElement);

    // Update countdown
    const updateCountdown = () => {
        const now = new Date().getTime();
        const gap = eventDate - now;

        if (gap < 0) {
            timerElement.innerHTML = `${festivalName} has passed!`;
            return;
        }

        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((gap % (1000 * 60)) / 1000);

        timerElement.innerHTML = `
            ${festivalName} Countdown: ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds
        `;
    };

    setInterval(updateCountdown, 1000);
};
