import { useEffect, useState } from 'react'
import './../index.css';
import Dice from './dice';


const Game = ({ lootArray, refreshSweet }) => {

    const [tryLeft, setTryLeft] = useState(3)
    const [dicesValue, setDicesValue] = useState([0, 0, 0, 0, 0])

    // const [isGameWin, setIsGameWi] = useState(false)
    const [sweetWin, setSweetWin] = useState([])




    const rollDice = () => {
        setTryLeft(prev => prev - 1)

        setDicesValue(() => {
            const newValue = []
            for (let i = 1; i <= 5; i++) {
                newValue.push(
                    Math.ceil((Math.random() * 6))
                )
            }
            return newValue
        })


    }



    useEffect(
        () => {
            const getNbSweetWin = () => {  // TO DO ! 

                const dicesCopy = [...dicesValue]
                const [a, b, c, d, e] = dicesCopy.sort()
                if (a === e) {
                    return 3
                }
                if (b === c) {
                    if (b === a || d === e) { return 2 }
                }
                if (a === b && c === d) {
                    return 1
                }
                if (a === b && d === e) {
                    return 1
                }
                if (b === c && d === e) {
                    return 1
                }
                return 0
            }

            if (dicesValue[0]) {
                const nbSweetWin = getNbSweetWin()

                const lootArrayCopy = [...lootArray]

                if (getNbSweetWin()) {
                    // to do await things .then et patatra 
                    // refreshSweet() //maj des datas
                    for (let i = 1; i <= nbSweetWin; i++) {
                        setSweetWin(prev => {

                            const randomSweet = Math.floor(Math.random() * lootArrayCopy.length)
                            const newValue = [...prev, lootArrayCopy[randomSweet]]

                            lootArrayCopy.splice(randomSweet, 1)
                            return newValue
                        })

                        // console.log("sweetwin : ", sweetWin)
                        //todo post win sweet
                    }
                }
            }
        }
        , [dicesValue]
    )

    return (

        <div className="game">

            <div className='dice-container'
                style={{
                    display: "flex",
                    justifyContent: "space-arround"
                }}>
                {dicesValue.map(diceValue => <Dice value={diceValue} ></Dice>)}
            </div>

            {sweetWin.length ?

                <>
                    <div> BRAVO VOUS AVEZ GAGNEE : </div>
                    {
                        sweetWin.map(sweet => <div> {sweet} </div>)
                    }
                </>
                :
                <>
                    <div> essai restant : {tryLeft} </div>
                    <button
                        disabled={!tryLeft}
                        onClick={rollDice}
                    > JOUER
                    </button>
                </>
            }
        </div>
    )
}


export default Game

