import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ItemsContext } from "../App";

const FormField = () => {
  const [InputList, setInputList] = useState("");
  const { setItems } = useContext(ItemsContext);
  const ListOfItem = () => {
    setItems((old) => {
      return [...old, InputList];
    });
    setInputList("");
  };
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-8">
            <label for="input1">Write Task here</label>
            <input
              type="text"
              className="form-control mb-3"
              id="input1"
              placeholder="Please Enter your task"
              value={InputList}
              onChange={(e) => setInputList(e.target.value)}
            />
          </div>
          <div className="simpl-btn">
            <button className="btn btn-primary" onClick={ListOfItem}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormField;
