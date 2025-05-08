import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBGPdrp6vvervIs7M7F-Yx4D8_v5UR-uTk",
    authDomain: "zauth-86d37.firebaseapp.com",
    projectId: "zauth-86d37",
    storageBucket: "zauth-86d37.appspot.com",
    messagingSenderId: "241391307891",
    appId: "1:241391307891:web:1f39b648397cded640ae06"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Verifica autenticação antes de exibir a página
document.addEventListener("DOMContentLoaded", () => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            alert("🚨 Acesso negado! Faça login para continuar.");
            window.location.href = "login.html";
        } else {
            console.log("✅ Usuário autenticado:", user.email);

            // Exibe o conteúdo da página após autenticação
            document.body.style.display = "block";
            document.getElementById("adminName").textContent = user.email.split("@")[0];
        }
    });
});

// Função de logout
