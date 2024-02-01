function validateForm() {
    // Get form values
    event.preventDefault();

    document.addEventListener("DOMContentLoaded", function () {
        // City object with city information
        var cities = [
            { name: "New York", state: "NY" },
            { name: "Los Angeles", state: "CA" },
            { name: "Chicago", state: "IL" },
            // Add more cities as needed
        ];

        // Get the dropdown element and selected city display element
        var cityDropdown = document.getElementById("cityDropdown");
        var selectedCityDisplay = document.getElementById("selectedCityDisplay");

        // Populate the dropdown with city options
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.value = city.name; // You can set the value to city.name or any other property you want
            option.text = city.name;
            cityDropdown.appendChild(option);
        });

        // Add event listener to update selected city display
        cityDropdown.addEventListener("change", function () {
            var selectedCity = cityDropdown.value;
            selectedCityDisplay.textContent = "Selected City: " + selectedCity;
        });
    });


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var dob = document.getElementById("dob").value;
    var pincode = document.getElementById("pincode").value;

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Mobile number validation
    var mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return false;
    }

    // Date of birth validation
    var dobDate = new Date(dob);
    var currentDate = new Date();
    var age = Math.floor((currentDate - dobDate) / (365.25 * 24 * 60 * 60 * 1000));
    if (age < 18) {
        alert("You must be 18 years or older to register");
        return false;
    }

    // Pincode validation (alphanumeric, no special characters)
    var pincodeRegex = /^[a-zA-Z0-9]+$/;
    if (!pincodeRegex.test(pincode)) {
        alert("Pincode should have alphanumeric values only, no special characters");
        return false;
    }

    // If all validations pass, show a thank you message
    window.location.href = "thanks.html";
    return true;
}