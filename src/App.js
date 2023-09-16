import './App.css';
import AudioPreview from './Components/AudioPreview/AudioPreview';


function App() {
  return (
    <div className="App">
      <div>
        <p>Hover over the audio icon to play a preview:</p>
        <AudioPreview audioSrc='/audio/hukum.mp3' />
      </div>
    </div>
  );
}

export default App;
