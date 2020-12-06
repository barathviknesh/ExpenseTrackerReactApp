import React, {useContext} from 'react';
import { GlobalContext } from './Globalstate';


function Transcationlist({trans}) {

    const { deleteTransaction } =useContext(GlobalContext);

    const sign = trans.amount < 0 ? '-' : '+';
    return (
        <li className="minus" key={trans.id}>
        {trans.text}<span>{sign} ${Math.abs(trans.amount)}</span><button onClick={()=> deleteTransaction(trans.id)}className="delete-btn">x</button>
    </li>
    )
}

export default Transcationlist
