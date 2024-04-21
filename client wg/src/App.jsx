import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Main from './views/Main.jsx';

function App() {
    const [count, setCount] = useState(0)

    return (
    <>
        <div className="app">
            <div className="card">
                <h1>Vite + React</h1>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <BrowserRouter>
                <Routes>
                    {/* Main will show both a list of all products and a form to create a product */}
                    {/* concretes */}
                    <Route path='/concretes' default element={<Main/>}/>
                    <Route path='/concrete/:id' element={<OneConcrete/>}/>
                    <Route path='/concrete/update/:id' default element={<UpdateConcrete/>}/>
                    {/* aggregates */}
                    <Route path='/aggregates' default element={<Main/>}/>
                    <Route path='/aggregate/:id' element={<OneAggregate/>}/>
                    <Route path='/aggregate/update/:id' default element={<UpdateAggregate/>}/>
                </Routes>
            </BrowserRouter>
        </div>
        
    </>
    )
}

export default App
