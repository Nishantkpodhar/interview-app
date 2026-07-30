import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.css";

function SearchBar({ searchText, onChange, onClear, onVoiceResult }) {
  const recognitionRef = useRef(null);
  const [isListening, setIsListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState("");

  useEffect(
    () => () => {
      recognitionRef.current?.stop();
    },
    []
  );

  const handleVoiceSearch = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceStatus("Voice search is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setVoiceStatus("Listening…");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      onVoiceResult(transcript);
      setVoiceStatus(`Searching for “${transcript}”`);
    };

    recognition.onerror = () => {
      setVoiceStatus("Voice search could not hear a request. Please try again.");
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };

    recognition.start();
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search question or answer..."
        className="search-box"
        value={searchText}
        onChange={onChange}
      />
      {searchText && (
        <button
          type="button"
          className="search-action-btn clear-search-btn"
          aria-label="Clear search"
          onClick={onClear}
        >
          ×
        </button>
      )}
      <button
        type="button"
        className={`search-action-btn voice-search-btn ${isListening ? "listening" : ""}`}
        aria-label={isListening ? "Stop voice search" : "Search by voice"}
        aria-pressed={isListening}
        onClick={handleVoiceSearch}
      >
        🎙
      </button>
      <span className="voice-search-status" role="status" aria-live="polite">
        {voiceStatus}
      </span>
    </div>
  );
}

export default React.memo(SearchBar);
