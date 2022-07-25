import React, { useState } from 'react';
import useList from '../../hooks/useList';
import useCounter from '../../hooks/useCounter';

const Tasklist = () => {
    const tasks = useList([]);
    const [newTask, setNewTask] = useState('');

    const max = 100;
    const min = -100;

    const counter = useCounter();

    const handleSubmit = (event) => {
        event.preventDefault();
        tasks.push(newTask);
        setNewTask('');
    };

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    return (
      <div>
        <h1>
          Task List
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            value={newTask}
            placeholder="New Task"
            type="text"
            onChange={handleInputChange}
          />
          <button type="submit">Create Task</button>
        </form>
        <div>
          { tasks.isEmpty()
            ? (<p>Task List is Empty</p>)
            : (
              <ul>
                {tasks.value.map((task, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      onClick={() => tasks.remove(index)}
                      checked={false}
                    />
                    { task }
                  </li>
                        ))}
              </ul>
            )}
        </div>
        <button type="button" onClick={() => tasks.clear()}>
          Remove all the tasks
        </button>
        <button type="button" onClick={() => tasks.orderAlphabetic()}>
          Order A-Z
        </button>
        <button type="button" onClick={() => tasks.inverseOrder()}>
          Inverse
        </button>
        <div>
          <h1>Ejercicio useCounter</h1>
          <h1>{counter.value}</h1>
          {counter.value < max ?
          (<button type="button" onClick={() => counter.increment()}>Increment</button>) :
          (<button type="button" disabled onClick={() => counter.increment()}>Increment</button>
          )}
          <button type="button" onClick={() => counter.reset()}>Reset</button>
          {counter.value > min ?
          (<button type="button" onClick={() => counter.decrement()}>Decrement</button>) :
          (<button type="button" disabled onClick={() => counter.decrement()}>Decrement</button>)}
        </div>
      </div>
    );
};

export default Tasklist;
