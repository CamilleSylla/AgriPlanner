import "./App.scss";
import { LegumeProvider } from "./Context/LegumeContext";
import { Route, Link } from "react-router-dom";
import All from "./Component/Pages/All";
import { ParcelleProvider } from "./Context/ParcelleContext";
import { ModalProvider } from "./Context/ModalContext";
import { CultProvider } from "./Context/CultContext";
import Crud from "./Component/Pages/Dashboard/Crud/Crud";
import List from "./Component/Pages/Dashboard/List/List";
function App() {
  return (
    <LegumeProvider>
      <ParcelleProvider>
        <CultProvider>
          <ModalProvider>
            <nav>
              <Link to="/1">1</Link>
              <Link to="/gestion">Crud</Link>
              <Link to="/liste">Listes</Link>
            </nav>
            <div className="App">
              <Route path="/1" component={All} />
              <Route path="/gestion" component={Crud} />
              <Route path="/liste" component={List} />
            </div>
          </ModalProvider>
        </CultProvider>
      </ParcelleProvider>
    </LegumeProvider>
  );
}

export default App;
