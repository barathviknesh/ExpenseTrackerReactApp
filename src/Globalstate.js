import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const init ={
    transactions:[
        {id:1, text:"phone", amount: -10000},
        {id:2, text:"income", amount: +100000},
        {id:3, text:"phonecase", amount: -100},
        {id:4, text:"pen", amount: -25},
        {id:5, text:"cashback", amount: +99}
    ]
}

export const GlobalContext = createContext(init);

// provider component 
export const GlobalProvider =({children}) => {

    const [state, dispatch] =useReducer(AppReducer,init);

// action 
function deleteTransaction(id) {
    dispatch ({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

function addTransaction(transaction) {
    dispatch ({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}


    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,addTransaction
    }}>
        {children}
         </GlobalContext.Provider>);
}