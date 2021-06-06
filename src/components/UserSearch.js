import React, { Component } from "react";

export default class UserSearch extends Component {
    
  render() {

    const {handleSubmit, item, handleChange, editUser} = this.props

    return (
        <section>
            <div className="card my-3">
                <div className="card-header">
                    Seach User in Organization.
                </div>
                <form onSubmit = {handleSubmit}>
                    <div className="card-body">
                        <input type="text" placeholder="Search name" value={item} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="card-footer">
                        <input type="submit" disabled={item?false:true} className={editUser?"btn btn-success":"btn btn-primary"} value={editUser?"Save":"Add"} />
                    </div>
                </form>
            </div>
      </section>
    );
  }
}
