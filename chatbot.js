let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatCon = document.getElementById("chatContainer");
let inputE = document.getElementById("userInput");
let buttonE = document.getElementById("sendMsgBtn");

let n = 0

function addMsg() {
    let parah = document.createElement("p");
    parah.classList.add("msg-to-chatbot-container", "msg-to-chatbot");
    let parab = document.createElement("p");
    parab.classList.add("msg-from-chatbot-container", "msg-from-chatbot");
    parah.textContent = inputE.value;
    parab.textContent = chatbotMsgList[n];
    n = n + 1;
    chatCon.appendChild(parah);
    chatCon.appendChild(parab);
    inputE.value = "";


}



buttonE.addEventListener("click", addMsg);