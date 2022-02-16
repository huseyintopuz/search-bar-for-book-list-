import './App.css';
import Searchbar from './components/Searcbar'
import {BookData} from './Data'

function App() {
  return (
    <div className="App">
      <Searchbar placeholder="Enter a Book Name..." data={BookData}/>
    </div>
  );
}

export default App;
