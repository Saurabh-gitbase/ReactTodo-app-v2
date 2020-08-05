import React, { Component } from 'react';
import List from './itemlist';

class Todo extends Component{
    state={
        items:[],
        currItem:{
            task:'',
            id:'',
            complete : false,
        },
    }

    handleInput = (props) => {
        this.setState({
            currItem:{
                task:props.target.value,
                id:Date.now(),
                complete:false,
            }
        })
        
    }

    handleSubmit= (props) => {
        props.preventDefault();
        const newItem = this.state.currItem;
        if(newItem.task!==""){
            const updateditems = [...this.state.items,newItem];
            this.setState({
                items:updateditems,
                currItem:{
                    task:'',
                    id:'',
                    complete : false,
                }
            })
        }

    }

    delItem = (id) => {
        const filterItems = this.state.items.filter(item=>item.id!==id);
        this.setState({
            items:filterItems
        })
    }

    handleBackground = (id) => {
        let items = [...this.state.items]
        items.forEach(item=> {
            if(item.id === id)
                item.complete ? item.complete=false : item.complete=true;
        })
        this.setState({items:items})
    }

    

    render(){
        return(
            <div>
                <div className="todo-title">TODO APP <img src="https://img.icons8.com/bubbles/50/000000/todo-list.png" alt="list"/></div>  
                
                <div className="todo-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.currItem.task} onChange={this.handleInput} placeholder="Enter Task"/>
                </form>
                </div>
                
                <List items={this.state.items} delItem={this.delItem} handleBg={this.handleBackground} />
                
            </div>
        )
    }
}

export default Todo
