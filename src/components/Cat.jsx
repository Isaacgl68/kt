import * as React from "react";
import Avatar from '@material-ui/core/Avatar';



class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    const rotate = this.props.rotate? `rotate(${this.props.rotate}deg)`: 'none';
    return (
      <Avatar alt="Newton" src="/src/res/Newton.jpg"
              style={{
                transform: rotate,
                margin: 10,
                width: 60,
                height: 60,
                position: 'absolute',
                left: mouse.x,
                top: mouse.y }} />
    );
  }
}
export default Cat;