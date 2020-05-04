import * as React from "react";
import Avatar from '@material-ui/core/Avatar';


class CatClass extends React.Component {

    state = {
        count: 0
    }

    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentWillUnmount() {

    }

    render() {
        const rotate = this.props.rotate ? `rotate(${this.props.rotate}deg)` : 'none';
        const count = this.state.count;
        return (
            <div style={{marginLeft: '50%'}}>
                <Avatar alt="Newton" src="/src/res/Newton.jpg"
                        onClick={()=> this.setState({count: this.state.count+1 })}
                        style={{
                            transform: rotate,
                            margin: 10,
                            width: 60,
                            height: 60,
                        }}/>
                        <div>{count}</div>
            </div>
        );
    }
}

export default CatClass;