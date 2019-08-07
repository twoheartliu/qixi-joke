import React, { useState } from "react";
import "./App.css";
import dog from "./source/dog.jpg";
import likeyou from "./source/likeyou.jpg";
import ou from "./source/ou.jpg";
import qixi from "./source/qixi.jpg";

function App() {
  const [single, setSingle] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const yesBtnClick = () => {
    setIsActive(true);
    setSingle(true);
  };
  const noBtnClick = () => {
    setIsActive(true);
    setSingle(false);
  };
  let answer = "answer";
  if (isActive) {
    answer += " active";
  }
  return (
    <div className="App">
      <h1>
        神秘的七夕礼物
        <span role="img" aria-label="gift">
          🎁
        </span>
      </h1>
      <h2>你是单身狗吗？</h2>
      <button onClick={yesBtnClick}>是</button>
      <button onClick={noBtnClick}>否</button>
      <div className={answer}>
        {single ? (
          <div className="imgAreaA">
            <h2>恭喜你获得一张同情的表情包！</h2>
            <img src={dog} alt="dog" />
          </div>
        ) : (
          <div className="imgAreaB">
            <h2>恭喜你获得一组友善的表情包！</h2>
            <img src={likeyou} alt="likeyou" />
            <img src={ou} alt="ou" />
            <img src={qixi} alt="qixi" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
