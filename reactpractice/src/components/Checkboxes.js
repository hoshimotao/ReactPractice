import React, { Component } from 'react'
import ReactDOM from 'react-dom'





export default class Checkboxes extends Component {

  state = {
    boxChecked: false
  }
  
  
  onChange(){ 
    this.setState = () => {
      boxChecked: true
    }
    }
     


  render() {

    return (
      <div>

        <h3> To Do List </h3>
<ul>
      
       <li className="checkboxComplete"><input className="checkedBox" type="checkbox" onChange={this.onChange} /><label id="firstCheck"> Apply to Job 1 </label></li> 
       <li className="done"><input className="checkedBox" type="checkbox" /> Done </li>

        <li className="checkboxComplete"><input className="checkedBox" type="checkbox" />  Apply to Job 2 </li>
        <li className="done"><input className="checkedBox" type="checkbox" /> Done </li>

        <li className="checkboxComplete"><input className="checkedBox" type="checkbox" /> Apply to Job 3 </li>
        <li className="done"><input className="checkedBox" type="checkbox" /> Done </li>
</ul>
      </div>
    )
  }
}
