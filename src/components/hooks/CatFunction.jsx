import * as React from "react";
import Avatar from '@material-ui/core/Avatar';

function CatFunction(props) {
    const rotate = props.rotate ? `rotate(${props.rotate}deg)` : 'none';
    return (
        <div style={{marginLeft: '50%'}}>
            <Avatar alt="Newton" src="/src/res/Newton.jpg"
                    style={{
                        transform: rotate,
                        margin: 10,
                        width: 60,
                        height: 60,
                    }}/>
        </div>
    )
}

export default CatFunction;