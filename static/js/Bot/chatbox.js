var messages = [], //array that hold the record of each string in chat
    lastUserMessage = "", //keeps track of the most recent input string from the user
    userName = 'You'
    botMessage = "", //var keeps track of what the chatbot is going to say
    botName = 'Cooking assistant'; //name of the chatbot

let voices = window.speechSynthesis.getVoices()

function loadNewChatlog() {
    for (var i = 1; i <= messages.length; i++) {
        if (messages[messages.length - i]) {
            document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
            var objDiv = document.getElementById("chatlogs-set");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    }
}

function generateImage(lastUserMessage) {
    botMessage = "Generating...";
    messages.push("<b>" + botName + ":</b> " + botMessage);
    loadNewChatlog();
    var generateText = lastUserMessage.substring(lastUserMessage.indexOf(' '), lastUserMessage.length);
    console.log(generateText);
    $.get('/sendGenerate?q=' + generateText)
    .then(function(image) {
        messages.pop();
        messages.push("<b>" + botName + ":</b>");
        messages.push("<img width=\"300\" height=\"200\" src=\"" + image.image_url + "\"</img>");
        loadNewChatlog(); 
    }) 
}

function responseQuestion(talk) {
    botMessage = "Typing...";
    messages.push("<b>" + botName + ":</b> " + botMessage);
    loadNewChatlog();
    $.get('/sendQuestion?question=' + lastUserMessage)
    .then(function(data) {
        botMessage = data
        messages.pop();
        //add the chatbot's name and message to the array messages
        messages.push("<b>" + botName + ":</b> " + botMessage);
        // says the message using the text to speech function written below
        if (talk) {
            Speech(botMessage);
        }
        loadNewChatlog(); 
    })
}

function newEntry(talk) {
    //if the message from the user isn't empty then run 
    if (document.getElementById("input").value != "") {
        //pulls the value from the chatbox ands sets it to lastUserMessage
        lastUserMessage = document.getElementById("input").value;

        //sets the chat box to be clear
        document.getElementById("input").value = "";

        //adds the value of the chatbox to the array messages
        messages.push("<b>" + userName + ":</b> " + lastUserMessage);
        loadNewChatlog()

        // get message from backend
        if (lastUserMessage.startsWith('/gen')) {
            generateImage(lastUserMessage);
            return;
        }
        else {
            responseQuestion(talk);
        }
    }
}


//text to Speech
function Speech(say) {
    if ('speechSynthesis' in window) {
        var utterance = new SpeechSynthesisUtterance(say);
        // utterance.voice = voices[6]; // Note: some voices don't support altering params
        // msg.voiceURI = 'native';
        // utterance.volume = 1; // 0 to 1
        // utterance.rate = 0.1; // 0.1 to 10
        // utterance.pitch = 1; //0 to 2
        // utterance.text = 'Hello World';
        // utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
    var x = e || window.event;
    var key = (x.keyCode || x.which);
    if (key == 13 || key == 5) {
        //runs this function when enter is pressed
        newEntry(false);
    }
    if (key == 38) {
        console.log('hi')
        //document.getElementById("chatbox").value = lastUserMessage;
    }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
    document.getElementById("input").placeholder = "";
}

// recording button
$('#recButton').addClass("notRec");

$('#recButton').click(function(){
	if($('#recButton').hasClass('notRec')){
		$('#recButton').removeClass("notRec");
		$('#recButton').addClass("Rec");
	}
	else{
		$('#recButton').removeClass("Rec");
		$('#recButton').addClass("notRec");
	}
});
