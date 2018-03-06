import React, {Component } from 'react';

class Results extends Component{

   constructor(props) {
     super(props);
     this.store = this.props.store;
     console.log(this.store.getState())
   }
  votesReactInPercent() {
    if(this.store.getState().react) {
    return (this.store.getState().react / (this.store.getState().react + this.store.getState().vuejs + this.store.getState().angular)) * 100
    }else{
    return 0
    }
    console.log(this.store.getState())

    }
    votesVueJsPercent() {
      if(this.store.getState().vuejs) {
      return (this.store.getState().vuejs / (this.store.getState().react + this.store.getState().vuejs + this.store.getState().angular)) * 100
console.log(this.store.getState())
      }else{
      return 0
      console.log(this.store.getState())
      }


     }


votesAngularInPercent() {
  if(this.store.getState().angular) {
  return (this.store.getState().angular / (this.store.getState().react + this.store.getState().vuejs + this.store.getState().angular)) * 100
}else{
  return 0
}
}

votesReactInPercentStyle() {

return {
  width:this.votesReactInPercent().toFixed(2) + '%'
}

}
votesAngularInPercentStyle() {

return {
  width:this.votesAngularInPercent().toFixed(2) + '%'
}

}
votesVueInPercentStyle() {

return {
  width:this.votesVueJsPercent().toFixed(2) + '%'
}

}
   render() {
     return (
<div>
<span className="label label-danger">Angular:{this.votesAngularInPercent().toFixed(2) + '%'}</span>
<div className="progress progress-striped active">
<div className="progress-bar progress-bar-danger" style={this.votesAngularInPercentStyle()}>

</div>
</div>

<span className="label label-danger">React :{this.votesReactInPercent().toFixed(2) + '%'}</span>
<div className="progress progress-striped active">
<div className="progress-bar progress-bar-danger" style={this.votesReactInPercentStyle()}>

</div>
</div>

<span className="label label-danger">Vue :{this.votesVueJsPercent().toFixed(2) + '%'}</span>
<div className="progress progress-striped active">
<div className="progress-bar progress-bar-danger" style={this.votesVueInPercentStyle()}>

</div>
</div>


</div>

     )
   }
 }

export default Results;
