const form = document.getElementById("submit-form");
const error = document.getElementById("error");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Something....");

  const data = new FormData(form);
  const obj = {
    fornavn: data.get("fornavn"),
    efternavn: data.get("efternavn"),
    adresse: data.get("adresse"),
    postnummer: parseInt(data.get("postnummer")),
    email: data.get("email"),
  };

  if (obj.fornavn.length < 2) {
    error.innerHTML = "Fornavn skal være mindst 2 bogstaver!";
    document.getElementById("fornavn").focus();
    document.getElementById("fornavn").setAttribute("invalid", "");
    return;
  } else if (obj.efternavn.length < 2) {
    error.innerHTML = "Efternavn skal være mindst 2 bogstaver!";
    document.getElementById("efternavn").focus();
    document.getElementById("efternavn").setAttribute("invalid", "");
    return;
  } else if (obj.adresse.length < 5) {
    error.innerHTML = "Adresse skal være mindst 5 bogstaver!";
    document.getElementById("adresse").focus();
    document.getElementById("adresse").setAttribute("invalid", "");
    return;
  } else if (typeof obj.postnummer != "number") {
    error.innerHTML = "Postnummer skal være et tal!";
    document.getElementById("postnummer").focus();
    document.getElementById("postnummer").setAttribute("invalid", "");
    return;
  } else if (validateEmail(obj.email) === false) {
    error.innerHTML = "Email skal være en gyldig email!";
    document.getElementById("email").focus();
    document.getElementById("email").setAttribute("invalid", "");
    return;
  } else if (
    !obj.fornavn ||
    !obj.efternavn ||
    !obj.adresse ||
    !obj.postnummer ||
    !obj.email
  ) {
    error.innerHTML = "Alle felter skal udfyldes!";
    return;
  } else {
    document.getElementById("fornavn").removeAttribute("invalid");
    document.getElementById("efternavn").removeAttribute("invalid");
    document.getElementById("adresse").removeAttribute("invalid");
    document.getElementById("postnummer").removeAttribute("invalid");
    document.getElementById("email").removeAttribute("invalid");
    error.innerHTML = "Tak for din tilmelding!";
    error.style.color = "green";


    console.group("Tilmelding");
    console.log("Fornavn: " + obj.fornavn);
    console.log("Efternavn: " + obj.efternavn);
    console.log("Adresse: " + obj.adresse);
    console.log("Postnummer: " + obj.postnummer);
    console.log("Email: " + obj.email);
    console.groupEnd();
    
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
