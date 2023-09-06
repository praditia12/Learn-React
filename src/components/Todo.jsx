import Card from './Card';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';

export default function Todo() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function handleAddTask(e) {
        e.preventDefault();

        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                complated: false,
            },
        ]);
        setNewTask('');
    }

    function handleComplateTask(id) {
        const updateTask = tasks.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    complated: !task.complated,
                };
            }
            return task;
        });

        setTasks(updateTask);
    }

    function handleRemoveTask(id) {
        const removeTask = tasks.filter((task) => task.id !== id);

        setTasks(removeTask);
    }

    return (
        <Card>
            <Card.Title>Todo</Card.Title>
            <Card.Body>
                <form>
                    <div className='flex items-center gap-x-2'>
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        <Button onClick={handleAddTask} text={'Add task'} />
                    </div>
                </form>
                {tasks.length > 0 ? (
                    <ol className={'space-y-2  mt-4'}>
                        {tasks.map((task) => (
                            <li key={task.id} className={'flex items-center justify-between'}>
                                <span>
                                    {task.name} {task.complated ? '✅' : '❌'}
                                </span>

                                <div className={'flex items-center gap-x-2'}>
                                    <button onClick={() => handleComplateTask(task.id)} className={'px-2 py-1 border text-xs'}>
                                        Mark as {task.complated ? 'complate' : 'incomplate'}
                                    </button>
                                    <button onClick={() => handleRemoveTask(task.id)} className={'px-2 py-1 border text-xs'}>
                                        remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>You have {tasks.length} task.</Card.Footer>
        </Card>
    );
}
