import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import App from './App';
import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/TodoReducer";
import Todo from './containers/Todo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}


const store = createStore(
  combineReducers({
    todo: todoReducer,
  }),
  
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// registerServiceWorker();