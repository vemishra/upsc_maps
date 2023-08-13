document.addEventListener("DOMContentLoaded", function () {
  const currentDateSpan = document.getElementById("currentDate");
  const datePicker = document.getElementById("datePicker");
  const mapFrame = document.getElementById("mapFrame");

  // Set the minimum and maximum selectable dates
  datePicker.min = availableDates[availableDates.length - 1].date;
  datePicker.max = availableDates[0].date;

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
  const mostRecentDate = availableDates[0].date;
  updateMapAndDate(mostRecentDate);
});
