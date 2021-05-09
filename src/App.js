import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';


function App() {

const [gifs, setGifs] = useState([]);
  
//se ejecuta cada vez que se renderiza el componente. Tenemos que ponerle un segundo parametro para que no entre en bucle ya que se actualiza el estado y se renderiza el componente, y se vuelve a actualizar el estado y a renderizar el componente....
//useEffect(function () { setGifts(OTHERGIFTS)}, [])  //con el  [], solo se ejecuta una vez y es lo que antiguamemte era el COMPONENTDIDMOUNT 

useEffect(function () {
  getGifs({keyword:'rick'}).then(gifs => setGifs(gifs))
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        { gifs.map(singleGif => <img src={singleGif} />)}
      </section>
    </div>
  );
}

export default App;
