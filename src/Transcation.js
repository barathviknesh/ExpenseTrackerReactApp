import React, {useContext} from 'react';
import { GlobalContext } from './Globalstate';
import Transcationlist from './transcationlist';

function Transcation() {

    const context =useContext(GlobalContext);
    // console.log(context);

    return (
        <>
        <div className="history">
           <h3>history</h3>
           <hr/>
           <ul id="list" className="list">
               {context.transactions.map(transcation => (
                    <Transcationlist trans={transcation}/>
               ))}
               <li className="minus" key={457}>
                   cash<span>-$400</span><button className="delete-btn">x</button>
               </li>
           </ul> 
           </div>
        </>
    )
}

export default Transcation
