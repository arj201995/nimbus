import { Box, CircularProgress } from "@mui/material"

export const Loader = () => {
    return <Box sx={{ display: 'flex', height: '20rem', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress size={50} />
    </Box>
}