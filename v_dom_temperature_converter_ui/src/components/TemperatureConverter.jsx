import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        if (!isNaN(value)) {
            setFahrenheit((value * 9 / 5 + 32).toFixed(2));
        } else {
            setFahrenheit('');
        }
    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        if (!isNaN(value)) {
            setCelsius(((value - 32) * 5 / 9).toFixed(2));
        } else {
            setCelsius('');
        }
    };

    return (
        <Box display="flex" flexDirection="column" gap={1} width="300px" margin="0 auto">
            <TextField
                label="Цельсий"
                value={celsius}
                onChange={handleCelsiusChange}
                variant="outlined"
                fullWidth
            />
            <TextField
                label="Фаренгейт"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                variant="outlined"
                fullWidth
            />
        </Box>
    );
}

export default TemperatureConverter;