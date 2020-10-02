import React from 'react';
import './App.css';
import Header from './Header'
import CardList from './CardList'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <img src = {require ('./images/image2.jpeg')} alt='main' width={1500} height={550}/>

    <Header 
      text = "Our Friendly Staff"
    />
   <CardList />
    </div>
  );
}

export default App;
