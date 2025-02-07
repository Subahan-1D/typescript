"use strict";
console.log("Hello Bangladesh");
const form = document.querySelector(".user-form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const allCountry = document.querySelector("#country");
const feedback = document.querySelector("#feedback");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userPassword: userPassword.value,
        allCountry: allCountry.value,
        feedback: feedback.value
    };
    console.log(data);
});
