import * as React from "react";
import Grid from "@material-ui/core/Grid";

function withMouse(WarpComponent) {

  return class WithMouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = {x: 0, y: 0};
    }

    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

    render() {
      const {x,y} = this.state;
      const {offset = {x:0, y:0}, ...rest} = this.props;
      return (
        <Grid container alignItems="center" justify="center" direction="column"
              style={{height: '100%', position: 'absolute', width: '100%'}}
              onMouseMove={this.handleMouseMove}>

          {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
          <WarpComponent mouse={{x: x+ offset.x, y: y+ offset.y}} {...rest} />
        </Grid>
      );
    }
  }
}
export default withMouse;
