import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from 'Store'
import App from 'Scenes'
import 'bootstrap/dist/css/bootstrap.css';
import 'Styles/base.css'
import DevToolsBox from "DevTools/DevToolsBox"
const root = document.getElementById('app')



//Lets catch errors and show them in a nice red screen 
if (process.env.NODE_ENV === 'development') {
  const RedBox = require('redbox-react').default
  try {
    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <DevToolsBox>
            <App />
          </DevToolsBox>
        </ConnectedRouter>
      </Provider>,
      root
    )
  } catch (e) {
    render(<RedBox error={e} />, root)
  }
} else {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <DevToolsBox>
          <App />
        </DevToolsBox>
      </ConnectedRouter>
    </Provider>,
    root
  )

}










