import "./App.css";
import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FormField from "./components/FormField";
import ListItems from "./components/ListItems";
import Login from "./components/Login";
export const ItemsContext = createContext();

function App() {
  const [Items, setItems] = useState([]);
  return (
    <div className="container">
      {/* <div className="header text-center mx-auto">
        <h1>Todo List App</h1>
      </div>
      <ItemsContext.Provider value={{ Items, setItems }}>
        <div>
          <Tabs
            defaultActiveKey="second"
            style={{ fontSize: "20px", color: "ButtonHighlight" }}
          >
            <Tab eventKey="second" title="New">
              <FormField />
            </Tab>
            <Tab eventKey="third" title="List">
              <Login />
            </Tab>
          </Tabs>
        </div>
      </ItemsContext.Provider> */}
      <Login />
    </div>
  );
}

export default App;
