import React, { useState, useEffect } from "react";

const EditList = (props) => {
  const [list, setList] = useState(props.currentList);

  useEffect(() => {
    setList(props.currentList);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setList({ ...list, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateList(list.id, list);
      }}
    >
      <label>Name</label>
      <input
        className="form-control"
        type="text"
        name="name"
        value={list.name}
        onChange={handleInputChange}
      />
      <button id="updateList" className="btn btn-success">
        Update list
      </button>{" "}
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-danger"
        id="cancel"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditList;
