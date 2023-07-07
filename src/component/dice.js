
import './../index.css';


const Dice = ({ value }) => {



    return (<div className="dice">





        {value ? value : "roll"

        }
    </div>
    )

}

export default Dice

