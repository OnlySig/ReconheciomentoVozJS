window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

/**recognition.addEventListener('result', (event) => {
    console.log(event)
}) */

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    const box = document.querySelector('.box')
    const fala = e.results[0][0].transcript
    box.innerHTML = fala

    if(fala == numeroSecreto) {
        alert('faz o l')
    }
}