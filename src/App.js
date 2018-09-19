import React, { Component } from 'react';
import { Button } from 'antd'; //引入 ant-design 元件庫
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          在 App.js 引入 基本按鈕樣式
        </p>

        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>


        <div id="OtherButton"></div>


      </div>
    );
  }
}

export default App;
