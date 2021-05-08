import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const GIFS = ['https://media.giphy.com/media/EatwJZRUIv41G/giphy.gif', 
  'https://media.giphy.com/media/jKpVHextCiB8c/giphy.gif'];

  const OTHERGIFTS =['https://media.giphy.com/media/PDFQfRc80TTi0/giphy.gif', 
  'https://media.giphy.com/media/EPcvhM28ER9XW/giphy.gif'] ;

  const [gifs, setGifts] = useState(GIFS);

  //enderiza cada veaz que se renderiza la pagina
  //lo que antiguamemte era el COMPONENTDIDMOUNT 
  //useEffect()
  return (
    <div className="App">
      <section className="App-content">
        { gifs.map(singleGif => <img src={singleGif} />)}
        <button onClick= {()=>setGifts(OTHERGIFTS)}>CAMBIAR GIFS</button>
      </section>
    </div>
  );
}

export default App;
