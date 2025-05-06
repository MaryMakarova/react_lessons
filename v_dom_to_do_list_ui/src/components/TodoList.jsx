import React, { useState } from 'react';
import {
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { id: Date.now(), text: task }]);
            setTask('');
        }
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <Box width="400px" margin="0 auto" display="flex" flexDirection="column" gap={2}>
            <Box display="flex" gap={2}>
                <TextField
                    label="Новая задача"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    fullWidth
                    size="large"
                />
                <Button
                    variant="contained"
                    onClick={handleAddTask}
                    sx={{ height: '56px', px: 3 }}

                >
                    ДОБАВИТЬ
                </Button>
            </Box>
            <List>
                {tasks.map(t => (
                    <ListItem
                        key={t.id}
                        secondaryAction={
                            <IconButton edge="end" onClick={() => handleDelete(t.id)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={t.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default TodoList;
