import React from 'react'
import { createStore } from 'redux'
import './App.css'
import CopyClicker from './components/CopyClicker'

const initialState = {
    copies: 0,
}

function reducer(state = initialState, action) {
    console.log('reducer action: ', action)
    return state
}

const store = createStore(reducer)

console.log('Our current state: ', store.getState())

store.dispatch({ type: 'COPY_CLICK' })

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Copy Clicker
            </header>

            <CopyClicker copies={0} CpC={1} />
        </div>
    )
}

export default App
