import React from 'react'

const DEFAULT_TODO = {
    name: '',
    descripetion: ''
}

export const TodoPanel = () => {
    const [todo, setTodo] = React.useState(DEFAULT_TODO)
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setTodo({ ...todo, [name]: value })
    }

    return (
        <div>
            <div>
                <label>
                    <div>name</div>
                    <input type="text" id='name' value={todo.name} name='name' onChange={onChange}/>
                </label> 
            </div>
            <div>
                <label>
                    <div>descripetion</div>
                    <input type="text" id='descripetion' value={todo.descripetion} name='descripetion' onChange={onChange}/>
                </label> 
            </div>
            <div>
                <button>ADD</button>
            </div>
        </div>
    );
}