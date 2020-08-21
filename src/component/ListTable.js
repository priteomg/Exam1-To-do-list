import React from "react";

const ListTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Finish</th>
          <th>To do</th>
          {/* <th>Finish</th> */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.lists.length > 0 ? (
          props.lists.map((list) => (
            <tr key={list.id}>
              <td>
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Check1"
                    checked={list.finish}
                    onChange={(event) => {
                      let checked = event.target.checked;
                      props.updateFinish(list, checked);
                    }}
                  />
                </div>
              </td>
              <td>{list.name}</td>
              {/* <td>{list.finish ? "true" : "false"}</td> */}
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    props.editRow(list);
                  }}
                >
                  Edit
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => props.deleteList(list.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No List</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ListTable;
