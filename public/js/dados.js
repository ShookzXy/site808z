document.addEventListener("DOMContentLoaded", function () {
  // Verifica o estado de autenticação do Firebase
  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      // Se o usuário não estiver autenticado, redireciona para login.html
      window.location.href = "login.html";
      return;
    }

    console.log("Usuário autenticado:", user.email);

    // Atualiza o email (a senha não é acessível; usamos um placeholder para teste)
    document.getElementById("email").innerText = user.email;
    document.getElementById("senha").innerText = "********"; // Não é recomendável expor a senha

    // Função para detectar o navegador usado
    function detectBrowser() {
      const userAgent = navigator.userAgent;
      let browserName = "Desconhecido";
      if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome";
      } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
      } else if (userAgent.match(/safari/i) && !userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Safari";
      } else if (userAgent.match(/opr\/|opera/i)) {
        browserName = "Opera";
      } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
      }
      return browserName;
    }

    // Função para detectar se o dispositivo é celular ou desktop
    function detectDevice() {
      const userAgent = navigator.userAgent;
      const isMobile = /mobile|android|iphone|ipad|tablet/i.test(userAgent);
      return isMobile ? "Celular" : "Desktop";
    }

    // Função para buscar o IP do usuário usando o serviço api.ipify.org
    function fetchIP() {
      fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
          document.getElementById("ip").innerText = data.ip;
        })
        .catch(error => {
          console.error("Erro ao buscar IP:", error);
          document.getElementById("ip").innerText = "Indisponível";
        });
    }

    // Função para atualizar todos os dados exibidos na página
    function updateData() {
      document.getElementById("browser").innerText = detectBrowser();
      document.getElementById("device").innerText = detectDevice();
      fetchIP();
    }

    // Atualiza os dados assim que a página é carregada
    updateData();

    // Atualiza os dados ao clicar no botão "Atualizar Dados"
    document.getElementById("refresh").addEventListener("click", updateData);
  });
});
