import './app.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import AddNewHabit from './components/addNewHabit';
import Habits from './components/habits';
import ResetBtn from './components/resetBtn';

class App extends Component {
  state = {
    habits:[
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Running', count: 0},
        {id: 3, name: 'Coding', count: 0}
// Purecomponent는 내부 id, name, count 전부다 하나의 오브젝트이다
// 이러한 오브젝트들만 비교해서 같으면 render함수 호출 안함
// 그래서 id, name, count 내부 자료가 변화하더라도 Purecomponent에서는
// render함수가 호출 안됨. 왜??
// id, name, count 어쨌든 아이디가 동일한 오브젝트이니깐..
// (shallow comparison)
    ]
  };

  handlePlus = (habit) => {
      // console.log(`plus${habit}`);
      // const habits = [...this.state.habits];
      // const index = habits.indexOf(habit);
      // habits[index].count++;
      // this.setState({habits});

// this.state.count++; state 원본 데이터를 이렇게 직접적으로 변환하는거
// 안 좋음. 그래서!!! spread operator []를 쓰는 거임. 겉만 새거인 새로운
// 배열.. 안의 원본 오브젝트 값은 참조값만 복사해서 가져와서 새로운 배열 만듬


      const habits = this.state.habits.map(item => {
        if(item.id === habit.id){
          return {...habit, count: habit.count + 1};
// Spread Operator를 이용해서 array에 있는 모든 아이템들을 새로운 배열로 
// 가지고 와서 새로운 배열을 만들게 됨. 
// 그래서 완전히 새로운 배열 오브젝트를 가리키게 됨
// 하지만!! 이 Spread Operator는 배열 안의 모든 오브젝트 내용들을 
// 일일이 복사해서 새로운 것을 만드는 것이 아니라, 
// 오브젝트는 그대로 두고 array 배열을 빙글 빙글 돌면서 
// 각각의 아이템들의 참조값을 복사 하게 됨.
// 즉 array3배열안에는 array안에 들어 있는 동일한 오브젝트들이 
// 들어 있다. 다만 배열 오브젝트 자체만!! 새롭게 만들어짐.

// 참조값 복사한 원본 배열에서 오브젝트를 추가해주더라도
// (원 배열에서 참조값만 복사하고 새로운 배열 껍데기만 만든) 
// 새로운 배열에서는 변화가 없음. why? 새로운 배열이기 때문에..
// 그래서 배열 자체는 새로운 배열이기 때문에 아이템을 추가하거나 삭제하면
// 배열 내용은 달라질 수 있음.
        }
        return item;
      });
      this.setState({habits});
  };

  handleMinus = (habit) => {
      // console.log(`minus${habit}`);
      // const habits = [...this.state.habits];
      // const index = habits.indexOf(habit);
      // habits[index].count--;
      // if(habits[index].count < 0){
      //   habits[index].count = 0;
      //   this.setState({habits});
      // }else{
      //   this.setState({habits});
      // }

      const habits = this.state.habits.map(item => {
        if(item.id === habit.id){
          const count = habit.count - 1;
          return {...habit, count: count < 0 ? 0 : count};
        }
        return item;
      });
      this.setState({habits});
  };

  handleTrash = (habit) => {
      console.log(`trash${habit}`);
      const newHabits = this.state.habits.filter(value => value.id !== habit.id);
      this.setState({habits: newHabits});
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, {id: Date.now(), name: name, count: 0}];
    this.setState({habits});
  };

  handleReset = () => {
    // const habits = [...this.state.habits];
    // habits.map(habit => habit.count = 0);
    // this.setState({habits});

    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0){
        return {...habit, count: 0};
      }
      return habit;
    });
    this.setState({habits});
  };

  render() {
    return (
      <div>
        <Navbar habits={this.state.habits}/>
        <AddNewHabit habits={this.state.habits} onAdd={this.handleAdd}/>
        <Habits 
          habits={this.state.habits}
          onPlus={this.handlePlus}
          onMinus={this.handleMinus}
          onTrash={this.handleTrash}
          // 보라색 이름 : properties 이름으로 오브젝트 전달.
          // 함수의 이름을 인자로 전달하면 함수를 가르키는 참조값을 전달
          // 참조값만 onPlus, onMinus, OnTrash, habits 라는 이름으로 prop으로써 전달! 
        />
        <ResetBtn onReset={this.handleReset}/>
      </div>
    );
  }
}

export default App;