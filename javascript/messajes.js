function handleUserInput(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function getBotResponse(message) {
    const normalizedMessage = message.toLowerCase();

    if (normalizedMessage.includes("hola")) {
        return "¡Hola! 👋 Bienvenido a ErgoCrafters. ¿En qué puedo ayudarte hoy?";
    } else if (normalizedMessage.includes("que tal")) {
        return "Todo bien, ¡gracias por preguntar! ¿Y tú, cómo estás?😊";
    } else if (normalizedMessage.includes("estoy bien, gracias") || normalizedMessage.includes("me encuentro bien") || normalizedMessage.includes("bien, gracias")) {
        return "Me alegro mucho, y dime, ¿Cómo te puedo asistir hoy en ErgoCrafters?";
    } else if (normalizedMessage.includes("de que se trata") || normalizedMessage.includes("de que trata") || 
               normalizedMessage.includes("que es ergocrafters") || normalizedMessage.includes("qué es ergocrafters") || normalizedMessage.includes("Que es ergocrafters")) {
        return "ErgoCrafters es una marca dedicada a la venta de productos ergonómicos para freelancers, ofreciendo kits personalizados que ayudan a crear un espacio de trabajo productivo y ergonómico. ¿Te gustaría saber más sobre nuestros productos o servicios?";
    } else if (normalizedMessage.includes("quiero participar") || normalizedMessage.includes("unirme a ergocrafters")) {
        return "¡Perfecto! Nos encantaría que te unas a ErgoCrafters. Puedes contactarnos directamente a través de nuestro WhatsApp para más detalles: https://chat.whatsapp.com/BqhKKnJAWFxJkHYFAx3FqV"
    } else if (normalizedMessage.includes("gracias") || normalizedMessage.includes("muchas gracias") || normalizedMessage.includes("gracias por la ayuda")) {
        showSurvey(); 
        return getThankYouResponse();
    } else if (normalizedMessage.includes("te puedo hacer una consulta") || normalizedMessage.includes("puedo hacer una consulta")) {
        return "¡Claro! 😊 ¿Cuál es tu pregunta?";
    } else if (normalizedMessage.includes("tienen tienda física") || normalizedMessage.includes("dónde están ubicados")) {
        return "Somos una empresa en línea, sin tienda física. Puedes explorar y pedir nuestros productos desde la comodidad de tu hogar. ¿Te gustaría ayuda para navegar nuestra tienda en línea?";
    } else if (normalizedMessage.includes("cuáles son sus productos más populares") || normalizedMessage.includes("productos populares")) {
        return "Nuestros productos más populares incluyen escritorios ajustables y sillas ergonómicas con soporte lumbar. ¿Te gustaría ver algunos de nuestros productos destacados?";
    } else if (normalizedMessage.includes("cuánto tarda el envío") || normalizedMessage.includes("tiempo de entrega")) {
        return "El tiempo de entrega depende de tu ubicación. En promedio, tarda entre 3 a 7 días hábiles. ¿Te gustaría saber más sobre los costos de envío?";
    } else if (normalizedMessage.includes("me puedes ayudar") || normalizedMessage.includes("necesito ayuda")) {
        return "¡Por supuesto! 😊 Estoy aquí para ayudarte con lo que necesites. ¿Cuál es tu pregunta o inquietud?";
    }

    if (currentOption && (normalizedMessage === "Si" || normalizedMessage === "si" || normalizedMessage === "no")) {
        return getFollowUpResponse(normalizedMessage);
    }

    switch (normalizedMessage) {
        case "personalizar":
            currentOption = "personalizar";
            return "Nuestros kits de oficina son personalizables para adaptarse a tus necesidades. ¿Te gustaría explorar algunas ideas de personalización?";
        case "bienestar":
            currentOption = "bienestar";
            return "Ofrecemos accesorios de bienestar como soportes ergonómicos y almohadillas. ¿Te gustaría ver algunas opciones específicas?";
        case "planes":
            currentOption = "planes";
            return "Tenemos varios planes. El plan básico incluye asesoría básica, y el premium ofrece personalización avanzada. ¿Quieres ver los detalles?";
        case "promociones":
            currentOption = "promociones";
            return "¡Actualmente ofrecemos un 15% de descuento para nuevos usuarios y en el plan Premium! ¿Te gustaría más información?";
        case "soporte":
            currentOption = "soporte";
            return "Para soporte adicional, puedes escribirnos aquí o contactarnos en redes sociales y correo electrónico. ¿Te gustaría recibir nuestro contacto directo?";
        case "otras":
            currentOption = "otras";
            return "En 'Otras Consultas' puedes preguntar sobre:\n- Garantías y Devoluciones\n- Materiales Sostenibles\n- Asesoría para Espacios Reducidos, entre otros. ¿Hay algún tema específico que te interese?";
        case "envío":
        case "envios":
        case "entrega":
            currentOption = "envios";
            return "Realizamos envíos a todo el país, y el tiempo de entrega depende de tu ubicación. ¿Te gustaría saber sobre los costos de envío o tiempos estimados?";
        case "garantía":
        case "devolución":
        case "garantias":
        case "devoluciones":
            currentOption = "garantias";
            return "Ofrecemos una garantía de satisfacción de 30 días. Si hay algún defecto, lo solucionaremos de inmediato. ¿Te gustaría saber más sobre el proceso de devolución?";
        case "materiales":
        case "sostenibilidad":
        case "ecológico":
            currentOption = "materiales";
            return "Nos comprometemos con el medio ambiente. Muchos de nuestros productos están hechos con materiales reciclables y sostenibles. ¿Te gustaría más información sobre los materiales específicos de algún producto?";
        case "ergonomía":
        case "consejos":
        case "recomendaciones":
            currentOption = "ergonomia";
            return "Para mejorar tu ergonomía, te recomendamos ajustar tu escritorio y silla a una altura adecuada. ¿Te gustaría recomendaciones específicas para el cuello, la espalda, o el escritorio?";
        case "espacio reducido":
        case "espacio pequeño":
            currentOption = "espacio_reducido";
            return "Para espacios pequeños, recomendamos un kit compacto con un escritorio ajustable y almacenamiento optimizado. ¿Te gustaría ver algunas configuraciones para espacios reducidos?";
        case "compra":
        case "proceso de compra":
            currentOption = "compra";
            return "El proceso es sencillo: elige el kit o productos que deseas, personalízalos, y procede al pago. Recibirás un correo de confirmación con todos los detalles. ¿Tienes alguna duda sobre el proceso?";
        case "formas de pago":
        case "pago":
            currentOption = "pago";
            return "Aceptamos pagos con tarjeta de crédito, débito, transferencias bancarias, y PayPal. ¿Te gustaría ayuda con el proceso de pago?";
        case "asesoría virtual":
        case "consultoría":
            currentOption = "asesoria";
            return "Ofrecemos asesoría virtual con expertos en ergonomía. Te ayudaremos a optimizar tu espacio de trabajo. ¿Te gustaría conocer más sobre este servicio?";
        default:
            return "Lo siento, no tengo una respuesta para eso en este momento. ¿Hay algo más en lo que pueda ayudarte?";
    }
}

function getThankYouResponse() {
    const responses = [
        "¡Con gusto! 😊 Si tienes más preguntas, no dudes en volver.",
        "¡Estoy aquí para ayudarte siempre que lo necesites! ¡Que tengas un excelente día!",
        "Fue un placer asistirte. ¡Nos vemos pronto!",
        "¡Gracias a ti por confiar en ErgoCrafters! No dudes en regresar si surge alguna otra pregunta.",
        "¡De nada! Recuerda que siempre estoy aquí para cualquier otra duda.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

function getFollowUpResponse(userResponse) {
    let followUpResponse = "";

    if (userResponse === "si" || userResponse === "sí") {
        switch (currentOption) {
            case "personalizar":
                followUpResponse = "¡Genial! Puedes personalizar el color, altura y tipo de los muebles. ¿Te interesa algún color en particular?";
                break;
            case "bienestar":
                followUpResponse = "Perfecto, te sugiero accesorios como cojines ergonómicos y soportes ajustables. ¿Prefieres algo para la espalda o el cuello?";
                break;
            case "planes":
                followUpResponse = "Nuestro plan básico ofrece asesoría gratuita, mientras que el premium incluye personalización avanzada y descuentos exclusivos. ¿Te gustaría saber más sobre el plan premium?";
                break;
            case "promociones":
                followUpResponse = "Actualmente, el descuento aplica en todo el catálogo. ¿Te gustaría ver ejemplos de kits con descuento?";
                break;
            case "soporte":
                followUpResponse = "Claro, aquí está nuestro WhatsApp: [https://chat.whatsapp.com/FSzVYU0e2OQGFLf6ZQaJWp) y nuestro correo: ergocrafters@gmail.com.";
                break;
            case "otras":
                followUpResponse = "Por supuesto. ¿Te gustaría saber más sobre nuestra política de garantía o devoluciones?";
                break;
        }
    } else if (userResponse === "no") {
        followUpResponse = "¡Entendido! Si tienes alguna otra consulta o necesitas ayuda, estoy aquí.";
    }

    currentOption = "";
    return followUpResponse;
}

function addMessage(text, sender) {
    const chatBody = document.getElementById("chat-body");
    
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");

    const messageText = document.createElement("div");
    messageText.textContent = text;
    messageElement.appendChild(messageText);

    const messageTime = document.createElement("div");
    messageTime.textContent = getTime();
    messageTime.classList.add("message-time");
    messageElement.appendChild(messageTime);

    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function showSurvey() {
    const chatBody = document.getElementById("chat-body");
    const surveyElement = document.createElement("div");
    surveyElement.classList.add("survey");

    surveyElement.innerHTML = `
        <p>💬 ¿Cómo calificarías la calidad de nuestro servicio hoy?</p>
        <button onclick="submitSurvey(5)" class="survey-option">⭐️⭐️⭐️⭐️⭐️ Excelente</button>
        <button onclick="submitSurvey(4)" class="survey-option">⭐️⭐️⭐️⭐️ Muy bueno</button>
        <button onclick="submitSurvey(3)" class="survey-option">⭐️⭐️⭐️ Bueno</button>
        <button onclick="submitSurvey(2)" class="survey-option">⭐️⭐️ Regular</button>
        <button onclick="submitSurvey(1)" class="survey-option">⭐️ Insatisfactorio</button>
    `;

    chatBody.appendChild(surveyElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function submitSurvey(rating) {
    const chatBody = document.getElementById("chat-body");
    const feedbackMessage = `¡Gracias por tu calificación de ${rating} estrella(s)! 😊`;

    const feedbackElement = document.createElement("div");
    feedbackElement.textContent = feedbackMessage;
    feedbackElement.classList.add("bot-message");
    chatBody.appendChild(feedbackElement);
    chatBody.scrollTop = chatBody.scrollHeight;

    document.querySelector(".survey").remove();
}

function getTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value.trim().toLowerCase();
    if (message) {
        addMessage(message, "user");
        input.value = "";
        hideWelcomeMessage(); 
        clearChatBody(); 
        showBotHeader();
        let response = getBotResponse(message);
        setTimeout(() => addMessage(response, "bot"), 1000);
    }
}

function showBotHeader() {
    const chatHeader = document.querySelector(".chat-header");
    chatHeader.innerHTML = `
        <i class="fa fa-home home-icon" onclick="resetChat()" aria-hidden="true"></i>
        ErgoBot
        <span onclick="toggleChatbox()" class="close-chatbox">&times;</span>
    `;
}

function resetChatHeader() {
    const chatHeader = document.querySelector(".chat-header");
    chatHeader.innerHTML = `
        ErgoBot
        <span onclick="toggleChatbox()" class="close-chatbox">&times;</span>
    `;
}

function clearChatBody() {
    const chatBody = document.getElementById("chat-body");
    const optionsContainer = document.getElementById("options-container");
    if (optionsContainer) optionsContainer.remove();
}

function resetChat() {
    const chatBody = document.getElementById("chat-body");
    chatBody.innerHTML = "";
    showOptions();
    resetChatHeader();
}

function resetChatHeader() {
    const chatHeader = document.querySelector(".chat-header");
    chatHeader.innerHTML = `
        ErgoBot
        <span onclick="toggleChatbox()" class="close-chatbox">&times;</span>
    `;
    const chatBody = document.getElementById("chat-body");
    chatBody.innerHTML = `
        <div id="welcome-message" class="chat-column-left">
              <p>👋 ¡Hola! Soy ErgoBot, tu asistente en ErgoCrafters, ¿Cómo puedo ayudarte hoy?</p>
        </div>
    `;
    showOptions();
}

function showOptions() {
    const chatBody = document.getElementById("chat-body");
    chatBody.innerHTML = `
        <div id="welcome-message" class="chat-column-left">
              <img src="/assets/img/chatbox.png" alt="ErgoBot Icon" style="width: 70px; height: 70px; margin-bottom: 10px;">
              <p>👋 ¡Hola! Soy ErgoBot, tu asistente en ErgoCrafters, ¿Cómo puedo ayudarte hoy?</p>
        </div>
        <div id="options-container">
            <button onclick="handleOption('personalizar')" class="chat-option">Ideas para Optimizar mi Espacio</button>
            <button onclick="handleOption('bienestar')" class="chat-option">Accesorios para Bienestar</button>
            <button onclick="handleOption('planes')" class="chat-option">Consulta sobre Planes y Precios</button>
            <button onclick="handleOption('promociones')" class="chat-option">Promociones Actuales</button>
            <button onclick="handleOption('soporte')" class="chat-option">Soporte y Contacto</button>
            <button onclick="handleOption('otras')" class="chat-option">Otras Consultas</button>
        </div>
    `;
}

function handleOption(option) {
    clearChatBody();
    showBotHeader();
    currentOption = option;
    let response = "";

    switch (option) {
        case 'personalizar':
            response = "Nuestros kits de oficina son personalizables para adaptarse a tus necesidades. ¿Te gustaría explorar algunas ideas de personalización?";
            break;
        case 'bienestar':
            response = "Ofrecemos accesorios de bienestar como soportes ergonómicos y almohadillas. ¿Te gustaría ver algunas opciones específicas?";
            break;
        case 'planes':
            response = "Tenemos varios planes. El plan básico incluye asesoría básica, y el premium ofrece personalización avanzada. ¿Quieres ver los detalles?";
            break;
        case 'promociones':
            response = "¡Actualmente ofrecemos un 15% de descuento para nuevos usuarios y en el plan Premium! ¿Te gustaría más información?";
            break;
        case 'soporte':
            response = "Para soporte adicional, puedes escribirnos aquí o contactarnos en redes sociales y correo electrónico. ¿Te gustaría recibir nuestro contacto directo?";
            break;
        case 'otras':
            response = "En 'Otras Consultas' puedes preguntar sobre:\n- Garantías y Devoluciones\n- Materiales Sostenibles\n- Asesoría para Espacios Reducidos, entre otros. ¿Hay algún tema específico que te interese?";
            break;
    }
    
    addMessage(response, "bot");
}
