import React, { Component } from "react";
import Routes from "./components/Routes";
import interceptors from "./components/axios/axiosInterceptor";
class App extends Component {
  render() {
    return (
        <div className="App">
          <Routes />
        </div>
    );
  }
}

export default App;
