import { useState, useEffect } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import useSound from 'use-sound';
import startSound from '../../sounds/start_speech.ogg';
import stopSound from '../../sounds/end_speech.ogg';

const Modal = ({ handleModal }) => {
  const [transcriptName, setTranscriptName] = useState('');
  const [transcription, setTranscription] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('en-US');
  const [playStartSound] = useSound(startSound, { volume: 1.0 });
  const [playStopSound] = useSound(stopSound, { volume: 1.0 });

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Your browser does not support speech recognition.');
      return;
    }

    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = language;

    recognitionInstance.onstart = () => {
      setIsListening(true);
      playStartSound();
      setTranscription('Listening...');
    };

    recognitionInstance.onresult = (event) => {
      let interimTranscription = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          interimTranscription += result[0].transcript + ' ';
        }
      }
      setTranscription(prev => {
        const words = prev.trim().split(' ');
        const newWords = interimTranscription.trim().split(' ');
        const filteredWords = newWords.filter(word => !words.includes(word));
        return prev + ' ' + filteredWords.join(' ');
      });
    };

    recognitionInstance.onerror = (event) => {
      console.error('Speech recognition error', event);
      setError('An error occurred during speech recognition.');
    };

    recognitionInstance.onend = () => {
      setIsListening(false);
      playStopSound();
    };

    setRecognition(recognitionInstance);

    return () => {
      recognitionInstance.abort();
    };
  }, [playStartSound, playStopSound, language]);

  const handleMicClick = () => {
    if (!transcriptName) {
      setError('Name cannot be empty');
      return;
    }
    setError('');
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    if (isListening) {
      recognition.stop();
    }
    setTranscription('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Transcription</h2>
          <button
            className="text-red-500"
            onClick={handleModal}
          >
            Close
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Transcript Name
          </label>
          <input
            type="text"
            placeholder='Add Your Name'
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={transcriptName}
            onChange={(e) => setTranscriptName(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Language
          </label>
          <select
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en-US">English (US)</option>
            <option value="hi-IN">Hindi (India)</option>
          </select>
        </div>
        <div className="flex items-center mb-4">
          <button
            className={`p-2 rounded-full ${isListening ? 'bg-red-500' : 'bg-green-500'} text-white`}
            onClick={handleMicClick}
          >
            <FaMicrophone />
          </button>
          <span className="ml-2">{isListening ? 'Stop Recording' : 'Start Recording'}</span>
        </div>
        {transcriptName && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Transcript Name: {transcriptName}</h3>
            <p className="mt-2 text-gray-700">Transcription: {transcription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
