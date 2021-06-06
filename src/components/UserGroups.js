import React, {Component} from "react";
import User from "./User";

export default class UserGroups extends Component {
  render() {
    const { items, handleEdit, handleDelete, clearList } = this.props

    return (
      <div>
      <ul>
        {items.map((item) => {
          return (
            <User key={item.id} name={item.name} handleEdit={()=>handleEdit(item.id)} handleDelete={()=>handleDelete(item.id)}/>
          )
        })}
      </ul>
<p>
    <button onClick={clearList} className="btn btn-danger btn-lg w-100">Clear</button>
</p>
      </div>
    )
  }
}
