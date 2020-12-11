import "./App.css";
import { LegumeProvider } from "./Context/LegumeContext";
import { Route, Link } from "react-router-dom";
import All from "./Component/Pages/All";
import { ParcelleProvider } from "./Context/ParcelleContext";
import { CultProvider } from "./Context/CultContext";
function App() {
  return (
    <LegumeProvider>
      <ParcelleProvider>
        <CultProvider>
        <nav>
          <Link to="/1">1</Link>
        </nav>
      <div className="App">
        <Route path="/1" component={All}/>
      </div>
        </CultProvider>
      </ParcelleProvider>
    </LegumeProvider>
  );
}

export default App;
