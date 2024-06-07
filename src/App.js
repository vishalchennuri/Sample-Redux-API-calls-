import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from "react-router-dom";
import "./App.css";
import React from "react";
import Users from "./components/Users";
import Count from "./components/Count";
import Products from "./components/Products";
import NewProducts from "./components/NewProducts";
function App() {
  return (
    <Router>
      <div className="container">
        <header className="d-flex  justify-content-around py-3 mb-4 shadow border-bottom">
          <NavLink
            to=""
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use href="/bootstrap"></use>
            </svg>
          </NavLink>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/Users" className=" nav-link" aria-current="page">
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Count" className=" nav-link">
                Count
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Products" className=" nav-link">
                Add Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/NewProducts" className=" nav-link">
                New Products
              </NavLink>
            </li>
          </ul>
        </header>

        <Routes>
          <Route path="/Users" element={<Users></Users>}></Route>
          <Route path="/Count" element={<Count></Count>}></Route>
          <Route path="/Products" element={<Products></Products>}></Route>
          <Route
            path="/NewProducts"
            element={<NewProducts></NewProducts>}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
