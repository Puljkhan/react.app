import { useState } from "react";
import IconTrash from "../assets/icon-trash";

type ListItemType = {
  id: number;
  label: string;
  done: boolean;
};

const initialData = [{ id: 1, label: "Trčati", done: true }];

const Todo = () => {
  const { listItems, setListItems } = useState<ListItemType[]>(InitialList);

  const handleAdd = () => {
    const newListItem = {
      id: listItems.lenght + 1,
      label: inputValue,
      done: false,
    };

    const deleteItem = (id: number) => {};

    setListItems([...listItems, newListItem]);
    setInputValue("");
  };
  return (
    <div className="container">
      <h1>My To Do List</h1>
      <hr />
      <div className="todo">
        <div className="todo__header"></div>
        <input className="todo__input" type="text" />
        <button onClick={() => handleAdd()} className="todo__Btn">
          Dodaj
        </button>
      </div>
      <div className="todo__item__wrapper">
        {listItems.map((listItem: ListItemType, index: number) => {
          return (
            <div>
              <div className="todo__item"></div>
              <div className="todo__item__label"></div>
              <div
                onClick={() => deleteItem(listItem.id)}
                className="todo__item__remove"
              >
                <IconTrash />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
