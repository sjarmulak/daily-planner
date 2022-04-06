import React, { useState, useEffect } from "react";
import ToDoTask from "./ToDoTask";
import AddNewTask from "./AddNewTask";
import "../scss/ToDoList.scss";

const url = "http://localhost:3000/todos";

export default function ToDoList() {
  const url = "http://localhost:3000/todos";
  const [todoList, setTodoList] = useState(false);
  const [toggledTask, setToggledTask] = useState(false); // biezace zadanie ktore zmieniamy na zrobione/niezrobione

  // ściągamy naszą listę todo
  const getTodos = (successCallback) => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (typeof successCallback === "function") {
          successCallback(data);
        }
      })
      .catch((err) => console.log(err));
  };

  // uaktualniamy listę todo przy renderze
  useEffect(() => {
    getTodos(setTodoList);
  }, []);

  // co się dzieje po "odhaczeniu" zadania
  const handleTaskDone = (id) => {
    //
  };

  // usuwamy całkowicie zadanie z listy
  const handleTaskDeleted = (id) => {
    //
  };

  // po dodaniu nowego zadania uaktualniamy listę
  const handleTaskAdded = (task) => {
    setTodoList((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  return (
    <div className="ToDoList">
      <ul className="notYetDone">
        <span>to do:</span>
        {todoList ? (
          todoList.map(
            ({ id, task, finished }) =>
              !finished && (
                <ToDoTask
                  key={id}
                  id={id}
                  task={task}
                  finished={finished}
                  onDone={handleTaskDone}
                  onDelete={handleTaskDeleted}
                />
              )
          )
        ) : (
          <p>loading list...</p>
        )}
        <AddNewTask onAdded={handleTaskAdded} />
      </ul>

      <ul className="done">
        <span>done:</span>
        {todoList ? (
          todoList.map(
            ({ id, task, finished }) =>
              finished && (
                <ToDoTask
                  key={id}
                  id={id}
                  task={task}
                  finished={finished}
                  onDone={handleTaskDone}
                  onDelete={handleTaskDeleted}
                />
              )
          )
        ) : (
          <p>loading list...</p>
        )}
      </ul>
    </div>
  );
}

// POPRZEDNIA WERSJA //

// import React, { useState, useEffect } from "react";
// import ToDoTask from "./ToDoTask";
// import AddNewTask from "./AddNewTask";
// import "../scss/ToDoList.scss";

// const url = "http://localhost:3000/todos";

// export default function ToDoList() {
//   const [todoList, setTodoList] = useState(false);
//   const [toggledTask, setToggledTask] = useState({}); // biezace zadanie ktore zmieniamy na zrobione/niezrobione
//   const [currID, setCurrID] = useState(null);

//   // ściągamy naszą listę todo
//   const getTodos = () => {
//     fetch(url)
//       .then((resp) => {
//         if (resp.ok) {
//           return resp.json();
//         }
//         throw new Error("error");
//       })
//       .then((data) => {
//         setTodoList(data);
//         console.log("Update");
//       })
//       .catch((err) => {
//         throw new Error(err);
//       });
//   };

//   // uaktualniamy listę todo przy renderze
//   useEffect(getTodos, []);

//   // co się dzieje po "odhaczeniu" zadania
//   const handleTaskDone = (id) => {
//     fetch(url + `/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setToggledTask({ finished: !data.finished }); // zmieniamy zadanie na zrobione/niezrobione
//         setCurrID(id);
//         getTodos();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     getTodos();
//     fetch(url + `/${currID}`, {
//       method: "PATCH", // uaktualniamy w db
//       body: JSON.stringify(toggledTask),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((resp) => {
//         if (resp.ok) {
//           return resp.json();
//         } else throw new Error("Oops...");
//       })
//       .then((data) => {
//         console.log(data);
//         getTodos();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   // usuwamy całkowicie zadanie z listy
//   const handleTaskDeleted = (id) => {
//     fetch(url + `/${id}`, {
//       method: "DELETE",
//     })
//       .then((resp) => {
//         if (resp.ok) {
//           console.log("Todo deleted");
//           getTodos();
//         } else throw new Error("Oops...");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     getTodos();
//   };

//   // po dodaniu nowego zadania uaktualniamy listę
//   const handleTaskAdded = () => {
//     getTodos();
//   };

//   return (
//     <div className="ToDoList">
//       <ul className="notYetDone">
//         <span>to do:</span>
//         {todoList ? (
//           todoList.map(
//             ({ id, task, finished }) =>
//               !finished && (
//                 <ToDoTask
//                   key={id}
//                   id={id}
//                   task={task}
//                   finished={finished}
//                   onDone={handleTaskDone}
//                   onDelete={handleTaskDeleted}
//                 />
//               )
//           )
//         ) : (
//           <p>loading...</p>
//         )}
//         <AddNewTask onAdded={handleTaskAdded} />
//       </ul>

//       <ul className="done">
//         <span>done:</span>
//         {todoList ? (
//           todoList.map(
//             ({ id, task, finished }) =>
//               finished && (
//                 <ToDoTask
//                   key={id}
//                   id={id}
//                   task={task}
//                   finished={finished}
//                   onDone={handleTaskDone}
//                   onDelete={handleTaskDeleted}
//                 />
//               )
//           )
//         ) : (
//           <p>loading...</p>
//         )}
//       </ul>
//     </div>
//   );
// }
