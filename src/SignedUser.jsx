import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { routes } from "./utils/routes";

function App() {
  return (
    <div className="App">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <Routes>
          {routes.map((el, index) => {
            return (
              <Route
                path={el.path}
                exact={el.exact}
                element={el.component}
                key={index}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
