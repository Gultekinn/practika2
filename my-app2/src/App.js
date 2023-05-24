import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routers/router";
import { MainContext } from "./context/context";
import { useState } from "react";
const router = createBrowserRouter(ROUTES);
function App() {
  const [wishlistItem, SetwishlistItem] = useState([]);
  const datas = {
    wishlistItem,
    SetwishlistItem,
  };
  return (
    <div className="App">
      <MainContext.Provider value={datas}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </div>
  );
}

export default App;
