
import React, { Component } from 'react'
import './Question.css';

export default class Question extends Component {
  render() {
    var left = (Math.random() * 100) / 2 + 'px';
    var top = (Math.random() * 100)  + 'px';
    var padding = 0.0 + 'px';
    console.log(left);
    return (
      <div className='div'> 
        <p>Pergunta</p>
        <row className='row'>
            <button className='btnSim'> SIM </button>
            <div id="bird" style={{padding, left, top, position:'absolute'}}>
                <button className='btnNao'> NÃO </button>
            </div>
        </row> 
       
      </div>
    )
  }
}