document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username") || "Guest";
    const email = localStorage.getItem("email") || "guest@example.com";
    const age = localStorage.getItem("age") || "Unknown";
    const country = localStorage.getItem("country") || "Unknown";
    const seed = username.replace(/\s+/g, '') || `user${Math.floor(Math.random() * 1000)}`;
    const profilePicUrl = `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`;

    const countryCode = getCountryCode(country);
    const flagUrl = countryCode ? `https://flagcdn.com/w40/${countryCode}.png` : "https://flagcdn.com/w40/in.png";

    document.getElementById("username").innerText = username;
    document.getElementById("email").innerText = email;
    document.getElementById("age").innerText = `Age: ${age}`;
    document.getElementById("country").innerText = `Country: ${country}`;
    document.getElementById("profile-pic").src = profilePicUrl;
    document.getElementById("flag").src = flagUrl;
});

function getCountryCode(countryName) {
    const countryCodes = {
        "India": "in",
        "United States": "us",
        "United Kingdom": "gb",
        "Canada": "ca",
        "Australia": "au",
        "Germany": "de",
        "France": "fr",
        "Japan": "jp",
        "South Korea": "kr",
        "China": "cn",
        "Brazil": "br",
        "Russia": "ru",
        "Mexico": "mx",
        "Italy": "it",
        "Spain": "es",
        "Netherlands": "nl",
        "Saudi Arabia": "sa",
        "United Arab Emirates": "ae",
        "South Africa": "za",
        "Pakistan": "pk",
        "Bangladesh": "bd"
    };
    return countryCodes[countryName] || null;
}
