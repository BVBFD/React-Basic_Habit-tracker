import React, { PureComponent } from 'react';

class ResetBtn extends PureComponent {
    render() {
        return (
            <button className="btnReset" onClick={this.props.onReset}>
                Reset
            </button>
        );
    }
}

export default ResetBtn;