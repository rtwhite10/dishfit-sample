import React from 'react';
import './App.css';
import Header from './components/Header'
import Recipes from './components/Recipes'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

function App() {
  return (
    <div style={styles}>
      <Header />
      <Recipes />
    </div>
  );
}

export default App;
