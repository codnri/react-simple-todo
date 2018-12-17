/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';


// Action Generator
const addTodo = (todo) => {
    return { 
      type: 'ADD_TODO',
      payload: { todo: todo }
    };
  }

class Todo extends React.Component {

    constructor(props) {
      super(props);
      this.state={
        todo: ''
      };
    }
    
  
    render() {
      console.log(this.props);
  
      // StoreのTodoからリストを生成
      const list = this.props.todo.todoList.map((todo, index) => <li key={index}>{todo}</li>)
  
      return (
        <div>
          <input type="text" onChange={elm => this.setState({ todo: elm.target.value })} />
          <button onClick={() => this.props.addTodo(this.state.todo)}>Add</button><br />
          <ul>
            {list}
          </ul>
        </div>
      );
    }
  }



const mapStateToProps = state => {
  return {
    todo: state.todo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)