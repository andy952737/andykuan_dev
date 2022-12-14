import React, { Component } from 'react';
import avatar from "../images/andy.jpg";

class Home extends Component {
  
  render() {
    return (
      <>
      <div className="home_main">
          <img className="my_avatar" src={avatar} />
          <p className="home_text">Hi, 我是一個網站全端工程師, <br />期望不斷精進在開發程式道路上，<br />創造更好的產品，能被世界所使用。</p>
          <hr /> 
      </div>

      <div className="home_main_contact">
        <h3>社群&興趣</h3>
        程式論壇, 生活街舞, 攝影日常
        <hr />  
        IG生活頻道: 搜尋 @andykuan_life
      </div>

      <div className="home_main_contact">
        <h3>聯絡信箱</h3>
        andykuan@protonmail.com 
        <hr /> 
      </div>

      </>
    );
  } 

}

export default Home;