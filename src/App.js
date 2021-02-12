import './App.css';
import Thermostat from './components/Thermostat';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faMinus, faLongArrowAltRight)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Thermostat/>    
    </div>
  );
}

export default App;
