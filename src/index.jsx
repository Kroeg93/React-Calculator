import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import ButtonComponent from "./components/ButtonComponent";
import App from "./components/App";

function reducer(state = {}, action) {
    return state
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>

        <App/>
    </Provider>,
    document.getElementById('main')
)
