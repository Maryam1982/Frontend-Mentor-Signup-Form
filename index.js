const mainContainer = document.querySelector(".main-container");
const messageBox = document.querySelector(".message-box");
const dismiss = document.querySelector(".message-box button");
const form = document.querySelector("form");
const emailInput = document.querySelector("form input");
const emailContainer = document.querySelector(".email-container");
const errorMsgEl = document.querySelector(".errorMessage");

function validateEmail(email) {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validRegex)) return true;
  else return false;
}

emailInput.addEventListener("input", (e) => {
  if (validateEmail(e.target.value)) {
    if (errorMsgEl.innerHTML !== "") errorMsgEl.innerHTML = "";
  } else {
    if (errorMsgEl.innerHTML !== "Valid email is required.")
      errorMsgEl.innerHTML = "Valid email is required.";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;

  if (email === "" || !validateEmail(email)) {
    if (email === "") {
      errorMsgEl.innerHTML = "Email is required.";
      return;
    }
    if (!validateEmail(email)) {
      errorMsgEl.innerHTML = "Valid email is required.";
      return;
    }
  }
  if (!mainContainer.classList.contains("hide")) {
    mainContainer.classList.add("hide");
  }
  if (messageBox.classList.contains("hide")) {
    const successMsgEmailContainer = messageBox.querySelector("p span");
    successMsgEmailContainer.innerHTML = emailInput.value;
    messageBox.classList.remove("hide");
  }
  errorMsgEl.innerHTML = "";
});

dismiss.addEventListener("click", () => {
  if (mainContainer.classList.contains("hide")) {
    mainContainer.classList.remove("hide");
  }
  if (!messageBox.classList.contains("hide")) {
    messageBox.classList.add("hide");
  }
  emailInput.value = "";
});
