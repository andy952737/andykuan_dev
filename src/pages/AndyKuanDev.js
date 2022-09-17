// 為了gihub.io使用的特殊首頁 
import React, { Component } from 'react';
import avatar from "../images/andy.jpg";

class Home extends Component {
  
  render() {
    return (
      <div className="home_main">
          <img className="my_avatar" src={avatar} />
          <p className="home_text">Hi, 我是一個網站後端工程師, <br />期望不斷精進在開發程式道路上，<br />創造更好的產品，能被世界所使用。</p>
          <hr /> 
      </div>
    );
  } 

}

export default Home;