
import React, { Component } from 'react'
import './Question.css';



export default class Question extends Component {

  render() {

  var left = 150 + 'px';
        var top = 5000 + 'px';


        function randomNumberInRange(min, max) {
          // 👇️ get number between min (inclusive) and max (inclusive)
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function onClickButton(params) {
          console.log("aaaa");
          var num = randomNumberInRange(1, 500);
          var num2 = randomNumberInRange(1, 1000);
          left = num + 'px';
          top = num2 + 'px'
          document.getElementById('tipoNao').style.right = left;
          document.getElementById('tipoNao').style.top = top;
        }

    return (
      <div className={`desktop ${"className"}`}>
        <div className="rectangle">
          <div>
            <label>Sim</label>
          </div>
        </div>
        <div id='tipoNao' className="rectangle2" style={{right: left}} onClick={onClickButton}>
          <div>
            <label>Nao</label>
          </div>
        </div>

      </div>
    )
  }
}