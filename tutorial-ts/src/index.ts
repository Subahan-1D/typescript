console.log("Hello Bangladesh")

const form = document.querySelector(".user-form") as HTMLFormElement;
const userName = document.querySelector("#name") as HTMLInputElement ;
const userEmail = document.querySelector("#email") as HTMLInputElement ;
const userPassword = document.querySelector("#password") as HTMLInputElement ;
const allCountry = document.querySelector("#country") as HTMLSelectElement ;
const feedback = document.querySelector("#feedback") as HTMLTextAreaElement

form.addEventListener("submit", (event : Event)=>{
    event.preventDefault()
    const data = {
         userName :userName.value,
         userEmail: userEmail.value,
         userPassword:userPassword.value,
         allCountry : allCountry.value,
         feedback : feedback.value 
    }
  console.log(data)
});