// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("userForm").addEventListener("submit", function (event) {
//         event.preventDefault();
        
     
//         const username = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const birthdate = document.getElementById("Age").value;
//         const password = document.getElementById("pass").value;
//         const confirmPassword = document.getElementById("confirm-pass").value;
//         const countrySelect = document.getElementById("country");
//         const country = countrySelect.value;
//         const flagUrl = countrySelect.options[countrySelect.selectedIndex].getAttribute("data-flag");

//         if (password !== confirmPassword) {
//             alert("Passwords do not match! Please re-enter your password.");
//             return; 
//         }

//         localStorage.setItem("username", username);
//         localStorage.setItem("email", email);
//         localStorage.setItem("age", birthdate);
//         localStorage.setItem("country", country);
//         localStorage.setItem("flagUrl", flagUrl); 
//         window.location.href = "main.html";
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("userForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page reload

        // Get form values
        const username = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = document.getElementById("Age").value;
        const password = document.getElementById("pass").value;
        const confirmPassword = document.getElementById("confirm-pass").value;
        const country = document.getElementById("country").value;

        // Regex for email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Password must be at least 8 characters with uppercase, lowercase, number, and special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and include an uppercase letter, a number, and a special character!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (age < 13 || age > 100) {
            alert("Please enter a valid age (13-100).");
            return;
        }

        // Store User Data in Local Storage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("age", age);
        localStorage.setItem("country", country);
        localStorage.setItem("password", password);

        alert("Sign-up successful!");
        window.location.href = "signinpage.html"; // Redirect to Sign-in page
    });
});

