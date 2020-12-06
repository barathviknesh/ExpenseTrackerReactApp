import React,{useContext} from 'react'
import { GlobalContext } from './Globalstate';

function Income() {

    const context =useContext(GlobalContext);
    const source =context.transactions;


    const amounts = source.map(value => (value.amount));

    // console.log(amounts,"amounts from income");

    const postiveincome = amounts.filter(num => {
        return num > 0;
    });
     
    
    // console.log(postiveincome,"postiveincome");

    const exp = amounts.filter(num => {
        return num < 0;
    });
    const incomeTotal = postiveincome.reduce((current,item)=>{
        return item+current;
    });
    
    // console.log(incomeTotal,"incomeTotal");

    const expTotal = exp.reduce((current,item)=>{
        return item+current;
    });
    
    // console.log(expTotal,"expTotal");

    return (
        <div className="income">
            <div className="incomediv1">
                <h4>Income</h4>
    <p>+{incomeTotal}</p>
            </div>
            <div className="incomediv1">
                <h4>Expense</h4>
    <p>{expTotal}</p>
            </div>
        </div>
    )
}

export default Income
