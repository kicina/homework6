import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/card/Card';

function App() {
  const [advice, setadvice] = useState([]);

  const getadvice = async () => {

      const res = await axios.get('https://api.adviceslip.com/advice');
      const advicetext = res.data.slip.advice; 
      console.log(advicetext);
      setadvice(advicetext); 
  };

  return (
    <div>
      <h1 className='title'>get advice</h1>
      <div className='advicecard'>
      <h2>{advice}</h2> 
      </div>
      <button onClick={getadvice} className="button">{<Card imgsrc={'/assets/dice.webp'} />}</button>
    </div>
  );
}

export default App;
