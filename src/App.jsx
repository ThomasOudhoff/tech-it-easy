import './App.css';
import { searchBestSale } from './helpers/salesHelper.js';
import { purchasedTv } from './helpers/purchasedHelper.js';
import { yetToSell } from  './helpers/yetToSellHelper.js';
import { generateTvName } from './helperFunctions.js';

function App() {
    const soldTvCount = searchBestSale();
    const purchasedTvCount = purchasedTv();
    const tvsLeftToSell = yetToSell()
    const tvName = generateTvName(bestSellingTv);

  return (
      <div>
          <h1>Dashboard</h1>
          <div style={{color: 'green'}}>
              Aantal verkochte tv's: {soldTvCount} {}
          </div>
          <div style={{color: 'blue'}}>
              Totaal aantal ingekochte tv's: {purchasedTvCount} {}
          </div>
          <div style={{color: 'red'}}>
              Aantal tv's die nog verkocht moeten
              worden: {tvsLeftToSell} {}
          </div>
      </div>
)
    ;
}

export default App
