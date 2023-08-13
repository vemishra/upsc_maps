document.addEventListener("DOMContentLoaded", function () {
  const currentDateSpan = document.getElementById("currentDate");
  const datePickerButton = document.getElementById("datePickerButton");
  const mapFrame = document.getElementById("mapFrame");

  // Sample available dates and corresponding map URLs
  const availableDates = [
    { date: "2023-08-10", mapUrl: "https://www.google.com/maps/d/u/0/embed?mid=1tkMwfnKgjAeIrvZmz6w3fRSHUZxnR5I&ehbc=2E312F" },
    { date: "2023-08-11", mapUrl: "https://www.google.com/maps/d/u/0/embed?mid=1tkMwfnKgjAeIrvZmz6w3fRSHUZxnR5I&ehbc=2E312F" },
    // Add more dates and URLs as needed
  ];

  // Get today's date in YYYY-MM-DD format
  const todayDate = new Date().toISOString().split("T")[0];

  // Set the current date to today's date initially
  let currentDate = todayDate;

  // Update the map and date display
  function updateMapAndDate(date) {
    const mapUrl = availableDates.find((entry) => entry.date === date)?.mapUrl || "";
    mapFrame.src = mapUrl;
    currentDateSpan.textContent = date;
  }

  // Open the date picker on button click
  datePickerButton.addEventListener("click", function () {
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.value = currentDate;
    dateInput.min = availableDates[0].date;
    dateInput.max = todayDate;

    dateInput.addEventListener("input", function () {
      currentDate = dateInput.value;
      updateMapAndDate(currentDate);
    });

    dateInput.click();
  });

  // Load the map for the initial date
  updateMapAndDate(currentDate);
});
