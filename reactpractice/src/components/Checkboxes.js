import React, { Component } from 'react'


function handleChange({target}){
  if (target.checked){
     target.parentNode = "Complete"
     
  }
}


export default class Checkboxes extends Component {


  render() {

    return (
      <div>

        <h3> To Do List </h3>
<ul>

       <li className="checkboxComplete"><input className="checkedBox" type="checkbox" default= "unchecked" onClick={this.onChange}/> Apply to Job 1 </li>
        <li className="checkboxComplete"><input className="checkedBox" type="checkbox" default= "unchecked"/>  Apply to Job 2 </li>
        <li className="checkboxComplete"><input className="checkedBox" type="checkbox" default= "unchecked"/> Apply to Job 3 </li>
</ul>
      </div>
    )
  }
}
