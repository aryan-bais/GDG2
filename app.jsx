import React from "react";
import SOSButton from "./components/SOSButton";
import MapView from "./components/MapView";
import VoiceInput from "./components/VoiceInput";

function App() {
  return (
    <div className="app">
      <h1>🚑 AI Emergency Assistant</h1>
      <VoiceInput />
      <SOSButton />
      <MapView />
    </div>
  );
}

export default App;