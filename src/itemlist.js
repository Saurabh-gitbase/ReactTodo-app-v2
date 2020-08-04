import React from 'react';
import FlipMove from 'react-flip-move';

function listItem(props){
    
    return(
        
        <div className="todo-items">
            <FlipMove duration={300} easing="ease-in-out">
            {
            props.items.map((item) => 
            
                <div key={item.id} className="item" style={{background:item.complete? '#c3f6c3':'rgb(245, 202, 191)'}} >
                <input type="checkbox" onClick={()=>props.handleBg(item.id)} />
                {item.task} 
                <img src="https://img.icons8.com/color/50/000000/delete-forever.png" alt="delete" onClick={()=>props.delItem(item.id)} style={{background:item.complete? '#c3f6c3':'rgb(245, 202, 191)'}}/></div>
            )
            }
            </FlipMove>
        </div>
        
    )
}

export default listItem;