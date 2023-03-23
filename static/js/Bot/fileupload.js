const inputImg = document.getElementById("imgInput");

inputImg.onchange = function updateImageDisplay() {
    let file = inputImg.files[0]
    
    var form_data = new FormData($('#upload-file')[0]);

    imgUrl = URL.createObjectURL(file)
    messages.push("<b>" + userName + ":</b>");
    messages.push("<img width=\"300\" height=\"200\" src=\"" + imgUrl + "\"</img>");
    botMessage = "Analyzing...";
    messages.push("<b>" + botName + ":</b> " + botMessage);
    loadNewChatlog();

    $.ajax({
            type: 'POST',
            url: '/uploadFile',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,

            success: function(food) {
                messages.pop();
                data = String(food)

                botMessage = "Your image looks like " + food + "!\n";
                botMessage += "Here is a recipe for " + food + " if you want to cook the dish:\n"; 
                //add the chatbot's name and message to the array messages
                messages.push("<b>" + botName + ":</b> " + botMessage);
                // says the message using the text to speech function written below
                loadNewChatlog(); 

                lastUserMessage = "Recipe for " + food;

                // get message from backend
                lastUserMessage = "Recipe for " + food;
                $.get('/sendQuestion?question=' + lastUserMessage)
                .then(function(data) {

                    for (var i = 0; i < food.length; i++) {
                        if (food[i] === '_') {
                            food = food.replace('_', ' ')
                        }
                    }
                    botMessage = data
                    //add the chatbot's name and message to the array messages
                    messages.push("<b>" + botName + ":</b> " + botMessage);
                    // says the message using the text to speech function written below
                    loadNewChatlog(); 
                })
            },
        });
    
}
