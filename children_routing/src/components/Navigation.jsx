import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

function Navigation() {
    return (
        <Box display="flex" gap={2} mb={4}>
            <Button variant="outlined" component={Link} to="/">
                Главная
            </Button>
            <Button variant="outlined" component={Link} to="/about">
                О нас
            </Button>
        </Box>
    );
}

export default Navigation;
