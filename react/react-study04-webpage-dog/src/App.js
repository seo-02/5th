import React from 'react';
import Section from './components/Section';
import Header from './components/Header';
import Footer from './components/Footer';

import Title from './components/Title';
import Gnb from './components/Gnb';

import './App.scss';

function App(props){
  return(
    <>
      <Header>
        <Title />
        <Gnb />
      </Header>

      <Section />
      <Footer />
    </>
  );
}

export default App;