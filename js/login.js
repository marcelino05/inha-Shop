const criarConta = document.getElementById("container-criarConta")
const login = document.querySelector("#container-login")
const sigIn = document.querySelector("#sigIn")
const sigUp = document.querySelector("#sigUp")

// Ir para login
sigUp.addEventListener("click", (e) => {
  e.preventDefault()
  criarConta.classList.add("hidden")
  login.classList.remove("hidden")
})

// Voltar para criar conta
sigIn.addEventListener("click", (e) => {
  e.preventDefault()
  login.classList.add("hidden")
  criarConta.classList.remove("hidden")
})