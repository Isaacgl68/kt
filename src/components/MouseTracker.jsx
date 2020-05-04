import * as React from "react";
import Grid from "@material-ui/core/Grid";


class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.onClickP = this.onClickP.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  onClickP = () => {
    this.setState({x:0});
  }

  renderContent(){
    return (<React.Fragment><h1>Move the mouse around!</h1>
      <p>The current mouse position is ({this.state.x}, {this.state.y})</p></React.Fragment>);
  }

  render() {
    return (
      <Grid container alignItems="center" justify="center" direction="column" style={{ height: '100%',position: 'absolute', width:'100%' }}
            onMouseMove={this.handleMouseMove}>
        {this.renderContent()}
      </Grid>
    );
  }
}
export default MouseTracker;