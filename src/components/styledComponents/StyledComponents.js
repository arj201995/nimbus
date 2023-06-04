import styled from "@emotion/styled";
import { Button, Menu, MenuItem } from "@mui/material";

export const StyledButton = styled(Button)({
    backgroundColor: '#333333',
    color: '#ffffff'
})

export const StyledMenu = styled(Menu)({
    '& .MuiMenu-list': {
        color: 'white',
    },
    '& .MuiMenu-paper': {
        background: 'rgba(0,0,0,0.9)',
    }
})

export const StyledMenuItem = styled(MenuItem)({
    '& .MuiMenuItem-root': {
        borderBottom: '1px solid white',
        background: '#ffffff',
        textAlign: 'center',
        padding: '4rem',
    }
})