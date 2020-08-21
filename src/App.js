import React, { useState, useEffect } from "react";
import "./App.css";
import ListTable from "./component/ListTable";
import AddList from "./component/AddList";
import EditList from "./component/EditList";

function App() {
  const initialFormState = { id: null, name: "", finish: false };

  const [lists, setLists] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentList, setCurrentList] = useState(initialFormState);

  useEffect(() => {
    if (localStorage.getItem("myList")) {
      setLists(JSON.parse(localStorage.getItem("myList")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(lists));
  }, [lists]);

  const updateList = (id, updatedList) => {
    setEditing(false);
    console.log(updatedList);
    setLists(lists.map((list) => (list.id === id ? updatedList : list)));
  };

  const editRow = (list) => {
    setEditing(true);

    setCurrentList({ id: list.id, name: list.name, finish: list.finish });
  };

  const addList = (name) => {
    let id = Date.now();
    let newList = { id, name, finish: false };

    setLists([...lists, newList]);
    console.log(newList);
    //id += 1;
  };

  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const updateFinish = (updatedList, checked) => {
    // const newStatus = {
    //   id: updatedList.id,
    //   name: updatedList.name,
    //   finish: checked,
    // };
    console.log(updatedList);

    setLists(
      lists.map((list) => {
        if (list.id === updatedList.id) {
          list.finish = checked;
        }
        return list;
      })
    );
    //window.alert("dd");
  };

  return (
    <div className="container">
      <h1>To do List</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit List</h2>
              <EditList
                setEditing={setEditing}
                currentList={currentList}
                updateList={updateList}
              />
            </div>
          ) : (
            <div>
              <h2>Add list</h2>
              <AddList addList={addList} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View list</h2>
          <ListTable
            lists={lists}
            deleteList={deleteList}
            editRow={editRow}
            updateFinish={updateFinish}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
