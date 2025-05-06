
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TemperatureConverter from './components/TemperatureConverter';

function App() {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Температурный конвертер</Typography>
      <TemperatureConverter />

    </Box>
  );
}

export default App;
