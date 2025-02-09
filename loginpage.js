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
    let generatedOTP = "";
    let isOTPVerified = false;

    // Send OTP via EmailJS
    document.getElementById("sendOTP").addEventListener("click", function () {
        const email = document.getElementById("email").value.trim();

        if (!email) {
            alert("Please enter your email first.");
            return;
        }

        // Generate a 6-digit OTP
        generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

        // Send OTP using EmailJS
        emailjs.send("service_5061ycr", "template_66z9945", {
            to_email: email,  // This must match EmailJS template variable
            otp_code: generatedOTP // Ensure this matches {{otp_code}} in EmailJS
        }, "IOsfBSoZfSjOSzix9")
        .then(() => {
            alert("OTP sent to your email. Please check your inbox.");
        })
        .catch(error => {
            console.error("Error sending OTP:", error);
            alert("Failed to send OTP. Try again later.");
        });
    });

    // Verify OTP
    document.getElementById("verifyOTP").addEventListener("click", function () {
        const enteredOTP = document.getElementById("otp").value.trim();

        if (enteredOTP === generatedOTP) {
            alert("Email Verified Successfully!");
            isOTPVerified = true;
            document.getElementById("submitBtn").disabled = false; // Enable Submit Button
        } else {
            alert("Invalid OTP. Please try again.");
        }
    });

    // Form Submission with Validation
    document.getElementById("userForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page reload

        if (!isOTPVerified) {
            alert("Please verify your email before signing up.");
            return;
        }

        // Get form values
        const username = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = document.getElementById("Age").value;
        const password = document.getElementById("pass").value;
        const confirmPassword = document.getElementById("confirm-pass").value;
        const country = document.getElementById("country").value;

        // Email Validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Password Validation (At least 8 characters, uppercase, lowercase, number, special character)
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

