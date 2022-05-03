import React from 'react';

import './App.css';
import Car from './components/Car';
import Hi from './components/Hi';
import List from './components/List';

function App(props){
  return(
    <div className="container">
      <h1 className="text-center">택배리스트</h1>
      <List/>

      <hr />

      <Hi color="blue" name="리액트">님, 반가워요~!</Hi>

      <Car brand="페루치오" number={'쓰리'}>멋진 스포츠카 람보르기니</Car>
    </div>
  );
}

export default App;