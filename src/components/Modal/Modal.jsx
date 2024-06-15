import  { useState, useEffect } from 'react';

const Modal = ({ handleModal }) => {
  const [transcriptName, setTranscriptName] = useState('');
  const [transcription, setTranscription] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Your browser does not support speech recognition.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setTranscription('Listening...');
    };

    recognition.onresult = (event) => {
      const interimTranscription = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

      setTranscription(interimTranscription);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event);
    };

    recognition.onend = () => {
      setIsListening(false);
      setTranscription('');
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={transcriptName}
            onChange={(e) => setTranscriptName(e.target.value)}
          />
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
