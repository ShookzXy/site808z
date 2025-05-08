function login() {
    let usuario = document.getElementById("user").value;
    let senha = document.getElementById("pass").value;

    if (usuario === "shokito" && senha === "caoszxy808z") {  // Simulação de login fixo
        localStorage.setItem("logado", "true");
        window.location.href = "dashboard.html";  // Redireciona para a página protegida
    } else {
        alert("Usuário ou senha incorretos!");
    }
}
