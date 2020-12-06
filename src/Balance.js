import React,{useContext} from 'react'
import { GlobalContext } from './Globalstate';

function Balance() {
    const context =useContext(GlobalContext);
// console.log(context,"from balance");
// console.log(context.transactions,"from balance");

const source =context.transactions;

const amounts = source.map(value => (value.amount));

const total = amounts.reduce((current, incomeing) => {
    return incomeing+current
},0);

// console.log(total,"total");

// console.log(amounts);

    return (
        <>
        <div className="balance">
            <h4>
                your balance
            </h4>
    <h1>{total}</h1>
    </div>
        </>
    )
}

export default Balance
