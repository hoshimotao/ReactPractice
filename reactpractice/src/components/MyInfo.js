import React, { Component } from 'react'
import Checkboxes from './Checkboxes'

export default class MyInfo extends Component {
  render() {
    return (
      <main>
        <div className="thisInfo">
        <p className="myInfo"> Hello there, my name is Jimmy and I am from Boca Raton. Although I am somewhat new to programming, I believe I can outwork anybody else in the room. Give me a task and watch me go to work. I am a grinder by nature and am always pushing my limits. Impossible is just a word that a lazy person made up to relieve themselves of the responsibility of getting something done. 
        </p>
        </div>

<h3> Top 3 vacation spots </h3>
        <ol>
          <li>  Hawaii </li>
          <li>  Italy </li>
          <li>  Costa Rica </li>
        </ol>

        <Checkboxes />
        
      </main>
    )
  }
}
