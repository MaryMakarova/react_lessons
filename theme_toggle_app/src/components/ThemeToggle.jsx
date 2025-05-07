import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { Button } from '@mui/material';

function ThemeToggle() {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);

    return (
        <Button
            variant="contained"
            onClick={() => dispatch(toggleTheme())}
        >
            {mode === 'light' ? 'Темная тема' : 'Светлая тема'}
        </Button>
    );
}

export default ThemeToggle;
