import * as React from 'react';
import './App.css';
import { configureStore } from "core";
import { Provider } from "react-redux";
import Root from "./components/AppPresenter";


class App extends React.Component {
  public render() {
    return (
      <Provider store={configureStore()}>
        <Root />
      </Provider>
    );
  }
}

export default App;
