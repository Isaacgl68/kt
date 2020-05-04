import * as React from "react";
import Grid from "@material-ui/core/Grid";
import MouseTracker from "./MouseTracker";


class ExtMouse extends MouseTracker {
  constructor(props) {
    super(props);
  }

  onClickP = ()=> {
    super.onClickP();
    //this.setState({x:50});
    console.log('123');
  }


  renderContent(){
    return (<React.Fragment>{super.renderContent()}
      <p onClick={this.onClickP} style={{color:'red', width:420}}>"At Facebook,
        we use React in thousands of components, and we haven’t found any use cases where we would recommend
        creating component inheritance hierarchies."
        (From The Holy Bible Of React - chapter 11 line 9)</p></React.Fragment>);
  }


}
export default ExtMouse;