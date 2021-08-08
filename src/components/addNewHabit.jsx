import React, { Component } from 'react';

class AddNewHabit extends Component {
    addHabitRef = React.createRef();
    
    onSubmit = (event) => {
        event.preventDefault();
        const name = this.addHabitRef.current.value;
        if(name !== false){
            this.props.onAdd(name);
        }
        this.addHabitRef.current.value = '';
    };

    render() {
        return (
            <form className="addHabit" onSubmit={this.onSubmit}>
                <input
                    ref={this.addHabitRef}
                    type="text" 
                    className="addHabitInput"
                    placeholder="New Habit" 
                />
                <button className="addHabitBtn">Add!!</button>
            </form>
        );
    }
}

export default AddNewHabit;