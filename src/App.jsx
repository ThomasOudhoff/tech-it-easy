import './App.css';
import { searchBestSale } from './helpers/salesHelper.js';
import React, { useEffect } from 'react';
import { purchasedTv } from './helpers/purchasedHelper.js';

function App() {
  useEffect(() => {
    searchBestSale();
  }, []);
  return (
    <h1>Begin hier met met maken van de applicatie!</h1>
  )
}

export default App
