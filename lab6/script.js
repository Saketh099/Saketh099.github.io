const locations = [
    { name: "Tokyo, Japan", lat: 35.6895, lng: 139.6917 },
    { name: "New York, USA", lat: 40.7128, lng: -74.006 },
    { name: "London, UK", lat: 51.5074, lng: -0.1278 },
    { name: "Sydney, Australia", lat: -33.8688, lng: 151.2093 },
    { name: "Cape Town, South Africa", lat: -33.9249, lng: 18.4241 },
    { name: "Rio de Janeiro, Brazil", lat: -22.9068, lng: -43.1729 },
    { name: "Paris, France", lat: 48.8566, lng: 2.3522 },
    { name: "Cairo, Egypt", lat: 30.0444, lng: 31.2357 },
    { name: "Toronto, Canada", lat: 43.651070, lng: -79.347015 },
    { name: "Mumbai, India", lat: 19.0760, lng: 72.8777 }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const locationSelect = document.getElementById("locationSelect");
    const currentLocationBtn = document.getElementById("currentLocationBtn");
    const todayCard = document.getElementById("todayCard");
    const tomorrowCard = document.getElementById("tomorrowCard");
    const errorDiv = document.getElementById("error");
  
    // Fill dropdown
    locations.forEach((loc, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = loc.name;
      locationSelect.appendChild(option);
    });
  
    // Handle location selection
    locationSelect.addEventListener("change", () => {
      const { lat, lng } = locations[locationSelect.value];
      fetchData(lat, lng);
    });
  
    // Handle current location
    currentLocationBtn.addEventListener("click", () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            fetchData(pos.coords.latitude, pos.coords.longitude);
          },
          () => showError("Could not access your location.")
        );
      } else {
        showError("Geolocation is not supported.");
      }
    });
  
    // Fetch data from API
    function fetchData(lat, lng) {
      errorDiv.classList.add("hidden");
      todayCard.innerHTML = "Loading today’s data...";
      tomorrowCard.innerHTML = "Loading tomorrow’s data...";
  
      const baseUrl = "https://api.sunrisesunset.io/json";
  
      Promise.all([
        fetch(`${baseUrl}?lat=${lat}&lng=${lng}&date=today`),
        fetch(`${baseUrl}?lat=${lat}&lng=${lng}&date=tomorrow`)
      ])
      .then(async ([resToday, resTomorrow]) => {
        const todayData = await resToday.json();
        const tomorrowData = await resTomorrow.json();
  
        if (!todayData.results || !tomorrowData.results) throw new Error("Invalid response");
  
        renderData(todayData.results, todayCard);
        renderData(tomorrowData.results, tomorrowCard);
      })
      .catch(() => {
        showError("Failed to load data from the API. Please try again.");
      });
    }
  
    // Display data
    function renderData(data, container) {
      container.innerHTML = `
        <p>🌄 <strong>Sunrise:</strong> ${data.sunrise}</p>
        <p>🌇 <strong>Sunset:</strong> ${data.sunset}</p>
        <p>🌅 <strong>Dawn:</strong> ${data.dawn}</p>
        <p>🌃 <strong>Dusk:</strong> ${data.dusk}</p>
        <p>🕒 <strong>Solar Noon:</strong> ${data.solar_noon}</p>
        <p>🕰 <strong>Day Length:</strong> ${data.day_length}</p>
        <p>🌍 <strong>Timezone:</strong> ${data.timezone}</p>
      `;
    }
  
    function showError(message) {
      errorDiv.textContent = message;
      errorDiv.classList.remove("hidden");
      todayCard.innerHTML = "";
      tomorrowCard.innerHTML = "";
    }
  });
  