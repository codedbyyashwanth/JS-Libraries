import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { increment, decrement } from './redux/slices/counter'
import { setProfile } from './redux/slices/profile'
import {useState} from "react";

function App() {
      const count = useAppSelector((state) => state.counter);
      const counterDispatch = useAppDispatch();
      const name = useAppSelector((state) => state.profile);
      const nameDispatch = useAppDispatch();
      const [input, setInput] = useState<string>("");

      return (
            <>
                  <div>
                        <a href="https://vitejs.dev" target="_blank">
                              <img src={viteLogo} className="logo" alt="Vite logo" />
                        </a>
                        <a href="https://react.dev" target="_blank">
                              <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                  </div>

                  <h1>Vite + React</h1>

                  <div className="card">
                        <button onClick={() => counterDispatch(increment())}>count is {count}</button>
                        <button onClick={() => counterDispatch(decrement())}>count is {count}</button>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} name="" id="" />
                        <button onClick={() => nameDispatch(setProfile(input))}>Change Name</button>
                        <p>{name}</p>
                        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
                  </div>
            </>
      )
}

export default App
