const container = document.getElementById("container")
const texto = document.getElementById("txt")

//el dom respeta un patron de jerarquia

texto.textContent = "Esto es cambio de texto"

container.innerHTML += `
    <p>mi nombre es Fernando</p>
    <h2>mi nombre es Adrian</h2>
    <p>mi nombre es Jose</p>`

console.log(texto.textContent)
 