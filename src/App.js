import Game from './component/game';
import './App.css';
import { useState } from 'react'


const sweetLeft = [{ name: "Fondant supreme", left: 10 },
{ name: "Cake tout Chocolat", left: 10 },
{ name: "Cake Framboise chocolat", left: 10 },
{ name: "Brioche sucrée avec chocolat", left: 10 },
{ name: "Cake glacé fondant au chocolat", left: 10 },
{ name: "Eclairs au chocolat", left: 10 },
{ name: "Tarte poire chocolat", left: 10 },
{ name: "Banana  au chocolat", left: 10 }]


// { "date": "2023-07-07" }




const App = () => {

  const getSweet = () => sweetLeft // TO DO : fetch data 
  // to do add 50 sweet limit







  const [sweetData, setSweetData] = useState(getSweet())


  const refreshSweet = () => {
    setSweetData(getSweet())
  }



  const buildLootArray = (sweetData) => {

    const lootArray = []
    sweetLeft.forEach(sweetType => {
      for (let i = 1; i <= sweetType.left; i++) {
        lootArray.push(sweetType.name)
      }
    });
    return lootArray
  }


  return (
    <>


      <h1> YUM YAMS</h1>


      <div className="App">

        <Game
          lootArray={buildLootArray(sweetData)}
          refreshSweet={refreshSweet}
        ></Game>

      </div>
    </>

  );
}

export default App;
