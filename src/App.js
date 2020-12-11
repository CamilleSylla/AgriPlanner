import logo from './logo.svg';
import './App.css';
import AddPar from './Component/CRUD/Parcelle/Create/AddPar';
import AddLeg from './Component/CRUD/Legume/AddLeg';

function App() {
  return (
    <div className="App">
      <AddPar/>
      <AddLeg/>
    </div>
  );
}

export default App;
