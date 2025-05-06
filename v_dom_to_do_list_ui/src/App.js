
import './App.css';
import TodoList from './components/TodoList';
import { Box, Typography } from '@mui/material';

function App() {
  return (
    <Box mt={6}>
      <Typography variant="h4" gutterBottom>Список дел</Typography>
      <TodoList />
    </Box>
  );
}

export default App;
