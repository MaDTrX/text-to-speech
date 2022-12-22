console.log("linked Correctly");

// class gods {
//   constructor(name, gender, power, captions) {
//     this.name = name;
//     this.gender = gender;
//     this.power = power;
//   }
// }

// const godsProstatis = new gods("Prostatatis", "male", "Protector");
// const godsOTheos = new gods("O Theos tou Polemon", "male", "War");
// const godsOThea = new gods("O Thea tou Nerou", "female", "Water");

// class superHuman {
//   constructor(name, ability, role, gender) {
//     this.name = name;
//     this.gender = gender;
//     this.role = role;
//   }
// }

// const superHumanOfilia = new superHuman("Ofilia", "immortality", "servant");


// Modal

const myBtn = document.querySelector("#myBtn");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");
const slides = document.querySelectorAll(".slide");
const captions = document.querySelectorAll(".slide > p")
const next = document.querySelector("#next-slide");
const prev = document.querySelector(".prev");
const reset = document.querySelector("#reset");

//each windowOnClick, classlist toggle() will add CSS class if it does not exit in the classlist array and return true and false if the css class exists the method will remove the class.  Show those attributes on the click for the CCS property show-modal.

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

// click the closeButton, I want to show the modal, when click the x I want to close the modal and when I click on the pinksalmon part I also want to hid the modal

myBtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//Carousal
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
let i = 1
const speechCompleted = () => {
  speech.text = captions[i].innerText
  window.speechSynthesis.speak(speech);
  i++
  next.click()
}

document.querySelector("#start").addEventListener("click", () => {
  //when we press starrt its wait 6 seconda before ==> this delay can be annoying for a user
  //the set interval doesnt stop ==> clear set interval
  speech.text = captions[0].innerText
  window.speechSynthesis.speak(speech);
  setInterval(speechCompleted, 20000)

})

let currentImgIndex = 0;
let previousImgIndex = 0;

console.log(slides);

next.addEventListener("click", () => {
  // we may want to pause the text to speech
  previousImgIndex = currentImgIndex;
  if (currentImgIndex < slides.length - 1) {
    currentImgIndex += 1;
  } else {
    return;
  }
  slides[currentImgIndex].style.display = "block";
  slides[previousImgIndex].style.display = "none";
});

prev.addEventListener("click", () => {
  previousImgIndex = currentImgIndex;
  if (currentImgIndex > 0) {
    currentImgIndex -= 1;
  } else {
    return;
  }
  // textToSpeech(" p");
  slides[currentImgIndex].style.display = "block";
  slides[previousImgIndex].style.display = "none";
});

reset.addEventListener("click", () => {
  previousImgIndex = currentImgIndex;
  if (currentImgIndex > 0) {
    currentImgIndex = 0;
    // i = 0/1
  } else {
    return;
  }
  // textToSpeech(" p");
  slides[currentImgIndex].style.display = "block";
  slides[previousImgIndex].style.display = "none";
});

  //just enuogh to fully read the whole prompt
  // });
  
  // document.querySelector("#pause").addEventListener("click", () => {
  //   window.speechSynthesis.pause();
  // });
  
  // document.querySelector("#resume").addEventListener("click", () => {
  //   window.speechSynthesis.resume();
  // });
  
  // document.querySelector("#cancel").addEventListener("click", () => {
  //   window.speechSynthesis.cancel();
  // });
