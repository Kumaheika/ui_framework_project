import React, { Component } from 'react';
import { Button, Radio, Icon } from 'antd'; //引入 ant-design 元件庫
import './OtherButton.css';

class OtherButton extends Component {
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };
  render() {
    const size = this.state.size;
    return (
      <div className="OtherButton" class="m-section">

        <p className="App-intro">
          在 OtherButton.js 引入 進階按鈕樣式
        </p>

        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <Button type="primary" size={size}>Primary</Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>Dashed</Button>
        <Button type="danger" size={size}>Danger</Button>
        <br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" icon="download" size={size}>Download</Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />Backward
          </Button>
          <Button type="primary">
            Forward<Icon type="right" />
          </Button>
        </Button.Group>

        
      </div>
    );
  }
}

export default OtherButton;