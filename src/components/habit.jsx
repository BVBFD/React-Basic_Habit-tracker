import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    // Life Cycle Method
    componentDidMount = () => {
        console.log(`habit: ${this.props.habit.name} Mounted`);
    }

    componentWillUnmount = () => {
        console.log(`habit: ${this.props.habit.name} Unmounted`);
    };

    handlePlus = () => {
        this.props.onPlus(this.props.habit);
    };

    handleMinus = () => {
        this.props.onMinus(this.props.habit);
    };

    handleTrash = () => {
        this.props.onTrash(this.props.habit);
    };

    render() {
        return (
            <div className='habit-box'>
                <span className="habit-name">{this.props.habit.name}</span>
                <span className="habit-count">{this.props.habit.count}</span>
                <button className="btn-habit btn-plus" onClick={this.handlePlus}>
                    <i class="fas fa-plus-square"></i>
                </button>
                <button className="btn-habit btn-minus" onClick={this.handleMinus}>
                    <i class="fas fa-minus-square"></i>
                </button>
                <button className="btn-habit btn-trash" onClick={this.handleTrash}>
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        );
    }
}

export default Habit;