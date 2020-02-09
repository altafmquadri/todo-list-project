import React from 'react';

const Speech = (props) => {

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = false

    if (props.recording) {
        recognition.start()
        recognition.onresult = e => {
            let verbal = e.results[0][0].transcript
            console.log(verbal)
            props.recordTodo(verbal)
        }
    } else {
        console.log('i am stopping')
        recognition.stop()
    }

    console.log(props)
    return (
        <div>
            <button onClick={props.record}>
                <span role='img' aria-label='mic'>🎤</span></button>
        </div>
    )


}

export default Speech