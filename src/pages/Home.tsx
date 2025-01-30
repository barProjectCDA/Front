import { useState } from 'react'

import '../assets/styles/App.css'

import reactLogo from '../assets/svg/react.svg'
import viteLogo from '../assets/svg/vite.svg'
import api from '../assets/images/api.png'


function Home() {
    
const [count, setCount] = useState(0)

return (
    <>
    <div>

        <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <a href="http://localhost:5173/testApi">
        <img src={api} className="logo api" alt="api logo" />
        </a>

    </div>
    
    <h1>Vite + React + TS</h1>
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button>
        <p>
        Edit <code>src/App.tsx</code> and save to test HMR
        </p>
    </div>
    <p className="read-the-docs">
        Click on the Vite and React logos to learn more
    </p>
    </>
)
}

export default Home