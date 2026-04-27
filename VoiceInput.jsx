import React, { useState } from "react";

export default function VoiceInput() {
  const [text, setText] = useState("");

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "hi-IN"; // Hindi

    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
    };

    recognition.start();
  };

  return (
    <div>
      <button onClick={startListening}>🎤 Speak</button>
      <p>{text}</p>
    </div>
  );
}
