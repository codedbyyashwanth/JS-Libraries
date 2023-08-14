import React, {useEffect} from "react";
import { useTodoDispatch, useTodoSelector } from "./utils/hooks";
import { showTodos } from "./utils/slice/todo";

const App: React.FC = () => {
      const TodoDispatch = useTodoDispatch();
      const TodoSelector = useTodoSelector((state) =>  state.todo);

      useEffect(() => {
            TodoDispatch(showTodos());
      }, []);

      if (TodoSelector.isLoading)
            return <h1>Loading</h1>

      return (
            <>
                  <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto", textAlign: "center"}}>
                        <h2>Todo List</h2>
                        <div>
                              {
                                   TodoSelector.data.slice(0,10).map((data, index) => (
                                          <p key={index}>{data.title}</p>
                                   ))
                              }
                        </div>
                        {/* <button onClick={() => TodoDispatch(showTodos())}>Add Todo</button> */}
                  </div>
            </>
      );
}

export default App;