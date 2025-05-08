// Importando Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBGPdrp6vvervIs7M7F-Yx4D8_v5UR-uTk",
  authDomain: "zauth-86d37.firebaseapp.com",
  projectId: "zauth-86d37",
  storageBucket: "zauth-86d37.appspot.com", // 🔹 Corrigido
  messagingSenderId: "241391307891",
  appId: "1:241391307891:web:1f39b648397cded640ae06",
  measurementId: "G-MHPLT09XK1"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("🔥 Firebase conectado:", app);

// Função de login com mensagens personalizadas
function login() {
    let email = document.getElementById("user").value;
    let senha = document.getElementById("pass").value;

    if (!email || !senha) {
        alert("⚠️ Por favor, insira um email e senha válidos!");
        return;
    }

    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            console.log("✅ Login realizado:", userCredential.user);
            window.location.href = "dashboard.html"; // Redireciona após login bem-sucedido
        })
        .catch((error) => {
            let erroMensagem;

            switch (error.code) {
                case "auth/invalid-email":
                    erroMensagem = "⚠️ Email inválido. Certifique-se de que está correto.";
                    break;
                case "auth/user-not-found":
                    erroMensagem = "❌ Usuário não encontrado. Crie uma conta ou revise seu email.";
                    break;
                case "auth/wrong-password":
                    erroMensagem = "🔒 Senha incorreta. Tente novamente ou redefina sua senha.";
                    break;
                default:
                    erroMensagem = "❌ Erro ao logar. Tente novamente mais tarde.";
            }

            console.error("❌ Erro de login:", error.code, error.message);
            alert(erroMensagem);
        });
}

// Espera a página carregar e ativa o botão corretamente
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginButton");
    if (loginBtn) {
        loginBtn.addEventListener("click", login);
    }
});
