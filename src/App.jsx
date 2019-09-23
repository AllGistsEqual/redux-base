import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css'
import CopyClicker from './components/CopyClicker'

const initialState = {
    copies: 0,
}

function reducer(state = initialState, action) {
    console.log('reducer action: ', action)
    const { type } = action
    switch (type) {
        case 'COPY_CLICK':
            return {
                copies: state.copies + 1,
            }
        default:
            return state
    }
}

const store = createStore(reducer)

console.log('Our current state: ', store.getState())

store.dispatch({ type: 'COPY_CLICK' })

console.log('Our new state: ', store.getState())

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    Copy Clicker
                </header>

                <CopyClicker CpC={1} />
            </div>
        </Provider>
    )
}

export default App
