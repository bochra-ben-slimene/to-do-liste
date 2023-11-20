import React, { useState } from 'react'
import ListItem from './ListItem';

export default function TodoList() {

    // * startes part

    const [list, setList] = useState([]);
    const [newTask, setNewTask] = useState("");

    //* function part

    const getTask = (e) => {
        // console.log(e.target.value);
        setNewTask(e.target.value)
    }

    const addTask = (e) => {
        e.preventDefault();

        //* 

        if (newTask.length === 0) {
            alert('empty input , please provide a task name');
        }
        else if (list.includes(newTask)) {
            alert('duplicated task , already done');
        }
        else if (list.length === 5) {
            alert('enough for today , tasks');
        }
        else {
            setList([...list, newTask]);
        }

        document.getElementById('form').reset();
        setNewTask('');
    }


    //* display part

    return (
        <div className='container text-center m-3'>
            <h1>Today's tasks</h1>
            <h3>( To Do )</h3>
<h4>number of tasks remaining : 
    {
        list.length === 0 ? "5" :
        list.length === 1 ? "4" :
        list.length === 2 ? "3" :
        list.length === 3 ? '2' :
        list.length === 4 ? "1" : '0'
        
     }
</h4>
            <form id='form'>
                <input type='text' placeholder='add new task' className='form-control' onChange={(e) => getTask(e)} />

                <button className='btn btn-primary mt-2' onClick={addTask}> Add new tasks </button>
            </form>
            {
                list.map((t, index) => (
                    <ListItem task={t} key={index} />
                ))
            }
        </div>
    )
}

//** test git */