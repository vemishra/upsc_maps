document.addEventListener("DOMContentLoaded", function () {
  const currentDateSpan = document.getElementById("currentDate");
  const datePicker = document.getElementById("datePicker");
  const mapFrame = document.getElementById("mapFrame");

  // Sample available dates and corresponding map URLs
  const availableDates = [
    { date: "2023-08-10", mapUrl: "https://www.google.com/maps/d/u/0/embed?mid=1tkMwfnKgjAeIrvZmz6w3fRSHUZxnR5I&ehbc=2E312F" },
    { date: "2023-08-11", mapUrl: "https://www.google.com/maps/d/u/0/embed?mid=1tkMwfnKgjAeIrvZmz6w3fRSHUZxnR5I&ehbc=2E312F" },
    // Add more dates and URLs as needed
  ];

  // Get today's date in YYYY-MM-DD format
  const todayDate = new Date().toISOString().split("T")[0];

  // Set the minimum and maximum selectable dates
  datePicker.min = availableDates[0].date;
  datePicker.max = availableDates[availableDates.length - 1].date;

  // Update the map and date display
  function updateMapAndDate(date) {
    const mapUrl = availableDates.find((entry) => entry.date === date)?.mapUrl || "";
    mapFrame.src = mapUrl;
    currentDateSpan.textContent = date;
  }

  // Listen for changes in the date picker
  datePicker.addEventListener("change", function () {
    const selectedDate = datePicker.value;
    updateMapAndDate(selectedDate);
  });

  // Initialize with the most recent available date
  const mostRecentDate = availableDates[availableDates.length - 1].date;
  updateMapAndDate(mostRecentDate);
});
