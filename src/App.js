import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const GIFS = ['https://media.giphy.com/media/EatwJZRUIv41G/giphy.gif', 
  'https://media.giphy.com/media/jKpVHextCiB8c/giphy.gif'];

  const OTHERGIFTS =['https://media.giphy.com/media/PDFQfRc80TTi0/giphy.gif', 
  'https://media.giphy.com/media/EPcvhM28ER9XW/giphy.gif'] ;

  const [gifs, setGifts] = useState(GIFS);

  //se ejecuta cada vez que se renderiza el componente. Tenemos que ponerle un segundo parametro para que no entre en bucle ya que se actualiza el estado y se renderiza el componente, y se vuelve a actualizar el estado y a renderizar el componente....
  useEffect(function () { setGifts(OTHERGIFTS)}, [])  //con el  [], solo se ejecuta una vez y es lo que antiguamemte era el COMPONENTDIDMOUNT 
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
