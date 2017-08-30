/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            todos: []
        };
        this.handleToDoChange = this.handleToDoChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteFirstItem = this.deleteFirstItem.bind(this);
        this.deleteByNum = this.deleteByNum.bind(this);
    }

    handleToDoChange(event) {
        let todo = event.target.value;
        this.setState({ todo });
    }

    addItem(event) {
        let todo = this.state.todo;
        let todos = this.state.todos;
        todos.push(todo);
        this.setState({ todos, todo: '' });
    }

    deleteFirstItem(event) {
        let todos = this.state.todos;
        todos.shift();
        this.setState({ todos });
    }

    deleteByNum() {
        let todo = this.state.todo;
        let todos = this.state.todos;
        todos.splice(todo - 1, 1);
        this.setState({todos, todo: ''});
    }

    render() {
        return (
        <div>
            <h1>Things That Still Need Done:</h1>
            <input type="text"
            onChange = {this.handleToDoChange}
            value={this.state.todo}/>
             <br />
             <button onClick={this.addItem}>--------Add Task--------</button><br />
             <button onClick={this.deleteFirstItem}>I finished The Top Item</button><br />
             <button onClick={this.deleteByNum}>Delete by #</button>
             <ol style={{color:"red"}}>
                 {this.state.todos.map((todo) => {
                    return <li key={todo}><button>{todo}</button></li>
                    })}
             </ol>
             
        </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));