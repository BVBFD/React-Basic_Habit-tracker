import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <span className="navbar-name">
                    Habit-tracker
                    <i class="fas fa-leaf"></i>
                </span>
                <span className="navbar-count">{(this.props.habits.filter(habit => habit.count !== 0)).length}</span>
            </div>
        );
    }
}

export default Navbar;