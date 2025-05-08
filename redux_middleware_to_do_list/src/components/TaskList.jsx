import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../features/tasks/tasksSlice';

function TaskList() {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.tasks);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTasks());
        }
    }, [dispatch, status]);

    if (status === 'loading') return <p>Загрузка...</p>;
    if (status === 'failed') return <p>Ошибка: {error}</p>;

    return (
        <ul>
            {items.map(task => (
                <li key={task.id}>
                    {task.title} {task.completed ? '✅' : '❌'}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
