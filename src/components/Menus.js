import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { services } from './Services';
import { useNavigate } from 'react-router-dom';
import { StyledMenu } from './styledComponents/StyledComponents';


export const Menus = ({ anchorEl, setAnchorEl }) => {

    const open = Boolean(anchorEl);

    const navigate = useNavigate()

    const handleClose = (event) => {
        if (event.target.role === 'menuitem')
            navigate('/services')
        setAnchorEl(null);
    };

    return (
        <div>
            <StyledMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onMouseDown={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                {
                    services.map(service => <MenuItem key={`${service.title}+a`} onClick={handleClose} sx={{
                        margin: 'auto',

                    }} >{service.title}</MenuItem>
                    )
                }

            </StyledMenu>
        </div>
    );
}