import "./App.css";
import { LegumeProvider } from "./Context/LegumeContext";
import { Route, Link } from "react-router-dom";
import All from "./Component/Pages/All";
import { ParcelleProvider } from "./Context/ParcelleContext";
import { ModalProvider } from "./Context/ModalContext";
import { CultProvider } from "./Context/CultContext";
function App() {
  return (
    <LegumeProvider>
      <ParcelleProvider>
        <CultProvider>
          <ModalProvider>
            <nav>
              <Link to="/1">1</Link>
            </nav>
            <div className="App">
              <Route path="/1" component={All} />
            </div>
          </ModalProvider>
        </CultProvider>
      </ParcelleProvider>
    </LegumeProvider>
  );
}

export default App;
