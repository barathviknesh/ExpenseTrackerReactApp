
import './App.css';
import Balance from './Balance';
import Header from './Header';
import Income from './Income';
import Transcation from './Transcation';
import AddTranscation from './AddTranscation';
import {GlobalProvider} from './Globalstate';


function App() {
  return (
    <GlobalProvider>
      <div className="apps">
      <div className="body">
      
      <Header/>
      
        <Balance/>
        <Income/>
        <Transcation/>
        <AddTranscation/>
        
      
      </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
