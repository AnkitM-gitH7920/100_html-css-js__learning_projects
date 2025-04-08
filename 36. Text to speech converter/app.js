let speech = new SpeechSynthesisUtterance();
console.log(speech)

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
 
    voices.forEach((voice, index) => {
        voiceSelect.options[index] = new Option(voice.name, index);
    });

    if (voices.length) {
        speech.voice = voices[0];
    }
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector(".play").addEventListener("click",()=>{
	speech.text = document.querySelector("textarea").value;
	window.speechSynthesis.speak(speech)
})