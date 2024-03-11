import { Component } from "react";

import './index.css'

import {v4 as uuidv4} from 'uuid';

import TodoItem from "../TodoItem";

const todoList=[
    {
        id:uuidv4(),
        name: "Buy groceries",
        completed: false
    },{
        id:uuidv4(),
        name:"Clean the house",
        completed:false
    },{
        id:uuidv4(),
        name: "Go for a run",
        completed:false
    },
]

class Todo extends Component{
    state={
        newTodoList:todoList,
        inputVal:""

    }

    addinput=(event)=>{
        this.setState({inputVal:event.target.value})
    }

    submitInput=()=>{
        const item={id:uuidv4(),name:this.state.inputVal,completed:false};
        console.log(item);
        //add to list
        let list=this.state.newTodoList;
        list.push(item)
        this.setState({
            newTodoList:list
        })
        
    }
    onDelete=(id)=>{
        const {newTodoList}=this.state
        const newData=newTodoList.filter((each)=>(each.id!==id))
        this.setState({newTodoList:newData});
    }

    render(){

        const {newTodoList,inputVal}=this.state
        console.log(inputVal)

        return(
            <div className="div2">
                <h1>Todo List</h1>
                <div>
                    <input placeholder="Enter Task Todo" onChange={this.addinput} type="text" /> <button onClick={this.submitInput}>Add Task</button>
                </div>
                <div>
                    {newTodoList.map((item) => (
                        <TodoItem onDelete={this.onDelete} key={item.id} item={item}/>  
                    ))}
                </div>
            </div>
        )
    }
}

export default Todo