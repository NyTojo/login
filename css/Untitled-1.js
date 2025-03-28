document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

  form.onsubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Vérification de l'email
    if (!validateEmail(eInput.value)) {
      setError(eField, "Enter a valid email address");
      valid = false;
    } else {
      removeError(eField);
    }

    // Vérification du mot de passe
    if (pInput.value.length < 6) {
      setError(pField, "Password must be at least 6 characters");
      valid = false;
    } else {
      removeError(pField);
    }

    // Si tout est bon, connexion réussie
    if (valid) {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirection après connexion
    }
  };

  // Vérification en temps réel des champs
  eInput.addEventListener("keyup", () => checkEmail());
  pInput.addEventListener("keyup", () => {
    if (pInput.value.length < 6) {
      setError(pField, "Password must be at least 6 characters");
    } else {
      removeError(pField);
    }
  });

  function validateEmail(email) {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
  }

  function setError(field, message) {
    field.classList.add("error");
    field.querySelector(".error-txt").innerText = message;
  }

  function removeError(field) {
    field.classList.remove("error");
    field.querySelector(".error-txt").innerText = "";
  }
});
