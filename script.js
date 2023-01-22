const submitEmailBtn = document.querySelector(".btn");

const submitEmail = submitEmailBtn.addEventListener("click", function (e) {
  const inputEmail = document.querySelector(".input");
  const error = document.querySelector(".error");

  e.preventDefault();

  if (inputEmail.value === "") {
    error.textContent = "Whoops! It looks like you forgot to add your email";
  } else {
    !inputEmail.value.includes("@") || inputEmail.length > 0;
    error.textContent = "Please provide a valid email address";
  }

  inputEmail.focus();
});
