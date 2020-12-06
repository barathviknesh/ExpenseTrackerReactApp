import React, {useContext,useState} from 'react';
import { GlobalContext } from './Globalstate';

function AddTranscation() {

   const [text,setText]=useState("");
   const [amount,setAmount]=useState(0);

   const { addTransaction } =useContext(GlobalContext);

  const handleSubmit =(e)=>{
       e.preventDefault();

       const newtrans = {
           id: Math.floor(Math.random() * 100000),
           text,
           amount: +amount
       }
    addTransaction(newtrans);
    console.log(newtrans);
   } 

    return (
        <>
        <div className="addtrans">
         <h6>Add New Transcation</h6>
         
         <form onSubmit ={handleSubmit}> 
         {/* <div className="form-control"> */}
             <label htmlFor="text">Text</label>
             <input type="text" 
             value={text}
             onChange={(e)=> setText(e.target.value)}
             id="text" 
             placeholder="Enter text..."/>
        {/* </div>     */}
        {/* <div className="form-control"> */}
<label htmlFor="amount">Amount<br/>
</label>
<input type="number" 
id="amount" 
value={amount}
onChange={(e)=> setAmount(e.target.value)}
placeholder="Enter amount..." />
        {/* </div> */}
        <button  type="submit">Add transcation</button>
         </form> 
         </div>  
        </>
    )
}

export default AddTranscation
