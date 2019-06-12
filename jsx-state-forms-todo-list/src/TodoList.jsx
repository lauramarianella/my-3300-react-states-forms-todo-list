import React, { Component } from 'react';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      listName: undefined,
      allTodos: [],
      userInput: '',
      userDateInput: '',
    };
  }

  componentDidMount() {
    console.log('After the 1st render');
    let nameEntered = window.prompt('What is the name of the list?');
    if (nameEntered !== null) this.setState({ listName: nameEntered });
  }
  submitHandler = (ev) => {
    ev.preventDefault();
    this.setState({
      userInput: '',
      userDateInput: '',
      allTodos: this.state.allTodos.concat(
        'Task: ' + this.state.userInput + ' Date: ' + this.state.userDateInput
      ),
    });
  };
  onChangeHandler = (ev) => {
    console.log('New string in input box ', ev.target.value);
    this.setState({ userInput: ev.target.value });
  };
  onClickDeleteAllListHandle = (ev) => {
    this.setState({ allTodos: [] });
  };
  onClickChangeNameListHandle = (ev) => {
    this.componentDidMount();
  };
  onClickDeleteFirstElementListHandle = (ev) => {
    // Question 4
    // Add a button to remove the first element of the todo list (hint: use slice)
    let allTodosTmp = this.state.allTodos.slice(1);

    //alert(allTodosTmp);
    this.setState({ allTodos: allTodosTmp });
  };
  onClickReverseListHandle = (ev) => {
    // Question 5
    // Add a button to reverse the todo list (hint: use slice and reverse)
    let allTodosTmp = this.state.allTodos.reverse();
    //alert(allTodosTmp);
    this.setState({ allTodos: allTodosTmp });
  };

  onChangeDateHandler = (ev) => {
    // Question 6
    // Add another input box that represents the time at which the task should be performed (as a string).
    // The time should be displayed alongside the todo element
    this.setState({ userDateInput: ev.target.value });
  };

  render() {
    if (!this.state.listName) {
      return <div> loading ... </div>;
    }
    return (
      <div>
        <h1>{this.state.listName}</h1>
        <ul>
          {this.state.allTodos.map((x) => (
            <li>{x}</li>
          ))}
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.userInput}
            />
            <input
              type="text"
              onChange={this.onChangeDateHandler}
              value={this.state.userDateInput}
            />
            <input type="submit" value="Submit" />
          </form>
        </ul>
        <input
          type="button"
          onClick={this.onClickDeleteAllListHandle}
          value="DeleteAll"
        />
        <input
          type="button"
          onClick={this.onClickChangeNameListHandle}
          value="Re-Name List"
        />

        <input
          type="button"
          onClick={this.onClickDeleteFirstElementListHandle}
          value="Remove 1st"
        />

        <input
          type="button"
          onClick={this.onClickReverseListHandle}
          value="Reverse List"
        />
      </div>
    );
  }
}

export default TodoList;
