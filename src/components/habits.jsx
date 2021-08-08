import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    handlePlus = (habit) => {
        this.props.onPlus(habit);
    };

    handleMinus = (habit) => {
        this.props.onMinus(habit);
    };

    handleTrash = (habit) => {
        this.props.onTrash(habit);
    };

    render() {
        return (
            <div>
                {this.props.habits.map(habit => (
                    <Habit
                        num={habit.id}
                        habit={habit}
                        onPlus={this.handlePlus}
                        onMinus={this.handleMinus}
                        onTrash={this.handleTrash}
                    />
                ))}
            </div>
        );
    }
}

export default Habits;