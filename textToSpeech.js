window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  //declaring a new instance of JS speech API
  let speech = new SpeechSynthesisUtterance();
  
  //assigning a language
  speech.lang = "en";
  
  //creating an empty array that will contain voices
  let voice = []
  
  //load voices asynchronously
  window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[51];
  }

  speech.volume = 1
  let captions = document.querySelectorAll("#captions > div")
  let i = 1
  const speechCompleted = () => {
    speech.text = captions[i].innerText
    // console.log(speech.text, i)
    window.speechSynthesis.speak(speech);
    i++
    if (i > captions.length -1) {
      clearInterval(readCaptions)
    }
  }
 
  document.querySelector("#start").addEventListener("click", () => {
    //when we press starrt its wait 6 seconda before ==> this delay can be annoying for a user
    //the set interval doesnt stop ==> clear set interval
    speech.text = captions[0].innerText
    window.speechSynthesis.speak(speech);
    const readCaptions = setInterval(speechCompleted, 6000) //just enuogh to fully read the whole prompt
  });
  
  document.querySelector("#pause").addEventListener("click", () => {
    window.speechSynthesis.pause();
  });
  
  document.querySelector("#resume").addEventListener("click", () => {
    window.speechSynthesis.resume();
  });
  
  document.querySelector("#cancel").addEventListener("click", () => {
    window.speechSynthesis.cancel();
  });
});