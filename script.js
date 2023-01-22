const submitEmailBtn = document.querySelector(".btn");

const submitEmail = submitEmailBtn.addEventListener("click", function (e) {
  const inputEmail = document.querySelector(".input");
  const error = document.querySelector(".error");
  e.preventDefault();

  if (inputEmail.value === "" || !inputEmail.value.includes("@")) {
    inputEmail.focus();
    error.textContent = "Please provide a valid email address";
  } else {
    error.textContent = "";
  }
});
