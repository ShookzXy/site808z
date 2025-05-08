const toggleThemeButton = document.getElementById("toggle-theme");

toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLightMode = document.body.classList.contains("light-mode");
    toggleThemeButton.textContent = isLightMode ? "🌙" : "☀️"; // Altera o ícone do botão
});