import "./App.css";
import TodoListContainer from "./components/containers/TodoListContainer";
import TodoFormContainer from "./components/containers/TodoFormContainer";
import Filteroptions from "./components/pure/FilterOptions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListContainer />
        <TodoFormContainer />
        {/* Filter Options contain Filter Container */}
        <Filteroptions />
      </header>
    </div>
  );
}

export default App;
