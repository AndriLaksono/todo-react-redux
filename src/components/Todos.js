import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleTodo } from '../actions/indexAction';

const Todos = ({todos, toggleTodo}) => (
    <ul>
        {
            todos.map((todo) => {
                return <Todo 
                            key={todo.id}
                            {...todo}
                            onClick={() => toggleTodo(todo.id)}
                             />
            })
        }
    </ul>
)

const mapStateToProps = state => ({
    todos: state
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);