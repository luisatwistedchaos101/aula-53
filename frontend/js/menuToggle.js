const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-links-active"); // Adiciona ou remove a classe que exibe o menu
});

function registrar(){
  document.getElementById("name").value;
  document.getElementById("email").value;
};

const ImputName =  document.getElementById("name").value;
ImputName.addEventListener("submit", function(name){
  name.preventDefault();

});

const email = "nameexample@gmail.com"
const regex = /^[A-Za-z]{3,}$/;

if (regex.test(email)){
  console.log("E-mail válido!");

} else {
  console.log("E-mail inválido!");
}