
import React, { Component } from 'react'
import './Question.css';



export default class Question extends Component {

  render() {

        var left = 150 + 'px';
        var top = 150 + 'px';


        function randomNumberInRange(min, max) {
          // 👇️ get number between min (inclusive) and max (inclusive)
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function onClickButton(params) {
          console.log("aaaa");
          var num = randomNumberInRange(10, 70);
          var num2 = randomNumberInRange(10, 70);
          left = num + '%';
          top = num2 + '%'
          document.getElementById('tipoNao').style.left = left;
          document.getElementById('tipoNao').style.top = top;
        }

    return (
      <div className="desktop" style={{background:"white"}}>
        <div className="rectangle">
          <div>
            <label >Sim</label>
          </div>
        </div>
        <div id='tipoNao' className="rectangle2" style={{right: left}} onMouseOver={onClickButton}>
          <div >
            <label>Não</label>
          </div>
        </div>

      </div>
    )
  }
}