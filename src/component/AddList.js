import React, { useState } from "react";

const AddList = (props) => {
  const [list, setList] = useState("");

  const handleInputChange = (event) => {
    setList(event.target.value);
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!list) return;

        props.addList(list);
        setList("");
      }}
    >
      <label>Name</label>
      <input
        className="form-control"
        aria-label="small"
        type="text"
        name="name"
        value={list}
        onChange={handleInputChange}
      />
      <button id="addList" className="btn btn-success">
        Add new List
      </button>
    </form>
  );
};

export default AddList;
