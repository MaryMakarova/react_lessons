import React from 'react';
import { Typography, Box } from '@mui/material';

function NotFoundPage() {
    return (
        <Box textAlign="center" mt={10}>
            <Typography variant="h3" color="error" gutterBottom>
                404 – Страница не найдена
            </Typography>
            <Typography variant="body1">
                Возможно, вы ошиблись в адресе или эта страница была удалена'.
            </Typography>
        </Box>
    );
}

export default NotFoundPage;
