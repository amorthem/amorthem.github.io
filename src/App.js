import { render } from "ejs";
import React, {Component}  from "react";
import Navbar from "./components/Navbar"
import UserGroups from "./components/UserGroups";
import UserSearch from "./components/UserSearch";
import { v4 as uuid } from 'uuid';
import Web3 from 'web3';

class App extends Component{
  state = {
    items : [],
    id : uuid(),
    item : "",
    editUser : false
  };
  handleSubmit = (e) => {
    (e).preventDefault();
    const newItem = {
      id : this.state.id,
      name : this.state.item
    }
    const updateItem = [...this.state.items, newItem]
    this.setState({
      items : updateItem,
      item : "",
      id : uuid(),
      editUser : false
    })
  }
  handleChange = (e) => {
    this.setState({
      item:e.target.value
    });
  }
  clearList = () => {
    this.setState({
      items : []
    })
  }
  handleDelete = (id) => {
    const filterItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items : filterItems
    })
  }
  handleEdit = (id) => {
    const filterItems = this.state.items.filter(item => item.id !== id)
    const selectItem = this.state.items.find(item => item.id === id)
    this.setState({
      items : filterItems,
      item : selectItem.name,
      id : id,
      editUser : true
    })
    // console.log(id)
  }

  render(){
    let web3 = new Web3('ws://localhost:8080');
console.log(web3);
console.log(web3.eth.getAccounts())
console.log(web3.eth.accounts.wallet)
console.log("version :", web3.version);



    return(
      <section>
        
        <Navbar clearList={this.clearList} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <UserSearch 
            item = {this.state.item}
            handleSubmit = {this.handleSubmit} 
            handleChange = {this.handleChange} 
            editUser = {this.state.editUser}
             />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12">
            <UserGroups 
            items = {this.state.items} 
            handleEdit = {this.handleEdit} 
            handleDelete = {this.handleDelete} 
            clearList = {this.clearList}
            />
          </div>
        </div>
      </div>
      </section>
      );
  }
}

export default App;
