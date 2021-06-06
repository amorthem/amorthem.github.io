import React, {Component}  from "react";

export default class Navbar extends Component {
    render(){
        
        const {clearList} = this.props
        return(
            
            <section>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <a class="navbar-brand" href="#">
                    WebSite
                </a>
                
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 1</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 2</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" onClick={clearList} className="btn btn-danger">Clear</a>
                    </li>
                </ul>
                </nav>
            </section>

        )
    }
}