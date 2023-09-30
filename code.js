<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    function sendMessage() {
        var messageInput = document.getElementById("mensagem");
        var message = messageInput.value.trim();
=======
    document.addEventListener("DOMContentLoaded", function () {
        function sendMessage() {
        var messageInput = document.getElementById("mensagem");
        var message = messageInput.value.trim();

>>>>>>> 35857fde5709ca184bbd8c0dfff50fde264c8d8f
        if (message !== "") {
            var chatMessages = document.getElementById("messages-list");
            var newMessage = document.createElement("div");
            newMessage.className = "message-item message-user";
            newMessage.innerHTML = '<div class="msg-user"><strong>Você diz:</strong></div><div class="message-user msg-chat"></div>';
<<<<<<< HEAD
            newMessage.querySelector(".message-user .msg-chat").textContent = message;
            newMessage.querySelector(".message-user .msg-chat").style.backgroundColor = '.message-user';
=======
            newMessage.querySelector(".msg-chat").textContent = message;
            newMessage.querySelector(".msg-chat").style.backgroundColor = '#ced3e2';
>>>>>>> 35857fde5709ca184bbd8c0dfff50fde264c8d8f
            chatMessages.appendChild(newMessage);
            messageInput.value = "";
            messageInput.focus();
        }
<<<<<<< HEAD
    }
    var messageInput = document.getElementById("mensagem");
    var form = document.getElementById("form-chat-send");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendMessage();
    });
=======
        }

        var messageInput = document.getElementById("mensagem");
        var form = document.getElementById("form-chat-send");
        form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendMessage();

    document.addEventListener("DOMContentLoaded", function () {
        var button = document.querySelector("form button");
        var form = document.querySelector("form");
    
        // Adicione um ouvinte de evento de clique ao botão
        button.addEventListener("Enter", function () {
        // Quando o botão for clicado, defina o foco no formulário
        form.focus();
        });
    });
});
>>>>>>> 35857fde5709ca184bbd8c0dfff50fde264c8d8f
});