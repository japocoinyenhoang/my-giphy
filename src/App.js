import React from 'react';
import {Link, Route} from "wouter";
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>APP</h1>
        <Link to='/gif/panda'>Gifs de Pandas</Link>
        <Link to='/gif/programming'>Gifs de programacion</Link>
        <Link to='/gif/koala'>Gifs de Koalas</Link>

        <Route component={ListOfGifs} path="/gif/:keyword"   />
      </section>
    </div>
  );
}

export default App;
