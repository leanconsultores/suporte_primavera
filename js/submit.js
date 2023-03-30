const modal = document.getElementById("modal");
const success = document.querySelector(".success");
const error = document.querySelector(".error");
const message = document.querySelector(".message");

let errorMessage =
  "Lamentamos mas algo correu mal. Por favor tente novamente mais tarde.";
const successMessage = "Obrigado pelo seu contacto. Até breve.";

// get the leanContactFormSubmission value from localStorage
const leanContactFormSubmission = localStorage.getItem(
  "leanContactFormSubmission"
);

if (leanContactFormSubmission === "success") {
  // if the value is 'success' then show the success message
  error.style.display = "none";
  message.innerHTML = successMessage;
} else {
  // if the value is 'error' then show the error message
  success.style.display = "none";
  message.innerHTML = leanContactFormSubmission
    ? leanContactFormSubmission
    : errorMessage;
  message.style.color = "firebrick";
}
