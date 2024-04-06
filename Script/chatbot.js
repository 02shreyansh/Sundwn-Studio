// elements
var sendBtn= document.getElementById ('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer =document.getElementById('chatContainer');
var user={message:""};

var arrayOfPossibleMessage=[
    {"message":"How are You?","response":"I'm great"},
    {"message":"Hi","response":"Hi!"},
    {"message":"Who are you?","response":"I'm your assistant"} ,
    {"message":"shreyansh","response":"Hi,Shreyansh!"}
    
    
    
    
];

function chatbotSendMessage(messageText){
    var messageElement=document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin="10px";
    messageElement.style.padding="5px";

    messageElement.innerHTML="<span>Chatbot: </span>" +
    "<span style=" + "margin-top: 10px; padding: 10px;" + ">"+ messageText +"</span>";
    messageElement.animate([{easing:"ease-in", opacity:0.4},{opacity:1}],{duration:1000});

    chatContainer.appendChild(messageElement);

    chatContainer.scrollTop = chatContainer.scrollHeight; 

}
setTimeout(function(){
    chatbotSendMessage("Hi,What's your name?");
},1000);



function sendMessage(messageText){
    var messageElement=document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin="10px";
    messageElement.style.padding="5px";

    messageElement.innerHTML="<span>You: </span>" +
    "<span style=" + "margin-top: 10px; padding: 10px;" + ">"+ messageText +"</span>";
    messageElement.animate([{easing:"ease-in", opacity:0.4},{opacity:1}],{duration:1000});

    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;

}
sendBtn.addEventListener('click', function(e){
    if(textbox.value == ""){
        alert("please type message");
        return;

    }
    else{
        let messageText= textbox.value;
        sendMessage(messageText);
        textbox.value="";
        user.message=messageText;
        processMessage();

        

    

    }
   

});

textbox.addEventListener('keypress', function(e) {
    if (e.keyCode === 13 && !e.shiftKey ) {
        
        
        
        // Enter key pressed (not Shift+Enter)
        if (textbox.value === "") {
            return; // Prevent processing if no message
        }

        let messageText = textbox.value;
        sendMessage(messageText);
        textbox.value = "";
        user.message = messageText;
        processMessage();
    }
});

textbox.addEventListener('keydown', function(e) { // For potential Shift+Enter handling
    if (e.keyCode === 13 && e.shiftKey) {
      // You can add logic here to handle Shift+Enter if needed (e.g., prevent default behavior)
      // However, a newline might already be inserted by the browser.
      
    }
});



function processMessage(){
    var userMessageLowerCase = user.message.toLowerCase();
    //array of results
    var result = arrayOfPossibleMessage.filter(val => val.message.toLowerCase().includes(userMessageLowerCase));
    if(result.length > 0) {
        var response = result[0].response;
        chatbotSendMessage(response);
    } else {
        // If no matching response found, you may want to handle this case
        chatbotSendMessage("I'm sorry, I didn't understand that.");
    }

}