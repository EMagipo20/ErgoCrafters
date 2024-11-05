function toggleChatbox() {
    const chatbox = document.getElementById("chatbox");
    const chatIcon = document.querySelector(".chat-icon");

    if (chatbox.style.display === "none" || chatbox.style.display === "") {
        chatbox.style.display = "flex";
        chatIcon.style.display = "none";
    } else {
        chatbox.style.display = "none";
        chatIcon.style.display = "flex";
    }
}

// Función para mostrar el encabezado con icono de "home"
function showBotHeader() {
    const chatHeader = document.getElementById("chat-header");
    chatHeader.innerHTML = `
        <i class="fa fa-home home-icon" onclick="resetChat()" aria-hidden="true"></i>
        ErgoBot
        <span onclick="toggleChatbox()" class="close-chatbox">&times;</span>
    `;
}

// Función para limpiar el contenido inicial del chat al iniciar conversación
function clearInitialContent() {
    const optionsContainer = document.getElementById("options-container");
    if (optionsContainer) optionsContainer.remove();

    const welcomeMessage = document.querySelector("#chat-body p");
    if (welcomeMessage) welcomeMessage.remove();
}

// Función para reiniciar el chat y mostrar las opciones iniciales
function resetChat() {
    const chatBody = document.getElementById("chat-body");
    chatBody.innerHTML = ""; // Limpiar el chat actual
    showOptions(); // Llamar a la función en message.js para cargar las opciones iniciales
}

// Inicializa el header para que solo muestre "ErgoBot"
function initializeHeader() {
    const chatHeader = document.getElementById("chat-header");
    chatHeader.innerHTML = `
        <span class="header-title">ErgoBot</span>
        <span onclick="toggleChatbox()" class="close-chatbox">&times;</span>
    `;
}

// Función para mostrar el encabezado con icono de "home" cuando inicia conversación
function showBotHeader() {
    const chatHeader = document.getElementById("chat-header");
    chatHeader.innerHTML = `
        <i class="fa fa-home home-icon" onclick="resetChat()" aria-hidden="true"></i>
        <span class="header-title">ErgoBot</span>
        <span onclick="toggleChatbox()" class="close-chatbox">&times;</span>
    `;
}

// Función para ocultar el mensaje de bienvenida
function hideWelcomeMessage() {
    const welcomeMessage = document.getElementById("welcome-message");
    if (welcomeMessage) {
        welcomeMessage.style.display = "none";
    }
}

// Limpia el chat y cambia el header al iniciar conversación
function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value.trim().toLowerCase();
    if (message) {
        clearChatBody();
        addMessage(message, "user");
        input.value = "";
        showBotHeader(); // Cambia encabezado al iniciar conversación
        let response = getBotResponse(message);
        setTimeout(() => addMessage(response, "bot"), 1000);
    }
}

// Función para resetear el chat a la vista inicial con solo "ErgoBot" en el header
function resetChat() {
    const chatBody = document.getElementById("chat-body");
    chatBody.innerHTML = "";
    initializeHeader(); // Header solo con "ErgoBot"
    showOptions(); 
}

window.onload = function () {
    document.getElementById("chatbox").style.display = "none";
    document.querySelector(".chat-icon").style.display = "flex";
};

