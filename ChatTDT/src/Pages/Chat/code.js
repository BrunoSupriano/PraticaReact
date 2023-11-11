document.addEventListener("DOMContentLoaded", function () {
    function sendMessage() {
        var messageInput = document.getElementById("mensagem");
        var message = messageInput.value.trim();
        if (message !== "") {
            var chatMessages = document.getElementById("messages-list");
            var newMessage = document.createElement("div");
            newMessage.className = "message-item message-user";
            newMessage.innerHTML = '<div class="msg-user"><strong>Você diz:</strong></div><div class="message-user msg-chat"></div>';
            newMessage.querySelector(".message-user .msg-chat").textContent = message;
            newMessage.querySelector(".message-user .msg-chat").style.backgroundColor = '.message-user';
            chatMessages.appendChild(newMessage);
            messageInput.value = "";
            messageInput.focus();
        }
    }
    var messageInput = document.getElementById("mensagem");
    var form = document.getElementById("form-chat-send");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendMessage();
    });
});