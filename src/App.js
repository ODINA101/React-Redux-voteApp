import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { voteAngular,voteReact,voteVue } from './actions';
class App extends Component {


constructor(props) {
  super(props);
  this.store = this.props.store;

}

handleVoteAngular = () => {
  this.store.dispatch(voteAngular());
  console.log(this.store.getState());
}


handleVoteReact = () => {
  this.store.dispatch(voteReact());
  console.log(this.store.getState());

}


handleVoteVue = () => {
  this.store.dispatch(voteVue());
}

  render() {
    return (
      <div>
         <div className="jumbotron" style={{'textAlign':'center'}}>
       <h2>what is your favorite front-end framework in 2017</h2>
        <h4>Click on the logos to vote!</h4>
       <br />
       <div className="row">
           <div className="col-md-4 col-xs-2">
           <img src="https://angular.io/assets/images/logos/angular/angular.png" onClick={this.handleVoteAngular} height="96" />
           </div>
           <div className="col-md-4 col-xs-2">
           <img src="https://cdn.worldvectorlogo.com/logos/react.svg" onClick={this.handleVoteReact} height="96" />
           </div>
           <div className="col-md-4 col-xs-2">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png" onClick={this.handleVoteVue} height="96" />
           </div>
       </div>

    </div>
      </div>
    );
  }
}

export default App;
