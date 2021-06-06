import React, {Component}  from "react";

export default class User extends Component{
    render(){

        const {name, handleEdit, handleDelete} = this.props

        return(
            <li className="list-group-item text-capitialze d-flex justify-content-between my-2">
                {name}
                <div>
                    <input type="button" onClick={handleEdit} className="btn btn-primary btn-sm mx-2" value="แก้ไข" />
                    <input type="button" onClick={handleDelete} className="btn btn-danger btn-sm mx-2" value="ลบ" />
                </div>
            </li>
        )
    }
}


