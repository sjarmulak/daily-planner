import "../scss/App.scss";
import "../scss/reset.scss";
import WelcomeUser from "./WelcomeUser";
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="App">
      <WelcomeUser />
      <ToDoList />
    </div>
  );
}

export default App;
