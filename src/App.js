import './App.css';
import AddItem from './components/AddItem';
import Filter from './components/FilterItem';
import ItemsList from './components/ItemsList';

function App() {
  return (
    <div className="App">
      <Filter />
      <AddItem />
      <ItemsList />
    </div>
  );
}

export default App;
