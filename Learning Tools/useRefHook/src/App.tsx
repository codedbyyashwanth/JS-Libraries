import { FC, useRef } from "react";

const App:FC = () => {
      const inputRef = useRef<HTMLInputElement | null>(null);

      const updateRef = () => {
            inputRef.current?.focus();
            console.log(inputRef.current);
      }

      return (
            <div className="flex justify-center h-screen items-center flex-col">
                  <h1 className=" text-white text-2xl font-bold ">Hello World</h1>
                  <input type="text" ref={inputRef} />
                  <button onClick={updateRef}>Click Me</button>
            </div>
      )
}

export default App;