import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { services } from './Services';
import { useNavigate } from 'react-router-dom';
import { StyledMenu } from './styledComponents/StyledComponents';
import { motion } from 'framer-motion';



const variantMenu = {
    hover: {
        scale: 1.1,
        fontWeight: 'bold',
        originX: 0,
        transition: {
            duration: 0.8,
            yoyo: Infinity
        }
    }
}


export const Menus = ({ anchorEl, setAnchorEl }) => {

    const open = Boolean(anchorEl);

    const navigate = useNavigate()

    const handleClose = (event, id) => {
        if (event.target.role === 'menuitem')
            navigate(`/services`)
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
                    services.map(service => <MenuItem component={motion.li}
                        key={`${service.title}+a`}
                        onClick={(event) => handleClose(event, service.id)}
                        sx={{
                            margin: 'auto',
                        }}
                        variants={variantMenu}
                        whileHover="hover"
                    > {service.title}</MenuItem>
                    )
                }

            </StyledMenu>
        </div >
    );
}