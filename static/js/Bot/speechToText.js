// check if browser supports Web Speech API
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  // create new SpeechRecognition object
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  // set recognition options
  recognition.lang = 'en-US'; // set language
  recognition.interimResults = true; // show interim results
  recognition.maxAlternatives = 1; // set maximum number of alternatives

  let isRecording = false; // flag to track whether the user is speaking
  let spokenSentence = ''; // variable to hold the current spoken sentence

  // add event listener for when recognition results are available
  recognition.onresult = function(event) {
    const result = event.results[0][0].transcript; // get first result
    // update the spoken sentence with the new result
    spokenSentence = result;
    document.getElementById("input").value = spokenSentence;
  };

  // add event listener for when recognition errors occur
  recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
  };

  // start recognition
  const button = document.getElementById("recButton");
  button.onclick = function(event) {
      event.preventDefault()
      if (isRecording) {

        isRecording = false;
        recognition.stop();
        document.getElementById("input").value = spokenSentence;
        newEntry(true);
      }
      else {
        isRecording = true;
        recognition.start();
      }
  }

  
} else {
  console.error('Web Speech API not supported.');
}

