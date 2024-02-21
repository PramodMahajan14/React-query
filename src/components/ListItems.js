import React, { useContext } from "react";
import { ItemsContext } from "../App";
import logoSvg from "../logo.svg";

const ListItems = () => {
  const { Items, setItems } = useContext(ItemsContext);
  const deleteItem = (id) => {
    setItems((olditem) => {
      return olditem.filter((e, ind) => {
        return ind !== id;
      });
    });
  };
  return (
    <div className="container p-4">
      {Items.length > 0 ? (
        Items.map((e, ind) => {
          return (
            <>
              <ul className="list-group p-1 " key={ind}>
                <li className="list-group-item list-group-item-primary d-flex justify-content-between">
                  <h5>{e}</h5>{" "}
                  <img
                    src={logoSvg}
                    alt="Logo"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteItem(ind)}
                  />
                </li>
              </ul>
            </>
          );
        })
      ) : (
        <div className="container text-center  align-items-center">
          <h4 className="text-secondary m-8">Empty List</h4>
        </div>
      )}
    </div>
  );
};

export default ListItems;
